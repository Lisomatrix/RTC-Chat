import { Injectable } from '@angular/core';
import {
  SecretBoxLength,
  box_keyPair,
  sign_keyPair,
  box, BoxKeyPair,
  randomBytes,
  decodeUTF8,
  box_open,
  encodeUTF8,
  SignKeyPair,
  secretbox,
  decodeBase64,
  secretbox_open,
  encodeBase64
} from 'tweetnacl-ts';
import { isString } from 'util';

interface EncryptedMessage {
  message: Uint8Array,
  nonce: Uint8Array;
  // signature: Uint8Array;
}

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  private signKeyPair: SignKeyPair;
  private keyPair: BoxKeyPair;
  private nonce: Uint8Array;

  private peerPublicKey: Uint8Array;
  private secret: Uint8Array;

  constructor () { 
    this.keyPair = box_keyPair();
    this.nonce = randomBytes(24);

    this.signKeyPair = sign_keyPair();
    this.secret = randomBytes(SecretBoxLength.Key);
  }

  public encryptMessage(message: string | Uint8Array): EncryptedMessage {

    var decoded;

    if (isString(message)) {
      decoded = decodeUTF8(message as string);
    } else {
      decoded = message;
    }

    const encryptedMessage = box(decoded, this.nonce, this.peerPublicKey, this.keyPair.secretKey);
    // const encryptedMessage = secretbox(decoded, this.nonce, decodeBase64('5U9kClQfILAXvan+AaoE3APEpvllHa022pM9EqkxTAM='));

    return { message: encryptedMessage, nonce: this.nonce };
  }

  public decryptMessage(message: EncryptedMessage) {

    const msg = this.objectToUInt8Array(message.message);
    const nonce = this.objectToUInt8Array(message.nonce);

    const payload = box_open(msg, nonce, this.peerPublicKey, this.keyPair.secretKey);
    // const payload = secretbox_open(msg, nonce, decodeBase64('5U9kClQfILAXvan+AaoE3APEpvllHa022pM9EqkxTAM='));

    const utf8 = encodeUTF8(payload);

    return utf8;
  }

  public symetricEncrypt(message: string | Uint8Array): EncryptedMessage {
    var decoded;

    if (isString(message)) {
      decoded = decodeUTF8(message as string);
    } else {
      decoded = message;
    }

    const encryptedMessage = secretbox(decoded, this.nonce, this.secret);

    return { message: encryptedMessage, nonce: this.nonce };
  }

  public symetricDecrypt(message: EncryptedMessage) {

    const msg = this.objectToUInt8Array(message.message);
    const nonce = this.objectToUInt8Array(message.nonce);

    const payload = secretbox_open(msg, nonce, this.secret);
    
    const utf8 = encodeUTF8(payload);

    return utf8;
  }

  public getSymetricKey() {
    return this.secret;
  }

  public setSymetricKey(secret, nonce) {
    
    nonce = decodeBase64(nonce);
    secret = decodeBase64(secret);

    this.secret = box_open(secret, nonce, this.peerPublicKey, this.keyPair.secretKey);
  }

  public getPublicKey() {
    return this.keyPair.publicKey;
  }

  public getKeys() {
    const encSecret = box(this.secret, this.nonce, this.peerPublicKey, this.keyPair.secretKey);

    const keys = {
      secret: encodeBase64(encSecret),
      nonce: encodeBase64(this.nonce)
    };

    return keys;
  }

  public setPeerPublicKey(key) {
    this.peerPublicKey = key;
  }

  public stringToUint8Array(string: string) {
    const decoded = decodeUTF8(string);

    return decoded;
  }

  public uInt8ArrayToString(array: Uint8Array) {
    const decoded = encodeUTF8(array);

    return decoded;
  }

  private objectToUInt8Array(object) {
    var temp = [];

    if (!object) return;

    Object.entries(object).forEach(([key, val]) => {
      temp.push(val);
    });

    return  Uint8Array.from(temp);
  }
}

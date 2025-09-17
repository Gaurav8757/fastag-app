'use strict';

import crypto from 'crypto';

const ENC_TYPE = process.env.NEXT_ENC_TYPE;
const ENC_KEY = process.env.NEXT_ENC_KEY;
const IV_LENGTH = 32;

if (!ENC_TYPE) {
  throw new Error("Missing environment variable: NEXT_ENC_TYPE");
}

if (!ENC_KEY) {
  throw new Error("Missing environment variable: NEXT_ENC_KEY");
}

export const encrypt = (val: string): string => {
  const iv = crypto.randomBytes(IV_LENGTH);
  const key = Buffer.from(ENC_KEY, 'utf8');

  const cipher = crypto.createCipheriv(ENC_TYPE, key, iv);
  let encrypted = cipher.update(val, 'utf8', 'base64');
  encrypted += cipher.final('base64');

  const ivBase64 = iv.toString('base64');
  return `${ivBase64}:${encrypted}`;
};

export const decrypt = (encryptedString: string): string => {
  const [ivBase64, encrypted] = encryptedString.split(':');
  const iv = Buffer.from(ivBase64, 'base64');
  const key = Buffer.from(ENC_KEY, 'utf8');

  const decipher = crypto.createDecipheriv(ENC_TYPE, key, iv);
  let decrypted = decipher.update(encrypted, 'base64', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
};

// Example
const phrase = 'who let the dogs out';
const encrypted = encrypt(phrase);
const decrypted = decrypt(encrypted);

console.log("Encrypted:", encrypted);
console.log("Decrypted:", decrypted);

import crypto from 'crypto';

const ENC_TYPE = process.env.NEXT_ENC_TYPE as string;
const ENC_KEY = process.env.NEXT_ENC_KEY as string;
const IV_LENGTH = parseInt(process.env.NEXT_IV_LENGTH || '16', 16);

const key = Buffer.from(ENC_KEY, 'hex'); // or 'hex' based on your format

export const encrypt = (val: string): string => {
  const iv = crypto.randomBytes(IV_LENGTH);

  const cipher = crypto.createCipheriv(ENC_TYPE, key, iv);
  let encrypted = cipher.update(val, 'utf8', 'base64');
  encrypted += cipher.final('base64');

  const ivBase64 = iv.toString('base64');
  return `${ivBase64}:${encrypted}`;
};

export const decrypt = (encryptedString: string): string => {
  const [ivBase64, encrypted] = encryptedString.split(':');
  const iv = Buffer.from(ivBase64, 'base64');

  const decipher = crypto.createDecipheriv(ENC_TYPE, key, iv);
  let decrypted = decipher.update(encrypted, 'base64', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
};

// Example (for testing only)
if (process.env.NODE_ENV !== 'production') {
  const phrase = 'who let the dogs out';

  const encrypted = encrypt(phrase);
  const decrypted = decrypt(encrypted);

  console.log("Encrypted:", encrypted);
  console.log("Decrypted:", decrypted);
}

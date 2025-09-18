import crypto from "crypto";

const ENC_TYPE = process.env.NEXT_ENC_TYPE as string;
const ENC_KEY = process.env.NEXT_ENC_KEY as string;
// const key = Buffer.from(ENC_KEY, "base64");
const key = crypto.randomBytes(32)
const ivLength = 16;

// Encrypt function (returns base64(iv + encryptedData))
export const encryptData = (plainText: string): string => {
  // AES-256-CBC IV size
  const iv = crypto.randomBytes(ivLength);

  const cipher = crypto.createCipheriv(ENC_TYPE, key, iv);
  const encrypted = Buffer.concat([
    cipher.update(plainText, "utf8"),
    cipher.final(),
  ]);

  // Combine IV + encrypted text → base64 encode
  return Buffer.concat([iv, encrypted]).toString("base64");
};

// Decrypt function
export const decryptData = (cipherText: string): string => {
  const cipherData = Buffer.from(cipherText, "base64");

  const iv = cipherData.subarray(0, ivLength);
  const encrypted = cipherData.subarray(ivLength);

  const decipher = crypto.createDecipheriv(ENC_TYPE, key, iv);
  const decrypted = Buffer.concat([
    decipher.update(encrypted),
    decipher.final(),
  ]);

  return decrypted.toString("utf8");
};

if (process.env.NODE_ENV !== "production") {
  const phrase = "Hello World! AES-256-CBC Test";
  
  const encrypted = encryptData(phrase);
  const decrypted = decryptData(encrypted);

  console.log("Encrypted Base64:", encrypted);
  console.log("Decrypted:", decrypted); // should match the original phrase
}
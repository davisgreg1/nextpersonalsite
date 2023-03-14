import crypto from "crypto";

export function hashString(str: string) {
  const hash = crypto.createHash("sha256");
  hash.update(str);
  return hash.digest("hex");
}

export function compareHashValues(str: string, hashedStr: string) {
  return hashString(str) === hashedStr;
}

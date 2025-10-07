/**
 * Normalizes a string by removing spaces, converting to lowercase, and replacing special characters
 * @param str - The string to normalize
 * @returns The normalized string
 */
export function normalizeString(str: string): string {
  // Hash mapping for special character replacements
  const characterMap: Record<string, string> = {
    ".": "dot",
    "#": "sharp",
    "+": "plus",
    "@": "at",
    "-": "dash",
  };

  return str
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^\w]/g, (char) => characterMap[char] || "");
}

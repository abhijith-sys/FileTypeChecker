// Import file signatures from the constants folder
import { fileSignatures } from "./constants/magic";

/**
 * Get the file type based on its magic number.
 * @param {string} fileSignature - The magic number of the file.
 * @returns {string} The corresponding file type or "Unknown".
 */
export function getFileType(fileSignature) {
  return fileSignatures[fileSignature] || "Unknown";
}

/**
 * Check the file type using its magic number.
 * @param {Buffer} fileData - The binary data of the file.
 * @returns {string} The detected file type or "file not found".
 */
export function fileTypeChecker(fileData) {
  if (fileData) {
    const magicNumber = fileData.toString("hex", 0, 4).toUpperCase();
    const fileType = getFileType(magicNumber);
    return fileType;
  } else {
    return "file not found";
  }
}

/**
 * Get the file type from an event (e.g., file input change event).
 * @param {Event} event - The event containing the selected file.
 * @returns {Promise<string>} A promise that resolves to the detected file type or "file not found".
 */
export async function getFileTypeFromEvent(event) {
  const file = event.target.files[0];

  if (file) {
    const magicNumber = await extractMagicNumber(file);
    const fileType = getFileType(magicNumber);
    return fileType;
  } else {
    return "file not found";
  }
}

/**
 * Extract the magic number from a file.
 * @param {File} file - The file to extract the magic number from.
 * @returns {Promise<string>} A promise that resolves to the extracted magic number.
 */
function extractMagicNumber(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const bytes = new Uint8Array(reader.result);
      const magicNumber = Array.from(bytes)
        .map((byte) => byte.toString(16).padStart(2, '0'))
        .join('')
        .toUpperCase();
      resolve(magicNumber);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsArrayBuffer(file.slice(0, 4)); // Read the first 4 bytes
  });
}

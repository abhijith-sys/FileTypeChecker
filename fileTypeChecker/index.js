const fs = require("fs");
const path = require("path");

// Import file signatures from the constants folder
const { fileSignatures } = require("./constants/magic");

function getFileType(fileSignature) {
  return fileSignatures[fileSignature] || "Unknown";
}

function fileTypeChecker(fileData) {
  if (fileData) {
    const magicNumber = fileData.toString("hex", 0, 4).toUpperCase();
    const fileType = getFileType(magicNumber);
    return fileType;
  } else {
    return "file not found";
  }
}

module.exports = {
  getFileType,
  fileTypeChecker
};

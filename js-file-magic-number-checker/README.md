

<h1 align="center">js-file-magic-number-checker</h1>

<p align="center">
  A lightweight utility package to determine the file type using its magic number (file signature) in a React application.
</p>

<div align="center">
  <a href="https://www.npmjs.com/package/@abhijith_213-/js-file-magic-number-checker">
    <img alt="npm" src="https://img.shields.io/npm/v/@abhijith_213-/js-file-magic-number-checker.svg?color=brightgreen">
  </a>
  <a href="https://github.com/abhijith-sys">
    <img alt="GitHub" src="https://github.com/abhijith-sys.svg?color=blue">
  </a>
</div>

<div align="center">
  <sub>Built by
  <a href="https://github.com/your-username">Abhijith</a></sub>
</div>

<br>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)


## Functions
Functions
getFileType(fileSignature: string): string

Returns the corresponding file type for a given magic number (file signature).
getFileTypeFromEvent(event: Event): Promise<string>

Returns a promise that resolves to the detected file type from a file input change event.
## Installation

```sh
npm install @abhijith_213-/js-file-magic-number-checker

Usage

    Import the necessary functions:

javascript

import { getFileTypeFromEvent } from '@abhijith_213-/js-file-magic-number-checker';

    Use the getFileTypeFromEvent function to determine the file type from a file input change event:

javascript

import React, { useState } from 'react';
import { getFileTypeFromEvent } from '@abhijith_213-/js-file-magic-number-checker';

function App() {
  const [fileType, setFileType] = useState('');

  const handleFileChange = async (event) => {
    const fileType = await getFileTypeFromEvent(event);
    setFileType(fileType);
  };

  return (
    <div>
      <h1>File Magic Number Checker</h1>
      <input type="file" onChange={handleFileChange} />
      {fileType && <p>Detected File Type: {fileType}</p>}
    </div>
  );
}

export default App;


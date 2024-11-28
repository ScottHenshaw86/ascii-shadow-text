# ascii-shadow-text

**ascii-shadow-text** is a lightweight JavaScript library for generating ASCII art text using "shadowed" characters. It supports a wide range of characters, including letters, numbers, and some punctuation marks.

---

## Installation

Install the package via npm:

```bash
npm install ascii-shadow-text
```
---

## Usage

You can use this package in both CommonJS and ES Module environments.

### Using ES Modules (import)
```javascript
import { asciiShadowText } from 'ascii-shadow-text';

const art = asciiShadowText("Hello, World!");
console.log(art);
```

### Using CommonJS (require)
```javascript
const { asciiShadowText } = require('ascii-shadow-text');

const art = asciiShadowText("Hello, World!");
console.log(art);
```
---

## Available Characters

The following characters are currently supported:

### Letters
A-Z

### Numbers
0-9

### Punctuation and Symbols
, . ! ? ' - (space)

---

## Example Output

```javascript
const art = asciiShadowText("ASCII");
console.log(art);
```

```
  ██████╗  ██████╗  ██████╗██╗██╗
 ██    ██║██╔════╝ ██╔════╝██║██║
 ████████║╚██████╗ ██║     ██║██║
 ██╔═══██║ ╚════██╗██║     ██║██║
 ██║   ██║ ██████╔╝╚██████╗██║██║
 ╚═╝   ╚═╝ ╚═════╝  ╚═════╝╚═╝╚═╝

```
---

## Notes
1. Text is automatically converted to uppercase during processing.
2. Characters not yet supported will be skipped silently.
3. Characters differ in width, but all are 7 lines tall.
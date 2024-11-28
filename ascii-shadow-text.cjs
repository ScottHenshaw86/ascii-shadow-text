// ascii-shadow-text.cjs
const patterns = {
  A: [
    " ██████╗ ",
    "██    ██║",
    "████████║",
    "██╔═══██║",
    "██║   ██║",
    "╚═╝   ╚═╝",
    "         "
  ],
  B: [
    "██████╗ ",
    "██╔══██╗",
    "██████╔╝",
    "██╔═ ██╗",
    "██████╔╝",
    "╚═════╝ ",
    "        "
  ],
  C: [
    " ██████╗",
    "██╔════╝",
    "██║     ",
    "██║     ",
    "╚██████╗",
    " ╚═════╝",
    "        "
  ],
  D: [
    "██████╗ ",
    "██╔══██╗",
    "██║  ██║",
    "██║  ██║",
    "██████╔╝",
    "╚═════╝ ",
    "        "
  ],
  E: [
    "███████╗",
    "██╔════╝",
    "█████╗  ",
    "██╔══╝  ",
    "███████╗",
    "╚══════╝",
    "        "
  ],
  F: [
    "███████╗",
    "██╔════╝",
    "█████╗  ",
    "██╔══╝  ",
    "██║     ",
    "╚═╝     ",
    "        "
  ],
  G: [
    " ██████╗ ",
    "██╔════╝ ",
    "██║  ███╗",
    "██║   ██║",
    "╚██████╔╝",
    " ╚═════╝ ",
    "         "
  ],
  H: [
    "██╗  ██╗",
    "██║  ██║",
    "███████║",
    "██╔══██║",
    "██║  ██║",
    "╚═╝  ╚═╝",
    "        "
  ],
  I: [
    "██╗",
    "██║",
    "██║",
    "██║",
    "██║",
    "╚═╝",
    "   "
  ],
  J: [
    "     ██╗",
    "     ██║",
    "     ██║",
    "██   ██║",
    "╚█████╔╝",
    " ╚════╝ ",
    "        "
  ],
  K: [
    "██╗  ██╗",
    "██║ ██╔╝",
    "█████╔╝ ",
    "██╔═██╗ ",
    "██║  ██╗",
    "╚═╝  ╚═╝",
    "        "
  ],
  L: [
    "██╗     ",
    "██║     ",
    "██║     ",
    "██║     ",
    "███████╗",
    "╚══════╝",
    "        "
  ],
  M: [
    "███╗   ███╗",
    "████╗ ████║",
    "██╔████╔██║",
    "██║╚██╔╝██║",
    "██║ ╚═╝ ██║",
    "╚═╝     ╚═╝",
    "           "
  ],
  N: [
    "███╗   ██╗",
    "████╗  ██║",
    "██╔██╗ ██║",
    "██║╚██╗██║",
    "██║ ╚████║",
    "╚═╝  ╚═══╝",
    "          "
  ],
  O: [
    " ██████╗ ",
    "██╔═══██╗",
    "██║   ██║",
    "██║   ██║",
    "╚██████╔╝",
    " ╚═════╝ ",
    "         "
  ],
  P: [
    "██████╗ ",
    "██╔══██╗",
    "██████╔╝",
    "██╔═══╝ ",
    "██║     ",
    "╚═╝     ",
    "        "
  ],
  Q: [
    " ██████╗ ",
    "██╔═══██╗",
    "██║   ██║",
    "██║▄▄ ██║",
    "╚██████╔╝",
    " ╚══▀▀╔╝ ",
    "    ╚═╝  "
  ],
  R: [
    "██████╗ ",
    "██╔══██╗",
    "██████╔╝",
    "██╔══██╗",
    "██║  ██║",
    "╚═╝  ╚═╝",
    "        "
  ],
  S: [
    " ██████╗ ",
    "██╔════╝ ",
    "╚██████╗ ",
    " ╚════██╗",
    " ██████╔╝",
    " ╚═════╝ ",
    "         "
  ],
  T: [
    "████████╗",
    "╚══██╔══╝",
    "   ██║   ",
    "   ██║   ",
    "   ██║   ",
    "   ╚═╝   ",
    "         "
  ],
  U: [
    "██╗   ██╗",
    "██║   ██║",
    "██║   ██║",
    "██║   ██║",
    "╚██████╔╝",
    " ╚═════╝ ",
    "         "
  ],
  V: [
    "██╗   ██╗",
    "██║   ██║",
    "██║   ██║",
    "╚██╗ ██╔╝",
    " ╚████╔╝ ",
    "  ╚═══╝  ",
    "         "
  ],
  W: [
    "██╗    ██╗",
    "██║    ██║",
    "██║ █╗ ██║",
    "██║███╗██║",
    "╚███╔███╔╝",
    " ╚══╝╚══╝ ",
    "          "
  ],
  X: [
    "██╗  ██╗",
    "╚██╗██╔╝",
    " ╚███╔╝ ",
    " ██╔██╗ ",
    "██╔╝ ██╗",
    "╚═╝  ╚═╝",
    "        "
  ],
  Y: [
    "██╗   ██╗",
    "╚██╗ ██╔╝",
    " ╚████╔╝ ",
    "  ╚██╔╝  ",
    "   ██║   ",
    "   ╚═╝   ",
    "         "
  ],
  Z: [
    "███████╗",
    "╚══███╔╝",
    "  ███╔╝ ",
    " ███╔╝  ",
    "███████╗",
    "╚══════╝",
    "        "
  ],
  "0": [
    " ██████╗ ",
    "██╔═████╗",
    "██║██╔██║",
    "████╔╝██║",
    "╚██████╔╝",
    " ╚═════╝ ",
    "         "
  ],
  "1": [
    "██╗",
    "██║",
    "██║",
    "██║",
    "██║",
    "╚═╝",
    "   "
  ],
  "2": [
    "██████╗ ",
    "╚════██╗",
    " █████╔╝",
    "██╔═══╝ ",
    "███████╗",
    "╚══════╝",
    "        "
  ],
  "3": [
    "██████╗ ",
    "╚════██╗",
    " █████╔╝",
    " ╚═══██╗",
    "██████╔╝",
    "╚═════╝ ",
    "        "
  ],
  "4": [
    "██╗  ██╗",
    "██║  ██║",
    "███████║",
    "╚════██║",
    "     ██║",
    "     ╚═╝",
    "        "
  ], 
  "5": [
    "███████╗",
    "██╔════╝",
    "███████╗",
    "╚════██╗",
    "██████╔╝",
    "╚═════╝ ",
    "        "
  ],
  "6": [
    " ██████╗ ",
    "██╔════╝ ",
    "███████╗ ",
    "██╔═══██╗",
    "╚██████╔╝",
    " ╚═════╝ ",
    "         "
  ],
  "7": [
    "███████╗",
    "╚════██║",
    "    ██╔╝",
    "   ██╔╝ ",
    "   ██║  ",
    "   ╚═╝  ",
    "        "
  ],
  "8": [
    " █████╗ ",
    "██╔══██╗",
    "╚█████╔╝",
    "██╔══██╗",
    "╚█████╔╝",
    " ╚════╝ ",
    "        "
  ], 
  "9": [
    " █████╗ ",
    "██╔══██╗",
    "╚██████║",
    " ╚═══██║",
    " █████╔╝",
    " ╚════╝ ",
    "        "
  ],
  "➓": [ // space character
    "   ",
    "   ",
    "   ",
    "   ",
    "   ",
    "   ",
    "   "
  ],
  ",": [
    "   ",
    "   ",
    "   ",
    "   ",
    "██╗",
    "██║",
    "╚═╝",
  ],
  "'": [
    "██╗",
    "██║",
    "╚═╝",
    "   ",
    "   ",
    "   ",
    "   ",
  ],
  ".": [
    "   ",
    "   ",
    "   ",
    "   ",
    "██╗",
    "╚═╝",
    "   ",
  ],
  "?" : [
    "██████╗ ",
    "╚════██╗",
    "   ██╔═╝",
    "  ▀▀╔╝  ",
    "  ██║   ",
    "  ╚═╝   ",
    "        ",
  ],
  "!": [
    "██╗",
    "██║",
    "██║",
    "╚═╝",
    "██╗",
    "╚═╝",
    "   "
  ],
  "-": [
    "      ",
    "      ",
    "█████╗",
    "╚════╝",
    "      ",
    "      ",
    "      ",
  ]
};

function asciiShadowText(text) {

  // Convert text to uppercase and split into characters
  const chars = text.toUpperCase().replace(/ /g, "➓").split("");
  let art = "";

  // Combine each line of each character into rows
  for (let row = 0; row < 7; row++) {
    let rowStr = "";
    for (const char of chars) {
      if (patterns[char]) {
        rowStr += patterns[char][row];
      }
    }
    art += rowStr + "\n";
  }

  return art;
}

module.exports = asciiShadowText;
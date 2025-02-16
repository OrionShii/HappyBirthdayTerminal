let isUnlocked = false;
let hasRevealedMessage = false;
let isGalleryVisible = false;

const PASSWORD = "hbdojan";

const COMMANDS = {
  help: () => `Available commands:
  help - Show this help message
  clear - Clear the terminal
  unlock <password> - Unlock hidden content
  hack - Access the mainframe
  reveal - Show birthday message (requires unlock)
  gallery - Toggle image gallery (requires unlock)
  matrix - Toggle matrix animation`,

  clear: () => "",

  unlock: (args: string[]) => {
    if (args[0] === PASSWORD) {
      isUnlocked = true;
      return "Access granted. System compromised! Type 'hack' to begin sequence.";
    }
    return "Access denied. Invalid password.";
  },

  hack: () => {
    if (!isUnlocked) {
      return "Access denied. Please unlock first.";
    }

    return `INITIATING HACK SEQUENCE...
[█▒▒▒▒▒▒▒▒▒] 10%
[████▒▒▒▒▒▒] 40%
[██████▒▒▒▒] 60%
[████████▒▒] 80%
[██████████] 100%
SYSTEM COMPROMISED
Type 'reveal' to show birthday message`;
  },

  reveal: () => {
    if (!isUnlocked) {
      return "Access denied. Please unlock first.";
    }

    if (!hasRevealedMessage) {
      hasRevealedMessage = true;
      return `
╔══════════════════════════════════════════════════════════════╗
║     _    _          _____  _______     __  ______  _____     ║
║    | |  | |   /\\   |  __ \\|  __ \\ \\   / / |  ____|/ ____|   ║
║    | |__| |  /  \\  | |__) | |__) \\ \\_/ /  | |__  | (___     ║
║    |  __  | / /\\ \\ |  ___/|  ___/ \\   /   |  __|  \\___ \\    ║
║    | |  | |/ ____ \\| |    | |      | |    | |____ ____) |   ║
║    |_|  |_/_/    \\_\\_|    |_|      |_|    |______|_____/    ║
║                                                              ║
║     ____  _____ _______ _    _ _____      __     __         ║
║    |  _ \\|_   _|__   __| |  | |  __ \\   /\\ \\   / /         ║
║    | |_) | | |    | |  | |__| | |  | | /  \\ \\_/ /          ║
║    |  _ <  | |    | |  |  __  | |  | |/ /\\ \\   /           ║
║    | |_) |_| |_   | |  | |  | | |__| / ____ \\| |           ║
║    |____/|_____|  |_|  |_|  |_|_____/_/    \\_\\_|           ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝

Dear Muhammad Fauzan Zamzami,

[SYSTEM ACCESS GRANTED - DISPLAYING PERSONAL MESSAGE]

Selamat Ulang Tahun! 🎉

Semoga di tahun ini kamu:
• Selalu diberi kesehatan dan kebahagiaan
• Sukses dalam karir dan coding journey-mu
• Code-mu selalu clean dan bug-free
• Pull request-mu selalu di-approve
• Dan stack overflow selalu punya jawaban untuk masalahmu! 😄

[EXECUTING SPECIAL COMMAND...]
Type 'gallery' to view special memories!

With best wishes,
Your fellow developers 👨‍💻

[END OF TRANSMISSION]`;
    }
    return "Message already revealed. Use 'gallery' to see photos!";
  },

  gallery: () => {
    if (!isUnlocked) {
      return "Access denied. Please unlock first.";
    }
    isGalleryVisible = !isGalleryVisible;
    window.dispatchEvent(new CustomEvent('toggleGallery', { detail: isGalleryVisible }));
    return isGalleryVisible ? "Loading memory fragments..." : "Hiding memory fragments...";
  },

  matrix: () => {
    window.dispatchEvent(new CustomEvent('toggleMatrix'));
    return "Matrix rain effect toggled";
  }
};

export function processCommand(input: string): string {
  const [command, ...args] = input.toLowerCase().split(' ');

  if (command === 'clear') {
    return "";
  }

  if (!(command in COMMANDS)) {
    return `Command not found: ${command}\nType 'help' for available commands`;
  }

  return COMMANDS[command as keyof typeof COMMANDS](args) || "Command executed successfully";
}

export function isGalleryShown() {
  return isGalleryVisible;
}
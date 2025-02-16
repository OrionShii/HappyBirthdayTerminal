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
║                                                              ║
║   ██╗  ██╗ █████╗ ██████╗ ██████╗ ██╗   ██╗                 ║
║   ██║  ██║██╔══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝                 ║
║   ███████║███████║██████╔╝██████╔╝ ╚████╔╝                  ║
║   ██╔══██║██╔══██║██╔═══╝ ██╔═══╝   ╚██╔╝                   ║
║   ██║  ██║██║  ██║██║     ██║        ██║                    ║
║   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝        ╚═╝                    ║
║                                                              ║
║   ██████╗ ██╗██████╗ ████████╗██╗  ██╗██████╗  █████╗ ██╗   ║
║   ██╔══██╗██║██╔══██╗╚══██╔══╝██║  ██║██╔══██╗██╔══██╗╚██╗  ║
║   ██████╔╝██║██████╔╝   ██║   ███████║██║  ██║███████║ ╚██╗ ║
║   ██╔══██╗██║██╔══██╗   ██║   ██╔══██║██║  ██║██╔══██║ ██╔╝ ║
║   ██████╔╝██║██║  ██║   ██║   ██║  ██║██████╔╝██║  ██║██╔╝  ║
║   ╚═════╝ ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝   ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝

Dear Muhammad Fauzan Zamzami,

[SYSTEM ACCESS GRANTED - DISPLAYING PERSONAL MESSAGE]

Selamat Ulang Tahun! 🎉

Di tahun 2025 ini, kami berharap kamu:

• Selalu dalam lindungan Allah SWT dan diberi kesehatan yang prima
• Makin sukses dalam karir sebagai developer
• Bisa mencapai semua goals dan resolusi 2025-mu
• Coding journey-mu dipenuhi dengan pencapaian baru
• Project-projectmu selalu clean code dan zero bugs
• Pull request-mu selalu di-approve dengan cepat
• Stack overflow selalu punya jawaban untuk setiap masalahmu
• Bisa balance antara work & life dengan lebih baik
• Rejeki yang berlimpah dan berkah
• Dan yang paling penting, selalu bahagia! 😄

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
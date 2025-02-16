let isUnlocked = false;
let hasRevealedMessage = false;

const PASSWORD = "hb2024";

const COMMANDS = {
  help: () => `Available commands:
  help - Show this help message
  clear - Clear the terminal
  unlock <password> - Unlock hidden content
  hack - Access the mainframe
  reveal - Show birthday message (requires unlock)
  gallery - Toggle image gallery (requires unlock)`,

  clear: () => "",

  unlock: (args: string[]) => {
    if (args[0] === PASSWORD) {
      isUnlocked = true;
      return "Access granted. New commands available!";
    }
    return "Access denied. Invalid password.";
  },

  hack: () => {
    if (!isUnlocked) {
      return "Access denied. Please unlock first.";
    }
    
    return `INITIATING HACK SEQUENCE...
[====================] 100%
HACK SUCCESSFUL
Type 'reveal' to show birthday message`;
  },

  reveal: () => {
    if (!isUnlocked) {
      return "Access denied. Please unlock first.";
    }
    
    if (!hasRevealedMessage) {
      hasRevealedMessage = true;
      return `
██╗  ██╗ █████╗ ██████╗ ██████╗ ██╗   ██╗    ██████╗ ██████╗ 
██║  ██║██╔══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝    ██╔══██╗██╔══██╗
███████║███████║██████╔╝██████╔╝ ╚████╔╝     ██████╔╝██║  ██║
██╔══██║██╔══██║██╔═══╝ ██╔═══╝   ╚██╔╝      ██╔══██╗██║  ██║
██║  ██║██║  ██║██║     ██║        ██║       ██████╔╝██████╔╝
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝        ╚═╝       ╚═════╝ ╚═════╝ 
                                                              
Dear Muhammad Fauzan Zamzami,

May your code always compile,
your bugs be minimal,
and your algorithms optimal!

Happy Birthday!
`;
    }
    return "Message already revealed. Try other commands!";
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

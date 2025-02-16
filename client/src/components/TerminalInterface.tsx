import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { processCommand } from '@/lib/commands';

export default function TerminalInterface() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['Welcome to HackerBirthday v1.0', 'Type "help" for available commands']);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleCommand = (command: string) => {
    setHistory(prev => [...prev, `> ${command}`]);
    const output = processCommand(command);
    setHistory(prev => [...prev, ...output.split('\n')]);
    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      handleCommand(input.trim());
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-black/80 border-green-500/50 p-4">
        <div 
          ref={terminalRef}
          className="font-mono text-sm h-[60vh] overflow-y-auto"
        >
          {history.map((line, i) => (
            <div key={i} className="mb-1">
              {line}
            </div>
          ))}
          <div className="flex items-center">
            <span className="text-green-500 mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 bg-transparent border-none outline-none text-green-500"
              autoFocus
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

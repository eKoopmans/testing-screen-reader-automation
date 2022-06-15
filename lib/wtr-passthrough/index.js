const parseCommand = (base, command) => {
  const commandToRun = !command.reduce ? base[command] : command.reduce((prev, current) => {
    const command = prev && prev[current];
    return command?.bind ? command.bind(prev) : command;
  }, base);

  if (!commandToRun) throw new Error(`Invalid command: ${command.join?.('.') || command}`);
  return commandToRun;
};

export const passthroughPlugin = (base) => ({
  name: 'passthrough-plugin',
  async executeCommand({ command, payload, session }) {
    if (command !== 'passthrough') return undefined;
    if (!payload.command) return false;

    const commandToRun = parseCommand(base, payload.command);
    const res = await commandToRun(...payload.args);
    return res ?? false;
  }
});

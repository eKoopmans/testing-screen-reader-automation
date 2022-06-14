export const passthroughPlugin = (base) => ({
  name: 'passthrough-plugin',
  async executeCommand({ command, payload, session }) {
    if (command !== 'passthrough') return undefined;

    const res = payload.command && await base[payload.command](...payload.args);
    return res ?? false;
  }
});

import { executeServerCommand } from '@web/test-runner-commands';

export const run = (command, ...args) => executeServerCommand('passthrough', { command, args });

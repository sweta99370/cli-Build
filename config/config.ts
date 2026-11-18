import { homedir } from "node:os";

export const configPath = `${homedir()}/.cli-build/config.json`;

const configFile = Bun.file(configPath);
const config = (await configFile.exists()) ? await configFile.json() : {};

export default config;

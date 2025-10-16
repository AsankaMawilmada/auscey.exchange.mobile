import Constants from 'expo-constants';

const expoConfig = (Constants as any).expoConfig ?? (Constants as any).manifest ?? {};
const extra: Record<string, any> = expoConfig.extra ?? {};

function getString(key: string, fallback?: string): string | undefined {
    // extra (from app.json/app.config.js) takes precedence, then process.env
    const fromExtra = extra[key];
    if (typeof fromExtra === 'string' && fromExtra.length > 0) return fromExtra;

    const fromEnv = (process.env as any)[key];
    if (typeof fromEnv === 'string' && fromEnv.length > 0) return fromEnv;

    return fallback;
}

export const API_URL = getString('API_URL', 'https://emonitor-staging.ausceyexchange.com.au/api/');
export const ENV_NAME = getString('ENV_NAME', 'development');

export default {
    getString,
    API_URL,
    ENV_NAME,
};

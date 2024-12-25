import DEFAULT_VALUES from "./constants/defaults.mjs";

/**
 * Loads custom environment variable or returns null, if not found.
 * @param {string} key
 * @returns Specified environment variable or null if not found
 */
function getEnv(key) {
  const windowEnv = global.window.__env || {};
  return process.env[key] || windowEnv[key] || null;
}

/**
 * Environment variables are injected from .env at build-time via dotenv.
 * @link https://github.com/motdotla/dotenv
 */
const ENV = {
  env: getEnv("NODE_ENV") || DEFAULT_VALUES.env,
  corsAllowOrigin: getEnv("CORS_ALLOW_ORIGIN") || [],
  port: getEnv("PORT") || "3000",
};

export default ENV;

/**
 * GET /
 * Home page
 */
export const index = (req, res) => res.json('Hello World!');

/**
 * GET /health
 * Health check
 */
export const healthCheck = (req, res) => res.json({ success: true });

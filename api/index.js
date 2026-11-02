// Vercel serverless entry point.
//
// server.js exports the Express app without calling app.listen(), so Vercel can
// invoke it as a request handler. All /api/* routes are rewritten here by
// vercel.json; the static pages in static-site/ are served from Vercel's CDN
// and never reach this function.
module.exports = require('../server');

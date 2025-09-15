import express from 'express';
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'gopi-ecommerce-backend' }));
app.get('/api/hello',  (_req, res) => res.json({ message: 'Hello from Gopi E-Commerce backend!' }));
app.get('/',           (_req, res) => res.send('<h1>Gopi Backend</h1><p>Try <code>/api/health</code></p>'));

app.listen(PORT, '0.0.0.0', () => console.log(`Listening on ${PORT}`));

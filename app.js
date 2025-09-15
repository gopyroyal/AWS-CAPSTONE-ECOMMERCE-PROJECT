import express from 'express';
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', ts: new Date().toISOString() });
});

app.get('/', (_req, res) => res.send('Hello from ECS!'));

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

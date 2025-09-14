const express = require('express');
const app = express();

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'backend', ts: new Date().toISOString() });
});

app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Hello from Node/Express on ECS (soon)!' });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`API listening on ${port}`));

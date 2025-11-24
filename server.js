const express = require('express');
const httpProxy = require('http-proxy');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8000;

const proxy = httpProxy.createProxyServer({});

// Logging
app.use(morgan('dev'));

// Error handling for proxy
proxy.on('error', (err, req, res) => {
  console.error(err);
  res.status(500).send({ error: 'Proxy Error' });
});

// Define routes and their target services
const routes = {
  '/products': 'http://localhost:3001',
  '/users': 'http://localhost:3002',
  '/orders': 'http://localhost:3003',
};

// Proxy requests
app.use((req, res) => {
  for (const route in routes) {
    if (req.url.startsWith(route)) {
      const target = routes[route];
      proxy.web(req, res, { target });
      return;
    }
  }

  res.status(404).send({ error: 'Route not found' });
});

app.listen(port, () => {
  console.log(`API Gateway running on port ${port}`);
});
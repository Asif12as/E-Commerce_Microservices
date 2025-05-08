// api-gateway/server.js
const express = require('express');
const rateLimit = require('express-rate-limit');
const { createProxyMiddleware } = require('http-proxy-middleware');
const redis = require('redis');
const apicache = require('apicache');

const app = express();
const PORT = process.env.PORT || 3000;

// Create Redis client for caching
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379
});

// Setup cache middleware
let cacheWithRedis = apicache.options({
  redisClient,
}).middleware;

// Rate limiting middleware
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes'
});

// Apply rate limiting to all requests
app.use(apiLimiter);

// Routes
app.use('/api/users', cacheWithRedis('5 minutes'), createProxyMiddleware({ 
  target: 'http://user-service:4001',
  changeOrigin: true,
  pathRewrite: {
    '^/api/users': '/api/users', 
  },
}));

app.use('/api/products', cacheWithRedis('10 minutes'), createProxyMiddleware({ 
  target: 'http://product-service:4002',
  changeOrigin: true,
  pathRewrite: {
    '^/api/products': '/api/products', 
  },
}));

app.use('/api/orders', createProxyMiddleware({ 
  target: 'http://order-service:4003',
  changeOrigin: true,
  pathRewrite: {
    '^/api/orders': '/api/orders', 
  },
}));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
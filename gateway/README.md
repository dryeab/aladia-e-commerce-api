# Gateway

This service provides the **HTTP entry point** for the microservices architecture. It routes requests to the Product and Order microservices via **TCP**.

## Local Development

1. **Install** dependencies:
   ```bash
   npm install
   ```
2. **Run**:
   ```bash
   npm run start:dev
   ```
3. The Gateway listens on **port 3000** by default.

## Environment Variables

- `GATEWAY_PORT` (default `3000`)
- `REDIS_HOST`, `REDIS_PORT` 
- Microservice host/port references:
  - `PRODUCT_SERVICE` (`host`: `product-service`, `port`: `3001`)
  - `ORDER_SERVICE` (`host`: `order-service`, `port`: `3002`)

## Docker

Built automatically via the main `docker-compose.yml`. Exposes **port 3000**.

```
docker-compose up --build
```

For more details, see the main [README](../README.md).

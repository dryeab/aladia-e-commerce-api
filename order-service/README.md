# Order-Service

Handles **orders** (creating, listing, updating, deleting) and stores them in MongoDB.

## Local Development

1. **Install** dependencies:
   ```bash
   npm install
   ```
2. **Run** (TCP microservice on port 3002 by default):
   ```bash
   npm run start:dev
   ```
3. Connects to MongoDB via `MONGO_URI`.

## Environment Variables

- `PORT` (default `3002`)
- `MONGO_URI` (e.g. `mongodb://localhost:27017/orders_db`)

## Docker

Built automatically via the main `docker-compose.yml`. Exposes **port 3002**.

```
docker-compose up --build
```

For more details, see the main [README](../README.md).
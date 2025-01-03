# Aladia E-commerce Microservice Project

This project demonstrates a **microservices architecture** with NestJS. It includes:
1. **Gateway** (HTTP entry point)  
2. **Product-Service** (manages products)  
3. **Order-Service** (manages orders)  
4. **MongoDB** (data persistence)  
5. **Redis** (caching)  

## Features
- **Microservices** communicating over TCP  
- **Docker Compose** setup for one-command startup  
- **Validation** using `class-validator`  
- **Caching** with Redis  
- **OpenAPI** documentation via Apidog

## Quick Start

1. **Install Docker & Docker Compose**  
2. **Clone** the repo and navigate to the root directory (where `docker-compose.yml` is).  
3. Run:
   ```bash
   docker-compose up --build
   ```
4. Access the **Gateway** at `http://localhost:3000` (default port).  
5. MongoDB is exposed at `localhost:27017` and Redis at `localhost:6379`.

## API Documentation

You can find the **OpenAPI docs** for all endpoints at:  
**[njrhjnpf4w.apidog.io](https://njrhjnpf4w.apidog.io)**

Use this link to explore the available routes and test them out.  

---

**Thank you!**
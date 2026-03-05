---
title: "Understanding Docker Containers"
date: 2025-03-01
description: "A practical introduction to Docker containers for developers"
tags: ["docker", "devops", "containers"]
categories: ["devops"]
draft: false
---

Docker has revolutionized how we build, ship, and run applications. Let's dive into the fundamentals.

## What are Containers?

Containers are lightweight, standalone packages that include everything needed to run a piece of software: code, runtime, system tools, and libraries.

{{< info >}}
Containers are NOT virtual machines. They share the host OS kernel, making them much lighter and faster to start.
{{< /info >}}

## Your First Dockerfile

```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["python", "app.py"]
```

## Essential Docker Commands

```bash
# Build an image
docker build -t myapp:latest .

# Run a container
docker run -d -p 8000:8000 --name myapp myapp:latest

# View running containers
docker ps

# View logs
docker logs myapp

# Stop and remove
docker stop myapp && docker rm myapp
```

{{< warning >}}
Never store sensitive data (passwords, API keys) directly in your Dockerfile. Use environment variables or Docker secrets instead.
{{< /warning >}}

## Docker Compose

For multi-container applications, Docker Compose is essential:

```yaml
version: "3.8"
services:
  web:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://db:5432/mydb
    depends_on:
      - db

  db:
    image: postgres:15
    volumes:
      - pgdata:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_PASSWORD=secret

volumes:
  pgdata:
```

{{< tip >}}
Use multi-stage builds to keep your production images small. Only copy the artifacts you need for the final image.
{{< /tip >}}

## Best Practices

1. **Use specific base image tags** — avoid `latest`
2. **Minimize layers** — combine related RUN commands
3. **Use .dockerignore** — exclude unnecessary files
4. **Run as non-root** — add a USER directive
5. **Scan for vulnerabilities** — use `docker scout` or Snyk

Docker is an essential tool in modern development workflows. Start with these basics and build from there!

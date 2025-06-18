#!/bin/bash
set -e

echo "Building and starting containers..."
docker-compose up -d --build

echo "Waiting for the backend API to become available..."
for i in {1..30}; do
  STATUS=$(curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/api/exemplos || echo "000")
  if [ "$STATUS" = "200" ]; then
    echo "Backend API is up!"
    break
  fi
  echo "Waiting... ($i/30)"
  sleep 2
done

if [ "$STATUS" != "200" ]; then
  echo "Error: Backend API did not start properly (HTTP status $STATUS)."
  exit 1
fi

echo "Testing endpoints..."

ROOT_STATUS=$(curl -s -o /dev/null -w '%{http_code}' http://localhost:3000)
if [ "$ROOT_STATUS" = "200" ]; then
  echo "GET /: OK (200)"
else
  echo "GET /: Failed with status $ROOT_STATUS"
  exit 1
fi

API_STATUS=$(curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/api/exemplos)
if [ "$API_STATUS" = "200" ]; then
  echo "GET /api/exemplos: OK (200)"
else
  echo "GET /api/exemplos: Failed with status $API_STATUS"
  exit 1
fi

echo "All tests passed successfully!"

#!/bin/bash

# Install dependencies
npm install

# Run the frontend and backend in parallel
npx concurrently "npm run serve" "npx serverless offline"

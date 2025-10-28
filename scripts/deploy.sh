#!/bin/bash
set -e

DEPLOY_ENV=${DEPLOY_ENV:-production}

echo "====================================="
echo "DevOps Simulator - Deployment"
echo "====================================="

if [ "$DEPLOY_ENV" = "production" ]; then
    echo "Mode: Production"
    DEPLOY_REGION="us-east-1"
    APP_PORT=8080
    echo "Environment: $DEPLOY_ENV"
    echo "Region: $DEPLOY_REGION"
    echo "Port: $APP_PORT"
    echo "Starting production deployment..."

elif [ "$DEPLOY_ENV" = "development" ]; then
    echo "Mode: Development"
    APP_PORT=3000
    echo "Environment: $DEPLOY_ENV"
    echo "Installing dependencies..."
    npm install
    echo "Starting development server..."
    
elif [ "$DEPLOY_ENV" = "experimental" ]; then
    echo "Mode: Experimental AI"
    APP_PORT=9000
    echo "Environment: $DEPLOY_ENV"
    echo "Initializing AI deployment..."
    npm run start:ai

else
    echo "Error: Unknown environment $DEPLOY_ENV"
    exit 1
fi

echo "Deployment completed successfully!"

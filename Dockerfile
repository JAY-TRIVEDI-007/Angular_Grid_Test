# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# Name the node stage "builder"
FROM node:16-alpine3.14 AS builder

# Set working directory
WORKDIR /app

# Copy all files from current directory to working dir in image
COPY . .

# install node modules and build assets
# RUN npm install -g npm@8.7.0
RUN npm i
RUN npm run build

# nginx state for serving content
FROM nginx:stable-alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=builder /app/dist/grid-demo .
# Copy default.conf to nginx
COPY default.conf /etc/nginx/conf.d

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# docker build -t syncfusion-grid:latest --platform=linux/amd64 -f Dockerfile .


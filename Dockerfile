# Stage 1: Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Set environment variable for build
ARG VITE_URL_BASE=/api/v1
ENV VITE_URL_BASE=$VITE_URL_BASE

# Build the application
RUN npm run build

# Stage 2: Production stage
FROM nginx:stable-alpine
# Copy build output to nginx public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration (we will create this next)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

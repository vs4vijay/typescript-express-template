########### Stage 1 ###########
FROM node:14.17-alpine as builder

# Update image
RUN apk update

# Add work directory
WORKDIR /app

# Use "node" user
RUN chown -Rh node:node /app
USER node

# Install npm modules
COPY package*.json ./
RUN npm ci --quiet

# Copy source code
COPY tsconfig.json ./
COPY jest.config.js ./
COPY src /app/src

# Build
RUN npm run build

########### Stage 2 ###########
FROM node:14.17-alpine
LABEL maintainer="vs4vijay@gmail.com"

WORKDIR /app

# Install npm modules
COPY package*.json ./
RUN npm ci --quiet --only=production

# Copy build from previous stage
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 9000

CMD [ "node", "./dist/app.js" ]
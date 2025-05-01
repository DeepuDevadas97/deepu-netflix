# Use a compatible Node.js version for Next.js 15
FROM node:18.18.0-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the app source
COPY . .

# Build the app
RUN npm run build

# Expose the default port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

# Use Node.js as the base image
FROM node:18.17.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the app's source code to the container
COPY . .

# Build the Next app
RUN npm run build

# Expose the port (default for Next.js)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

FROM node:18

WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY ./app .

# Expose the port your app runs on
EXPOSE 3000

# Run the app
CMD ["node", "index.js"]

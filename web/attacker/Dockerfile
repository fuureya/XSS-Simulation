FROM node:18

WORKDIR /usr/src/app

# Copy all source files
COPY . .

# Install dependencies
RUN npm install express
RUN npm install --save-dev nodemon

# Expose the port your app runs on
EXPOSE 3000

# Run the app
CMD ["npm", "run", "dev"]

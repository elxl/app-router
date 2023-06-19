# Use the official Node.js image as the base
FROM node:14-alpine as build

# Set the working directory inside the Docker image
WORKDIR /

# Copy the package.json and package-lock.json files to the Docker image
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the Docker image
COPY . .

# Build the production version of the Vue.js application
RUN npm run build

# Use a lightweight web server to serve the production build
FROM nginx:alpine

# Copy the production build from the previous build stage
COPY --from=build /dist /usr/share/nginx/html

# Expose the port on which the production build will be served (usually 80)
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]
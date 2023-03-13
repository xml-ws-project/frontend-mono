# Build stage
FROM node:latest as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app
RUN npm install
RUN npm run build

# Serve stage
FROM nginx:latest
COPY --from=build /usr/local/app/dist/frontend-mono /usr/share/nginx/html
EXPOSE 80

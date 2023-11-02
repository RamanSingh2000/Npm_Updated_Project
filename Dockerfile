# FROM node:alpine
FROM node:16.9.1-alpine
WORKDIR '/app'
COPY package.json .
RUN npm install 
COPY . .
CMD ["npm","start"]

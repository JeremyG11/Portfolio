# Stage 1: install dependencies
FROM node:16
WORKDIR /app

COPY . .

RUN npm install --production

RUN npm build
 
CMD ["npm", "start"]

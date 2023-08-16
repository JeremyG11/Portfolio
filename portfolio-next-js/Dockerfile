# Stage 1: install dependencies
FROM node:16
WORKDIR /app

COPY . .

RUN npm install --production


RUN npm run build
 
CMD ["npm", "start"]

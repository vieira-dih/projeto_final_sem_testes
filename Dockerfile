FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY APP/ ./APP
COPY init.sql ./
EXPOSE 3000
CMD ["node", "APP/server.js"]

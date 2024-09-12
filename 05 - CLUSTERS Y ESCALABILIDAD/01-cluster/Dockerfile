FROM node:20.10.0
WORKDIR /app
COPY package*.json ./
COPY . .
# COPY .env .env
RUN npm install
# RUN npm install --only-production
EXPOSE 8081
CMD ["node", "./server.js"]
# CMD ["npm", "start"]
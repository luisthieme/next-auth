FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

COPY start.sh /app

CMD ["chmod","777", "/app/start.sh"]

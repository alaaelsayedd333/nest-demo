#stage 1: build

From node:18-alpine As builder

WORKDIR /app

COPY package*.json ./
Run npm ci

COPY . .
RUN npm run build

# stage 2: production

FROM node:18-alpine 

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]
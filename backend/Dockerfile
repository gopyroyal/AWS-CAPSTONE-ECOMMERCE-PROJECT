# backend/Dockerfile
FROM public.ecr.aws/docker/library/node:18-alpine

WORKDIR /app

# copy only metadata first for better layer caching
COPY backend/package*.json ./

# you don't have a package-lock, so use npm install (not npm ci)
RUN npm install --omit=dev

# now copy the app
COPY backend/ .

ENV PORT=8080
EXPOSE 8080

# make sure package.json has:  "scripts": { "start": "node server.js" }
CMD ["npm","start"]

# backend/Dockerfile
FROM public.ecr.aws/docker/library/node:18-alpine

WORKDIR /app

# copy only metadata first for better layer caching
COPY package*.json ./

# no lockfile, so use npm install (not npm ci)
RUN npm install --omit=dev

# now copy the app code
COPY . .

ENV PORT=8080
EXPOSE 8080
CMD ["npm","start"]

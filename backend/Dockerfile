FROM public.ecr.aws/docker/library/node:18-alpine
WORKDIR /app
COPY backend/package.json /app/
RUN npm ci --only=production
COPY backend/ /app/
EXPOSE 8080
CMD ["npm", "start"]

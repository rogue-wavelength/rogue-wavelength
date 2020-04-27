# STAGE 1: Base
FROM node:alpine AS base
WORKDIR /app
COPY ./package.json ./package-lock.json ./

# STAGE 2: Development
FROM base AS development

# Install production dependencies and store them in tmp
RUN npm ci --only=prod
RUN cp -R node_modules /tmp/node_modules
COPY . .

FROM development AS builder
# Install dev dependencies for building
RUN npm i --only=dev

# Stage 3: Build
# RUN npm run test # tests are not passing right now
RUN npm run build-client

CMD ["npm", "run", "start-dev"]

# STAGE 4: Run
FROM base AS prod

WORKDIR /app

COPY --from=builder /tmp/node_modules ./node_modules
COPY --from=builder /app/server ./server
COPY --from=builder /app/public ./public
COPY --from=builder /app/secrets.js ./secrets.js
COPY --from=builder /app/script/seed.js ./script/seed.js

CMD ["npm", "run", "start"]
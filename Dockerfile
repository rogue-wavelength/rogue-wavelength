# STAGE 1: Base
FROM node:alpine AS base
WORKDIR /app

# STAGE 2: Development
FROM base AS development
COPY ./package.json ./package-lock.json ./

# Install production dependencies and store them in tmp
RUN npm ci
RUN cp -R node_modules /tmp/node_modules

# Install dev dependencies for building
RUN npm i --only=prod
COPY . .

# Stage 3: Build
FROM development AS builder
RUN npm run lint
RUN npm run prettify
# RUN npm run seed # if needed
# RUN npm run test # tests are not passing right now
RUN npm run build-client

# STAGE 4: Run
FROM base AS prod

WORKDIR /app

COPY --from=builder /tmp/node_modules ./node_modules
COPY --from=builder /app/server ./server
COPY --from=builder /app/public ./public
COPY --from=builder /app/secrets.js ./secrets.js
COPY --from=builder /app/package.json ./

CMD ["npm", "run", "start-server"]
FROM node:lts-alpine as base
#---
# Install dependencies

FROM base as dependencies

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

# Build the application

#---

FROM base as runner

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nodejs

RUN chown api:nodejs .


COPY --chown=api:nodejs . .
COPY --from=dependencies /app/node_modules ./node_modules

USER api

EXPOSE 3333

ENV PORT=3333
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "run", "start"]

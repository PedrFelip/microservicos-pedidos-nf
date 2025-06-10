FROM node:lts-alpine AS base
#---
# Install dependencies

FROM base AS dependencies

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

# Build the application

#---

FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 api

RUN chown api:nodejs .


COPY --chown=api:nodejs . .
COPY --from=dependencies /app/node_modules ./node_modules

USER api

EXPOSE 3333

ENV PORT=3333
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "run", "start"]

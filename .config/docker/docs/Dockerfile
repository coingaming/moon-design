# Install dependencies only when needed
FROM node:18-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY ./ ./
RUN corepack enable
RUN corepack prepare pnpm@8.2.0 --activate
RUN corepack pnpm i --ignore-scripts

# Rebuild the source code only when needed
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/ .
ENV NODE_ENV production
RUN npm install -g pnpm@8.2.0

RUN pnpm run build
RUN pnpm run next build

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["pnpm", "run", "next", "start"]

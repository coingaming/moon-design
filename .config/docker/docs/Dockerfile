# Install dependencies only when needed
FROM node:16.5-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY next-docs ./
RUN npm install -g pnpm
RUN pnpm i

# Rebuild the source code only when needed
FROM node:16.5-alpine AS builder
WORKDIR /app
COPY --from=deps /app/ .
RUN npm install -g pnpm
RUN pnpm run build

ENV NODE_ENV production

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1
CMD ["pnpm", "run", "start"]

# Production image, copy all the files and run next
# FROM node:16.5-alpine AS runner
# WORKDIR /app

# ENV NODE_ENV production

# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
# COPY --from=builder /app/public ./public
# COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# USER nextjs


# ENV NEXT_TELEMETRY_DISABLED 1

# CMD ["yarn", "start"]

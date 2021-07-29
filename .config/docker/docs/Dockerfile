FROM alpine/git AS git
WORKDIR /app
RUN git clone https://github.com/coingaming/moon-design.git


FROM node:alpine AS runner
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=git /app/moon-design ./moon-design
WORKDIR /app/moon-design
ENV NODE_ENV production
RUN yarn install
RUN yarn build
RUN yarn next build

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

USER nextjs

EXPOSE 3000

# # Next.js collects completely anonymous telemetry data about general usage.
# # Learn more here: https://nextjs.org/telemetry
# # Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]

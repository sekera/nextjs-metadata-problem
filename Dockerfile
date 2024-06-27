# resources:
# https://meeg.dev/blog/using-docker-compose-to-deploy-to-a-next-js-app-to-a-linux-app-service-in-azure
# https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile
# https://medium.com/geekculture/optimally-dockerizing-nextjs-application-and-lessons-learned-af1833e7da46

FROM node:21-alpine AS base
# FROM node:20-slim AS base


# TODO consider having deps and builder separately, currently there is combined step because node_modules faled to copy because of symlinks
FROM base AS depsAndBuilder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

# # required only on MACOS
RUN apk add --no-cache python3 py3-pip
ENV PYTHONUNBUFFERED=1
# Create a symlink for python3 as python
RUN ln -sf python3 /usr/bin/python
RUN apk add --no-cache build-base
# # end required only on MACOS

# Install dependencies 
WORKDIR /app/local-packages
COPY --from=local-packages . .

WORKDIR /app/src/glueoui
COPY --from=glueoui . .


WORKDIR /app/src/htmlwasher-site
COPY . .

RUN npm install -g pnpm
RUN pnpm install

RUN pnpm build




# Production image, copy all the files and run next
FROM base AS runner

RUN npm install -g pm2

WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=depsAndBuilder /app/src/htmlwasher-site/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=depsAndBuilder /app/src/htmlwasher-site/.next/standalone ./
COPY --from=depsAndBuilder /app/src/htmlwasher-site/.next/static ./.next/static

USER nextjs

EXPOSE 8080

ENV PORT 8080
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

CMD ["pm2-runtime", "node", "--", "server.js"]


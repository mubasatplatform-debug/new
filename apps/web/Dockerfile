FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
COPY apps/web/package.json apps/web/package.json
RUN corepack enable && pnpm install --filter @dheel/web --frozen-lockfile=false

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY . .
RUN corepack enable && pnpm --filter @dheel/web build
EXPOSE 3000
CMD ["pnpm", "--filter", "@dheel/web", "start"]

FROM node:20-alpine
WORKDIR /app
COPY . .
RUN corepack enable && pnpm install --frozen-lockfile=false && pnpm --filter @dheel/api build
EXPOSE 4000
CMD ["pnpm", "--filter", "@dheel/api", "start"]

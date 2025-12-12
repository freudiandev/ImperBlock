# Usa Node.js 20 LTS como base
FROM node:20-alpine AS base

# Instala dependencias solo cuando sea necesario
FROM base AS deps
# Instala libc6-compat para compatibilidad en Alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copia archivos de dependencias
COPY package.json package-lock.json* ./
RUN npm ci

# Construye la aplicación
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Deshabilita telemetría de Next.js durante el build
ENV NEXT_TELEMETRY_DISABLED=1

# Build de producción
RUN npm run build

# Imagen de producción, copia todos los archivos y ejecuta next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia archivos públicos
COPY --from=builder /app/public ./public

# Copia los archivos de build estático
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Ejecuta la aplicación
CMD ["node", "server.js"]

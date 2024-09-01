import { PrismaClient } from '@prisma/client'
import { lookup, query } from '@rise-tools/server'

export const prisma = new PrismaClient()

export const edition = lookup((edition: string) =>
  query(() =>
    prisma.video.findMany({ where: { edition } })
  )
)

export const video = lookup((id: string) =>
  query(() =>
    prisma.video.findUnique({ where: { id } })
  )
)

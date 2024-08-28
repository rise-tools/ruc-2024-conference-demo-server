import { PrismaClient, Video } from '@prisma/client'
import { query } from '@rise-tools/server'

const prisma = new PrismaClient()

export const videos = query(() =>
  prisma.video.findMany({
    orderBy: {
      order: 'asc',
    },
  })
)

export const edition = (videos: Video[], edition: string) =>
  videos.filter((v) => v.edition === edition)

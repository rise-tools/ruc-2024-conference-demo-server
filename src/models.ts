import { PrismaClient } from '@prisma/client'
import { lookup, query } from '@rise-tools/server'

export const prisma = new PrismaClient()

export const videosByYear = lookup(
  (year: string) =>
    query(() =>
      prisma.video.findMany({
        where: { year },
        orderBy: { createdAt: 'asc' },
      })
    )
)

export const video = lookup((id: string) =>
  query(() =>
    prisma.video.findUnique({ where: { id } })
  )
)

export const allYears = query(async () => {
  return (
    await prisma.video.findMany({
      distinct: ['year'],
      select: { year: true },
      orderBy: { year: 'desc' },
    })
  ).map((item) => item.year)
})

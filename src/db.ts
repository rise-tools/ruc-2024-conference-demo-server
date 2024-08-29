import { PrismaClient, Video } from '@prisma/client'
import { lookup, query } from '@rise-tools/server'

export const prisma = new PrismaClient()

/**
 * Model to get all videos from a given edition
 */
export const edition = lookup((edition: string) =>
  query(() => prisma.video.findMany({ where: { edition } }))
)

/**
 * Model to get a single video
 */
export const video = lookup((id: string) => query(() => prisma.video.findUnique({ where: { id } })))

/**
 * Action that updates the video and invalidates required models
 */
export const updateVideo = async (og: Video, data: Partial<Video>) => {
  await prisma.video.update({ where: { id: og.id }, data })
  video.get(og.id)?.invalidate()
  edition.get(og.edition)?.invalidate()
}

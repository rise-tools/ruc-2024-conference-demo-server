/* eslint-disable */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function run() {
  await prisma.video.deleteMany()

  const items = require('./data/2023.json') as any[]
  await prisma.video.createMany({
    data: items.map((item, idx) => ({
      ...item,
      order: idx,
    })),
  })
}

run()

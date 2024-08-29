/* eslint-disable */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function run() {
  await prisma.video.deleteMany()
  await prisma.video.createMany({
    data: require('./data/2023.json')
  })
}

run()

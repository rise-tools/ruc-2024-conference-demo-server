/* eslint-disable */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function run() {
  await prisma.video.deleteMany()

  const data = [
    ...require('./data/2023.json'),
    ...require('./data/2022.json'),
    ...require('./data/2021.json'),
    ...require('./data/2020.json'),
    ...require('./data/2019.json'),
    ...require('./data/2018.json'),
    ...require('./data/2017.json'),
  ]

  for (const item of data) {
    await prisma.video.create({ data: item })
  }
}

run()

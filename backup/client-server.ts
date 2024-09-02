import { createWSServer } from '@rise-tools/server'

import { models } from './client'

createWSServer(
  models,
  Number(process.env.PORT || '3005')
)

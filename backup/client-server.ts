import { createWSServer } from '@rise-tools/server'

import { models } from '../src/client'

createWSServer(
  models,
  Number(process.env.PORT || '3005')
)

import { createWSServer } from '@rise-tools/server'

import { models } from './admin'

createWSServer(
  models,
  Number(process.env.PORT || '3005')
)

import { createWSServer } from '@rise-tools/server'

import { models } from '../src/admin'

createWSServer(
  models,
  Number(process.env.PORT || '3005')
)

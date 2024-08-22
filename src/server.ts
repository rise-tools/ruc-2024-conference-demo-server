import { createWSServer } from '@rise-tools/server'

import { models } from './models'

createWSServer(models, Number(process.env.PORT || '3005'))

import { createWSServer } from '@rise-tools/server'

import { models as admin } from './admin'
import { models as client } from './client'

createWSServer({ ...client, ...admin }, Number(process.env.PORT || '3005'))

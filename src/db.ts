import { query } from '@rise-tools/server'

export type Content = {
  title: string
  thumbnail: string
  id: string
}[]

export const videos = query<Content>(() => require('./data/2023.json'))

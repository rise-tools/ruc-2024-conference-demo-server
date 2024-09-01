import { PrismaClient } from '@prisma/client'
import { ActivityIndicator, FlatList } from '@rise-tools/kit-react-native/server'
import { goBack, navigate, StackScreen } from '@rise-tools/kit-react-navigation/server'
import {
  Button,
  Image,
  InputField,
  RiseForm,
  SubmitButton,
  Text,
  toast,
  View,
  XStack,
  YStack,
} from '@rise-tools/kitchen-sink/server'
import { response } from '@rise-tools/react'
import { lookup, query, view } from '@rise-tools/server'

export const prisma = new PrismaClient()

export const edition = lookup((edition: string) =>
  query(() => prisma.video.findMany({ where: { edition } }))
)

export const video = lookup((id: string) => query(() => prisma.video.findUnique({ where: { id } })))

function Admin() {
  return (
    <>
      <StackScreen title="React Universe Console" />
      <View padding="$2">
        <Text>Hello World!</Text>
      </View>
    </>
  )
}

export const models = {
  admin: Admin,
}

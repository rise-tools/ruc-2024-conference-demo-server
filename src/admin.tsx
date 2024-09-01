import { Text } from '@rise-tools/kit-react-native/server'
import { YStack } from '@rise-tools/kitchen-sink/server'

export const models = {
  admin: UI,
}

export function UI() {
  return (
    <YStack>
      <Text>Hello World</Text>
    </YStack>
  )
}

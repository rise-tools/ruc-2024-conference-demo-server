import {
  ActivityIndicator,
  FlatList,
} from '@rise-tools/kit-react-native/server'
import {
  goBack,
  navigate,
  StackScreen,
} from '@rise-tools/kit-react-navigation/server'
import {
  Button,
  H3,
  H4,
  Image,
  InputField,
  LucideIcon,
  RiseForm,
  SubmitButton,
  Text,
  TextField,
  toast,
  View,
  XStack,
  YStack,
} from '@rise-tools/kitchen-sink/server'
import { response } from '@rise-tools/react'
import {
  lookup,
  query,
  view,
} from '@rise-tools/server'

import { buttonStyle } from '../src/helpers'
import {
  allYears,
  prisma,
  video,
  videosByYear,
} from '../src/models'

const Admin = view((get) => {
  const data = get(allYears)
  if (!data) {
    return <ActivityIndicator />
  }
  return (
    <>
      <StackScreen title="React Universe Console" />
      <View padding="$4" gap="$4">
        <H3>Past editions</H3>
        {data.map((year, idx, arr) => (
          <Button
            key={year}
            {...buttonStyle(idx, arr.length)}
            onPress={navigate(
              `editYear/${year}`,
              {
                title: year,
                headerBackTitle: 'Back',
              }
            )}
          >
            <Text fontSize="$2">2023</Text>
          </Button>
        ))}
      </View>
    </>
  )
})

const EditYear = lookup((year) =>
  view((get) => {
    const content = get(videosByYear.get(year)!)
    if (!content) {
      return <ActivityIndicator />
    }
    return (
      <FlatList
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 40,
        }}
        data={content.map((item, idx, arr) => ({
          key: item.id,
          view: (
            <Button
              {...buttonStyle(idx, arr.length)}
              onPress={navigate(
                `editVideo/${item.id}`,
                {
                  title: item.title,
                  headerBackTitle: 'Back',
                }
              )}
            >
              <XStack gap="$4">
                <Image
                  source={{
                    uri: item.thumbnail,
                  }}
                  width={120}
                  aspectRatio={16 / 9}
                  borderRadius={5}
                />
                <Text flex={1} numberOfLines={4}>
                  {item.title}
                </Text>
              </XStack>
            </Button>
          ),
        }))}
      />
    )
  })
)

const EditVideo = lookup((id) =>
  view((get) => {
    const content = get(video.get(id)!)
    if (!content) {
      return <ActivityIndicator />
    }
    if (content === null) {
      return (
        <View padding="$4">
          <StackScreen title="Not found" />
          <Text>Video not found</Text>
        </View>
      )
    }
    return (
      <RiseForm
        onSubmit={async (data) => {
          console.log(data)
        }}
        padding="$4"
        gap="$4"
        flex={1}
      >
        <YStack flex={1} gap="$4">
          <TextField
            id="title"
            label="Title"
            defaultValue={content.title}
          />

          <InputField
            id="thumbnail"
            label="Thumbnail"
            defaultValue={content.thumbnail}
          />
          <Image
            source={{ uri: content.thumbnail }}
            style={{
              width: '100%',
              aspectRatio: 16 / 9,
              borderRadius: 10,
            }}
          />
        </YStack>
        <YStack gap="$2" paddingBottom="$4">
          <SubmitButton
            theme="green"
            size="$6"
            icon={<LucideIcon icon="Pencil" />}
          >
            Save
          </SubmitButton>
        </YStack>
      </RiseForm>
    )
  })
)

export const models = {
  admin: Admin,
  editYear: EditYear,
  editVideo: EditVideo,
}

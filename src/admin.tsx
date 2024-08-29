/**
 * This part runs inside Rise Playground.
 *
 * You can use anything that is available there. As a good practice,
 * import from `kitchen-sink` and `kit-react-navigation` only.
 */

import { ActivityIndicator, FlatList } from '@rise-tools/kit-react-native/server'
import { goBack, navigate, StackScreen } from '@rise-tools/kit-react-navigation/server'
import {
  Button,
  InputField,
  RiseForm,
  SubmitButton,
  Text,
  toast,
  View,
} from '@rise-tools/kitchen-sink/server'
import { response } from '@rise-tools/react'
import { lookup, view } from '@rise-tools/server'

import { edition, updateVideo, video } from './db'

function Admin() {
  return (
    <>
      <StackScreen title="React Universe Console" />
      <View padding="$2">
        <Text>Choose edition</Text>
        <View>
          <Button
            onPress={navigate(`edit/2023`, {
              title: 'Edition - 2023',
              headerBackTitle: 'Back',
            })}
          >
            <Text fontSize="$2">2023</Text>
          </Button>
        </View>
      </View>
    </>
  )
}

const Edit = lookup((year) =>
  view((get) => {
    const content = get(edition.get(year)!)
    if (!content) {
      return <ActivityIndicator />
    }
    return (
      <View padding="$2">
        <FlatList
          data={content.map((item) => ({
            key: item.id,
            view: (
              <Button
                padding="$2"
                onPress={navigate(`editVideo/${item.id}`, {
                  title: item.title,
                  headerBackTitle: 'Back',
                })}
              >
                <Text>{item.title}</Text>
              </Button>
            ),
          }))}
        />
      </View>
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
        <View padding="$2">
          <StackScreen title="Not found" />
          <Text>Video not found</Text>
        </View>
      )
    }
    return (
      <RiseForm
        onSubmit={async (values) => {
          await updateVideo(content, values)
          return response([toast('Edited'), goBack()])
        }}
      >
        <InputField id="title" defaultValue={content.title} />
        <SubmitButton>Save</SubmitButton>
      </RiseForm>
    )
  })
)

export const models = {
  admin: Admin,
  edit: Edit,
  editVideo: EditVideo,
}

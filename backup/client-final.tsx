import { Video } from '@prisma/client'
import {
  navigate,
  StackScreen,
} from '@rise-tools/kit-expo-router/server'
import { openURL } from '@rise-tools/kit-linking/server'
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from '@rise-tools/kit-react-native/server'
import { view } from '@rise-tools/server'

import {
  BuildDetails,
  Button,
  DiscordInfo,
  InfoSection,
  LiveStreamInfo,
  OrganizersInfo,
  PoweredByExpo,
  SponsorsInfo,
  ThemedText,
  VenueInfo,
} from '../../ruc2024-mobile-app/rise/components/server'
import { $lg, $xl } from '../src/helpers'
import {
  allYears,
  videosByYear,
} from '../src/models'

function BrickSponsor() {
  return (
    <View
      style={{
        alignItems: 'center',
        gap: $lg,
      }}
    >
      <ThemedText fontSize={24}>Brick</ThemedText>
      <Image
        source={{
          uri: 'https://avatars.githubusercontent.com/u/167453825?s=200&v=4',
        }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  )
}

function ArchiveInfo() {
  return (
    <InfoSection title="Talk Archive">
      <ThemedText style={{ marginBottom: $lg }}>
        Have you missed past editions? Worry not.
        We got videos for you!
      </ThemedText>
      <Button
        title="Browse"
        onPress={navigate('archive')}
      />
    </InfoSection>
  )
}

function Edition({
  title,
  content,
}: {
  title: string
  content?: Video[]
}) {
  return (
    <>
      <ThemedText
        style={{ fontSize: $xl, padding: $lg }}
      >
        {title}
      </ThemedText>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={content?.map((item) => ({
          key: item.id,
          view: (
            <TouchableOpacity
              onPress={openURL(
                `https://youtube.com/watch?v=${item.id}`
              )}
            >
              <Image
                source={{ uri: item.thumbnail }}
                style={{
                  width: 250,
                  aspectRatio: 16 / 9,
                  marginLeft: $lg,
                }}
              />
            </TouchableOpacity>
          ),
        }))}
      />
    </>
  )
}

const Archive = view((get) => {
  const editions = get(allYears)
  return (
    <>
      <StackScreen
        options={{
          title: 'Archive',
          headerBackTitle: 'Go back',
        }}
      />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: $xl,
        }}
      >
        {editions?.map((year) => (
          <Edition
            key={year}
            title={year}
            content={get(videosByYear.get(year)!)}
          />
        ))}
      </ScrollView>
    </>
  )
})

function Info() {
  return (
    <>
      <ArchiveInfo />
      <SponsorsInfo />
      <BrickSponsor />
      <VenueInfo />
      <LiveStreamInfo />
      <DiscordInfo />
      <OrganizersInfo />
      <BuildDetails />
      <PoweredByExpo />
    </>
  )
}

export const models = {
  info: Info,
  archive: Archive,
}

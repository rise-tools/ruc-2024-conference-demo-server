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
import { edition } from './admin'

/** Poor man's tamagui */
const $lg = 20
const $xl = 30

function BronzeSponsor() {
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        gap: $lg,
      }}
    >
      <ThemedText fontSize={24}>
        Bronze
      </ThemedText>
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
      <ThemedText style={{ marginBottom: 20 }}>
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

function VideoSection({
  title,
  content,
}: {
  title: string
  content?: Video[]
}) {
  const data = content?.map((item) => ({
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
            height: 150,
            marginLeft: $lg,
          }}
        />
      </TouchableOpacity>
    ),
  }))

  if (!data) {
    return <ActivityIndicator />
  }

  if (data.length === 0) {
    return null
  }

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
        data={data}
      />
    </>
  )
}

const Archive = view((get) => {
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
          gap: 0,
          paddingBottom: $xl,
        }}
      >
        <VideoSection
          title="2023"
          content={get(edition.get('2023')!)}
        />
        <VideoSection
          title="2022"
          content={get(edition.get('2022')!)}
        />
        <VideoSection
          title="2021"
          content={get(edition.get('2021')!)}
        />
        <VideoSection
          title="2020"
          content={get(edition.get('2020')!)}
        />
        <VideoSection
          title="2019"
          content={get(edition.get('2019')!)}
        />
        <VideoSection
          title="2018"
          content={get(edition.get('2018')!)}
        />
        <VideoSection
          title="2017"
          content={get(edition.get('2017')!)}
        />
      </ScrollView>
    </>
  )
})

function Info() {
  return (
    <>
      {/* This should be removed at the start of the demo */}
      <ArchiveInfo />
      <SponsorsInfo />
      {/* This should be removed at the start of the demo */}
      <BronzeSponsor />
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

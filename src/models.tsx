import { navigate, StackScreen } from '@rise-tools/kit-expo-router/server'
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
import { Content, videos } from './db'

/** Poor man's tamagui */
const $lg = 20
const $xl = 30

function TitaniumSponsor() {
  return (
    <View style={{ flexDirection: 'column', alignItems: 'center', gap: $lg }}>
      <ThemedText fontSize={$lg}>Titanium</ThemedText>
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/167453825?s=200&v=4' }}
        style={{ width: 300, height: 300 }}
      />
    </View>
  )
}

function ArchiveInfo() {
  return (
    <InfoSection title="Talk Archive">
      <ThemedText style={{ marginBottom: 20 }}>
        Have you missed past editions? Worry not. We got videos for you!
      </ThemedText>
      <Button title="Browse!" onPress={() => navigate('archive')} />
    </InfoSection>
  )
}

function VideoSection({ title, content }: { title: string; content: Content }) {
  const data = content.map((item) => ({
    key: item.id,
    view: (
      <TouchableOpacity onPress={openURL(`https://youtube.com/watch?v=${item.id}`)}>
        <Image
          source={{ uri: item.thumbnail }}
          style={{ width: 250, height: 150, marginLeft: $lg }}
        />
      </TouchableOpacity>
    ),
  }))
  return (
    <>
      <ThemedText style={{ fontSize: $xl, padding: $lg }}>{title}</ThemedText>
      <FlatList horizontal showsHorizontalScrollIndicator={false} data={data} />
    </>
  )
}

const Archive = view((get) => {
  const screen = <StackScreen options={{ title: 'Archive', headerBackTitle: 'Go back' }} />
  const content = get(videos)
  if (!content) {
    return (
      <>
        {screen}
        <ActivityIndicator />
      </>
    )
  }
  return (
    <>
      {screen}
      <ScrollView contentContainerStyle={{ gap: 0, paddingBottom: $xl }}>
        <VideoSection title="2023" content={content} />
        <VideoSection title="2022" content={content} />
        <VideoSection title="2021" content={content} />
        <VideoSection title="2020" content={content} />
        <VideoSection title="2019" content={content} />
        <VideoSection title="2018" content={content} />
        <VideoSection title="2017" content={content} />
      </ScrollView>
    </>
  )
})

function Info() {
  return (
    <>
      <ArchiveInfo />
      <SponsorsInfo />
      <TitaniumSponsor />
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

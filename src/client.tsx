import { Video } from '@prisma/client'
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
import { edition } from './admin'

/** Poor man's tamagui */
const $lg = 20
const $xl = 30

function Info() {
  return (
    <>
      <SponsorsInfo />
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
}

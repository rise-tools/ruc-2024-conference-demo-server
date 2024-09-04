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

function Info() {
  return (
    <>
      <VenueInfo />
      <LiveStreamInfo />
      <DiscordInfo />
      <SponsorsInfo />
      <OrganizersInfo />
      <BuildDetails />
      <PoweredByExpo />
    </>
  )
}

export const models = {
  info: Info,
}

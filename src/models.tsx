import { navigate, StackScreen } from "@rise-tools/kit-expo-router/server";
import {
  VenueInfo,
  LiveStreamInfo,
  DiscordInfo,
  SponsorsInfo,
  BuildDetails,
  OrganizersInfo,
  PoweredByExpo,
  InfoSection,
  ThemedText,
  Button,
} from "../../ruc2024-mobile-app/rise/components/server";
import { Image, View } from "@rise-tools/kit-react-native/server";

/** Titanium Sponsor **/
function TitaniumSponsor() {
  return (
    <View style={{ flexDirection: "column", alignItems: "center", gap: 16 }}>
      <ThemedText fontSize={24}>
        Titanium
      </ThemedText>
      <Image source={{ uri: "https://avatars.githubusercontent.com/u/167453825?s=200&v=4" }} style={{ width: 300, height: 300 }} />
    </View>
  )
}

/** Netflix */
function NetflixInfo() {
  return (
    <InfoSection title="Netflix">
      <Button title="Browse past videos" onPress={() => navigate("netflix")} />
    </InfoSection>
  )
}

function Netflix() {
  return (
    <>
      <StackScreen options={{ title: "Netflix", headerBackTitle: "Go back" }} />
      <InfoSection title="Netflix">
      </InfoSection>
    </>
  )
}

function Info() {
  return (
    <>
      <NetflixInfo />
      <SponsorsInfo />
      <TitaniumSponsor />
      <VenueInfo />
      <LiveStreamInfo />
      <DiscordInfo />
      <OrganizersInfo />
      <BuildDetails />
      <PoweredByExpo />
    </>
  );
}

export const models = {
  info: Info,
  netflix: () => <Netflix />,
}

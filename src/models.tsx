import { navigate } from "@rise-tools/kit-expo-router/server";
import {
  VenueInfo,
  LiveStreamInfo,
  DiscordInfo,
  SponsorsInfo,
  BuildDetails,
  OrganizersInfo,
  PoweredByExpo,
  InfoSection,
  Button,
  ThemedText,
} from "../../ruc2024-mobile-app/rise/components/server";
import { Text } from "@rise-tools/kit-react-native/server";

function Info() {
  return (
    <>
      <InfoSection title="Rise Tools">
        <Button onPress={navigate('about')} title="Learn more" />
      </InfoSection>
      <VenueInfo />
      <LiveStreamInfo />
      <DiscordInfo />
      <SponsorsInfo />
      <OrganizersInfo />
      <BuildDetails />
      <PoweredByExpo />
    </>
  );
}

export const models = {
  info: Info,
  about: () => <InfoSection title="About" />,
}

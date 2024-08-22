import {
  VenueInfo,
  LiveStreamInfo,
  DiscordInfo,
  SponsorsInfo,
  BuildDetails,
  OrganizersInfo,
  PoweredByExpo,
} from "../../ruc2024-mobile-app/rise/components/server";

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
  );
}

export const models = {
  info: Info,
}

import {
  BuildDetails,
  DiscordInfo,
  LiveStreamInfo,
  OrganizersInfo,
  PoweredByExpo,
  SponsorsInfo,
  VenueInfo,
} from '../../ruc2024-mobile-app/rise/components/server'

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

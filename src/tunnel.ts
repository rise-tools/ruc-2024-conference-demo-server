import { getProjectKey, startTunnel } from '@rise-tools/cli'

async function run() {
  const projectKey = await getProjectKey()

  console.log('Starting the tunnel...')

  const url = await startTunnel({ port: 3005, projectKey })

  console.log(`Tunnel started at ${url}`)
}

run()

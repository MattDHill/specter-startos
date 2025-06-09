import { matches, FileHelper } from '@start9labs/start-sdk'
const { object, literals } = matches

const shape = object({
  active_node_alias: literals('bitcoin_core', 'spectrum_node'),
})

export const configJson = FileHelper.json(
  {
    volumeId: 'main',
    subpath: '/.specter/config.json',
  },
  shape,
)

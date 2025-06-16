import { VersionGraph } from '@start9labs/start-sdk'
import { current, other } from './versions'
import {
  bitcoinCoreDefaultConfig,
  bitcoinCoreJson,
} from '../fileModels/bitcoin_core.json'
import {
  spectrumNodeDefaultConfig,
  spectrumNodeJson,
} from '../fileModels/spectrum_node.json'
import { sdk } from '../sdk'
import { configJson } from '../fileModels/config.json'

export const versionGraph = VersionGraph.of({
  current,
  other,
  preInstall: async (effects) => {
    await bitcoinCoreJson.write(effects, bitcoinCoreDefaultConfig)
    await spectrumNodeJson.write(effects, spectrumNodeDefaultConfig)

    return sdk.Daemons.of(effects, async () => null)
      .addDaemon('seed-file', {
        subcontainer: await sdk.SubContainer.of(
          effects,
          { imageId: 'specter' },
          sdk.Mounts.of().mountVolume({
            volumeId: 'main',
            subpath: null,
            mountpoint: '/root',
            readonly: false,
          }),
          'specter-sub',
        ),
        exec: {
          command: [
            'python3',
            '-m',
            'cryptoadvance.specter',
            'server',
            '--host',
            '0.0.0.0',
          ],
        },
        ready: {
          display: null,
          fn: async () => {
            let cfgExists = false
            while (!cfgExists) {
              await new Promise((resolve) => setTimeout(resolve, 4000))
              cfgExists = !!(await configJson.read().once())
            }
            return { result: 'success', message: null }
          },
        },
        requires: [],
      })
      .runUntilSuccess(60000)
  },
})

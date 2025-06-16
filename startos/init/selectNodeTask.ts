import { selectNode } from '../actions/selectNode'
import { configJson } from '../fileModels/config.json'
import { sdk } from '../sdk'

export const selectNodeTask = sdk.setupOnInit(async (effects, _kind) => {
  if (!(await configJson.read((c) => c.active_node_alias).const(effects))) {
    await sdk.action.createOwnTask(effects, selectNode, 'critical', {
      reason:
        'Decide whether Specter will use Bitcoin or electrs. This can be changed later.',
    })
  }
})

import { sdk } from '../sdk'
import { setDependencies } from '../dependencies'
import { setInterfaces } from '../interfaces'
import { versionGraph } from '../install/versionGraph'
import { setActions } from '../actions'
import { restoreInit } from '../backups'
import { selectNodeTask } from './selectNodeTask'

export const init = sdk.setupInit(
  restoreInit,
  versionGraph,
  setInterfaces,
  setDependencies,
  setActions,
  selectNodeTask,
)

export const uninit = sdk.setupUninit(versionGraph)

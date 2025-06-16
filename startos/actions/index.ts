import { sdk } from '../sdk'
import { selectNode } from './selectNode'

export const setActions = sdk.Actions.of().addAction(selectNode)

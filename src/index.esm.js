import { Store, install } from './store'
import { mapState, mapMutations, mapGetters, mapActions, mapModels, createNamespacedHelpers } from './helpers'

export default {
  Store,
  install,
  version: '__VERSION__',
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
  mapModels,
  createNamespacedHelpers
}

export {
  Store,
  install,
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
  mapModels,
  createNamespacedHelpers
}

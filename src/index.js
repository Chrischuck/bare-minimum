const createHistory = require('history').createBrowserHistory
import { h, render } from 'preact'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'

import Router from './app/util/router.js'

render(
  <Router history={createHistory()} />,
  document.getElementById('app')
)

OfflinePluginRuntime.install()

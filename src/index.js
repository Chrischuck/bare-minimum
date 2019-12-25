const createHistory = require('history').createBrowserHistory
import { h, render } from 'preact'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'

import Router from './app/util/router.js'
import App from './app'

render(
  <Router history={createHistory()} routes={{ component: App }} />,
  document.getElementById('app')
)

OfflinePluginRuntime.install()

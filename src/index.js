import { h, render } from 'preact'
import createHistory from 'history/createBrowserHistory'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'

import Router from './app/util/router.js'
import App from './app'

const history = createHistory()

const routes = {
  component: App
}

render(
  <Router history={history} routes={routes} />,
  document.getElementById('app')
)

OfflinePluginRuntime.install()

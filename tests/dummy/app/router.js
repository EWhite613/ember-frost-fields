import Ember from 'ember'
const {Router: EmberRouter} = Ember

import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
  this.route('demo', {path: '/'}, function () {
    this.route('url-input')
  })
})

export default Router

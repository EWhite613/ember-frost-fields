import {expect} from 'chai'
import {$hook} from 'ember-hook'
import {integration} from 'ember-test-utils/test-support/setup-component-test'
import hbs from 'htmlbars-inline-precompile'
import {beforeEach, describe, it} from 'mocha'

const test = integration('frost-url-input')
describe(test.label, function () {
  test.setup()

  beforeEach(function () {
    this.render(hbs`{{frost-url-input hook='url-field'}}`)
  })

  it('should render', function () {
    expect($hook('url-field')).to.have.length(1)
  })

  it('should not render error by default', function () {
    expect($hook('url-field-icon').length).to.equal(0)
  })

  describe('user inputs string that is not a valid URL', function () {
    beforeEach(function () {
      this.$('input').val('/test').trigger('input')
      $hook('url-field-button').click()
    })

    it('should show format error message', function () {
      expect($hook('url-field-error-text').text()).to.equal('URL Format Error')
    })

    // FIXME: $.ajax() is throwing an error we can't seem to catch and that is crashing test server (AK - 2016-07-21)
    // it('shows success message on clicking the Test button', function (done) {
    //   this.$('input')
    //     .val('http://www.google.ca')
    //     .trigger('input')
    //   $hook('url-field-button').click()
    //   return wait().then(() => {
    //     console.log('#######', $hook('url-field-error-text').text())
    //     done()
    //   }, 250)
    // })
  })
})


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import i18n from '../src/index';

i18n.setConfig({
  url: './lang',
  asyncLoadError: function (err, obj) {
    console.error(err, obj);
  }
});

i18n.loadBundlesSync('en-US', {
  'common': {
    'helloWorld': 'Hello, {name}!',
    'clicked': 'Click {count}',
    'myLabel': "My Label",
  },
});

// Create Example Component
const Examples = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
    }
  },
  clickHandler: function () {
    this.setState({
      count: this.state.count + 1,
    });
  },
  render: function() {
    return (
      <div>
        <i18n.p
          id="helloWorld"
          data-i18n="common.helloWorld"
          fallback="common bundle did not load."
          options={{
            name: 'John',
          }} />
        <i18n.p
          id="nonexistentMessage"
          data-i18n="common.nonexistentMessage"
          fallback="message does not exist" />

        <i18n.p
          id="welcome"
          data-i18n="landing.welcome"
          fallback="async load did not work" />

        <i18n.p
          id="email"
          data-i18n="contact.email"
          fallback="bundle does not exist" />

        <i18n.a
          id="a_clicked"
          data-i18n="common.clicked"
          options={{
            count: this.state.count,
          }}
          onClick={ this.clickHandler } />

        <i18n.button
          id="btn_clicked"
          data-i18n="common.clicked"
          options={{
            count: this.state.count,
          }}
          onClick={ this.clickHandler } />

        <div>
          <i18n.label
            id="myLabel"
            data-i18n="common.myLabel"
            for="myLabel" />

          <input type="text" id="myLabel" />
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Examples></Examples>, document.querySelector('#examples'));

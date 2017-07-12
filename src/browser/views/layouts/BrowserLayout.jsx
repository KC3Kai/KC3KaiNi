import React from 'react';

import Tabs from '../components/Tabs'
import PlaySpace from '../components/PlaySpace'
import StatusBar from '../components/StatusBar'

class BrowserLayout extends React.Component {
  render() {
    return <div>
      <Tabs />
      <PlaySpace />
    </div>;
  }
}

module.exports = BrowserLayout

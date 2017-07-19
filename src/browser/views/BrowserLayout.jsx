import React from 'react'
import Frame from './window/Frame'
import Handle from './window/Handle'
import TabList from './window/TabList'
import PlaySpaceList from './playspace/PlaySpaceList'

class BrowserLayout extends React.Component {
  render() {
    return <div>
      <Frame/>
      <Handle/>
      <TabList/>
      <PlaySpaceList/>
    </div>;
  }
}

module.exports = BrowserLayout

import React from 'react'
import PlaySpace from './PlaySpace'

class PlaySpaceList extends React.Component {
  render() {
    return <div id="kc3-playspace-list">
      <PlaySpace index="1" />
      <PlaySpace index="2" />
      <PlaySpace index="3" />
    </div>
  }
}

module.exports = PlaySpaceList

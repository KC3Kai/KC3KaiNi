import React from 'react'
import PlaySpaceToolbar from './PlaySpaceToolbar'
import PlaySpaceBody from './PlaySpaceBody'
import PlaySpaceStatus from './PlaySpaceStatus'

class PlaySpace extends React.Component {
  render() {
    return <div className="kc3-playspace">
      <PlaySpaceToolbar/>
      <PlaySpaceBody text={this.props.index} />
      <PlaySpaceStatus/>
    </div>
  }
}

module.exports = PlaySpace

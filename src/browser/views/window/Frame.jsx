import React from 'react'

class Frame extends React.Component {
  render() {
    let style = {
      position: 'absolute',
      left:0,
      top:0,
      right:0,
      bottom:0,
      zIndex: 1
     }
    return <div id="kc3-frame"></div>
  }
}

module.exports = Frame

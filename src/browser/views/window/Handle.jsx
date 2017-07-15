import React from 'react'

class Handle extends React.Component {
  render() {
    let style = {
      position: 'absolute',
      left:0,
      top:0,
      right:0,
      zIndex: 2
     }
    return <div id="kc3-handle"></div>
  }
}

module.exports = Handle

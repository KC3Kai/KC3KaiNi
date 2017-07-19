import React from 'react'

class PlaySpaceBody extends React.Component {
  render() {
    let style = { width:'120px', height:'30px', float:'left', margin:'3px' }
    return <div className="kc3-playspace-body">
      <div className="plugin bg01 txt01" style={style}>bg01 txt01</div>
      <div className="plugin bg01 txt02" style={style}>bg01 txt02</div>
      <div className="plugin bg01 txt03" style={style}>bg01 txt03</div>
      <div className="plugin bg01 txt04" style={style}>bg01 txt04</div>
      <div className="plugin bg01 txt05" style={style}>bg01 txt05</div>
      <div className="plugin bg01 spc01" style={style}>bg01 spc01</div>
      <div className="plugin bg01 spc02" style={style}>bg01 spc02</div>

      <div className="plugin bg02 txt01" style={style}>bg02 txt01</div>
      <div className="plugin bg02 txt02" style={style}>bg02 txt02</div>
      <div className="plugin bg02 txt03" style={style}>bg02 txt03</div>
      <div className="plugin bg02 txt04" style={style}>bg02 txt04</div>
      <div className="plugin bg02 txt05" style={style}>bg02 txt05</div>
      <div className="plugin bg02 spc01" style={style}>bg02 spc01</div>
      <div className="plugin bg02 spc02" style={style}>bg02 spc02</div>

      <div className="plugin bg03 txt01" style={style}>bg03 txt01</div>
      <div className="plugin bg03 txt02" style={style}>bg03 txt02</div>
      <div className="plugin bg03 txt03" style={style}>bg03 txt03</div>
      <div className="plugin bg03 txt04" style={style}>bg03 txt04</div>
      <div className="plugin bg03 txt05" style={style}>bg03 txt05</div>
      <div className="plugin bg03 spc01" style={style}>bg03 spc01</div>
      <div className="plugin bg03 spc02" style={style}>bg03 spc02</div>
    </div>
  }
}

module.exports = PlaySpaceBody

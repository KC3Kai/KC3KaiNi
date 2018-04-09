<template>
  <div id="theme">
    <div class="head">
      <div class="logo">
        <slot name="logo">NO-LOGO</slot>
      </div>
      <div class="tabs">
        <slot name="tabs">NO-TABS</slot>
      </div>
      <div class="clear"></div>
    </div>
    <div class="panel">
      <div class="addressbar">
        <slot name="addressbar">NO-ADDRESSBAR</slot>
      </div>
      <div class="toolbar">
        <slot name="toolbar">NO-TOOLBAR</slot>
        <div class="clear"></div>
      </div>
    </div>
    <div class="viewport">
      <slot name="viewport">NO-VIEWPORT</slot>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {

    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
#theme {
  background:#cfcl;
  font-family:Arial;
}
.clear { clear:both; }
.head {
  height:29px;
  border-bottom:1px solid #aaa;
  -webkit-app-region: drag;
  background:#555;

  .logo {
    width:28px;
    height:28px;
    float:left;

    .kc3-logo {
      width:28px;
      height:auto;
    }
  }

  .tabs {
    width:auto;
    height:29px;
    overflow:hidden;
    padding:3px 0px 0px 10px;

    .kc3-tabs {
      margin:0;
      padding:0;

      li {
        -webkit-app-region: no-drag;
        list-style:none;
        float:left;
        cursor: pointer;
      }
      .kc3-tab {
        height:25px;
        line-height:25px;
        background:#f3f3f3;
        margin:0px 5px 0px 0px;
        padding:0px 10px 0px 10px;
        font-size:12px;
        border-radius:6px 6px 0px 0px;
        max-width:200px;
        min-width:120px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .kc3-tab.active {
        height:26px;
        position:relative;
      }
      .kc3-tab-add:before {
        width:20px;
        height:20px;
        display:block;
        text-align:center;
        font-weight: bold;
        font-size:16px;
        line-height:20px;
        content:'+';
        border-radius:5px;
        background:#e8e8e8;
        margin:2px 0px 0px 0px;
        color:#bbb;
      }
      .kc3-tab-add {

      }
    }
  }
}
.panel {
  padding:2px 10px;
  border-bottom:1px solid #888;
  background:#f3f3f3;

  .addressbar {
    padding:2px 0px;

    .kc3-addressbar {
      height:28px;
      border:1px solid #aaa;
      border-radius:3px;
      padding:0px 0px 0px 10px;
    }
  }
  .toolbar {

    .kc3-toolbar {
      margin:0;
      padding:0;

      .kc3-toolbar-item {
        padding:1px 10px 0px;
        margin:0px 10px 0px 0px;
        height:25px;
        line-height:25px;
        list-style:none;
        float:left;
        font-size:12px;
      }
    }
  }
}
.viewport {
  background:#aaa;
  position:fixed;
  bottom:0;
  left:0;
  right:0;
  top:91px;

  .kc3-viewports {
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;

    .kc3-viewport {

    }
  }
}
</style>

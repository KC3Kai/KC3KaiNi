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
    <div class="addressbar">
      <slot name="addressbar">NO-ADDRESSBAR</slot>
    </div>
    <div class="toolbar">
      <slot name="toolbar">NO-TOOLBAR</slot>
      <div class="clear"></div>
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
div {
  box-sizing: border-box;
}
#theme {
  background:#cfcl
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
    height:28px;
    overflow:hidden;
    padding:3px 0px 0px 10px;

    .kc3-tabs {
      margin:0;
      padding:0;

      .kc3-tab {
        -webkit-app-region: no-drag;
        list-style:none;
        float:left;
        height:25px;
        line-height:25px;
        background:#eee;
        margin:0px 3px 0px 0px;
        padding:0px 10px;
      }
    }
  }
}
.addressbar {
  padding-top:4px;
  height:28px;
}
.toolbar {
  height:30px;
  border-bottom:1px solid #888;
  background:#def;
  padding:2px 5px;

  .kc3-toolbar {
    margin:0;
    padding:0;

    .kc3-toolbar-item {
      padding:0px 10px;
      margin:0px 10px 0px 0px;
      height:26px;
      line-height:26px;
      list-style:none;
      float:left;
      background:#ccf;
    }
  }
}
.viewport {
  background:#aaa;
  position:fixed;
  bottom:0;
  left:0;
  right:0;
  top:87px;

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

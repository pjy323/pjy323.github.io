export edefault {
  template: `
  <var-watermark 
    content="神经蛙" 
    :opacity="0.2" 
    :fullscreen="true" 
    :offset-x="10"
    :offset-y="10"
  >
    <div class="watermark-wrapper">
      <var-button type="primary" @click="toggle">切换</var-button>
    </div>
  </var-watermark>
  `
}

<template>
  <div class="code-box">
    <pre v-highlightjs="sourcecode" class="expand"><code :class="type"></code></pre>
  </div>
</template>
<script>

export default {
  props: ['src', 'type'],
  data() {
    return {
      sourcecode: '',
    }
  },
  mounted() {
    if(this.src) {
      $.get(`/components/demos${this.src}`, (resp) => {
        this.sourcecode = resp;
      })
    } else if (this.$slots.default) {
      this.sourcecode = this.$slots.default[0].text;
    }
  }
}
</script>

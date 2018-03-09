<!-- 静的書き出し時にredirectする用のコンポーネント -->

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {}
</script>

<template>
  <div>
    Member edit {{this.$route.params.id}}
  </div>
</template>

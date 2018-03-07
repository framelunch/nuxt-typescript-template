<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class extends Vue {}
</script>

<template>
  <div>
    Member edit {{this.$route.params.id}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

import { Person } from '../interfaces/Person';

@Component({})
export default class Card extends Vue {
  @Prop() person: Person;
}
</script>

<style scoped>
.card {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 1rem;
  margin: 0.25rem;
  border: 0.25rem solid gainsboro;
}
</style>

<template>
  <div class="card">
    <h2>{{person.firstName}} {{person.lastName}}</h2>
    <img :src="`https://robohash.org/${person.firstName}_${person.lastName}`" />
  </div>
</template>

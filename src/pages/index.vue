<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { State } from 'vuex-class';

import Card from '~/components/Card.vue';
import { People } from '../interfaces/Person';

@Component({
  components: {
    Card,
  },
})
export default class extends Vue {
  @State people: People;
}
</script>

<style scoped>
.header {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>

<template>
  <section>
    <h1 class="header">Nuxt TypeScript Starter</h1>
    <router-link to="/about">アバウト</router-link>
    <router-link :to="{ name: 'members', params: { id: 1 }}">Member1</router-link>
    <router-link :to="{ name: 'members', params: { id: 2 }}">Member2</router-link>
    <router-link :to="{ name: 'members', params: { id: 3 }}">Member3</router-link>
    <router-link to="/members/1">MemberTo1</router-link>
    <router-link to="/members/2">MemberTo2</router-link>
    <router-link to="/members/3">MemberTo3</router-link>
    <div class="cards">
      <Card v-for="person in people" :key="person.id" :person="person"></Card>
    </div>
  </section>
</template>

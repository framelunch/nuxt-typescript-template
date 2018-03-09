<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { State, Action, Getter } from 'vuex-class';

import Card from '~/components/Card.vue';
import { People } from '../interfaces/Person';

@Component({
  components: {
    Card,
  },
})
export default class extends Vue {
  /*
   * vuex params
   */
  @State people: People;
  @State count: number;
  @Action('count/countup') onCountUpClick: void;
  @Action('count/countdown') onCountDownClick: void;
  @Getter('count/count100') count100: number;

  /*
   * vue params
   */
  localCount: number = 0;

  get local100Count() {
    return this.localCount * 100;
  }

  onLocalCountUpClick() {
    this.localCount += 1;
  }

  onLocalCountDownClick() {
    this.localCount -= 1;
  }
}
</script>

<style lang="postcss" scoped>
@import '../styles/variables.css';

.header {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}

li {
  color: var(--color-text);
}
</style>

<template>
  <section>
    <h1 class="header">Nuxt TypeScript Starter</h1>
    <ul>
      <li><router-link to="/about">アバウト</router-link></li>
      <li><router-link to="/members/1">MemberTo1</router-link></li>
      <li><router-link to="/members/2">MemberTo2</router-link></li>
      <li><router-link to="/members/3">MemberTo3</router-link></li>
      <li><router-link to="/members/9999">MemberTo9999</router-link></li>
      <li><router-link to="/members/1/edit">MemberEdit1</router-link></li>
      <li><router-link to="/members/2/edit">MemberEdit2</router-link></li>
      <li><router-link to="/members/3/edit">MemberEdit3</router-link></li>
      <li><router-link to="/members/9999/edit">MemberEdit9999</router-link></li>
    </ul>
    Count: {{count.count}} | {{count100}}
    <button @click="onCountUpClick">Up</button>
    <button @click="onCountDownClick">Down</button>
    LocalCount: {{localCount}} | {{local100Count}}
    <button @click="onLocalCountUpClick">LocalUp</button>
    <button @click="onLocalCountDownClick">LocalDown</button>
    <div class="cards">
      <Card v-for="person in people" :key="person.id" :person="person"></Card>
    </div>
  </section>
</template>

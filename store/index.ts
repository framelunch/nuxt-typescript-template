export const state = () => ({
  people: [],
});

export const mutations = {
  setPeople(getState, people) {
    getState.people = people;
  },
};

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const people = await app.$axios.$get('./random-data.json');
    commit('setPeople', people.slice(0, 10));
  },
};

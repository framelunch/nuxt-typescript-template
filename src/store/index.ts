import { AxiosRequestConfig } from 'axios';

import { People, Person, PersonEntity } from '../interfaces/Person';

export interface State {
  people: People;
}

export const state = () => ({ people: [] } as State);

export const mutations = {
  setPeople(prevState: State, people: People) {
    prevState.people = people;
  },
};

export const actions = {
  async nuxtServerInit({ commit }: IncludeCommitObject, { app }: NuxtApp) {
    const people = await app.$axios.$get<PersonEntity[]>('./random-data.json');
    commit(
      'setPeople',
      people.slice(0, 100).map(
        person =>
          ({
            id: person.id,
            firstName: person.first_name,
            lastName: person.last_name,
          } as Person),
      ),
    );
  },
};

/*
 * TODO 強引
 */
interface IncludeCommitObject {
  commit(action: string, value: any[]): void;
}

interface NuxtApp {
  app: {
    $axios: {
      $get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    };
  };
}
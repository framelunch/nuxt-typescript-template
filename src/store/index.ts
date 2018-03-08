import { AxiosRequestConfig } from 'axios';

import { People, Person, PersonEntity } from '../interfaces/Person';

export interface State {
  people: People;
  count: number;
}

export const state = () => ({ people: [], count: 0 } as State);

/*
 * getter stateを規則的に加工したいときはこれでOK
 */
export const getters = {
  count100(currentState: State) {
    return currentState.count * 100;
  },
};

/*
 * mutation ここでstateを変更する。複雑なことはなるべくactionでやる
 */
export const mutations = {
  setPeople(currentState: State, people: People) {
    currentState.people = people;
  },

  addCount(currentState: State, add: number) {
    currentState.count += add;
  },
};

/*
 * action stateに反映したい値を取得・作成する。非同期処理もここ。
 * 各componentからはこれを呼ぶ @Action('ACTION_NAME') onButtonClick: void; みたいな。
 */
export const actions = {
  async nuxtServerInit({ commit }: IncludeCommitObject, { app, isStatic, isDev, isHMR, route }: NuxtApp) {
    if (isStatic || route.name !== 'index') {
      return;
    }

    console.log(process.browser);

    const people = await app.$axios.$get<PersonEntity[]>('./random-data.json');
    commit(
      'setPeople',
      people.slice(0, 20).map(
        person =>
          ({
            id: person.id,
            firstName: person.first_name,
            lastName: person.last_name,
          } as Person),
      ),
    );
  },
  countup({ commit }: IncludeCommitObject) {
    commit('addCount', 1);
  },
  countdown({ commit }: IncludeCommitObject) {
    commit('addCount', -1);
  },
};

/*
 * TODO 強引
 */
interface IncludeCommitObject {
  commit(action: string, value: any): void;
}

interface NuxtApp {
  app: {
    $axios: {
      $get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    };
  };
  route: { name: string };
  isStatic: boolean;
  isDev: boolean;
  isHMR: boolean;
}

import { AxiosRequestConfig } from 'axios';

import { People, Person, PersonEntity } from '../interfaces/Person';

export interface State {
  people: People;
}

export const state = () => ({ people: [] } as State);

/*
 * mutation ここでstateを変更する。複雑なことはなるべくactionでやる
 */
export const mutations = {
  setPeople(currentState: State, people: People) {
    currentState.people = people;
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

    console.log(process);
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

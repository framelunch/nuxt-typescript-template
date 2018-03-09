export interface State {
  count: number;
}

export const state = () => ({ count: 0 } as State);

/*
 * getter stateを規則的に加工したいときはこれでOK
 * @Getter('count/count100') count100: number; で{{count100}}でとれるようになる
 */
export const getters = {
  count100(currentState: State) {
    return currentState.count * 100;
  },
};

/*
 * mutation ここでstateを変更する。複雑なことはなるべくactionでやる
 * こいつを直接呼ぶことはあんまないっていうか、多分アンチパターン
 */
export const mutations = {
  addCount(currentState: State, add: number) {
    currentState.count += add;
  },
};

/*
 * action stateに反映したい値を取得・作成する。非同期処理もここ。
 * @Action('count/countup') onCountUpClick: void;
 * @Action('count/countdown') onCountDownClick: void;
 * で@click="onCountDownClick" みたいな
 */
export const actions = {
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

/* eslint-disable import/no-extraneous-dependencies */
import { shallowMount } from '@vue/test-utils';

import Index from './index.vue';

describe('about/index', () => {
  it('renders props.msg', () => {
    const msg = 'About';
    const wrapper = shallowMount(Index, {
      propsData: { msg },
    });

    expect(wrapper.text()).toEqual(msg);
  });
});

import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import EmptyLayout from '../empty.layout.vue';

const localVue = createLocalVue();

localVue.use(VueRouter);
localVue.use(Vuetify);

const router = new VueRouter();

describe('About route component', () => {
  let wrapper: Wrapper<EmptyLayout>;

  beforeEach(() => {
    wrapper = shallowMount(EmptyLayout, { localVue, router });
  });

  it('should renders with props', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

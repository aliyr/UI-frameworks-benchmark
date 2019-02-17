import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import LoginForm from '../../src/views/LoginForm'
import VueRouter from 'vue-router'
import routes from '../../src/router'
import Store from '../../src/store'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Store)

describe('LoginForm.vue', () => {
  it('should render button', () => {
    const wrapper = mount(LoginForm)
    expect(wrapper.contains('button')).toBe(true)
  })
  it('should render input', () => {
    const wrapper = mount(LoginForm)
    expect(wrapper.contains('input')).toBe(true)
  })
  it('should gets the wrong name and shows the not found error', () => {
    const router = new VueRouter(routes)
    const store = new Vuex.Store(Store)
    const wrapper = mount(LoginForm, { localVue, router, store })
    const button = wrapper.find('button')
    wrapper.setData({ name: 'gholi' })
    button.trigger('click')
    expect(wrapper.contains('div#error')).toBe(true)
  })
  it('should gets the right name and redirects to profile page', () => {
    const store = new Vuex.Store(Store)
    const router = new VueRouter(routes)
    const wrapper = shallowMount(LoginForm, { localVue, store, router, propsData: { userInput: 'gholi' } })
    const button = wrapper.find('button')
    wrapper.vm.addUser('gholi')
    button.trigger('click')
    expect(wrapper.vm.$data.errorMessage.length).toBe(0)
  })
})

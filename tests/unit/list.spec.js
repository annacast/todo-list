import { mount } from '@vue/test-utils'
import List from '@/components/List.vue'

describe('List.vue', () => {
  const wrapper = mount(List)
  const vm = wrapper.vm

  it('shallows correctly', () => {
    expect(wrapper).toBeTruthy()
  })

  it('contains add button', () => {
    expect(wrapper.contains('button')).toBeTruthy()
  })
})

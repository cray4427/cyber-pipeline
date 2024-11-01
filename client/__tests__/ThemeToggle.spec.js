import { flushPromises, mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ThemeToggle from '@/components/topmenu/ThemeToggle.vue'

describe.todo('ThemeToggle.vue', () => {

  it('renders correctly with initial theme', async () => {
    localStorage.setItem('user-theme', 'light-theme')
    const wrapper = mount(ThemeToggle)
    await wrapper.vm.$nextTick()
    await flushPromises()

    console.log("html", wrapper.html())
    const toggle = wrapper.find('span')
    console.log("toggle", toggle)
    expect(toggle.exists()).toBe(true) // Checks if the moon icon is rendered
  })
})

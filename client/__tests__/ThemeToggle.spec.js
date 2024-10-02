import { mount, shallowMount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { describe, it, beforeEach, expect } from 'vitest'
import ThemeToggle from '@/components/topmenu/ThemeToggle.vue'

describe.todo('ThemeToggle', () => {

  const pinia = createPinia()
  setActivePinia(pinia) // Makes Pinia active

  it('should render the component correctly', () => {
    // Mount the component with Pinia
    const wrapper = shallowMount(ThemeToggle, {
    })

    // Assert the component is rendered correctly
    expect(wrapper).toBeTruthy()
  })
})
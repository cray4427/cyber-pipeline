import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { createTestingPinia } from '@pinia/testing'
import { describe, it, beforeEach, expect, vi } from 'vitest'
import TopMenu from '@/components/topmenu/TopMenu.vue'
import ThemeToggle from '@/components/topmenu/ThemeToggle.vue'
import LoginProfile from '@/components/topmenu/LoginProfile.vue'

// Mock the router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home' },
    { path: '/teachers', name: 'teachers' },
    { path: '/districts', name: 'districts' }
  ]
})

describe.todo('TopMenu', () => {
  beforeEach(async () => {
    router.push('/')
    await router.isReady()
  })

  it('renders the Menubar with initial items', async () => {
    const wrapper = mount(TopMenu, {
      global: {
        plugins: [router, createTestingPinia({ stubActions: false, createSpy: vi.fn })],
      }
    })

    // Check that the Menubar renders the initial "Home" item
    const menuItems = wrapper.findAll('.pi-home')
    expect(menuItems.length).toBe(1)
    expect(wrapper.text()).toContain('Home')

    // Ensure that ThemeToggle and LoginProfile components render
    expect(wrapper.findComponent(ThemeToggle).exists()).toBe(true)
    expect(wrapper.findComponent(LoginProfile).exists()).toBe(true)
  })

  it('updates the menu items when the user is an admin', async () => {
    const wrapper = mount(MyComponent, {
      global: {
        plugins: [router, createTestingPinia({
          initialState: {
            Token: { is_admin: true, is_user: false }  // Mock admin user
          }
        })]
      }
    })

    // Trigger tokenStore update
    await wrapper.vm.$nextTick()

    // Check if admin menu items exist
    const menuItems = wrapper.findAll('.pi-users')
    expect(menuItems.length).toBe(2)  // Teachers and Cohorts
    expect(wrapper.text()).toContain('Teachers')
    expect(wrapper.text()).toContain('Cohorts')
  })

  it('navigates to the correct route on menu item click', async () => {
    const wrapper = mount(MyComponent, {
      global: {
        plugins: [router, createTestingPinia({ stubActions: false })]
      }
    })

    // Find the "Home" menu item and click it
    const homeItem = wrapper.find('.pi-home')
    await homeItem.trigger('click')

    // Ensure the router navigates to the home route
    expect(router.currentRoute.value.name).toBe('home')
  })
})

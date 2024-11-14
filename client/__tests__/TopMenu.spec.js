import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import TopMenu from '@/components/topmenu/TopMenu.vue'
import { useTokenStore } from '@/stores/Token'
import { vi, describe, beforeEach, it, expect, afterEach } from 'vitest'

//When you mock token store in this class it messes with token store in loginprofile
// vi.mock('@/stores/Token', () => ({
//   useTokenStore: vi.fn().mockReturnValue({
//     is_admin: false,
//     is_user: false,
//     $subscribe: vi.fn().mockImplementation((callback) => {
//       // Store the callback so it can be called manually
//       this.callback = callback
//     }),
//   })
// }))

describe.todo('TopMenu.vue', () => {
  let wrapper
  let tokenStoreMock
  let router

  beforeEach(() => {
    // Mock router
    router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { name: 'home', path: '/' },
        { name: 'teachers', path: '/teachers' },
        { name: 'districts', path: '/districts' },
        { name: 'cohorts', path: '/cohorts' },
        { name: 'courses', path: '/courses' },
        { name: 'users', path: '/users' },
        { name: 'mailing', path: '/mailing' },
      ],
    })
    router.push('/')

    // Mock tokenStore for each test
    tokenStoreMock = useTokenStore()

    // Mount the component with router
    wrapper = mount(TopMenu, {
      global: {
        plugins: [router]
      }
    })
  })

  afterEach(()=>{
    wrapper.unmount()
  })

  it('renders the basic menu for non-authenticated users', () => {
    tokenStoreMock.is_user = false
    tokenStoreMock.is_admin = false
    tokenStoreMock.$subscribe() // Simulate store update

    // Assert only the "Home" menu item exists
    const menuItems = wrapper.findAll('li')
    expect(menuItems.length).toBe(1)
    expect(menuItems[0].text()).toContain('Home')
  })

  it('renders the full menu for admin users', async () => {
    tokenStoreMock.is_user = false
    tokenStoreMock.is_admin = true
    tokenStoreMock.$subscribe() // Simulate store update

    // Wait for the reactivity to update the items
    await wrapper.vm.$nextTick()

    const menuItems = wrapper.findAll('li')
    expect(menuItems.length).toBe(7) // Admin should see 7 items
    expect(menuItems[1].text()).toContain('Teachers')
    expect(menuItems[2].text()).toContain('Districts')
    expect(menuItems[3].text()).toContain('Cohorts')
    expect(menuItems[4].text()).toContain('Courses')
    expect(menuItems[5].text()).toContain('Users')
    expect(menuItems[6].text()).toContain('Mailing')
  })

  it.todo('navigates to the correct route when menu items are clicked', async () => {
    const mockPush = vi.fn()
    router.push = mockPush // Mock the router push method

    tokenStoreMock.is_user = true
    tokenStoreMock.is_admin = false
    tokenStoreMock.$subscribe() // Simulate store update

    await wrapper.vm.$nextTick()

    const homeMenuItem = wrapper.find('[aria-label="Home"]')
    await homeMenuItem.trigger('click')

    // Check that the router's push function was called with the correct path
    expect(mockPush).toHaveBeenCalledWith({ name: 'home' })
  })

  it('renders ThemeToggle and LoginProfile components', () => {
    tokenStoreMock.is_user = false
    tokenStoreMock.is_admin = false
    tokenStoreMock.$subscribe() // Simulate store update

    // Check that ThemeToggle and LoginProfile are rendered in the end slot
    expect(wrapper.findComponent({ name: 'ThemeToggle' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'LoginProfile' }).exists()).toBe(true)
  })
})

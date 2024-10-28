// YourComponent.spec.js
import { createPinia, setActivePinia } from 'pinia';
import LoginProfile from '@/components/topmenu/LoginProfile.vue';
import { useTokenStore } from '@/stores/Token';
import { describe, it, beforeEach, expect } from 'vitest'
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router';

describe('LoginProfile', () => {
  beforeEach(() => {
    // Activate Pinia before each test
    setActivePinia(createPinia());
  });

  it('should show login button when no token is present', () => {
    // Set up the token store with no token
    const tokenStore = useTokenStore();
    tokenStore.token = '';

    const wrapper = mount(LoginProfile)

    // Check if the "Login" button is rendered
    expect(wrapper.text()).toContain('Login');
  });

  it('should show profile menu when token is present', () => {
    // Set up the token store with a token
    const tokenStore = useTokenStore();
    tokenStore.token = 'some-token';

    const wrapper = mount(LoginProfile)
    // Check if the avatar is rendered
    const avatar = wrapper.findComponent({ name: 'Avatar' });
    expect(avatar.exists()).toBe(true);
  });

  it.todo('should route you to profile page when profile clicked', async () =>{
    const tokenStore = useTokenStore();
    tokenStore.token = 'some-token';

    router.push('/')
    await router.isReady()

    const wrapper = mount(LoginProfile, {
      global: {
        plugins: [router]
      }
    })

    await wrapper.find('a').trigger('click')
  })
});

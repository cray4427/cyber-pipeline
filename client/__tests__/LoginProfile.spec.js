// YourComponent.spec.js
import { createPinia, setActivePinia } from 'pinia';
import LoginProfile from '@/components/topmenu/LoginProfile.vue';
import { useTokenStore } from '@/stores/Token';
import { describe, it, beforeEach, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils';

describe.todo('LoginProfile', () => {
  beforeEach(() => {
    // Activate Pinia before each test
    setActivePinia(createPinia());
  });

  it('should show login button when no token is present', () => {
    // Set up the token store with no token
    const tokenStore = useTokenStore();
    tokenStore.token = '';

    const wrapper = shallowMount(LoginProfile, {
    });

    // Check if the "Login" button is rendered
    expect(wrapper.text()).toContain('Login');
  });

  it('should show profile menu when token is present', () => {
    // Set up the token store with a token
    const tokenStore = useTokenStore();
    tokenStore.token = 'some-token';

    const wrapper = shallowMount(LoginProfile, {
    });
    // Check if the avatar is rendered
    const avatar = wrapper.findComponent({ name: 'Avatar' });
    expect(avatar.exists()).toBe(true);
  });
});

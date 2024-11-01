import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
// Import your component
import BooleanField from '@/components/forms/BooleanField.vue'
// PrimeVue component mock
import ToggleSwitch from 'primevue/toggleswitch'

describe('BooleanField', () => {
  const props = {
    field: 'testField',
    label: 'TestLabel',
    disabled: false,
    errors: {
      testField: [{ message: 'Field is required' }]
    }
  }

  it('should have toggleswitch render correctly', () => {
    const wrapper = mount(BooleanField, {
      props
    });

    const toggleSwitch = wrapper.getComponent(ToggleSwitch);

    expect(toggleSwitch).toBeDefined();

    wrapper.unmount();
  })

  it('disables ToggleSwitch when disabled prop is true', () => {
    const wrapper = mount(BooleanField, {
      props: {
        ...props,
        disabled: true
      }
    });

    const toggleSwitch = wrapper.findComponent(ToggleSwitch);
    expect(toggleSwitch.props('disabled')).toBe(true);

    wrapper.unmount();
  })

  it('enables InputSwitch when disabled prop is false', () => {
    const wrapper = mount(BooleanField, {
      props: {
        ...props,
        disabled: false
      }
    });

    const toggleSwitch = wrapper.findComponent(ToggleSwitch)
    expect(toggleSwitch.props('disabled')).toBe(false);

    wrapper.unmount();
  })
})

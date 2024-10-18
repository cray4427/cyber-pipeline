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
  })

  // it('should have label render correctly', () => {
  //   const wrapper = mount(BooleanField, {
  //     props
  //   });

  //   console.log('wrapper',wrapper.html());

  //   const label = wrapper.get('label[for="TestLabel"]');
  //   expect(label.text()).toBe(props.label);
  // })

  it('disables ToggleSwitch when disabled prop is true', () => {
    const wrapper = mount(BooleanField, {
      props: {
        ...props,
        disabled: true
      }
    });

    const toggleSwitch = wrapper.findComponent(ToggleSwitch);
    expect(toggleSwitch.props('disabled')).toBe(true);
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
  })

  // it('displays error message when errors prop contains error for field', () => {
  //   const wrapper = mount(BooleanField, {
  //     ...props,
  //     error: {testField: ["Error"]}
  //   })

  //   // Check if error message is displayed
  //   const errorText = wrapper.get('small').text()
  //   expect(errorText).toBe(props.errors.testField[0].message)
  // })
})

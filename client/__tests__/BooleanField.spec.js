import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
// Import your component
import BooleanField from '@/components/forms/BooleanField.vue'
// PrimeVue component mock
import InputSwitch from 'primevue/inputswitch'

describe('BooleanField', () => {
  const props = {
    field: 'testField',
    label: 'Test Label',
    disabled: false,
    errors: {
      testField: [{ message: 'Field is required' }]
    }
  }

  it('renders correctly with provided props', () => {
    const wrapper = mount(BooleanField, {
      props
    })

    // Check if the label is rendered correctly
    expect(wrapper.find('label').text()).toBe(props.label)

    // Check if InputSwitch exists
    const inputSwitch = wrapper.findComponent(InputSwitch)
    expect(inputSwitch.exists()).toBe(true)

    // Check if the field prop is correctly passed as the id
    expect(inputSwitch.attributes('id')).toBe(props.field)
  })

  it('disables InputSwitch when disabled prop is true', () => {
    const wrapper = mount(BooleanField, {
      props: {
        ...props,
        disabled: true
      }
    })

    const inputSwitchComponent = wrapper.findComponent(InputSwitch)
    expect(inputSwitchComponent.props('disabled')).toBe(true)
  })

  it('enables InputSwitch when disabled prop is false', () => {
    const wrapper = mount(BooleanField, {
      props: {
        ...props,
        disabled: false
      }
    })

    const inputSwitchComponent = wrapper.findComponent(InputSwitch)
    expect(inputSwitchComponent.props('disabled')).toBe(false)
  })

  it('displays error message when errors prop contains error for field', () => {
    const wrapper = mount(BooleanField, {
      props
    })

    // Check if error message is displayed
    const errorText = wrapper.find('small').text()
    expect(errorText).toBe(props.errors.testField[0].message)
  })
})

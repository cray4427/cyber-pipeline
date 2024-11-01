import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { vi } from 'vitest'

// Import the component to test
import DropDownField from '@/components/forms/DropDownField.vue'
import Dropdown from 'primevue/dropdown'

describe.todo('DropDownField', () => {

  const props = {
    field: 'testField',
    label: 'Test Label',
    icon: 'pi pi-search',
    values: [{ id: 1, name: 'Option 1' }, { id: 2, name: 'Option 2' }],
    valueLabel: 'name',
    disabled: false,
    modelValue: [],
    errors: {
        testField: [{ message: 'Field is required' }]
    }
  }

  const wrapper = mount(DropDownField, {
    props
  })

  it('renders correctly', () => {
     // Check if the label is rendered
     expect(wrapper.find('label').text()).toBe(props.label)
    
     // Check if the dropdown is rendered with correct options
     const dropdown = wrapper.findComponent(Dropdown)
     expect(dropdown.exists()).toBe(true)
     expect(dropdown.props('options')).toEqual(props.values)
 
     // Check if the input icon is rendered
     expect(wrapper.find('i').classes()).toContain('pi')
  })
})
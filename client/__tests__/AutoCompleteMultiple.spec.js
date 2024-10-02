import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
// Mock PrimeVue components
import FloatLabel from 'primevue/floatlabel'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import AutoComplete from 'primevue/autocomplete'

// Import the component to test
import AutocompleteMultiple from '@/components/forms/AutocompleteMultiple.vue'

describe('YourComponent.vue', () => {
  const props = {
    field: 'testField',
    label: 'Test Label',
    icon: 'pi pi-search',
    values: [
      { name: 'Apple' },
      { name: 'Banana' },
      { name: 'Orange' }
    ],
    valueLabel: 'name',
    disabled: false,
    errors: {
      testField: [{ message: 'Field is required' }]
    }
  }

  it('renders correctly with provided props', () => {
    const wrapper = mount(AutocompleteMultiple, {
      global: {
        components: {
          FloatLabel,
          IconField,
          InputIcon,
          AutoComplete
        }
      },
      props
    })

    expect(wrapper.find('label').text()).toBe(props.label)
    expect(wrapper.find('.pi-search').exists()).toBe(true)
  })

  it('filters autocomplete values based on search query', async () => {
    const wrapper = mount(AutocompleteMultiple, {
      global: {
        components: {
          FloatLabel,
          IconField,
          InputIcon,
          AutoComplete
        }
      },
      props
    })

    const autocomplete = wrapper.findComponent(AutoComplete)

    // Simulate a search event
    await autocomplete.vm.$emit('complete', { query: 'A' })

    expect(wrapper.vm.items).toEqual([{ name: 'Apple' }])
  })

  it('displays errors when provided', () => {
    const wrapper = mount(AutocompleteMultiple, {
      global: {
        components: {
          FloatLabel,
          IconField,
          InputIcon,
          AutoComplete
        }
      },
      props
    })

    const errorMessage = wrapper.find('small').text()
    expect(errorMessage).toBe('Field is required')
  })
})

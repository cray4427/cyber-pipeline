import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AutoComplete from 'primevue/autocomplete'
import { nextTick } from 'vue'
// Import the component to test
import AutocompleteMultiple from '@/components/forms/AutocompleteMultiple.vue'

describe('AutoCompleteMultiple', () => {
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
    modelValue: [],
    errors: {
      testField: [{ message: 'Field is required' }]
    }
  }

  it('renders correctly with provided props', async () => {
    const wrapper = mount(AutocompleteMultiple, {
      props
    })

    const autoComplete = wrapper.getComponent(AutoComplete)

    expect(autoComplete).toBeDefined();

    await autoComplete.vm.$emit('complete', { query: 'A' }); //testing the searching could add more search tests in the future
    await nextTick();

    expect(autoComplete.props('suggestions')).toEqual([
    { name: 'Apple' }
    ]);
  })
})

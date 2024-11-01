import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TextField from '../src/components/forms/TextField.vue'

describe.todo('TextField', () => {

    const props = {
        field: 'testField',
        label: 'Test Field',
        icon: 'pi pi-user',
        disabled: false,
        modelValue: '',
        errors: {
            testField: [{message:'Field is required'}]
        }
    }

    it('renders a text field', () => {
        const wrapper = mount(TextField, {props})

        expect(wrapper.find('label').text()).toBe(props.label)
    })

    it('enables input when the disabled prop is false', () => {
        const wrapper = mount(TextField, { props })

        const input = wrapper.find('input')
        expect(input.attributes('disabled')).toBeUndefined()
    })

    it('disables the input when the disabled prop is true', () => {
        const wrapper = mount(TextField, {
            props:{
                ...props,
                disabled: true
            }
        })

        const input = wrapper.find('input')
        expect(input.attributes('disabled')).exist
    })
})
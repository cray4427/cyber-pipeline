import { describe, it, beforeEach, expect, vi } from 'vitest';
import { nextTick } from 'vue'
import { createPinia, setActivePinia } from 'pinia';
import { mount } from '@vue/test-utils';
import MailingView from '../src/views/MailingView.vue';
import { useUsersStore } from '../src/stores/Users.js';
import { useRolesStore } from '../src/stores/Roles.js';
import { useTeachersStore } from '../src/stores/Teachers.js';
import PrimeVue from 'primevue/config'
import Panel from 'primevue/panel'
import Button from 'primevue/button'
import TextField from '@/components/forms/TextField.vue';
import InputText from 'primevue/inputtext'


vi.mock('../src/stores/Users')
vi.mock('../src/stores/Roles')
vi.mock('../src/stores/Teachers')

global.URL.createObjectURL = vi.fn()

describe('Mailing List', () => {
    let wrapper;
    let usersStore;
    let rolesStore;
    let teachersStore;

    beforeEach(async () => {
        setActivePinia(createPinia())
        usersStore = {
            hydrate: vi.fn(),
            delete: vi.fn(),
            update: vi.fn(),
            new: vi.fn(),
        }

        rolesStore = {
            hydrate: vi.fn(),
        }

        teachersStore = {
            hydrate: vi.fn(),
            teachers: [  
                { name: 'Russell Westbrook', email: 'russell@example.com' },
                { name: 'John Doe', email: 'john@example.com' },
                { name: 'Jane Smith', email: 'jane@example.com' }
            ]
        }

        useUsersStore.mockReturnValue(usersStore);
        useRolesStore.mockReturnValue(rolesStore);
        useTeachersStore.mockReturnValue(teachersStore);

        wrapper = mount(MailingView)
        await wrapper.vm.$nextTick()
    })

    it('renders correctly', async () => {
        expect(wrapper.exists()).toBe(true)
        console.log(wrapper.html())
        const textFields = wrapper.findAllComponents(TextField)
        await wrapper.vm.$nextTick()
        expect(textFields.length).toBe(3)
        expect(textFields[0].props('label')).toBe("Recipients")
        expect(textFields[1].props('label')).toBe("Subject")
        expect(textFields[2].props('label')).toBe("Text")
        expect(textFields[0].props().icon).toBe('pi pi-envelope')
        expect(textFields[1].props().icon).toBe("pi pi-bookmark")
        expect(textFields[2].props().icon).toBe('pi pi-align-left')
        const buttons = wrapper.findAllComponents(Button)
        expect(buttons.length).toBe(1)
        expect(buttons[0].props('label')).toBe("Send")
        expect(buttons[0].props().icon).toBe('pi pi-check')
    })

    it('calls hydrate on mount', () => {
        expect(teachersStore.hydrate).toHaveBeenCalled()
    })

    it('calls filterTeachers method', async () => {
        const spy = vi.spyOn(wrapper.vm, 'filterTeachers');
        wrapper.vm.searchTerm = 'russell'
        await wrapper.vm.filterTeachers()
        expect(spy).toHaveBeenCalledWith()
        expect(wrapper.vm.filteredTeachers).toStrictEqual(teachersStore.teachers.filter(teacher =>
            teacher.name.toLowerCase().includes('russell') ||
            teacher.email.toLowerCase().includes('russell')))
    })
/*
    it('calls newUser method', async () => {
        const spy = vi.spyOn(wrapper.vm, 'newUser');
        await wrapper.vm.newUser();
        expect(spy).toHaveBeenCalled();
        expect(wrapper.vm.user).toEqual({ eid: '', name: '', roles: []});
        expect(wrapper.vm.editEid).toBe(true);
        expect(wrapper.vm.userDialogHeader).toBe('New User');
        expect(wrapper.vm.userDialog).toBe(true);
    })

    it('calls deleteUser method', async () => {
        const user = { id: 1, name: 'Test User' }
        const spy = vi.spyOn(wrapper.vm, 'deleteUser');
        const confirmSpy = vi.spyOn(wrapper.vm.$confirm, 'require');
        await wrapper.vm.deleteUser(user);

        expect(spy).toHaveBeenCalledWith(user);
        expect(confirmSpy).toHaveBeenCalledWith({
            message: 'Are you sure you want to delete Test User?',
            header: 'Danger Zone',
            icon: 'pi pi-exclamation-triangle',
            rejectLabel: 'Cancel',
            acceptLabel: 'Delete',
            rejectClass: 'p-button-secondary p-button-outlined',
            acceptClass: 'p-button-danger',
            accept: expect.any(Function),
            reject: expect.any(Function)
        })
    })

    it('calls save method', async () => {
        const user = { id: 1, name: 'Test User' }
        wrapper.vm.user = user;
        const spy = vi.spyOn(wrapper.vm, 'save');
        await wrapper.vm.save();
        expect(spy).toHaveBeenCalled();
    })

    it('calls exportCSV method', async () => {
        const spy = vi.spyOn(wrapper.vm, 'exportCSV');
        await wrapper.vm.exportCSV();
        expect(spy).toHaveBeenCalled();
    })

    it('calls exportFunction method', async () => {
        const row = { data: [{name: 'Admin'}]};
        const result = wrapper.vm.exportFunction(row);
        expect(result).toBe('"Admin,"');
    })
    */

});
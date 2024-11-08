import { describe, it, beforeEach, expect, vi } from 'vitest';
import { nextTick } from 'vue'
import { createPinia, setActivePinia } from 'pinia';
import { mount } from '@vue/test-utils';
import MailingView from '../src/views/MailingView.vue';
import { useUsersStore } from '../src/stores/Users.js';
import { useRolesStore } from '../src/stores/Roles.js';
import { useEmailsStore } from '../src/stores/Emails.js';
import PrimeVue from 'primevue/config'
import Panel from 'primevue/panel'
import Button from 'primevue/button'


vi.mock('../src/stores/Users')
vi.mock('../src/stores/Roles')
vi.mock('../src/stores/Emails')

global.URL.createObjectURL = vi.fn()

describe('Mailing List', () => {
    let wrapper;
    let usersStore;
    let rolesStore;
    let emailsStore;

    beforeEach(() => {
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

        emailsStore = {
            hydrate: vi.fn(),
        }

        useUsersStore.mockReturnValue(usersStore);
        useRolesStore.mockReturnValue(rolesStore);
        useEmailsStore.mockReturnValue(emailsStore);

        wrapper = mount(MailingView, {
            global: {
                plugins: [PrimeVue]
            }
        })
    })

    it('renders correctly', async () => {
        await nextTick()
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('h1').exists()).toBe(true)
        expect(wrapper.find('h1').text()).toBe('Send Email')
        expect(textFields.eq(0).exists()).toBe(true)
        expect(textFields.eq(0).attributes('placeholder')).toBe('Recipients')
        expect(textFields.eq(0).props().icon).toBe('pi pi-envelope')
    })
/*
    it('calls hydrate on mount', () => {
        expect(usersStore.hydrate).toHaveBeenCalled();
        expect(rolesStore.hydrate).toHaveBeenCalled();
    })

    it('calls editUser method', async () => {
        const user = { id: 1, name: 'Test User' }
        const spy = vi.spyOn(wrapper.vm, 'editUser');
        await wrapper.vm.editUser(user);
        expect(spy).toHaveBeenCalledWith(user);
        expect(wrapper.vm.userDialogHeader).toBe('Edit User');
        expect(wrapper.vm.userDialog).toBe(true);
    })

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
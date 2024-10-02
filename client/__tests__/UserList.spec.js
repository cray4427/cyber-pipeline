// YourComponent.spec.js
import { createPinia, setActivePinia } from 'pinia';
import UserList from '@/components/user/UserList.vue';
import { useUsersStore } from '@/stores/Users';
import { useRolesStore } from '@/stores/Roles';
import { describe, it, beforeEach, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { ref } from 'vue';
import { vi } from 'vitest';

describe.todo('UserList', () => {
  let usersStore;
  let rolesStore;

  beforeEach(() => {
    // Activate Pinia before each test
    const pinia = createPinia();
    setActivePinia(pinia);

    // Mock the users store
    usersStore = useUsersStore();
    usersStore.hydrate = vi.fn();
    usersStore.delete = vi.fn();
    usersStore.update = vi.fn();
    usersStore.new = vi.fn();

    // Mock the roles store
    rolesStore = useRolesStore();
    rolesStore.hydrate = vi.fn();
    
    // Mock users and roles for the tests
    usersStore.users = ref([{ id: 1, eid: '123', name: 'John Doe', roles: [] }]);
    rolesStore.roles = ref([{ id: 1, name: 'admin' }, { id: 2, name: 'user' }]);
  });

  it('renders the user datatable with users', () => {
    const wrapper = shallowMount(UserList, {

    });
    
    // Check if the user is displayed in the datatable
    expect(wrapper.text()).toContain('John Doe');
  });

  it('opens the new user dialog when the "New" button is clicked', async () => {
    const wrapper = shallowMount(UserList);
    const newButton = wrapper.find('Button[label="New"]');

    await newButton.trigger('click');

    // Check if the userDialog is open
    expect(wrapper.vm.userDialog).toBe(true);
    expect(wrapper.vm.userDialogHeader).toBe('New User');
  });

  it('calls the deleteUser method and confirms deletion', async () => {
    const wrapper = shallowMount(UserList);
    const deleteButton = wrapper.find('Button[icon="pi pi-trash"]');

    await deleteButton.trigger('click');

    // Check if the confirm dialog appears
    // Note: This test assumes the confirm dialog opens, you'll need to set up a way to simulate the confirm action
    expect(usersStore.delete).toHaveBeenCalledWith(1);
  });

  it('calls the save method when saving a user', async () => {
    const wrapper = shallowMount(UserList);
    wrapper.vm.user = { id: null, eid: '123', name: 'New User', roles: [] }; // New user
    wrapper.vm.loading = false; // Reset loading state

    const saveButton = wrapper.find('Button[label="Save"]');
    await saveButton.trigger('click');

    expect(usersStore.new).toHaveBeenCalledWith(wrapper.vm.user); // Check if new user method is called
  });
});

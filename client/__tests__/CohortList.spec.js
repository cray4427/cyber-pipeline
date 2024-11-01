import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import CohortList from '../src/components/cohort/CohortList.vue'
import { useCohortsStore } from '../src/stores/Cohorts.js'
import { useTeachersStore } from '../src/stores/Teachers.js'
import Panel from 'primevue/panel'
import DataTable from 'primevue/datatable'
import Button from 'primevue/button'
import Popover from 'primevue/popover'
import Dialog from 'primevue/dialog'
import ConfirmDialog from 'primevue/confirmdialog'
import { ref } from 'vue'
import { nextTick } from 'vue'

// Mocking the stores
vi.mock('../src/stores/Cohorts')
vi.mock('../src/stores/Teachers')

describe('CohortList', () => {
  let wrapper;
  let cohortsStore;
  let teachersStore;

  beforeEach(() => {
    cohortsStore = {
      hydrate: vi.fn(),
      delete: vi.fn(),
      update: vi.fn(),
      new: vi.fn(),
      cohorts: ref([{ id: 1, name: 'Test Cohort' }]) // Added a test cohort
    };

    teachersStore = {
      hydrate: vi.fn(),
      teachers: ref([{ id: 1, name: 'Test Teacher' }]) // Added a test teacher
    };

    useCohortsStore.mockReturnValue(cohortsStore);
    useTeachersStore.mockReturnValue(teachersStore);

    // Mount the component with props and reactive properties
    wrapper = mount(CohortList);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.findComponent(Panel).exists()).toBe(true);
    expect(wrapper.findComponent(Panel).text()).toContain('Manage Cohorts');

    expect(wrapper.findComponent(Button).exists()).toBe(true);
    expect(wrapper.findComponent(Button).text()).toContain('New');
    expect(wrapper.findComponent(Button).props().icon).toBe('pi pi-plus');
  });

  it('calls the editCohort method', async () => {
    const cohort = { id: 1, name: 'Test Cohort' };
    const spy = vi.spyOn(wrapper.vm, 'editCohort');
    await wrapper.vm.editCohort(cohort);

    expect(spy).toHaveBeenCalledWith(cohort);
    expect(wrapper.vm.cohortDialog).toBe(true);
    expect(wrapper.vm.cohortDialogHeader).toBe('Edit Cohort');
    expect(wrapper.vm.cohort).toEqual(cohort);
  });

  it('calls the newCohort method', async () => {
    const spy = vi.spyOn(wrapper.vm, 'newCohort');
    await wrapper.vm.newCohort();

    expect(spy).toHaveBeenCalled();
    expect(wrapper.vm.cohortDialog).toBe(true);
    expect(wrapper.vm.cohortDialogHeader).toBe('New Cohort');
  });

  it('calls the deleteCohort method', async () => {
    const cohort = { id: 1, name: 'Test Cohort' };
    const spy = vi.spyOn(wrapper.vm, 'deleteCohort');
    const confirmSpy = vi.spyOn(wrapper.vm.$confirm, 'require');

    await wrapper.vm.deleteCohort(cohort);

    expect(spy).toHaveBeenCalledWith(cohort);
    expect(confirmSpy).toHaveBeenCalledWith({
      message: 'Are you sure you want to delete Test Cohort?',
      header: 'Danger Zone',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'Cancel',
      acceptLabel: 'Delete',
      rejectClass: 'p-button-secondary p-button-outlined',
      acceptClass: 'p-button-danger',
      accept: expect.any(Function),
      reject: expect.any(Function)
    });
  });

  it('calls the save method', async () => {
    const cohort = { id: 2, name: 'New Cohort', teachers: [] }; // Providing teachers
    wrapper.vm.cohort = cohort; 

    const spy = vi.spyOn(wrapper.vm, 'save');
    await wrapper.vm.save(cohort);

    expect(spy).toHaveBeenCalled();
    expect(wrapper.vm.cohortDialog).toBe(false);
  });

  it('exports the datatable to CSV', () => {
    wrapper.vm.dt = { exportCSV: vi.fn() };
    wrapper.vm.exportCSV();
    expect(wrapper.vm.dt.exportCSV).toHaveBeenCalled();
  });

  it('renders the DataTable', () => {
    expect(wrapper.findComponent(DataTable).exists()).toBe(true);
    expect(wrapper.findComponent(DataTable).props().value).toBe(wrapper.vm.cohorts);
  });

  it('renders the Dialog, ConfirmDialog, and Popover', () => {
    expect(wrapper.findComponent(Dialog).exists()).toBe(true);
    expect(wrapper.findComponent(ConfirmDialog).exists()).toBe(true);
    expect(wrapper.findComponent(Popover).exists()).toBe(true);
  });
});

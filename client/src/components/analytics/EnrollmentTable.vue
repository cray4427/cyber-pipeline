<script setup>
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { useEnrollmentStore } from '@/stores/Enrollment';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import Panel from 'primevue/panel';
import ConfirmDialog from 'primevue/confirmdialog';
import { storeToRefs } from 'pinia'

const enrollmentStore = useEnrollmentStore();

const filters = ref({
    global: {
        value: null,
        matchMode: 'contains'
    }
});

const { getAllCourses } = storeToRefs(enrollmentStore);

onMounted(() => {
    enrollmentStore.hydrate();
});

</script>

<template>
    <ConfirmDialog></ConfirmDialog>

    <Panel header="Current Student Enrollment">
        <DataTable
            ref="dt"
            :value="getAllCourses"
            stripedRows
            tableStyle="min-width: 50rem"
            v-model:filters="filters"
            filterDisplay="row"
        >
            <template #header>
                <Toolbar
                    class="mb-2"
                    style="border: none"
                >
                    <template #start>
                        
                    </template>
                    <template #end>
                        <div class="flex justify-content-end">
                            <IconField iconPosition="left">
                            <InputIcon>
                                <i class="pi pi-search"/>
                            </InputIcon>
                            <InputText 
                                v-model="filters['global'].value"
                                placeholder="Keyword Search"
                            />
                        </IconField>
                        </div>
                    </template>
                </Toolbar>
            </template>
            <template #empty>
                <div class="p-text-center">
                    <p>No Teachers Found</p>
                </div>
            </template>
            <Column 
                field="name"
                sortable
                header="Course"
            />
            <Column 
                field="numStudents"
                sortable
                header="Students"
            />
        </DataTable>
    </Panel>



</template>

<style scoped>
/* Add your styles here */
</style>
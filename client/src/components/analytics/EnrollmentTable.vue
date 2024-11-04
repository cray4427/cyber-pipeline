<script>
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { useEnrollmentStore } from '@/stores/Enrollment';


</script>

<template>
    <ConfirmDialog></ConfirmDialog>

    <Panel header="Current Student Enrollment">
        <DataTable
            ref="dt"
            :value="enrollments"
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
            
                </Toolbar>

            </template>



        </DataTable>
    </Panel>



</template>

<style scoped>
/* Add your styles here */
</style>
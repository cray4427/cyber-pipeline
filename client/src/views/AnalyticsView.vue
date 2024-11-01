<template>
    <div class="p-layout">
      <aside class="p-sidebar">
        <nav class="p-tabview-nav-container">
          <ul>
            <li 
              class="p-tabview-nav-content" 
              :class="{ 'p-highlight': activeTab === 'tab1' }"
            >
              <a @click.prevent="setActiveTab('tab1')">Item 1</a>
            </li>
            <li 
              class="p-tabview-nav-content" 
              :class="{ 'p-highlight': activeTab === 'tab2' }"
            >
              <a @click.prevent="setActiveTab('tab2')">Item 2</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main class="p-main-content">
        <header class="mb-2">
          <h1 class="p-title">Primary</h1>
          <p class="p-text-secondary">Description</p>
          <div class="table-container">

          </div>
        </header>
        <section v-if="activeTab === 'tab1'" class="p-section">
          <h2 class="p-subtitle">Item 1</h2>
          <p class="p-text">
            <EnrollmentTable />
          </p>
        </section>
        <section v-if="activeTab === 'tab2'" class="p-section">
          <h2 class="p-subtitle">Item 2</h2>
          <p class="p-text">
            Text body
          </p>
        </section>
      </main>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, watch } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useDistrictsStore } from '../stores/Districts.js'
  import { useCoursesStore } from '../stores/Courses.js'
  import { useCohortsStore } from '../stores/Cohorts.js'
  import EnrollmentTable from '@/components/tables/EnrollmentTable.vue'

  const districtsStore = useDistrictsStore()
  const coursesStore = useCoursesStore()
  const cohortsStore = useCohortsStore()
  
  districtsStore.hydrate()
  coursesStore.hydrate()
  cohortsStore.hydrate()
  
  const { getAllDistrictsUsd } = storeToRefs(districtsStore)
 
  
  const activeTab = ref('tab1');
  
  function setActiveTab(tab) {
    activeTab.value = tab;
  }
  
  const districts = ref('');
  const svgUrl = ref('');
  
  const getDistrictList = async () => {
    districts.value = getAllDistrictsUsd.value
    svgUrl.value = 'https://k12map.cs.ksu.edu/Map?districts=' + districts.value
    console.log(svgUrl.value)
  }
  
  
  onMounted(() => {
    watch(
      () => districtsStore.districts,
      (newDistricts) => {
        if(newDistricts.length > 0) {
          getDistrictList()
        }
      },
      { immediate: true }
    )
  })
  
  </script>
  
  <style scoped>
  .p-layout {
    display: flex;
  }
  
  .p-sidebar {
    width: 250px;
    background-color: var(--sidebar-bg-color);
    padding: 20px;
  }
  
  .p-main-content {
    flex: 1;
    padding: 20px;
  }
  
  .p-tabview-nav-container {
    list-style: none;
    padding: 0;
  }
  
  .p-tabview-nav-content {
    margin-bottom: 10px;
    cursor: pointer;
  }
  
  .p-tabview-nav-content a {
    color: var(--link-color);
    text-decoration: none;
  }
  
  .p-tabview-nav-content a:hover {
    text-decoration: underline;
  }
  
  .p-highlight {
    font-weight: bold;
  }
  
  .mb-2 {
    margin-bottom: 20px;
  }
  
  .p-title {
    font-size: 2.5em;
    margin-bottom: 10px;
  }
  
  .p-subtitle {
    font-size: 1.8em;
    margin-bottom: 10px;
  }
  
  .p-text-secondary {
    font-size: 1.2em;
    color: var(--text-secondary-color, #666);
  }
  
  .p-text {
    font-size: 1.2em;
    line-height: 1.6;
  }
  
  .map-container{
    width: 700px;
    height: 400px;
    
  }
  
  .map-container iframe{
    width: 100%;
    height: 100%;
  }
  </style>
  
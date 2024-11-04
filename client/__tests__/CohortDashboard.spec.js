import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import CohortDashboard from '@/components/cohort/CohortDashboard.vue'
import Chart from 'primevue/chart'
import Panel from 'primevue/panel'

// unmounting the CohortDashboard throws an error that should be looked into
describe('CohortDashboard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CohortDashboard)
  })

  it('renders the Panel and Chart components', () => {
    const panel = wrapper.findComponent(Panel)
    const chart = wrapper.findComponent(Chart)

    expect(panel.exists()).toBe(true)
    expect(chart.exists()).toBe(true)
  })

  it('sets chart data and options on mount', () => {
    // Check if chartData and chartOptions are defined
    expect(wrapper.vm.chartData).toBeDefined()
    expect(wrapper.vm.chartOptions).toBeDefined()

    // Check if chartData has the expected structure
    expect(wrapper.vm.chartData).toEqual({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        expect.objectContaining({
          type: 'bar',
          label: 'Dataset 1',
          data: [50, 25, 12, 48, 90, 76, 42]
        }),
        expect.objectContaining({
          type: 'bar',
          label: 'Dataset 2',
          data: [21, 84, 24, 75, 37, 65, 34]
        }),
        expect.objectContaining({
          type: 'bar',
          label: 'Dataset 3',
          data: [41, 52, 24, 74, 23, 21, 32]
        })
      ]
    })

    // Check if chartOptions has the expected structure
    expect(wrapper.vm.chartOptions).toBeDefined()
  })
})
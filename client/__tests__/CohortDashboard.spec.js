import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { vi } from 'vitest'

// Import the component to test
import CohortDashboard from '@/components/cohort/CohortDashboard.vue'

describe.todo('CohortDashboard', () => {
  it('renders correctly', () => {
    vi.mock('primevue/chart', () => ({
        default: {
          template: '<div class="chart-mock"></div>',
        },
      }))
  
    const wrapper = mount(CohortDashboard)
    expect(wrapper.find('.chart-mock').exists()).toBe(true)

    const chartData = wrapper.vm.chartData
    const chartOptions = wrapper.vm.chartOptions

    expect(chartData).toBeDefined()
    expect(chartData.labels).toEqual(['January', 'February', 'March', 'April', 'May', 'June', 'July'])
    
    expect(chartOptions).toBeDefined()
    expect(chartOptions.scales.x.stacked).toBe(true)
  })
})

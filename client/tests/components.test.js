import { mount, shallowMount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { describe, it, beforeEach, expect } from 'vitest'
import TopMenu from '@/components/topmenu/TopMenu.vue'
import ThemeToggle from '@/components/topmenu/ThemeToggle.vue'
import LoginProfile from '@/components/topmenu/LoginProfile.vue'
import UserList from '@/components/user/UserList.vue'
import TeacherDashboard from '@/components/teacher/TeacherDashboard.vue'
import TeacherList from '@/components/teacher/TeacherList.vue'
import ProfileEdit from '@/components/profile/ProfileEdit.vue'
import AutocompleteMultiple from '@/components/forms/AutocompleteMultiple.vue'
import BooleanField from '@/components/forms/BooleanField.vue'
import DropDownField from '@/components/forms/DropDownField.vue'
import TextAreaField from '@/components/forms/TextAreaField.vue'
import TextField from '@/components/forms/TextField.vue'
import DistrictList from '@/components/district/DistrictList.vue'
import CourseList from '@/components/course/CourseList.vue'
import CohortDashboard from '@/components/cohort/CohortDashboard.vue'
import CohortList from '@/components/cohort/CohortList.vue'

// describe('TopMenu', () => {

//   const pinia = createPinia()
//   setActivePinia(pinia) // Makes Pinia active

//   it('should render the component correctly', () => {

//     // Mount the component with Pinia
//     const wrapper = mount(TopMenu, {
//     })

//     // Assert the component is rendered correctly
//     expect(wrapper).toBeTruthy()
//   })
// })

// describe('ThemeToggle', () => {

//   const pinia = createPinia()
//   setActivePinia(pinia) // Makes Pinia active

//   it('should render the component correctly', () => {
//     // Mount the component with Pinia
//     const wrapper = mount(ThemeToggle, {
//     })

//     // Assert the component is rendered correctly
//     expect(wrapper).toBeTruthy()
//   })
// })

describe('LoginProfile', () => {

  const pinia = createPinia()
  setActivePinia(pinia) // Makes Pinia active

  it('should render the component correctly', () => {
    // Mount the component with Pinia
    const wrapper = mount(LoginProfile, {
    })

    // Assert the component is rendered correctly
    expect(wrapper).toBeTruthy()
  })
})

describe('UserList', () => {

  const pinia = createPinia()
  setActivePinia(pinia) // Makes Pinia active

  it('should render the component correctly', () => {
    // Mount the component with Pinia
    const wrapper = mount(UserList, {
    })

    // Assert the component is rendered correctly
    expect(wrapper).toBeTruthy()
  })
})

describe('TeacherDashboard', () => {

  const pinia = createPinia()
  setActivePinia(pinia) // Makes Pinia active

  it('should render the component correctly', () => {
    // Mount the component with Pinia
    const wrapper = mount(TeacherDashboard, {
    })

    // Assert the component is rendered correctly
    expect(wrapper).toBeTruthy()
  })
})

describe('TeacherList', () => {

  const pinia = createPinia()
  setActivePinia(pinia) // Makes Pinia active

  it('should render the component correctly', () => {
    // Mount the component with Pinia
    const wrapper = mount(TeacherList, {
    })

    // Assert the component is rendered correctly
    expect(wrapper).toBeTruthy()
  })
})

describe('ProfileEdit', () => {

  const pinia = createPinia()
  setActivePinia(pinia) // Makes Pinia active

  it('should render the component correctly', () => {
    // Mount the component with Pinia
    const wrapper = mount(ProfileEdit, {
    })

    // Assert the component is rendered correctly
    expect(wrapper).toBeTruthy()
  })
})

describe('AutoCompleteMultiple', () => {

  const pinia = createPinia()
  setActivePinia(pinia) // Makes Pinia active

  it('should render the component correctly', () => {
    // Mount the component with Pinia
    const wrapper = mount(AutocompleteMultiple, {
    })

    // Assert the component is rendered correctly
    expect(wrapper).toBeTruthy()
  })
})

describe('BooleanField', () => {

  const pinia = createPinia()
  setActivePinia(pinia) // Makes Pinia active

  it('should render the component correctly', () => {
    // Mount the component with Pinia
    const wrapper = mount(BooleanField, {
    })

    // Assert the component is rendered correctly
    expect(wrapper).toBeTruthy()
  })
})

describe('DropDownField', () => {

  const pinia = createPinia()
  setActivePinia(pinia) // Makes Pinia active

  it('should render the component correctly', () => {
    // Mount the component with Pinia
    const wrapper = mount(DropDownField, {
    })

    // Assert the component is rendered correctly
    expect(wrapper).toBeTruthy()
  })
})

describe('TextAreaField', () => {

  const pinia = createPinia()
  setActivePinia(pinia) // Makes Pinia active

  it('should render the component correctly', () => {
    // Mount the component with Pinia
    const wrapper = mount(TextAreaField, {
    })

    // Assert the component is rendered correctly
    expect(wrapper).toBeTruthy()
  })
})

describe('TextField', () => {

  const pinia = createPinia()
  setActivePinia(pinia) // Makes Pinia active

  it('should render the component correctly', () => {
    // Mount the component with Pinia
    const wrapper = mount(TextField, {
    })

    // Assert the component is rendered correctly
    expect(wrapper).toBeTruthy()
  })
})

describe('DistrictList', () => {

  const pinia = createPinia()
  setActivePinia(pinia) // Makes Pinia active

  it('should render the component correctly', () => {
    // Mount the component with Pinia
    const wrapper = mount(DistrictList, {
    })

    // Assert the component is rendered correctly
    expect(wrapper).toBeTruthy()
  })
})

describe('CourseList', () => {

  const pinia = createPinia()
  setActivePinia(pinia) // Makes Pinia active

  it('should render the component correctly', () => {
    // Mount the component with Pinia
    const wrapper = mount(CourseList, {
    })

    // Assert the component is rendered correctly
    expect(wrapper).toBeTruthy()
  })
})

describe('CohortDashboard', () => {

  const pinia = createPinia()
  setActivePinia(pinia) // Makes Pinia active

  it('should render the component correctly', () => {
    // Mount the component with Pinia
    const wrapper = mount(CohortDashboard, {
    })

    // Assert the component is rendered correctly
    expect(wrapper).toBeTruthy()
  })
})

describe('CohortList', () => {

  const pinia = createPinia()
  setActivePinia(pinia) // Makes Pinia active

  it('should render the component correctly', () => {
    // Mount the component with Pinia
    const wrapper = mount(CohortList, {
    })

    // Assert the component is rendered correctly
    expect(wrapper).toBeTruthy()
  })
})








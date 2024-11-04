// Imports
import { defineStore } from 'pinia'
import Logger from 'js-logger'

// Services
import api from '@/services/api'

export const useEnrollmentStore = defineStore('enrollment', {
    state: () => {
        return {
            courses: [],     // list of courses
            numStudents: []  // students enrolled in each course
        }
    },
    getters: {
        /**
         * 
         * Given a cohort this returns all the classes
         * attached to that cohort and the number of 
         * students enrolled in each of those courses.
         * 
         * @param {State} state 
         * @returns All courses and the number of students enrolled.
         */
        getCoursesByCohort: (state) => (cohort) => {
            return state.courses
            .filter(course => course.cohort === cohort)
            .map(course => {
                return {
                ...course,
                numStudents: state.numStudents[course.id] || 0
                }
            })
        }
    }
})

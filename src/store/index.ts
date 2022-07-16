import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { CompanyAnalytic } from '../models/companyAnalytic.model'
import { analyticsService } from '../services/company-analytics.service'

export interface State {
    companies: null | CompanyAnalytic[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        companies: null
    },
    getters: {
        companiesForDisplay({ companies }) {
            // filter logic would be here for store filtering
            return companies
        }

    },
    mutations: {
        setCompanies(state, { companies }) {
            state.companies = companies
            console.log('state.companies', state.companies);
        }
    },
    actions: {
        async loadCompaniesAnalytics({ commit }, { filterBy }) {
            // filterBy would be implemented here if I want to do server side filtering
            const companies = await analyticsService.loadCompanies(filterBy)
            commit({ type: 'setCompanies', companies })
        }

    }
})

// define your own `useStore` composition function
export function useStore() {
    return baseUseStore(key)
}
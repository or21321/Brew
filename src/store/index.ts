import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { CompanyAnalytic } from '../models/companyAnalytic.model'
import { analyticsService } from '../services/company-analytics.service'

export interface State {
    companiesAnalytics: null | CompanyAnalytic[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        companiesAnalytics: null
    },
    getters: {

    },
    mutations: {

    },
    actions: {
        async loadCompaniesAnalytics({ commit: Commit }, { filterBy }) {
            // filterBy would be implemented here if I want to do server side filtering
            return await analyticsService.loadCompanies(filterBy)
        }

    }
})

// define your own `useStore` composition function
export function useStore() {
    return baseUseStore(key)
}
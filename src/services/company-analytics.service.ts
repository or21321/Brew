import { FilterBy } from "../models/filterBy.model";
import { asyncStorageService } from "./async-storage.service";
import { utilService } from "./util.service";
import COMPANIES_DB from '../data/companies.json'
import { CompanyAnalytic } from "../models/companyAnalytic.model";

const KEY = 'companiesAnalyticsDb'

export const analyticsService = {
    loadCompanies
}

async function loadCompanies(filterBy: FilterBy) {
    // filterBy if we want server side filtering
    // query to implement http request to server
    const companies = await asyncStorageService.query<CompanyAnalytic[]>(KEY)
    // create demo data & cache to localStorage if list is empty or it's first app load
    if (!companies.length) return await _createDemoData()
    return companies
}

function _createDemoData() {
    utilService.saveToStorage<CompanyAnalytic[]>(KEY, COMPANIES_DB)
    return Promise.resolve(COMPANIES_DB)

}

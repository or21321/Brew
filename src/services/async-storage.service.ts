import { utilService } from "./util.service"

export const asyncStorageService = {
    query,
    get,
    post,
    put,
    remove,
    postMany
}
// ***Could be Generic type instead of any
function query<Type>(entityType: string, delay = 300): Promise<Type> {
    var entities = JSON.parse(localStorage.getItem(entityType) as string) || []

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(entities)
        }, delay)
    })

    // return Promise.resolve(entities);
}

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId))
}

function post<newEntity>(entityType: string, newEntity: newEntity): Promise<newEntity> {
    newEntity._id = utilService._makeId()
    return query<Array<newEntity>>(entityType)
        .then((entities) => {
            if (!entities) throw Error('no entities found in post method')
            entities.push(newEntity);
            _save<newEntity[]>(entityType, entities)
            return newEntity;
        })
}

function postMany<entityType>(entityType: string, newEntities: entityType[]) {
    return query<entityType[]>(entityType)
        .then(entities => {
            if (!entities) throw Error('no entities found in postMany method')
            entities.push(...newEntities);
            _save(entityType, entities)
            return entities;
        })
}

function put<updatedEntity>(entityType: string, updatedEntity: updatedEntity): Promise<updatedEntity> {
    return query<updatedEntity[]>(entityType)
        .then(entities => {
            if (!entities) throw Error('no entities found in put method')
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id);
            entities.splice(idx, 1, updatedEntity)
            _save<updatedEntity[]>(entityType, entities)
            return updatedEntity;
        })
}

function remove<entityType>(entityType: string, entityId: string) {
    return query<entityType[]>(entityType)
        .then(entities => {
            if (!entities) throw Error('no entities found in remove method')
            const idx = entities.findIndex(entity => entity._id === entityId);
            if (idx === -1) return Promise.reject(`Unknown Entity ${entityType} with Id: ${entityId}`)
            entities.splice(idx, 1)
            _save<entityType[]>(entityType, entities)
        })
}

function _save<entitiesType>(entityType: string, entities: entitiesType) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

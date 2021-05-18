import fetchService from '../fetchService'

jest.mock('fetchService', ()=> { 
    return {
    get: jest.fn(()=> Promise.resolve([{title: 'foo', id:bar}]))
    }
})

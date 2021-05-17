import fetchService from '../fetchService'

jest.mock('fetchService', ()=> ({ 
    __esModule:true,
    get: jest.fn(()=> Promise.resolve([{title: 'foo', id:bar}]))
}))

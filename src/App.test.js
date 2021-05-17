import {render, cleanup} from '@testing-library/react'
import fetchService from './service/fetch/fetchService'
import App from './App'

jest.doMock('./service/fetch/fetchService') 

describe('the App component', ()=>{
    it('should show "loading" when the fetch is on pending',()=>{
        const {getByTitle} = render(<App/>)
        const loading = getByTitle('loading')
        expect(loading).toBeInTheDocument();
        cleanup();
    });

    // it('should get todoData', ()=>{
    //     fetchService()
    //     expect(fetchService).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos')
    // })
})
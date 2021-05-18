import { render, fireEvent } from "@testing-library/react";
import Form from "./Form";

describe('The Form component', () => {
    it('should change the input value on change', ()=>{
        const {getByTitle}=render(<Form/>)
        const input = getByTitle('newTodo')
        fireEvent.change(input, {target:{value: 'foo'}})
        expect(input.value).toEqual('foo')
    })

    it('submits', ()=> {
        const addTodo = jest.fn(); //mock the addTodo function
        const {getByTitle} = render(<Form addTodo={addTodo} onSubmit = {addTodo}/>);
        fireEvent.submit(getByTitle('form'));
        expect(addTodo).toHaveBeenCalled(); //check if the mockfunction is called when the form is submitted
    })



})
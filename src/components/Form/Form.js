import React, {useState} from 'react'

export default function Form({addTodo}) {

    const [text, setText] = useState('')

    const textChange = (value) => { 
        setText(value)
    }

    return (
        <form title='form' onSubmit={(e)=> {addTodo(e); setText('')}}>
         <input type='text' name='newTodo' title='newTodo' value={text} onChange = {(e)=> textChange(e.target.value)}/>
         <button type='submit' title='submit'>Submit</button>   
        </form>
    )
}

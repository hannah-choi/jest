import React, {useState} from 'react'

export default function View({edit, id, title, deleteTodo, setEdit}) {

    const [text, setText] = useState(title);

    const onTodoChange = (e) => {
      setText(e.target.value);
    };
  
    const editView = (<form title='modifyForm' onSubmit={(e)=> {e.preventDefault(); modifyTodo(id, text)}}>
    <input type='text' name='text' onChange={(e)=> onTodoChange(e)}/>
    <input type='submit'/>
    <button onClick={()=> setEdit(false)}>cancel</button>
</form>)

    const normalView = (<>
        {title}
        <button title='delete' onClick={()=> deleteTodo(id)}>delete</button>
        <button title='modify' onClick={()=> setEdit(true)}>modify</button>
        </>)


    return (
        {edit? editView: normalView}
    )
}

import React, {useEffect, useState} from 'react'
import ListItem from './ListItem'

export default function List() {

    const [data, setData] = useState([])

    const getData = async() => {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos')
            const result = await res.json()
            setData(result.slice(0,10))
    }

    useEffect( () => {
        getData()
    }, [])


    return (
        <ul className='list' data-testid='list'>
            {data && data.map(item=> <ListItem todoItem={item.title} className={`${item.id % 2 === 0 ? 'even':'odd'}`}/>)}
        </ul>
    )
}

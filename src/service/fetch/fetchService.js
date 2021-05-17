import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos'

export default async () => {
    const res = await axios.get(`${url}`)
    return res.data;
}

import { useEffect,useState } from 'react';

const UseEffectApi = () => {
  const[users,setUsers]=useState([]);
  useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setUsers(data));
    },[])
  return (
    <div>
      <ul>
        {users.map((user,index)=>(
          <li key={index}>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>
            <p>Latitude:{user.lat}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UseEffectApi
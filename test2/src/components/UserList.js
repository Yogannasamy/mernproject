
import React, { useState, useEffect } from 'react';

const UserList = () => {
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('https://reqres.in/api/users?page=1')
            .then(response => response.json())
            .then(data => {
                console.log(data); 
                setUsers(data.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [page]);


    return (
        <div>
            <h1>User List Page</h1>
            <select onChange={(e) => setPage(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.first_name} {user.last_name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
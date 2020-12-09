import React, { useState } from 'react';
import users from '../users.json';

function Form() {

  const [user, setUser] = useState({});

  const [userTable, setuserTable] = useState(users);
  

  function onChange(event){

    const {name, value} = event.target;
    setUser({...user, [name]: value});
    //presenter requisições http
  
  }

  function onSubmit(event){

    event.preventDefault();
    
    // const copyUsers = users;
    // copyUsers.push(user);
    setuserTable([...users, user]); //spread 
    console.log(userTable);
  }

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="name">
              <span>Nome:</span>
              <input
                id='name'
                type="text"
                name="name"
                onChange={onChange}
              />
            </label>
            <label htmlFor="email">
            <span>Email:</span>
              <input
                id='email'
                type="email"
                name="email"
                onChange={onChange}
              />
            </label>
            <label htmlFor="age">
            <span>Age:</span>
              <input
                id='age'
                type='number'
                name='age'
                onChange={onChange}
              />
            </label>
          </div>
          <div>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
      <div>
        <table>
        <thead>
          <th>Nome</th>
          <th>Email</th>
          <th>Idade</th>
        </thead>
        <tbody>
          {userTable.map((user, index)=>{
             return(
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            )
          })}
        </tbody>
        </table>
      </div>
    </>
  )

}

export default Form;

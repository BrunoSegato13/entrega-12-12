import React, { useState, useEffect } from 'react';
import users from '../users.json';

function Form() {

  const [user, setUser] = useState({});

  const [userTable, setuserTable] = useState(users);
  

  function onChange(event){
    const {name, value} = event.target;
   
    setUser({...user, [name]: value});
  }

  function onSubmit(event){

    event.preventDefault();
    users.push(user)
    //setuserTable(users);
    //console.log(users)
    console.log(userTable);
   
  }

  useEffect(()=>{
    setuserTable(users);
  }, [onSubmit]);
  




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
                type="text"
                name="email"
                onChange={onChange}
              />
            </label>
            <label htmlFor="age">
            <span>Age:</span>
              <input
                id='age'
                type='number'
                name="age"
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
          {userTable.map((users, index)=>{
             return(
              <tr key={index}>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.age}</td>
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

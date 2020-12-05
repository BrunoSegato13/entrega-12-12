import React, { useState } from 'react';

function Form() {

  const [user, setUser] = useState({});

  

  function onChange(event){
    const {name, value} = event.target;
   
    setUser({...user, [name]: value});
  }

  function onSubmit(event){

    event.preventDefault();
    console.log(user)
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
    </>
  )

}

export default Form;

import React from "react";
import App from "../App";
import useForms from "../hooks/useForms";
import { types } from "../types/types";
import { createUser } from "../Functions/createUser";
import userReducer from "../hooks/userReducer";

function Login() {
  const [state, dispatch] = userReducer({users: []});

  const [form, handleChange] = useForms();

  const handleSubmit = (e) => { 
    e.preventDefault();

    const newUser = createUser(form);

    dispatch({
      type: types.ADD_USER,
      payload: newUser
    })
  } 

  const handleDelete = (e) => {
    e.preventDefault();

    dispatch({
      type: types.LOGOUT_USER
    })
  }

  return (  
    <div className="App">
      <header className="App-header">
        <button type="submit" onClick={handleDelete}>Logout and delete info</button>
        {state.users.length > 0 ?  
        ( <>
          <App />
          </> ):
        (
          <>
          <h1 className="title">Login</h1>
          <form action="">
            <div>
              <input 
                type="text"
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <input 
                type="password"
                placeholder="Password"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <button className="btn-search" type="submit" onClick={handleSubmit}>Login</button>
          </form>
          </>
        )  
        }
      </header>
    </div>
  );
}

export default Login;
import React from 'react';
import './Login.css'
// import { useState, useEffect } from 'react';

const Login = () => {
    // const [dataList, setDataList] = useState([]);

    // useEffect (() => {
    //   fetch("http://localhost:3001/customer")
    //   .then(response => response.json())
    //   .then(data => setDataList(data))
    //   .catch(err => console.log(err))
    // },[])

    return (
    <div className="">

<form>
  <div class="form-group">
    <label for="username">Username:</label>
  
  </div>
  <div class="form-group">
    <label for="password">Password:</label>
    
  </div>
  <button type="submit">Login</button>
</form>
        
    </div>
    );
  }

  export default Login;
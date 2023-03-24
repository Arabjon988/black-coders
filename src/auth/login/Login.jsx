import {useRef, useContext} from 'react';
import { Navigate } from 'react-router-dom';
import Context from '../../context/Context';


import './login.css'

const Login = () => {
  const {setUser} = useContext(Context); 
  const fullNameRef = useRef();
  const passwordRef = useRef();

  const onSubmit = e => {
    e.preventDefault();
    const payload = {
      fullName: fullNameRef.current.value,
      password: passwordRef.current.value,
    }
    setUser(payload);
    return Navigate("/")
  }
  

  return (
    <div className='login'>
      <div className="container login_main">
      <form action="" onSubmit={onSubmit} className="login__form">
          <h1 className='login_form_title'>Ro'yxatdan o'tish</h1>
          <label htmlFor="fulName1">Full Name</label><br />
          <input ref={fullNameRef} type="text" required placeholder='ismingiz' id='fullName'/><br />
          <label htmlFor="password1"> Password</label><br />
          <input ref={passwordRef} type="password" min="6"  required placeholder='parolingiz' id='password'/><br />
          <button type='submit' className='loginBtn'>Ro'yxatdan o'tish</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
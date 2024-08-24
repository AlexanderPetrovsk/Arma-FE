import { NavLink } from 'react-router-dom';
import './login.scss';

function Login() {
    return (
        <div className='login-container d-flex'>
            <div className='login-form d-flex flex-column a-items-center f-basis-50 j-content-center'>
                <div className='f-s-32 f-w-700 m-b-2'>WELCOME BACK!</div>
                <div className='f-s-24 f-w-300 m-b-5'>Log In To Your Account</div>
                <input className='text-input w-80 m-b-2' placeholder='Username/Phone Number/Email Address' />
                <input className='text-input w-80 m-b-2' type='password' placeholder='Enter your password' />
                <div className='d-flex a-items-center m-b-5 w-80'>
                    <input type='checkbox' />
                    <label>Keep me signed in</label>
                </div>
                <button className='primary-button lg-button'>Log in</button>
            </div>
            <div className='new-user f-basis-50 p-t-b-20 text-center c-white'>
                <div className='f-s-32 f-w-700 m-b-2'>NEW TO ARMA?</div>
                <div className='f-s-24 f-w-300 m-b-5'>Enter your personal details and start your journey</div>
                <button className='secondary-button lg-button'>
                    <NavLink className='c-red' to='/register'>Register</NavLink>
                </button>
            </div>
        </div>
    )
}

export default Login;
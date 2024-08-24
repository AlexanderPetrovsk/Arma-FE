import { NavLink } from 'react-router-dom';
import './register.scss';

function Register() {
    return (
        <div className='register-container d-flex'>
            <div className='old-user f-basis-50 d-flex a-items-center j-content-center flex-column c-white p-t-b-20'>
                <div className='f-s-32 f-w-700 m-b-2'>ALREADY HAVE AN ACCOUNT ?</div>
                <button className='secondary-button lg-button'>
                    <NavLink className='c-red' to='/login'>Log In</NavLink>
                </button>
            </div>
            <div className='register-form d-flex flex-column a-items-center f-basis-50 j-content-center p-t-b-20'>
                <div className='f-s-32 f-w-700 m-b-2'>Let’s get started</div>
                <div className='f-s-24 f-w-300 m-b-5'>Create An Account To Get All Features</div>
                <input className='text-input w-80 m-b-2' placeholder='Name Surname' />
                <input className='text-input w-80 m-b-2' placeholder='Phone Number' />
                <input className='text-input w-80 m-b-2' placeholder='Email Address' />
                <input className='text-input w-80 m-b-2' placeholder='Username' />
                <input className='text-input w-80 m-b-2' type='password' placeholder='Enter your password' />
                <div className='d-flex a-items-center m-b-5 w-80'>
                    <input type='checkbox' className='m-r-2' />
                    <label className='w-80'>By clicking here, I state that I have read and understood
                    the Privacy Policy & Terms of Use</label>
                </div>
                <button className='primary-button lg-button'>Log in</button>
            </div>
        </div>
    )
}

export default Register;
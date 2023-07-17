import '../admin.css'
import React from 'react'
function AdminLogin(){
    return(
        <div className='adminLogin'>
            <h1 className='text-shadow'>Admin Login</h1>
            <form>
                <div className='input-group'>
                <label>
                    Email
                </label>
                <input type='email' />
                </div>
                <div className='input-group'>
                <label>
                    Password
                </label>
                <input type='password' />
                </div>
                <input type='submit' value='Login' id='btn-submit'/>     
            </form>
        </div>
    )
}export default AdminLogin
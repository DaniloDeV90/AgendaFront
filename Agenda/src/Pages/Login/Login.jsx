import React, { useState } from 'react'
import "./Login.css"
import BtnLogin from './BtnLogin'

const Login = () => {

    const [Email,setEmail] = useState ()
    const [senha,Setsenha] = useState ()
  return (
 <main className='mainLogin'>

<div className="formLogin">


    <h1 id='title'>LOGIN</h1>

    <div className="form">

        <form action="">

            <div className="email">
            <label htmlFor="">
                email: 
                <input type="text" title='Nome' className='NameLogin' onChange={e => setEmail (e.target.value)} />
            </label>
            </div>

            <div className="Password">
            <label htmlFor="" title='Senha'>
                Senha: 
                <input type="password" onChange={e => Setsenha (e.target.value)} />
            </label>
            </div>
        </form>
    </div>
    <div className="btn">
    <BtnLogin email={Email} senha={senha} />
    </div>
</div>




    </main>
  )
}

export default Login
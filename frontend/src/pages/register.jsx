import { useState } from 'react'
import { UseUserContext } from '../hooks/useUserHook'
import { Link } from 'react-router-dom'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const { dispatch } = UseUserContext()

    const registerUser = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:4000/api/user/register`, {
                method: 'POST',
                body: JSON.stringify({ username, email, password }),
                headers: { 'Content-Type': 'application/json' }
            })

            const json = await response.json()

            if (!response.ok) {
                setError(json.error)
            }
            if (response.ok) {
                setError(null)
                localStorage.setItem('user', JSON.stringify(json))
                dispatch({ type: 'LOGIN', payload: json })
            }
        }
        catch (error) {

            console.log(error)
        }
    }

    return (
        <div className='m-auto mt-24 w-4/12 shadow rounded '>
            <form className=' flex flex-col' onSubmit={registerUser}>
                <h1 className='m-10 text-5xl text-blue-500'>Register</h1>
                <label className='m-auto mb-3 w-3/4'>Username:</label>
                <input className=' m-auto border-2 border-blue-200 rounded w-3/4 ' type='text' onChange={(e) => setUsername(e.target.value)}
                    value={username}></input>

                <label className='m-auto mb-3 w-3/4'>email:</label>
                <input className=' m-auto border-2 border-blue-200 rounded w-3/4 ' type='email' onChange={(e) => setEmail(e.target.value)}
                    value={email}></input>

                <label className='m-auto mb-3 w-3/4'>password:</label>
                <input className=' m-auto border-2 border-blue-200 rounded w-3/4 ' type='password' onChange={(e) => setPassword(e.target.value)}
                    value={password}></input>
                <p className='m-auto mt-2'>Already have a account<Link className='text-blue-500' to='/login'> Login here</Link></p>
                <button className='bg-blue-500 rounded my-5 mx-24 py-2 text-white hover:bg-blue-700 transition-all' type="submit">register</button>
                {error && <div className='bg-red-300 rounded m-auto p-2 mb-2 border-2 border-red-500 text-red-500'>{error}</div>}
            </form>
        </div>
    )
}

export default Register
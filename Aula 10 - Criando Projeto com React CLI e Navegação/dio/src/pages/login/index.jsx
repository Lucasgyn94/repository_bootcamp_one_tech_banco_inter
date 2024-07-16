import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <button type='button'>
                <Link to="/">Voltar para Home</Link>
            </button>
            
        </>
    )
}

export {Login}
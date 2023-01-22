import { useState } from "react";



const Register = () => {
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [atype, setAtype] = useState('');
    const [message, setMessage] = useState("");

    const sendMessage = (text, type='danger', time = 5) => {
        setAtype(type); 
        setMessage(text);
        setTimeout(() => {
            if (atype === 'success') document.location.replace('/login')
        }, time * 1000);
    }


    const submit = e => {
        e.preventDefault();
        if(email.length < 3 || password.length < 3) return sendMessage('Please fill out form correctly');
        fetch('api/register', {
            method: 'POST',
            body: JSON.stringify({username, email, password}),
            headers: {'Content-Type': 'application/json'}
        })
        .then ((res)=> res.json())
        .then ((data) => {
            if (data.status) sendMessage(data.message,'success')
            else sendMessage(data.message)
        })
    }

    return (
        <div>
            <div className="container mt-5">
            <div className = {'alert alert-${atype}'} >
                {message}
            </div>
                 <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="test" className="form-control" id="username" onChange={(e)=>setUsername(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <button onClick={e => submit(e)} className="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register
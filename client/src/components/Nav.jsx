
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    const [logged, status] = useState(false);
    const [user, setUser] = useState('');

    useEffect(() => {
        fetch('api/isLogged')
        .then(res => res.json())
         .then(data => {
            if(data.status) { 
                status(true);
                 setUser(data.user)
            }
        })
    },[])

    

    return (


        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="d-flex flex-row">
                <div className='p-2'><span className=''><h2>Note Taker</h2></span></div>
                {logged ?
                (<>
                <div className="p-2">
                            <span className="nav-link">User is: {user}</span>
                </div>
                <div className="p-2">
                            <span className='nav-link' onClick={() => {
                                fetch('api/logout')
                                .then(res=>res.text())
                                .then(data => document.location.replace('/login'))
                                }}
                            >Logout</span>
                </div>
                </>
                ) :
                <>
                <div className="p-2">
                                <Link className="nav-link" to='/register'>Register</Link>
                </div>
                <div className="p-2">
                                <Link className="nav-link" to='/login'>Login</Link>
                </div>
                </>
                }
            </div>
        </nav>
        
    )
}

export default Nav
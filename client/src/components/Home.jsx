
import { useState, createContext } from 'react';
import CreateNote from './CreateNote';
import ShowNotes from './ShowNotes';


export const userContext=createContext();

const Home = () => {
    const [type, setType] = useState('danger');
    const [message, setMessage] = useState('test');
    const [alert, setAlert] = useState({display: 'none'});
    const [noteUpdate, runNoteUpdate] = useState(0);
    return (
        <div className='container'>
        <userContext.Provider value={{setType, setMessage, setAlert, runNoteUpdate, noteUpdate}}>
            <div className={`alert alert-${type}`} style={alert} role="alert">
                {message}
            </div>
            <div>
                <CreateNote/>
                <ShowNotes/>
            </div>
        </userContext.Provider>
        </div>
    )
}

export default Home
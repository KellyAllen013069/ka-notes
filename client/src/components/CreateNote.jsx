import { useContext, useState } from "react";
import {userContext} from "./Home";

const CreateNote = () => {
    const {
        setType, 
        setMessage,
        setAlert,
        runNoteUpdate} = useContext(userContext);
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');

    const sendMessage = (text, type='danger', time = 5) => {
        setType(type); 
        setMessage(text);
        setAlert({display: 'block'})
        setTimeout(() => {
            if (type === 'success') document.location.replace('/')
        }, time * 1000);
    }
    
    const submit = e => {
        e.preventDefault();
        if (title.length<3 || note.length<10) return sendMessage('Please fill out the form!')

        fetch('/api/createNote', 
        { method: 'POST',
            body: JSON.stringify({title, note}),
            headers: {'Content-Type': 'application/json'}

        })
        .then(res => res.json())
        .then(data => {
            if(data.status) {
                sendMessage(data.message, 'success');
                runNoteUpdate(prev => prev + 1);
            }
            else sendMessage(data.message)
        })

    }

    return (
        <div>
          
            <div className="card mt-5">    
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title: </label>
                            <input type="text" className="form-control" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="note" className="form-label">Note:</label>
                            <textarea className="form-control" rows="5" id="note" value={note} onChange={(e)=>setNote(e.target.value)}/>
                        </div>
                        <button onClick={e => submit(e)} className="btn btn-primary">Add Note</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateNote;
import {memo, useContext, useEffect, useState} from "react";
import {userContext} from "./Home";
import settings from "../config/settings.json"

const Note = () => {
    const {noteUpdate} = useContext(userContext);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true)
        fetch(`${settings.domain}/api/getNotes`)
        .then(res =>res.json())
        .then(retdata => {
                console.log(retdata)
                if(retdata.status != 0) setData(retdata)
                setIsLoading(false)
        })
    }, [noteUpdate])

    if(isLoading) return(<p>Loading...</p>)

    return (
            <>
               {data === [] ? (<div><span>No notes added!</span></div>)
               :
               data.map(e => (
                    <div className="card" style={{width: '18rem', background: 'rgba(0,0,0,.04', margin: '.2rem' }} key={e.noteID}>
                        <h5 className="card-title">{e.title}</h5>
                        <span style={{fontSize: '0.9rem'}} className="card-subtitle mb2 text-muted">{e.date}</span>
                        <p className="card-text">{e.note}</p>
                    </div>
                    )
                )
               }
            </>
    )
}

export default Note
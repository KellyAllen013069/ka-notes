import Note from './Note';

const ShowNotes = () => {


    
    return (
            <div className="card mt-5">    
                <div className="card-body">
                    <h3>Notes</h3>
                    <div className='d-flex flex-wrap'>
                        <Note/>
                    </div>
                </div>
            </div>

    )
}

export default ShowNotes
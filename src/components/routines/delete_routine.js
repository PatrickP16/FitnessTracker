import axios from 'axios';
import siteUrl from '../url';

async function handleSubmit(event, { token, routine }) {
    event.preventDefault();

    try {
        const response = await axios(`${siteUrl}/api/routines/${routine.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        
        location.assign('/routines')
    } catch(error) {
        console.error(error);
    };
};

const DeletePost = ({ routine, setDeleting }) => {
    const token = localStorage.getItem('Token')

    const submitFields = { token, routine }
    
    return (
        <form className='delete-routine' onSubmit={(event) =>
             handleSubmit(event, submitFields)}>
                <h3>Delete Your Routine</h3>
                <button className='sub-edits' type='submit'>YES</button>
                <button className='cancel' type='button' onClick={(event) => {
                    event.preventDefault();
                    setDeleting(false);
                }}>NO</button>
        </form> 
    );
};

export default DeletePost;
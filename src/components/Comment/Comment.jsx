import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Comment() {

    const dispatch = useDispatch();
    const [comment, setComment] = useState('')

    const sendToComment = (event) => {
        event.preventDefault()
        console.log('value of comment is:', comment)
        dispatch({ type: 'ADD_COMMENT', payload: comment })
    }

    return (
        <div>
            <h3>Any Comments you want to leave?</h3>
            <form onSubmit={sendToComment}>
                <label htmlFor="comment">Enter Comments Here!</label>
                <input
                    type="text"
                    name="comment"
                    onChange={(event) => setComment(event.target.value)}
                ></input>
                <button>Next</button>
            </form>
        </div>
    )

}

export default Comment;
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Comment() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [comment, setComment] = useState('')

    const sendToComment = (event) => {
        event.preventDefault()
        console.log('value of comment is:', comment)
        dispatch({ type: 'ADD_COMMENT', payload: comment })
        history.push('/review')
    }

    return (
        <div>
            <h3>Any Comments you want to leave?</h3>
                <label htmlFor="comment">Enter Comments Here!</label>
                <input
                    type="text"
                    name="comment"
                    onChange={(event) => setComment(event.target.value)}
                ></input>
                <button onClick={sendToComment}>Next</button>
        </div>
    )

}

export default Comment;
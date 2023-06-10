import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Understanding() {

    const dispatch = useDispatch();
    const history = useHistory()
    const [understanding, setUnderstanding] = useState(0)

    const sendToSupported = (event) => {
        event.preventDefault()
        console.log('value of understanding is:', understanding)
        if (understanding > 5 || understanding < 1) {
            alert('Please enter value between 1 & 5')
        } else {
            dispatch({ type: 'ADD_UNDERSTANDING', payload: understanding })
            history.push('/support')
        }
    }

    return (
        <div>
            <h3>How well are you Understanding the content?</h3>
            <label htmlFor="understanding">Enter a Number between 1 and 5</label>
            <input
                required
                type="number"
                name="understanding"
                min="1"
                max="5"
                onChange={(event) => setUnderstanding(event.target.value)}
            ></input>
            <button onClick={sendToSupported}>Next</button>
        </div>
    )
}

export default Understanding;
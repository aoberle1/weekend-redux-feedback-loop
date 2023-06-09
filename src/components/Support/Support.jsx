import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Support () {

    const dispatch = useDispatch();
    const history = useHistory();
    const [support, setSupport] = useState(0)

    const sendToSupport = (event) => {
        event.preventDefault()
        console.log('value of support is:', support)
        dispatch({ type: 'ADD_SUPPORT', payload: support})
        history.push('/comments')
    }

    return (
        <div>
        <h3>How well are you being Supported?</h3>
            <label htmlFor="support">Enter a Number between 1 and 5</label>
            <input 
            required
            type="number"
            name="support"
            min="1"
            max="5"
            onChange={(event) => setSupport(event.target.value)} 
            ></input>
            <button onClick={sendToSupport}>Next</button>
    </div>
    )

}

export default Support;
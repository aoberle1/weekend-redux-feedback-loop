import { useState } from "react";
import { useDispatch } from "react-redux";


function Understanding () {

    const dispatch = useDispatch();
    const [understanding, setUnderstanding] = useState(0)

    const sendToSupported = (event) => {
        event.preventDefault()
        console.log('value of understanding is:', understanding)
        dispatch({ type: 'ADD_UNDERSTANDING', payload: understanding})
        setUnderstanding(0)
    }

    return(
        <div>
        <h3>How well are you Understanding the content?</h3>
        <form onSubmit={sendToSupported}>
            <label htmlFor="feeling">Enter a Number between 1 and 5</label>
            <input
            required 
            type="number"
            name="feeling"
            min="1"
            max="5"
            onChange={(event) => setUnderstanding(event.target.value)} 
            ></input>
            <button>Next</button>
        </form>
    </div>
    )
}

export default Understanding;
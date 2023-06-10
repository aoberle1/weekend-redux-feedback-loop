import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Feeling () {

    const dispatch = useDispatch();
    const history = useHistory();
    const [feeling, setFeeling] = useState(0)

    const sendToUnderstanding = (event) => {
        event.preventDefault()
        console.log('value of feeling is:', feeling)
        if (feeling > 5 || feeling < 1) {
            alert('Please enter value between 1 & 5')
        } else {
        dispatch({ type: 'ADD_FEELING', payload: feeling})
        history.push('/understanding')
        setFeeling(0)
        }
    }

    return (
        <div>
            <h3>How are you Feeling today?</h3>
                <label htmlFor="feeling">Enter a Number between 1 and 5</label>
                <input 
                required
                type="number"
                name="feeling"
                min="1"
                max="5"
                onChange={(event) => setFeeling(event.target.value)} 
                ></input>
                <button onClick={sendToUnderstanding}>Next</button>
        </div>
    )
}

export default Feeling;
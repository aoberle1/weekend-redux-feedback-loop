import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Feeling () {

    // setting up useDispatch & useHistory as variables for use later
    const dispatch = useDispatch();
    const history = useHistory();

    // state variable for feeling
    const [feeling, setFeeling] = useState(0)

    // function that runs upon click of the next button on feeling page
    const sendToUnderstanding = (event) => {
        event.preventDefault()
        console.log('value of feeling is:', feeling)
        // input validation for input field - default value is 0 so if left blank will not accept
        if (feeling > 5 || feeling < 1) {
            // alerting user they have entered incorrect input
            alert('Please enter value between 1 & 5')
        } else {
        // sending value of feeling state variable to store array
        dispatch({ type: 'ADD_FEELING', payload: feeling})
        // using useHistory hook to move to page with url /understanding
        history.push('/understanding')
        setFeeling(0)
        }
    }

    return (
        <div>
            <h3>How are you Feeling today?</h3>
                <label htmlFor="feeling">Enter a Number between 1 and 5</label>
                <input 
                // with multi-part form required did not work correctly and min/max
                // sets counter max and min but user could still manually input an
                // incorrect integer and have it accept
                // leaving for the moment to ask why it stopped working when I removed
                // the form from each component and put it in the parent only
                // yet still gives an error about a form in a form if i put a form in here too
                required
                type="number"
                name="feeling"
                min="1"
                max="5"
                // each time a number is entered into input field, the value of feeling is updated
                onChange={(event) => setFeeling(event.target.value)} 
                ></input>
                {/* on click of button, run function sendToUnderstanding */}
                <button onClick={sendToUnderstanding}>Next</button>
        </div>
    )
}

export default Feeling;
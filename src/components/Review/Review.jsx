import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Review() {
    const history = useHistory();
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.feedback)

    const handleSubmit = (event) => {
        console.log('feedback to send is:', feedback)
        axios.post('/feedback', {
            feeling: feedback[0],
            understanding: feedback[1],
            support: feedback[2],
            comments: feedback[3]
        })
            .then(response => {
                history.push('/success');
                // dispatch type: RESET sets state back to empty array
                dispatch({ type: 'RESET'})
            }).catch(error => {
                console.log('Problems with the POST:', error);
            })
    }

    const editValue = () => {
        // if( this.closest.tr.(id) === 0) {}
    }

    return (
        <div>
            <h3>Here's Your Feedback!</h3>
            <table>
                <tbody>
                    <tr id="0">
                        <td>How you're feeling:</td>
                        <td>{feedback[0]}</td>
                        <td><button onClick={editValue}>Edit</button></td>
                    </tr>
                    <tr id="1">
                        <td>How well you understand the material:</td>
                        <td>{feedback[1]}</td>
                        <td><button>Edit</button></td>
                    </tr>
                    <tr id="2">
                        <td>How supported you feel:</td>
                        <td>{feedback[2]}</td>
                        <td><button>Edit</button></td>
                    </tr>
                    <tr id="3">
                        <td>Your Comments:</td>
                        <td>{feedback[3]}</td>
                        <td><button>Edit</button></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Review;
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Review () {
    const history = useHistory();
    // const feeling = useSelector(store => store.feeling);
    // const understanding = useSelector(store => store.understanding);
    // const support = useSelector(store => store.support);
    // const comments = useSelector(store => store.comment);
    const feedback = useSelector(store => store.feedback)

    // const feedbackToSend = {
    //     feeling,
    //     understanding,
    //     support,
    //     comments
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('feedback to send is:', feedback)
        axios.post('/feedback', {
            feeling: feedback[0],
            understanding: feedback[1],
            support: feedback[2],
            comments: feedback[3]
        })
            .then(response => {
                history.push('/');
            }).catch(error => {
                console.log('Problems with the POST:', error);
            })
    }

    return (

        <div>
            <h3>Here's Your Feedback!</h3>
            <table>
                <tbody>
                    <tr>
                        <td>How you're feeling:</td>
                        <td>{feedback[0]}</td>
                    </tr>
                    <tr>
                        <td>How well you understand the material:</td>
                        <td>{feedback[1]}</td>
                    </tr>
                    <tr>
                        <td>How supported you feel:</td>
                        <td>{feedback[2]}</td>
                    </tr>
                    <tr>
                        <td>Your Comments:</td>
                        <td>{feedback[3]}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={handleSubmit}>Submit</button>
        </div>

    )
}

export default Review;
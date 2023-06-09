import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Review () {
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comment = useSelector(store => store.comment);

    return (

        <div>
            <h3>Here's Your Feedback!</h3>
            <table>
                <tbody>
                    <tr>
                        <td>How you're feeling:</td>
                        <td>{feeling}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Review;
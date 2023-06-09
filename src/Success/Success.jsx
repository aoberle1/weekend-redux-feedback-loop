import { useHistory } from "react-router-dom";

function Success () {

    const history = useHistory();

    const sendHome = () => {
        // sends user back to homepage upon click of button
        history.push('/')
    }

    return (
        <div>
        <h2>Thank You For Submitting Your Feedback!</h2>
        <br></br>
        <h3>Click Start Over Button to Submit More Feedback! </h3>
        <br></br>
        <button onClick={sendHome}>Start Over</button>
        </div>
    )
}

export default Success;
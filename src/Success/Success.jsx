import { useHistory } from "react-router-dom";

function Success () {

    const history = useHistory();

    const sendHome = () => {
        history.push('/')
    }

    return (
        <div>
        <h2>Thank You For Submitting Your Feedback!</h2>
        <br></br>
        <h3>Click Next Button to Submit More Feedback! </h3>
        <br></br>
        <button onClick={sendHome}>Home</button>
        </div>
    )
}

export default Success;


function Feeling () {

    const sendToUnderstanding = () => {
        
    }

    return (
        <div>
            <h3>How are you Feeling today?</h3>
            <form onSubmit={sendToUnderstanding}>
                <label htmlFor="feeling">Enter a Number between 1 and 5</label>
                <input 
                type="text"
                name="feeling"
                min="1"
                max="5" 
                ></input>
                <button>Next</button>
            </form>
        </div>
    )
}

export default Feeling;
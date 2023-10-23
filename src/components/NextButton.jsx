function NextButton({ dispatch, answer, index, numQuestions }) {
    if (answer === null) return null;
    const lastQuestion = index === numQuestions - 1
    return (
        <>
            {!lastQuestion && <button className="btn btn-ui" onClick={() => dispatch({ type: "nextQuestion" })}>Next</button>}
            {lastQuestion && <button className="btn btn-ui" onClick={() => dispatch({ type: "finnishQuiz" })}>Finish</button>}
        </>
    )
}

export default NextButton 
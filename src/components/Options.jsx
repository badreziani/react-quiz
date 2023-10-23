import Option from "./Option"

function Options({ question, dispatch, answer }) {
    return (
        <div className="options">
            {question.options.map((option, index) => <Option key={option} option={option} correctOption={question.correctOption} index={index} dispatch={dispatch} answer={answer} />)}
        </div>
    )
}

export default Options
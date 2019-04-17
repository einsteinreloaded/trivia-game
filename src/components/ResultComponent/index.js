import React from 'react'
const ResultComponent = (props)=>{
    if(props.quiz){
        let correctAnswers = props.quiz.filter((question)=>{
            return question.isCorrect
        })
        return(
            <div className="results-container">
                <h2>Results</h2>
                <div>
                    <span className="correct-label">Correct Answer Count : </span>
                    <span>{correctAnswers.length}</span>
                </div>
            </div>
        )
    }
    return null
}

export default ResultComponent
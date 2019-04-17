import React from 'react'

let optionsList = (props)=>{
    let options = props.questionData.incorrect_answers.map((option,i)=>{
        return <label key={i} onClick={()=>props.handleSelection(false,props.index)}><input type="radio" name={`ques${props.index}`}/><span dangerouslySetInnerHTML={{__html:option}}/></label>
    })
    options.push(
        <label key={props.questionData.incorrect_answers.length+1} onClick={()=>props.handleSelection(true,props.index)}><input type="radio" name={`ques${props.index}`}/><span dangerouslySetInnerHTML={{__html:props.questionData.correct_answer}}/></label>
    )
    return options
}
const Quiz = (props)=>{
    const {questionData,handleSelection,index} = props
    return(
        <div className="quiz-question-container">
            <div className="quiz-question-text-container" dangerouslySetInnerHTML={{__html:questionData.question}}/>
            <div className="quiz-options-container">
                {optionsList({questionData,handleSelection,index})}
            </div>
        </div>
    )
}
export default Quiz;
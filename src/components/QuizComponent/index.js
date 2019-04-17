import React, { Component } from 'react'
import QuizQuestion from 'components/QuizComponent/partials/quiz-question'
class QuizComponent extends Component {

    quizQuestions = ()=>{
        return this.props.quiz.map((question,i)=>{
            return <QuizQuestion questionData={question} key={i} index={i} handleSelection={this.props.handleSelection}/>
        })
    }

    render(){
        return(
            <div>
                {this.quizQuestions()}
            </div>
        )
    }
}
export default QuizComponent
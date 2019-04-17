import React, { Component } from 'react'
import QuizComponent from 'components/QuizComponent'
import {Button,Loader} from 'components/common'
import ResultComponent from 'components/ResultComponent'
class TriviaApp extends Component {
    constructor(props) {
        super(props)
        this.state={
            isQuizStarted:false,
            difficulty:"easy"
        }
    }
    startQuiz = event => {
        let url = `https://opentdb.com/api.php?amount=10&category=9&difficulty=${this.state.difficulty}&type=multiple`
        this.setState({
            ...this.state,
            isQuizStarted:true,
            isFetching: true,
            showResults:false
        })
        fetch(url).then(result => result.json())
            .then(data => {
                this.setState({
                    ...this.state,
                    quiz: data.results,
                    isFetching:false
                })
            }).catch((err)=>{
                alert("Failed to load quiz. Check your connection")
                this.setState({
                    ...this.state,
                    isQuizStarted:false,
                    isFetching:false
                })
            })
    }
    submitQuiz = (event) => {
        let showResults = true
        if(this.state.isFetching){
            showResults = false
        }
        this.setState({
            ...this.state,
            isQuizStarted:false,
            isFetching:false,
            showResults:showResults
        })
    }
    handleSelection = (isCorrect,index)=>{
        let markedQuestion = {...this.state.quiz[index],isCorrect}
        let computedQuizList = [...this.state.quiz]
        computedQuizList.splice(index,1,markedQuestion)
        this.setState({
            ...this.state,
            quiz: computedQuizList
        })
    }

    render() {
        return (
            <div>
                <div className="button-container">
                    <Button onClick={this.startQuiz} isButtonVisbile={this.state.difficulty && !this.state.isQuizStarted} className="start-quiz-button" text="Start Quiz"/>
                    <Button onClick={this.submitQuiz} isButtonVisbile={this.state.difficulty && this.state.isQuizStarted} className="submit-quiz-button" text="Submit Answers"/>
                </div>
                <Loader isVisible={this.state.isFetching}/>
                {this.state.showResults && <ResultComponent quiz={this.state.quiz}/>}
                {!this.state.isFetching && this.state.isQuizStarted ? <QuizComponent quiz={this.state.quiz} handleSelection={this.handleSelection}/> : null}
            </div>
        )
    }
}

export default TriviaApp


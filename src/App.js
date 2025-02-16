import React from 'react';
import Game from "./Game";
import "./index.css";
import Result from "./Result";

const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },

];

function App() {
    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);
    const question = questions[step]

    const ChooseVariant = (index) => {
        setStep(step + 1);
        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }

    const TryAgain = () => {
        setStep(0);
        setCorrect(0);
    }




    return (
      <div className="App">
          {
            step !== questions.length ?
            <Game question={question}  chooseVariant={ChooseVariant} correct={correct} /> :
            <Result questions={questions} correct={correct} TryAgain={TryAgain} />
          }
      </div>
    );
}

export default App;


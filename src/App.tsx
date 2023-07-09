import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Training from './components/Training';
import { ITraining } from './interface/ITraining';

function App() {
  const [trainingList, setTreningList] = useState<ITraining[]>([]); 

  const addTraining = (training: ITraining): void => {
    !trainingList.some(({ date }) => date === training.date)
      ? setTreningList(prev => [...prev, training])
      : changeTraining(training)
  }

  const changeTraining = (training: ITraining): void => {
    setTreningList(prev => prev.map(item => item.date === training.date
      ? {...item, distance: item.distance + training.distance}
      : item))
  }

  const removeTraining = (date: string): void => {
    setTreningList(trainingList.filter(item => item.date !== date))
  }

  const sortedList = (): ITraining[] => {
    return [...trainingList].sort((b, a) => +a.date - +b.date)
  }
  
  return (
    <div className='app'>
      <h1 className='title'>Учёт тренировок</h1>
      <Form 
        addTraining={addTraining}
      />
      <div className="list">
        <div className="list-title">
          <span className="list-title-row">Дата (ДД.ММ.ГГ)</span>
          <span className="list-title-row">Пройдено км</span>
          <span className="list-title-row">Действия</span>
        </div>
        <div className="list-content">
          {
            sortedList().map(training => 
              <Training
                key={training.date}
                training={training}
                remuveTraining={removeTraining}
              />
            )
          }
        </div>
        
      </div>
    </div>
  )
}

export default App
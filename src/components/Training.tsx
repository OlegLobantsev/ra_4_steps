import { TrainingProps } from "../interface/TrainingProps";

const Training: React.FC<TrainingProps> = ({ training, remuveTraining }) => {
  const date = training.date && new Date(training.date).toLocaleDateString() || '';

  return (
    <div className='content-row'>
      <div>{date}</div>
      <div>{training.distance}</div>
      <div>
        <button className="content-btn">&#9998;</button>
        <button 
          className="content-btn"
          onClick={() => training.date && remuveTraining(training.date)}
        >&#10008;</button>
      </div>
    </div>
  )
}

export default Training
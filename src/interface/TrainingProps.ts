import { ITraining } from "./ITraining";

export type TrainingProps = {
  training: ITraining;
  remuveTraining: (date: string) => void
}
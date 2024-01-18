export interface DateCardProps {
  setDate: (Date: Date) => void;
  date: Date;
}

export interface TaskCardProps {
  task: string;
  setTask: (task: string) => void;
}

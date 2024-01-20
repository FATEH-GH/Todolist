export interface DateCardProps {
  setDate: (Date: Date) => void;
  date: Date;
}

export interface TaskCardProps {
  task: string;
  setTask: (task: string) => void;
}

export interface TaskProps {
  id: number;
  task: string;
  settasks: (singletask: any) => void;
  created_at?: string;
  ispinned?: boolean;
  ischecked?: boolean;
  updated_at?: string;
}

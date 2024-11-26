import styles from './TaskTitle.module.scss';

interface TaskTitleProps {
  title: string;
  className?: string;
}

export function TaskTitle({ title, className }: Readonly<TaskTitleProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <h3 className={styles.TaskTitle + externalClass}>{title}</h3>;
}

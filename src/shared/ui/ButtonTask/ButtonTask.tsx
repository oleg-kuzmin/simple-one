import styles from './ButtonTask.module.scss';

interface ButtonTaskProps {
  text: string;
  isAccent?: boolean;
  onClick?: VoidFunction;
  className?: string;
}

export function ButtonTask({ text, isAccent, onClick, className }: Readonly<ButtonTaskProps>) {
  const externalClass = className ? ` ${className}` : '';
  const modifierClass = isAccent ? ` ${styles.ButtonTask_Accent}` : '';

  return (
    <button className={styles.ButtonTask + modifierClass + externalClass} onClick={onClick} type="button">
      {text}
    </button>
  );
}

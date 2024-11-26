import styles from './ButtonBorderClose.module.scss';

interface ButtonBorderCloseProps {
  onClick?: VoidFunction;
  className?: string;
}

export function ButtonBorderClose({ onClick, className }: Readonly<ButtonBorderCloseProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <button className={styles.ButtonBorderClose + externalClass} onClick={onClick} type="button"></button>;
}

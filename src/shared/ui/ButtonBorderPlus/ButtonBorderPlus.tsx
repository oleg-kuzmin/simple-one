import styles from './ButtonBorderPlus.module.scss';

interface ButtonBorderPlusProps {
  onClick?: VoidFunction;
  className?: string;
}

export function ButtonBorderPlus({ onClick, className }: Readonly<ButtonBorderPlusProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <button className={styles.ButtonBorderPlus + externalClass} onClick={onClick} type="button"></button>;
}

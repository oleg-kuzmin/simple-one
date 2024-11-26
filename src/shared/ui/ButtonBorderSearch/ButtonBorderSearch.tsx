import styles from './ButtonBorderSearch.module.scss';

interface ButtonBorderSearchProps {
  onClick?: VoidFunction;
  className?: string;
}

export function ButtonBorderSearch({ onClick, className }: Readonly<ButtonBorderSearchProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <button className={styles.ButtonBorderSearch + externalClass} onClick={onClick} type="button"></button>;
}

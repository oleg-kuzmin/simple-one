import styles from './ButtonBorderCalendar.module.scss';

interface ButtonBorderCalendarProps {
  onClick?: VoidFunction;
  className?: string;
}

export function ButtonBorderCalendar({ onClick, className }: Readonly<ButtonBorderCalendarProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <button className={styles.ButtonBorderCalendar + externalClass} onClick={onClick} type="button"></button>;
}

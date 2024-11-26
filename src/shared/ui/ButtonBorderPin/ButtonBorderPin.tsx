import styles from './ButtonBorderPin.module.scss';

interface ButtonBorderPinProps {
  isActive?: boolean;
  onClick?: VoidFunction;
  className?: string;
}

export function ButtonBorderPin({ isActive, onClick, className }: Readonly<ButtonBorderPinProps>) {
  const externalClass = className ? ` ${className}` : '';
  const modifierClass = isActive ? ` ${styles.ButtonBorderPin_Active}` : '';
  return <button className={styles.ButtonBorderPin + modifierClass + externalClass} onClick={onClick} type="button"></button>;
}

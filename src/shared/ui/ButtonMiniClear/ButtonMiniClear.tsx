import { ClickMouse } from 'shared/lib';
import styles from './ButtonMiniClear.module.scss';

interface ButtonMiniClearProps {
  tabindex?: number;
  onClick?: ClickMouse;
  onMouseDown?: ClickMouse;
  className?: string;
}

export function ButtonMiniClear({ tabindex = -1, onClick, onMouseDown, className }: Readonly<ButtonMiniClearProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <button
      className={styles.ButtonMiniClear + externalClass}
      onMouseDown={onMouseDown}
      onClick={onClick}
      tabIndex={tabindex}
      type="button"
    ></button>
  );
}

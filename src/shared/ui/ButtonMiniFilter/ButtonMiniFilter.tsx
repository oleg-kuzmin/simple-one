import { ClickMouse } from 'shared/lib';
import styles from './ButtonMiniFilter.module.scss';

interface ButtonMiniFilterProps {
  tabindex?: number;
  onClick?: ClickMouse;
  onMouseDown?: ClickMouse;
  className?: string;
}

export function ButtonMiniFilter({ tabindex = -1, onClick, onMouseDown, className }: Readonly<ButtonMiniFilterProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <button
      className={styles.ButtonMiniFilter + externalClass}
      onMouseDown={onMouseDown}
      onClick={onClick}
      tabIndex={tabindex}
      type="button"
    ></button>
  );
}

import { ClickMouse } from 'shared/lib';
import styles from './ButtonMiniSearch.module.scss';

interface ButtonMiniSearchProps {
  tabindex?: number;
  onClick?: ClickMouse;
  onMouseDown?: ClickMouse;
  className?: string;
}

export function ButtonMiniSearch({ tabindex = -1, onClick, onMouseDown, className }: Readonly<ButtonMiniSearchProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <button
      className={styles.ButtonMiniSearch + externalClass}
      onMouseDown={onMouseDown}
      onClick={onClick}
      tabIndex={tabindex}
      type="button"
    ></button>
  );
}

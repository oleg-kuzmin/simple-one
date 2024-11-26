import { ClickMouse } from 'shared/lib';
import styles from './ButtonMiniClose.module.scss';

interface ButtonMiniCloseProps {
  isGray?: boolean;
  tabindex?: number;
  onClick?: ClickMouse;
  onMouseDown?: ClickMouse;
  className?: string;
}

export function ButtonMiniClose({
  tabindex = -1,
  onClick,
  onMouseDown,
  isGray,
  className,
}: Readonly<ButtonMiniCloseProps>) {
  const externalClass = className ? ` ${className}` : '';
  const modifierClass = isGray ? ` ${styles.ButtonMiniClose_Gray}` : '';

  return (
    <button
      className={styles.ButtonMiniClose + modifierClass + externalClass}
      onMouseDown={onMouseDown}
      onClick={onClick}
      tabIndex={tabindex}
      type="button"
    ></button>
  );
}

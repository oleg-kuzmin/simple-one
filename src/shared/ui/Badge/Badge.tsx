import { ButtonMiniClose } from '../ButtonMiniClose';
import styles from './Badge.module.scss';

interface BadgeProps {
  text: string;
  hasClose?: boolean;
  className?: string;
}

export function Badge({ text, hasClose, className }: Readonly<BadgeProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <li className={styles.Badge + externalClass}>
      <span className={styles.Badge__Title}>{text}</span>
      {hasClose && <ButtonMiniClose />}
    </li>
  );
}

import styles from './ButtonSidebar.module.scss';

interface ButtonSidebarProps {
  isActive?: boolean;
  onClick?: VoidFunction;
  className?: string;
}

export function ButtonSidebar({ isActive, onClick, className }: Readonly<ButtonSidebarProps>) {
  const externalClass = className ? ` ${className}` : '';
  const modifierClass = isActive ? ` ${styles.ButtonSidebar_Active}` : '';
  return (
    <button className={styles.ButtonSidebar + modifierClass + externalClass} onClick={onClick} type="button"></button>
  );
}

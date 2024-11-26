import styles from './MenuItem.module.scss';

interface MenuItemProps {
  text: string;
  tabindex?: number;
  className?: string;
}

export function MenuItem({ text, tabindex = 0, className }: Readonly<MenuItemProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <li className={styles.MenuItem + externalClass} tabIndex={tabindex}>
      <span className={styles.MenuItem__Arrow}></span>
      <span className={styles.MenuItem__Title}>{text}</span>
    </li>
  );
}

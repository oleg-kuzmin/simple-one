import styles from './ButtonFavorites.module.scss';

interface ButtonFavoritesProps {
  isActive?: boolean;
  onClick?: VoidFunction;
  className?: string;
}

export function ButtonFavorites({ isActive, onClick, className }: Readonly<ButtonFavoritesProps>) {
  const externalClass = className ? ` ${className}` : '';
  const modifierClass = isActive ? ` ${styles.ButtonFavorites_Active}` : '';
  return <button className={styles.ButtonFavorites + modifierClass + externalClass} onClick={onClick} type="button"></button>;
}

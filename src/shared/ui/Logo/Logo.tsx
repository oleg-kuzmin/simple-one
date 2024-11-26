import styles from './Logo.module.scss';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: Readonly<LogoProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <a className={styles.Logo + externalClass} href="/">
      Перейти на главную страницу
    </a>
  );
}

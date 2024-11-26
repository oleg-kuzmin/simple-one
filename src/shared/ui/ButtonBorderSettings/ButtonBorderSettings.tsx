import styles from './ButtonBorderSettings.module.scss';

interface ButtonBorderSettingsProps {
  onClick?: VoidFunction;
  className?: string;
}

export function ButtonBorderSettings({ onClick, className }: Readonly<ButtonBorderSettingsProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <button className={styles.ButtonBorderSettings + externalClass} onClick={onClick} type="button"></button>;
}

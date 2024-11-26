import styles from './FieldText.module.scss';

interface FieldTextProps {
  id: string;
  required?: boolean;
  className?: string;
}

export function FieldText({ id, required, className }: Readonly<FieldTextProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <input className={styles.FieldText + externalClass} type="text" name={id} id={id} required={required} />;
}

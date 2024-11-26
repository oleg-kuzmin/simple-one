import styles from './FieldTitle.module.scss';

interface FieldTitleProps {
  title: string;
  required?: boolean;
  className?: string;
}

export function FieldTitle({ title, required, className }: Readonly<FieldTitleProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <h3 className={styles.FieldTitle + externalClass}>
      {required && <span className={styles.FieldTitle__Required}>*</span>}
      {title}
    </h3>
  );
}

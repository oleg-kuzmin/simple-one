import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  title: string;
  className?: string;
}

export function SectionTitle({ title, className }: Readonly<SectionTitleProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <h2 className={styles.SectionTitle + externalClass}>{title}</h2>;
}

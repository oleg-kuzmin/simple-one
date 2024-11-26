import { ButtonBorderSearch } from '../ButtonBorderSearch';
import { FieldText } from '../FieldText/FieldText';
import styles from './FieldTextAndSearch.module.scss';

interface FieldTextAndSearchProps {
  id: string;
  required?: boolean;
  className?: string;
}

export function FieldTextAndSearch({ id, required, className }: Readonly<FieldTextAndSearchProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.FieldTextAndSearch + externalClass}>
      <FieldText id={id} required={required} />
      <ButtonBorderSearch />
    </div>
  );
}

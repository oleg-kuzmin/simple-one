import styles from './FieldSelect.module.scss';

interface FieldSelectProps {
  id: string;
  options: {
    [key: string]: string;
  };
  required?: boolean;
  className?: string;
}

export function FieldSelect({ id, options, required, className }: Readonly<FieldSelectProps>) {
  const externalClass = className ? ` ${className}` : '';

  const optionsElements = [];
  for (const key in options) {
    optionsElements.push(
      <option value={key} key={key} className={styles.FieldSelect__Option}>
        {options[key]}
      </option>,
    );
  }

  return (
    <select className={styles.FieldSelect + externalClass} id={id} name={id} required={required}>
      {optionsElements}
    </select>
  );
}

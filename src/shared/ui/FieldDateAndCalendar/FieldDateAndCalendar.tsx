import { useRef } from 'react';
import { ButtonBorderCalendar } from '../ButtonBorderCalendar';
import { getDateToday } from 'shared/lib';
import styles from './FieldDateAndCalendar.module.scss';

interface FieldDateAndCalendarProps {
  id: string;
  required?: boolean;
  className?: string;
}

export function FieldDateAndCalendar({ id, required, className }: Readonly<FieldDateAndCalendarProps>) {
  const externalClass = className ? ` ${className}` : '';
  const inputElement = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputElement.current?.showPicker();
  };

  const dateToday = getDateToday();

  return (
    <div className={styles.FieldDateAndCalendar + externalClass}>
      <input
        className={styles.FieldDateAndCalendar__Input}
        type="date"
        id={id}
        name={id}
        defaultValue={dateToday}
        ref={inputElement}
        required={required}
      />
      <ButtonBorderCalendar onClick={handleClick} />
    </div>
  );
}

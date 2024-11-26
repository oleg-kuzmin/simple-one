import { ButtonMiniClose } from '../ButtonMiniClose';
import { ButtonMiniFilter } from '../ButtonMiniFilter';
import { useInputSearch } from 'shared/lib';
import styles from './MenuSearch.module.scss';

interface MenuSearchProps {
  className?: string;
}

export function MenuSearch({ className }: Readonly<MenuSearchProps>) {
  const externalClass = className ? ` ${className}` : '';
  const [value, handleChange, handleClickReset, inputElement] = useInputSearch();

  return (
    <div className={styles.MenuSearch + externalClass}>
      <input
        className={styles.MenuSearch__Input}
        type="text"
        name="menuSearch"
        id="menuSearch"
        placeholder="Поиск по меню"
        onChange={handleChange}
        value={value}
        ref={inputElement}
      />
      <div className={styles.MenuSearch__Buttons}>
        {value ? <ButtonMiniClose onMouseDown={handleClickReset} isGray /> : <ButtonMiniFilter />}
      </div>
    </div>
  );
}

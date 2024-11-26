import { ButtonMiniClose } from '../ButtonMiniClose';
import { ButtonMiniSearch } from '../ButtonMiniSearch';
import { useInputSearch } from 'shared/lib';
import styles from './MainSearch.module.scss';

interface MainSearchProps {
  className?: string;
}

export function MainSearch({ className }: Readonly<MainSearchProps>) {
  const externalClass = className ? ` ${className}` : '';
  const [value, handleChange, handleClickReset, inputElement] = useInputSearch();

  return (
    <div className={styles.MainSearch + externalClass}>
      <input
        className={styles.MainSearch__Input}
        type="text"
        name="mainSearch"
        id="mainSearch"
        placeholder="Поиск"
        onChange={handleChange}
        value={value}
        ref={inputElement}
      />
      <div className={styles.MainSearch__Buttons}>
        {value && <ButtonMiniClose onMouseDown={handleClickReset} isGray />}
        {value && <span className={styles.MainSearch__DecorateLine}></span>}
        <ButtonMiniSearch />
      </div>
    </div>
  );
}

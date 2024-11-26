import { useEffect } from 'react';
import { ButtonBorderClose } from '../ButtonBorderClose';
import { ButtonTask } from '../ButtonTask';
import { FieldBadgesAndPlusSearch } from '../FieldBadgesAndPlusSearch';
import { FieldDateAndCalendar } from '../FieldDateAndCalendar';
import { FieldSelect } from '../FieldSelect';
import { FieldText } from '../FieldText';
import { FieldTextAndSearch } from '../FieldTextAndSearch';
import { FieldTitle } from '../FieldTitle';
import { SectionTitle } from '../SectionTitle';
import { TaskTitle } from '../TaskTitle';
import { Keydown, Mousedown } from 'shared/lib';
import styles from './Modal.module.scss';

interface ModalProps {
  isActive: boolean;
  closeModal: VoidFunction;
}

const arrayBadges = [
  'Андрей Пивоваров',
  'Максим Галактионов',
  'Алла Лин',
  'Константин Константинопольский Константинович',
  'Игорь Иванченко',
  'Юлия Эйчаровна',
  'Артём Подпрыгайко-Саппортов',
  'Илья Вазнец',
  'Михаил Вортенов',
  'Наталья Нашевна',
  'Евгения Итамовна',
  'Алиса Киральчук',
];

export function Modal({ isActive, closeModal }: Readonly<ModalProps>) {
  const modifierClass = isActive ? ` ${styles.Overlay_Active}` : '';

  const onKeyEscape: Keydown = evt => {
    if (evt.code === 'Escape') {
      closeModal();
    }
  };

  const onClickOverlay: Mousedown = evt => {
    if (evt.target && (evt.target as Element).classList.contains(styles.Overlay)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyEscape);
    document.addEventListener('mousedown', onClickOverlay);
    return () => {
      document.removeEventListener('keydown', onKeyEscape);
      document.removeEventListener('mousedown', onClickOverlay);
    };
  });

  return (
    <div className={styles.Overlay + modifierClass} id="modalNewTask">
      <div className={styles.Modal}>
        <div className={styles.Modal__Top}>
          <SectionTitle title="Подзадача" className={styles.Modal__SectionTitle} />
          <ButtonBorderClose className={styles.Modal__ButtonBorderClose} onClick={closeModal} />
          <ButtonTask className={styles.Modal__Save} text="Сохранить" isAccent />
          <ButtonTask className={styles.Modal__Cancel} text="Отменить" onClick={closeModal} />
        </div>
        <div className={styles.Modal__Body}>
          <TaskTitle className={styles.Modal__Title} title="Новая запись" />
          <div className={styles.Modal__Field}>
            <FieldTitle className={styles.Modal__FieldTitle} title="Тема" required />
            <FieldText id="theme" />
          </div>
          <div className={styles.Modal__Field}>
            <FieldTitle className={styles.Modal__FieldTitle} title="Статус" />
            <FieldText id="status" />
          </div>
          <div className={styles.Modal__Field}>
            <FieldTitle className={styles.Modal__FieldTitle} title="Описание" />
            <FieldText id="description" />
          </div>
          <div className={styles.Modal__Field}>
            <FieldTitle className={styles.Modal__FieldTitle} title="Продукт" />
            <FieldTextAndSearch id="product" />
          </div>
          <div className={styles.Modal__Field}>
            <FieldTitle className={styles.Modal__FieldTitle} title="Рабочие заметки" required />
            <FieldText id="notes" />
          </div>
          <div className={styles.Modal__Field}>
            <FieldTitle className={styles.Modal__FieldTitle} title="Приоритет" />
            <FieldSelect id="priority" options={{ weak: 'Слабый', middle: 'Средний', important: 'Максимальный' }} />
          </div>
          <div className={styles.Modal__Field}>
            <FieldTitle className={styles.Modal__FieldTitle} title="Ответственный" />
            <FieldBadgesAndPlusSearch id="responsibles" badges={['Константин Константинопольский']} />
          </div>
          <div className={styles.Modal__Field}>
            <FieldTitle className={styles.Modal__FieldTitle} title="Группа" />
            <FieldBadgesAndPlusSearch id="group" badges={['Support Group']} />
          </div>
          <div className={styles.Modal__Field}>
            <FieldTitle className={styles.Modal__FieldTitle} title="Комментарии" />
            <FieldText id="comments" />
          </div>
          <div className={styles.Modal__Field}>
            <FieldTitle className={styles.Modal__FieldTitle} title="Согласующие" />
            <FieldBadgesAndPlusSearch id="coordinators" badges={arrayBadges} hasClose />
          </div>
          <div className={styles.Modal__Field}>
            <FieldTitle className={styles.Modal__FieldTitle} title="Когда открыто" />
            <FieldDateAndCalendar id="dateOpen" />
          </div>
          <div className={styles.Modal__Field}>
            <FieldTitle className={styles.Modal__FieldTitle} title="Когда создано" />
            <FieldDateAndCalendar id="dateCreate" />
          </div>
          <div className={styles.Modal__Field}>
            <FieldTitle className={styles.Modal__FieldTitle} title="Кем открыто" />
            <FieldBadgesAndPlusSearch id="opener" badges={['Андрей Пивоваров']} />
          </div>
          <div className={styles.Modal__Field}>
            <FieldTitle className={styles.Modal__FieldTitle} title="Кем создано" />
            <FieldBadgesAndPlusSearch id="creator" badges={['Андрей Пивоваров']} />
          </div>
          <div className={styles.Modal__Footer}>
            <ButtonTask text="Сохранить" isAccent />
            <ButtonTask text="Отменить" onClick={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
}

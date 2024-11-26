import {
  FieldBadgesAndPlusSearch,
  FieldDateAndCalendar,
  FieldSelect,
  FieldText,
  FieldTextAndSearch,
  FieldTitle,
  TaskTitle,
} from 'shared/ui';
import styles from './TaskForm.module.scss';

interface TaskFormProps {
  className?: string;
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

export function TaskForm({ className }: Readonly<TaskFormProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <form className={styles.TaskForm + externalClass}>
      <TaskTitle
        className={styles.TaskForm__Title}
        title="STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller"
      />
      <div className={styles.TaskForm__Field}>
        <FieldTitle className={styles.TaskForm__FieldTitle} title="Тема" required />
        <FieldText id="editTheme" />
      </div>
      <div className={styles.TaskForm__Field}>
        <FieldTitle className={styles.TaskForm__FieldTitle} title="Статус" />
        <FieldText id="editStatus" />
      </div>
      <div className={styles.TaskForm__Field}>
        <FieldTitle className={styles.TaskForm__FieldTitle} title="Описание" />
        <FieldText id="editDescription" />
      </div>
      <div className={styles.TaskForm__Field}>
        <FieldTitle className={styles.TaskForm__FieldTitle} title="Продукт" />
        <FieldTextAndSearch id="editProduct" />
      </div>
      <div className={styles.TaskForm__Field}>
        <FieldTitle className={styles.TaskForm__FieldTitle} title="Рабочие заметки" required />
        <FieldText id="editNotes" />
      </div>
      <div className={styles.TaskForm__Field}>
        <FieldTitle className={styles.TaskForm__FieldTitle} title="Приоритет" />
        <FieldSelect id="editPriority" options={{ weak: 'Слабый', middle: 'Средний', important: 'Максимальный' }} />
      </div>
      <div className={styles.TaskForm__Field}>
        <FieldTitle className={styles.TaskForm__FieldTitle} title="Ответственный" />
        <FieldBadgesAndPlusSearch id="editResponsibles" badges={['Константин Константинопольский']} />
      </div>
      <div className={styles.TaskForm__Field}>
        <FieldTitle className={styles.TaskForm__FieldTitle} title="Группа" />
        <FieldBadgesAndPlusSearch id="editGroup" badges={['Support Group']} />
      </div>
      <div className={`${styles.TaskForm__Field} ${styles.TaskForm__TwoColumns}`}>
        <FieldTitle className={styles.TaskForm__FieldTitle} title="Комментарии" />
        <FieldText id="editComments" />
      </div>
      <div className={`${styles.TaskForm__Field} ${styles.TaskForm__TwoColumns}`}>
        <FieldTitle className={styles.TaskForm__FieldTitle} title="Согласующие" />
        <FieldBadgesAndPlusSearch id="editCoordinators" badges={arrayBadges} hasClose />
      </div>
      <div className={styles.TaskForm__Field}>
        <FieldTitle className={styles.TaskForm__FieldTitle} title="Когда открыто" />
        <FieldDateAndCalendar id="editOpenTask" />
      </div>
      <div className={styles.TaskForm__Field}>
        <FieldTitle className={styles.TaskForm__FieldTitle} title="Когда создано" />
        <FieldDateAndCalendar id="editCreateTask" />
      </div>
      <div className={styles.TaskForm__Field}>
        <FieldTitle className={styles.TaskForm__FieldTitle} title="Кем открыто" />
        <FieldBadgesAndPlusSearch id="editWhoOpenTask" badges={['Андрей Пивоваров']} />
      </div>
      <div className={styles.TaskForm__Field}>
        <FieldTitle className={styles.TaskForm__FieldTitle} title="Кем создано" />
        <FieldBadgesAndPlusSearch id="editWhoCreateTask" badges={['Андрей Пивоваров']} />
      </div>
    </form>
  );
}

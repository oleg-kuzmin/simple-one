import {
  Badge,
  ButtonBorderCalendar,
  ButtonBorderClose,
  ButtonBorderPin,
  ButtonBorderPlus,
  ButtonBorderSearch,
  ButtonBorderSettings,
  ButtonFavorites,
  ButtonMiniClear,
  ButtonMiniClose,
  ButtonMiniFilter,
  ButtonMiniSearch,
  ButtonSidebar,
  ButtonTask,
  FieldBadges,
  FieldBadgesAndPlusSearch,
  FieldDateAndCalendar,
  FieldSelect,
  FieldText,
  FieldTextAndSearch,
  FieldTitle,
  Logo,
  MainSearch,
  MenuItem,
  MenuSearch,
  SectionTitle,
  TaskTitle,
  UserInfo,
} from 'shared/ui';
import styles from './UiKitPage.module.scss';

const arrayBadges = [
  'Константин Константинопольский',
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

export function UiKitPage() {
  return (
    <section className={styles.UiKitPage}>
      <div>
        <h2 className={styles.UiKitPage__Title}>Logo</h2>
        <Logo />
      </div>
      <div>
        <h2 className={styles.UiKitPage__Title}>UserInfo</h2>
        <UserInfo title="Максим Галактионов" image="/images/user-avatar.jpg" />
      </div>
      <div>
        <h2 className={styles.UiKitPage__Title}>ButtonSidebar</h2>
        <ul className={styles.UiKitPage__List}>
          <li>ButtonSidebar</li>
          <li>ButtonSidebar isActive</li>
        </ul>
        <ButtonSidebar />
        <ButtonSidebar isActive />
      </div>
      <div>
        <h2 className={styles.UiKitPage__Title}>ButtonFavorites</h2>
        <ul className={styles.UiKitPage__List}>
          <li>ButtonFavorites</li>
          <li>ButtonFavorites isActive</li>
        </ul>
        <ButtonFavorites />
        <ButtonFavorites isActive />
      </div>
      <div>
        <h2 className={styles.UiKitPage__Title}>ButtonBorder</h2>
        <ul className={styles.UiKitPage__List}>
          <li>ButtonBorderSettings</li>
          <li>ButtonBorderPlus</li>
          <li>ButtonBorderSearch</li>
          <li>ButtonBorderCalendar</li>
          <li>ButtonBorderClose</li>
          <li>ButtonBorderPin</li>
          <li>ButtonBorderPin isActive</li>
        </ul>
        <div className={styles.UiKitPage__Flex}>
          <ButtonBorderSettings />
          <ButtonBorderPlus />
          <ButtonBorderSearch />
          <ButtonBorderCalendar />
          <ButtonBorderClose />
          <ButtonBorderPin />
          <ButtonBorderPin isActive />
        </div>
      </div>
      <div>
        <h2 className={styles.UiKitPage__Title}>ButtonMini</h2>
        <ul className={styles.UiKitPage__List}>
          <li>ButtonMiniClear</li>
          <li>ButtonMiniSearch</li>
          <li>ButtonMiniFilter</li>
          <li>ButtonMiniClose isGray</li>
          <li>ButtonMiniClose</li>
        </ul>
        <div className={styles.UiKitPage__Flex}>
          <ButtonMiniClear />
          <ButtonMiniSearch />
          <ButtonMiniFilter />
          <ButtonMiniClose isGray />
          <ButtonMiniClose />
        </div>
      </div>
      <div>
        <h2 className={styles.UiKitPage__Title}>MainSearch</h2>
        <MainSearch />
      </div>
      <div>
        <h2 className={styles.UiKitPage__Title}>MenuSearch</h2>
        <MenuSearch />
      </div>
      <div>
        <h2 className={styles.UiKitPage__Title}>ButtonTask</h2>
        <ul className={styles.UiKitPage__List}>
          <li>ButtonTask content="Создать"</li>
          <li>ButtonTask content="Сохранить" isAccent</li>
          <li>ButtonTask content="Сохранить и выйти"</li>
        </ul>
        <div className={styles.UiKitPage__Flex + ' ' + styles.UiKitPage__Flex_Column}>
          <ButtonTask text="Создать" />
          <ButtonTask text="Сохранить" isAccent />
          <ButtonTask text="Сохранить и выйти" />
        </div>
      </div>
      <div>
        <h2 className={styles.UiKitPage__Title}>MenuItem</h2>
        <MenuItem text="Моя работа" />
      </div>
      <div>
        <h2 className={styles.UiKitPage__Title}>SectionTitle</h2>
        <SectionTitle title="Подзадача" />
      </div>
      <div>
        <h2 className={styles.UiKitPage__Title}>TaskTitle</h2>
        <TaskTitle title="STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller" />
      </div>
      <div>
        <h2 className={styles.UiKitPage__Title}>FieldTitle</h2>
        <ul className={styles.UiKitPage__List}>
          <li>FieldTitle content="Тема" isRequired</li>
          <li>FieldTitle content="Статус" </li>
        </ul>
        <FieldTitle title="Тема" required />
        <FieldTitle title="Статус" />
      </div>
      <div>
        <h2 className={styles.UiKitPage__Title}>Badge</h2>
        <ul className={styles.UiKitPage__List}>
          <li>Badge content="Константин Константинопольский"</li>
          <li>Badge content="Андрей Пивоваров" hasClose </li>
        </ul>
        <div className={styles.UiKitPage__Flex}>
          <Badge text="Константин Константинопольский" />
          <Badge text="Андрей Пивоваров" hasClose />
        </div>
      </div>
      <div>
        <h2 className={styles.UiKitPage__Title}>FieldText</h2>
        <FieldText id="fieldText" />
      </div>
      <div>
        <h2 className={styles.UiKitPage__Title}>FieldTextAndSearch</h2>
        <FieldTextAndSearch id="fieldTextAndSearch" />
      </div>
      <div>
        <h2 className={styles.UiKitPage__Title}>FieldDateAndCalendar</h2>
        <FieldDateAndCalendar id="date" />
      </div>
      <div>
        <h2 className={styles.UiKitPage__Title}>FieldSelect</h2>
        <FieldSelect id="priority" options={{ weak: 'Слабый', middle: 'Средний', important: 'Максимальный' }} />
      </div>
      <div>
        <h2 className={styles.UiKitPage__Title}>FieldBadges</h2>
        <FieldBadges id="group1" badges={arrayBadges} />
      </div>
      <div>
        <h2 className={styles.UiKitPage__Title}>FieldBadgesAndPlusSearch</h2>
        <FieldBadgesAndPlusSearch id="group2" badges={arrayBadges} />
      </div>
    </section>
  );
}

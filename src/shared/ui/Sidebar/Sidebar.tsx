import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ButtonBorderPin } from '../ButtonBorderPin';
import { MenuItem } from '../MenuItem';
import { MenuSearch } from '../MenuSearch';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  isActive: boolean;
  isPin: boolean;
  onClickButtonBorderPin: VoidFunction;
  className?: string;
}

export function Sidebar({ isActive, isPin, onClickButtonBorderPin, className }: Readonly<SidebarProps>) {
  const nodeRef = useRef<HTMLElement | null>(null);
  const externalClass = className ? ` ${className}` : '';
  const modifierClass = isPin ? ` ${styles.Sidebar_Pin}` : '';
  const { timeTranslateSidebar } = styles;
  const timeout = parseInt(timeTranslateSidebar);

  return (
    <CSSTransition nodeRef={nodeRef} in={isActive} classNames={{ ...styles }} timeout={timeout} unmountOnExit>
      <aside className={styles.Sidebar + modifierClass + externalClass} ref={nodeRef}>
        <div className={styles.Sidebar__Top}>
          <MenuSearch />
          <ButtonBorderPin
            className={styles.Sidebar__ButtonBorderPin}
            onClick={onClickButtonBorderPin}
            isActive={isPin}
          />
        </div>
        <div className={styles.Sidebar__Body}>
          <MenuItem text="Моя работа" />
          <MenuItem text="Структура портала" />
          <MenuItem text="Личное расписание" />
          <MenuItem text="Отсутствие на рабочем месте" />
          <MenuItem text="Портфель услуг" />
          <MenuItem text="Дашборды" />
          <MenuItem text="Доски задач" />
          <MenuItem text="Обращения" />
          <MenuItem text="События" />
          <MenuItem text="Инциденты" />
          <MenuItem text="Проблемы" />
          <MenuItem text="Настройка каталогов" />
          <MenuItem text="Запросы на обслуживание" />
          <MenuItem text="Запросы на изменение" />
          <MenuItem text="Управление конфигурациями" />
          <MenuItem text="Управление уровнем услуг" />
          <MenuItem text="Настройка соответствий" />
        </div>
      </aside>
    </CSSTransition>
  );
}

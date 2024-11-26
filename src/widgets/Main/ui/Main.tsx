import { useEffect, useState } from 'react';
import { TaskForm } from 'entities/TaskForm';
import { AsideButtons, ButtonTask, SectionTitle, Sidebar } from 'shared/ui';
import styles from './Main.module.scss';

interface MainProps {
  activeSidebar: boolean;
  pinSidebar: boolean;
  onClickButtonSidebar: VoidFunction;
  onClickButtonBorderPin: VoidFunction;
  openModal: VoidFunction;
  className?: string;
}

export function Main({
  activeSidebar,
  pinSidebar,
  onClickButtonSidebar,
  onClickButtonBorderPin,
  openModal,
  className,
}: Readonly<MainProps>) {
  const externalClass = className ? ` ${className}` : '';

  const [isStickyTop, setIsStickyTop] = useState(false);

  const handleScroll = () => {
    if (document.documentElement.scrollTop === 0) {
      setIsStickyTop(false);
    } else {
      setIsStickyTop(true);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <main className={styles.Main + externalClass}>
      <AsideButtons
        className={styles.Main__AsideButtons}
        activeSidebar={activeSidebar}
        onClickButtonSidebar={onClickButtonSidebar}
      />
      <Sidebar
        className={styles.Main__Sidebar}
        isActive={activeSidebar}
        onClickButtonBorderPin={onClickButtonBorderPin}
        isPin={pinSidebar}
      />
      <div className={styles.Main__Content}>
        <div className={isStickyTop ? ` ${styles.Main__Top} ${styles.Main__Top_Sticky}` : styles.Main__Top}>
          <SectionTitle title="Подзадача" />
          <ButtonTask className={styles.Main__Create} text="Создать" onClick={openModal} />
          <ButtonTask className={styles.Main__Save} text="Сохранить" isAccent />
          <ButtonTask className={styles.Main__SaveAndExit} text="Сохранить и выйти" />
        </div>
        <div className={styles.Main__Body}>
          <TaskForm />
        </div>
        <div className={styles.Main__Footer}>
          <ButtonTask text="Сохранить" isAccent />
          <ButtonTask text="Сохранить и выйти" />
        </div>
      </div>
    </main>
  );
}

import { ButtonFavorites, ButtonSidebar } from 'shared/ui';
import styles from './AsideButtons.module.scss';

interface AsideButtonsProps {
  activeSidebar: boolean;
  onClickButtonSidebar: VoidFunction;
  className?: string;
}

export function AsideButtons({ activeSidebar, onClickButtonSidebar, className }: Readonly<AsideButtonsProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <aside className={styles.AsideButtons + externalClass}>
      <ButtonSidebar onClick={onClickButtonSidebar} isActive={activeSidebar} />
      <ButtonFavorites />
    </aside>
  );
}

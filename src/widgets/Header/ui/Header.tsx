import { ButtonBorderSettings, ButtonSidebar, Logo, MainSearch, UserInfo } from 'shared/ui';
import styles from './Header.module.scss';

interface HeaderProps {
  activeSidebar: boolean;
  onClickButtonSidebar: VoidFunction;
  className?: string;
}

export function Header({ activeSidebar, onClickButtonSidebar, className }: Readonly<HeaderProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <header className={styles.Header + externalClass}>
      <div className={styles.Header__Content}>
        <ButtonSidebar
          className={styles.Header__ButtonSidebar}
          onClick={onClickButtonSidebar}
          isActive={activeSidebar}
        />
        <Logo className={styles.Header__Logo} />
        <MainSearch className={styles.Header__MainSearch} />
        <UserInfo className={styles.Header__UserInfo} title="Максим Галактионов" image="/simple-one/images/user-avatar.jpg" />
        <ButtonBorderSettings />
      </div>
    </header>
  );
}

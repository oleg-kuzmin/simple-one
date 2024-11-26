import styles from './UserInfo.module.scss';

interface UserInfoProps {
  image: string;
  title: string;
  className?: string;
}

export function UserInfo({ title, image, className }: Readonly<UserInfoProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.UserInfo + externalClass}>
      <img className={styles.UserInfo__Avatar} src={image} alt="Аватар пользователя" />
      <p className={styles.UserInfo__Name}>{title}</p>
    </div>
  );
}

import { Badge } from '../Badge';
import { ButtonMiniClear } from '../ButtonMiniClear';
import styles from './FieldBadges.module.scss';

interface FieldBadgesProps {
  badges: string[];
  id: string;
  hasClose?: boolean;
  className?: string;
}

export function FieldBadges({ badges, id, hasClose = false, className }: Readonly<FieldBadgesProps>) {
  const externalClass = className ? ` ${className}` : '';
  const badgeElements = badges.map(badge => <Badge text={badge} key={badge} hasClose={hasClose} />);

  return (
    <div className={styles.FieldBadges + externalClass} id={id}>
      <ul className={styles.FieldBadges__Container}>{badgeElements}</ul>
      <ButtonMiniClear className={styles.FieldBadges__ButtonMiniClear} />
    </div>
  );
}

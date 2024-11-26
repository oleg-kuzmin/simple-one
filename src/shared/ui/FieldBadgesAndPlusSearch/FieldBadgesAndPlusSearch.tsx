import { ButtonBorderPlus } from '../ButtonBorderPlus';
import { ButtonBorderSearch } from '../ButtonBorderSearch';
import { FieldBadges } from '../FieldBadges';
import styles from './FieldBadgesAndPlusSearch.module.scss';

interface FieldBadgesAndPlusSearchProps {
  badges: string[];
  id: string;
  hasClose?: boolean;
  className?: string;
}

export function FieldBadgesAndPlusSearch({
  id,
  badges,
  hasClose = false,
  className,
}: Readonly<FieldBadgesAndPlusSearchProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.FieldBadgesAndPlusSearch + externalClass}>
      <FieldBadges id={id} badges={badges} hasClose={hasClose} />
      <ButtonBorderPlus />
      <ButtonBorderSearch />
    </div>
  );
}

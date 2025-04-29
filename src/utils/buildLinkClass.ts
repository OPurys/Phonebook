import clsx from 'clsx';

interface Props {
  isActive: boolean;
  styles: { [key: string]: string };
}

export const buildLinkClass = ({ isActive, styles }: Props): string => {
  return clsx(styles.link, isActive && styles.active);
};

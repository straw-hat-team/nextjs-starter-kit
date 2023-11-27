import { clsx } from 'clsx';
import type { ImageProps } from 'next/image';
import NextImage from 'next/image';

export function Image(props: ImageProps) {
  const { className, ...restProps } = props;
  return (
    <div className={clsx(className, 'relative')}>
      <NextImage {...restProps} />
    </div>
  );
}

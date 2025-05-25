import type { SVGAttributes } from 'react';
import clsx from 'clsx'; // bisa pakai 'cn' kalau punya utilnya

export default function AppLogoIcon({ className, ...props }: SVGAttributes<HTMLImageElement>) {
  return (
    <img
      src="/images/logo.png"
      alt="Sicukur Logo"
      className={clsx("object-contain", className)}
      {...props}
    />
  );
}

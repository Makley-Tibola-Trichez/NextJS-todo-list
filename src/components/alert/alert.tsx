import { PropsWithChildren } from 'react';

type AlertProps = PropsWithChildren<{ variant?: 'danger' }>;

export function Alert({ children, variant }: AlertProps) {
  return (
    <div className="py-2 px-3 bg-danger-100 rounded-lg text-danger text-sm">
      {children}
    </div>
  );
}

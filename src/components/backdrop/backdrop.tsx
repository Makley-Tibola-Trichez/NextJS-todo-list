export function Backdrop({ children }: React.PropsWithChildren) {
  return (
    <div className="w-full h-full backdrop-filter backdrop-blur-sm absolute top-0 left-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      {children}
    </div>
  );
}

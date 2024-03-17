import Image from 'next/image';

type EmptyStateProps = {
  src: string;
  alt: string;
  title: React.ReactNode;
};

export function EmptyState(props: EmptyStateProps) {
  return (
    <>
      <Image width={350} height={350} alt={props.alt} src={props.src} />
      <span className="text-lg font-bold text-gray-500 text-center w-1/2">
        {props.title}
      </span>
    </>
  );
}

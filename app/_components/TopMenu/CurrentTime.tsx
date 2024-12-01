import Image from 'next/image';

type Props = {
  time: string[];
  columnVisible: boolean;
};

export const CurrentTime = ({ time, columnVisible }: Props) => {
  return (
    <div
      className={`text-nowrap col-md-1 d-flex column-gap-1 
      align-items-center px-2 fs-7 text-muted`}
    >
      <Image src="/icons/clock.svg" alt="clock" width={15} height={15} />
      {time[0] ? time[0] : '00'}
      {columnVisible ? ':' : ' '}
      {time[1] ? time[1] : '00'}
    </div>
  );
};

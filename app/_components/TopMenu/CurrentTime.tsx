type Props = {
  time: string[];
  columnVisible: boolean;
};
export const CurrentTime = ({ time, columnVisible }: Props) => {
  return (
    <div className='text-nowrap'>
      {time[0]? time[0]: '00'}
      { columnVisible? ':' : " "}
      {time[1]? time[1]: '00'}
    </div>
  );
};

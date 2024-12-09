type Props = {
  date: string;
};

export const CurrentDate = ({ date }: Props) => {
  const [day, ...rest] = date.split(' ');
  return (
    <div
      className={`d-none col-2  col-xl-1 d-md-flex 
      justify-content-end fs-7 text-muted`}
    >
      {day}
      <br />
      {rest[0]} {rest[1]}, {rest[2]}
    </div>
  );
};

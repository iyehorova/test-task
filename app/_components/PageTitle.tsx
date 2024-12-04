type Props = {
  amount: number;
  title: string;
};

export const PageTitle: React.FC<Props> = ({ amount, title }) => {
  return (
    <>
      <h1 className="fs-3 fw-semibold">{title}</h1>
      <span> / </span>
      <span>{amount}</span>
    </>
  );
};

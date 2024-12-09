type Props = {
  children: React.ReactNode;
};

export const PageHeaderStyles: React.FC<Props> = ({ children }) => {
  return (
    <header className="d-flex column-gap-3 align-items-center mb-5 container-fluid fs-3 fw-semibold">
      {children}
    </header>
  );
};

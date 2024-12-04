type Props = {
  children: React.ReactNode;
};

export const ItemsStyles: React.FC<Props> = ({ children }) => {
  return (
    <div className="container-fluid border border-muted py-2 px-3 mb-2 hover-shadow rounded bg-white">
      {children}
    </div>
  );
};

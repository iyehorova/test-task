type Props = {
  children: React.ReactNode;
};

export const PageStyle: React.FC<Props> = ({ children }) => {
  return (
    <main className="pt-5">
      <article>{children}</article>
    </main>
  );
};

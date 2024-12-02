import { TopMenu } from '../_components/TopMenu';
import { NavigationMenu } from '../_components/NavigationMenu';

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="row vh-100">
      <div className="container-fluid position-relative z-3 shadow-bottom">
        <TopMenu />
      </div>

      <div className="col-md-3 mr-5 position-relative h-sm-100 shadow-right">
        <NavigationMenu />
      </div>

      <div className="col-md-9 bg-body-tertiary min-vh-100">
        <div className="container-fluid">{children}</div>
      </div>
    </div>
  );
}

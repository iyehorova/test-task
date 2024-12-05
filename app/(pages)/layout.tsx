import { TopMenu } from '../_components/TopMenu';
import { NavigationMenu } from '../_components/NavigationMenu';
import { ModalWindow } from '../_components/ModalWindow';
import { Message } from '../_components/Message';

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

      <div className="col-md-2 mr-5 position-relative h-sm-100 shadow-right">
        <NavigationMenu />
      </div>

      <div className="col-md-10 bg-body-tertiary min-vh-100 position-relative">
        <div className="container-fluid">{children}</div>
        <ModalWindow />
      </div>
      
      <Message />
    </div>
  );
}

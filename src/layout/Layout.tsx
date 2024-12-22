import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
      <main>
        <div className="inner">
        {children}
        </div>
      </main>
  );
};

export default Layout;

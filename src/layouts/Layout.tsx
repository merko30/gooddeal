import { Link, Outlet } from "react-router";

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    className="lowercase lg:text-xl text-foreground hover:text-accent-foreground font-medium"
  >
    {children}
  </Link>
);

const Header = () => (
  <header className="bg-primary text-white py-12">
    <div className="container flex items-center justify-between">
      <Link to="/">
        <span className="inline-block bg-foreground text-white text-4xl transform rotate-6">
          Dobar
        </span>
        <span className="inline-block bg-accent text-foreground text-4xl py-0.5 px-1 transform rotate-6 -translate-y-6 -translate-x-4">
          diil
        </span>
      </Link>
      <nav className="flex gap-4 items-center">
        <NavLink to="/sign-in">prijavi se</NavLink>
        <NavLink to="/create">Dodaj diil</NavLink>
      </nav>
    </div>
  </header>
);

const Layout = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1 bg-background">
      <Outlet />
    </main>
    <footer>footer</footer>
  </div>
);

export default Layout;

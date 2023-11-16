import { Link } from "react-router-dom";

export default function Header({ className }) {
  return (
    <header className={className}>
      <Link to="/" className="site-logo">
        #Vanlife
      </Link>
      <nav>
        <Link to="about">About</Link>
      </nav>
    </header>
  );
}

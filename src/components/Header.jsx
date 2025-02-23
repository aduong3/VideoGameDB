import { Logo } from "./Logo";
import { Search } from "./Search";

export default function Header({ children }) {
  return (
    <>
      <header className="header">{children}</header>
    </>
  );
}

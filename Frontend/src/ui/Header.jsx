import AppNav from "./AppNav";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import TopBar from "./TopBar";
import UserAvatar from "./UserAvatar";
import HeaderActions from "./HeaderActions";

export default function Header() {
  return (
    <>
      <header dir="rtl">
        <TopBar />
        <header className="border-b bg-white py-4">
          <div className="container mx-auto flex items-center justify-between px-4">
            <div className="flex items-center gap-6">
              <UserAvatar />
              <HeaderActions />
            </div>
            <SearchBar />

            <Logo />
          </div>
        </header>
        <AppNav />
      </header>
    </>
  );
}

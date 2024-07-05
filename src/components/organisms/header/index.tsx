import { UserMenu } from "@/components/molecules/user-menu";

export const Header = () => {
  return (
    <header className="border-b bg-white flex items-center px-14 justify-end py-1 w-full">
      <UserMenu />
    </header>
  );
};

import { useLogoutMutation } from "@/api/Auth";
import { useGetAboutMeQuery } from "@/api/User";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { isFetchBaseQueryError } from "@/lib/server-error-handler";
import { ChevronDown, LogOut, User } from "lucide-react";

export const UserMenu = () => {
  const { data } = useGetAboutMeQuery();
  const [logout, { isLoading }] = useLogoutMutation();
  const { toast } = useToast();
  const onLogout = async () => {
    try {
      await logout();
    } catch (error) {
      if (isFetchBaseQueryError(error)) {
        const errMsg = "error" in error ? error.error : error.data;
        if (typeof errMsg == "string") {
          toast({
            variant: "destructive",
            title: errMsg,
          });
        } else {
          toast({
            variant: "destructive",
            title: errMsg.message,
          });
        }
      }
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex h-full items-center gap-3 hover:bg-muted p-1 rounded-md cursor-pointer transition-colors">
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
          >
            <User />
          </Button>
          <div className="flex flex-col ">
            <div className="flex gap-1">
              <div className="text-sm">{data?.result.name}</div>
              <div className="text-sm">{data?.result.surname}</div>
            </div>

            <div className="text-sm font-medium">{data?.result.email}</div>
          </div>
          <div>
            <ChevronDown />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Настройки</DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            size={"sm"}
            className="border-destructive border-2 bg-transparent text-destructive hover:text-white hover:bg-destructive w-full"
            disabled={isLoading}
            onClick={onLogout}
          >
            <LogOut />
            Выйти
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

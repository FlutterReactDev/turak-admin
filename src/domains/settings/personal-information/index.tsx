import { useGetAboutMeQuery } from "@/api/User";
import { ProfileSection } from "@/components/organisms/profile-section";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, Loader2 } from "lucide-react";

export const PersonalInformationPage = () => {
  const { isLoading, data, isSuccess } = useGetAboutMeQuery();
  return (
    <div className="grid grid-cols-1">
      <div className="w-full">
        <div className="mb-8">
          <Link to="/a/settings">
            <Button variant={"outline"}>
              <ChevronLeft />
              Вернуться назад в настройки
            </Button>
          </Link>
        </div>
        {isLoading && <Loader2 className="animate-spin" />}
        {isSuccess && <ProfileSection data={data.result} />}
      </div>
    </div>
  );
};

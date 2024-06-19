import { SendEmailForm } from "@/components/molecules/send-email-form";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";

import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import qs from "qs";

export const ResetPage = () => {
  const parsedQueryString = qs.parse(window.location.search.slice(1));

  return (
    <Box className="w-full flex bg-muted items-center justify-center overflow-y-auto py-10 ">
      <div className="w-full flex flex-col gap-2 items-center max-w-2xl">
        {parsedQueryString.from && (
          <Link to="/a/settings" className="self-start mb-8">
            <Button variant={"outline"}>
              <ChevronLeft />
              Вернуться назад в настройки
            </Button>
          </Link>
        )}
        <SendEmailForm />
      </div>
    </Box>
  );
};

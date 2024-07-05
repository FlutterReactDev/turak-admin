import { ChangePasswordForm } from "@/components/molecules/change-password-form";
import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

export const ChangePasswordPage = () => {
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

        <Section
          title="Изменить пароль"
          description="Изменение пароля на основе старого"
        >
          <ChangePasswordForm />
        </Section>
      </div>
    </div>
  );
};

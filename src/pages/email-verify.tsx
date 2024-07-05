import { EmailVerifyForm } from "@/components/molecules/email-verify-form";
import { Header } from "@/components/organisms/header";
import { Box } from "@/components/ui/box";

export const VerifyEmail = () => {
  return (
    <Box className="w-full h-screen flex flex-col bg-muted items-center ">
      <Header />
      <div className="flex-1 flex items-center px-2">
        <EmailVerifyForm />
      </div>
    </Box>
  );
};

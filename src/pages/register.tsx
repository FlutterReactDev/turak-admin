import { RegisterForm } from "@/components/molecules/register-form";
import { Box } from "@/components/ui/box";

export const RegisterPage = () => {
  return (
    <Box className="flex bg-muted items-center justify-center overflow-y-auto py-10 w-full">
      <RegisterForm />
    </Box>
  );
};

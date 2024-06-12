import { LoginForm } from "@/components/molecules/login-form";
import { Box } from "@/components/ui/box";

export const LoginPage = () => {
  return (
    <Box className="w-full h-screen flex bg-muted items-center justify-center">
      <LoginForm />
    </Box>
  );
};

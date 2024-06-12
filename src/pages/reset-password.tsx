import { ResetForm } from "@/components/molecules/reset-form";
import { Box } from "@/components/ui/box";

export const ResetPasswordPage = () => {
  return (
    <Box className="w-full flex bg-muted items-center justify-center overflow-y-auto py-10">
      <ResetForm />
    </Box>
  );
};

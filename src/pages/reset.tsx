import { SendEmailForm } from "@/components/molecules/send-email-form";
import { Box } from "@/components/ui/box";

export const ResetPage = () => {
  return (
    <Box className="w-full flex bg-muted items-center justify-center overflow-y-auto py-10">
      <SendEmailForm />
    </Box>
  );
};

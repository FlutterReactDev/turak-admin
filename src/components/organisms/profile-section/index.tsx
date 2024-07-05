import { User } from "@/api/User/types";
import { UpdateProfileForm } from "@/components/forms/update-profile-form";
import { Section } from "@/components/molecules/section";
import { FC } from "react";
interface ProfileSectionProps {
  data: User;
}
export const ProfileSection: FC<ProfileSectionProps> = ({ data }) => {
  return (
    <Section
      title="Персональная информация"
      description="Управляйте своим профилем"
    >
      <UpdateProfileForm data={data} />
    </Section>
  );
};

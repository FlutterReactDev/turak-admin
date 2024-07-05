import { useGetAboutMeQuery } from "@/api/User";
import { isFetchBaseQueryError } from "@/lib/server-error-handler";
import { Navigate, useRouterState } from "@tanstack/react-router";
import { FC, PropsWithChildren } from "react";

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const { isSuccess, error, isError, data } = useGetAboutMeQuery();
  const { location } = useRouterState();

  if (isError && isFetchBaseQueryError(error)) {
    return (
      <Navigate
        to="/login"
        search={{
          from: location.pathname,
        }}
        from={location.pathname}
      />
    );
  }

  if (isSuccess && !data.result.emaiIsVerified) {
    return <Navigate to="/verify-email" />;
  }

  if (isSuccess) {
    return <>{children}</>;
  }
  return <></>;
};

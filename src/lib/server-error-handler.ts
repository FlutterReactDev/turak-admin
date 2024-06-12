import { BaseResponse } from "@/api/Base/types";

type FetchBaseQueryError =
  | {
      status: number;
      data: BaseResponse<null>;
    }
  | {
      status: "FETCH_ERROR";
      data?: BaseResponse<null>;
      error: string;
    }
  | {
      status: "PARSING_ERROR";
      originalStatus: number;
      data: string;
      error: string;
    }
  | {
      status: "TIMEOUT_ERROR";
      data?: BaseResponse<null>;
      error: string;
    }
  | {
      status: "CUSTOM_ERROR";
      data?: BaseResponse<null>;
      error: string;
    };
/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
export function isFetchBaseQueryError(
  error: unknown
): error is FetchBaseQueryError {
  return typeof error === "object" && error != null && "status" in error;
}

/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
export function isErrorWithMessage(
  error: unknown
): error is { message: string } {
  return (
    typeof error === "object" &&
    error != null &&
    "message" in error &&
    typeof (error as any).message === "string"
  );
}

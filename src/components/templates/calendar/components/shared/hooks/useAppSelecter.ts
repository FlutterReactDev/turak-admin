import { RootState } from "@/providers/redux-provider/config";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

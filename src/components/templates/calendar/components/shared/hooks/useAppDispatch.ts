import { AppDispatch } from "@/providers/redux-provider/config";
import { useDispatch } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;

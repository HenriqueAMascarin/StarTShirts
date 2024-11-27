import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "@src/store/globalStore";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
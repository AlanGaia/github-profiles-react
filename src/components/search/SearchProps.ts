import { Dispatch } from "react";
import { SetStateAction } from "react";

export interface SearchProps {
  setUsername: Dispatch<SetStateAction<string>>;
}
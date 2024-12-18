import { TCategory } from "@/types";
import { TypeStatus } from "../types";

export interface CategoriesApiResponse {
  categories: TCategory[];
  message: string;
  status: TypeStatus;
}

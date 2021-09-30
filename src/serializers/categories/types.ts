export interface CategoryRaw {
  strCategory: string;
}

export interface CategoryRawResponse {
  drinks: CategoryRaw[];
}

export interface Category {
  name: string;
}

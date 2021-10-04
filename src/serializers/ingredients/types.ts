export interface IngredientRaw {
  strIngredient1: string;
}

export interface IngredientRawResponse {
  drinks: IngredientRaw[];
}

export interface IngredientFullRaw {
  idIngredient: number;
  strIngredient: string;
  strDescription: string;
  strType: string;
  strAlcohol: string;
  strABV: string;
}

export interface IngredientFullRawResponse {
  ingredients: IngredientFullRaw[];
}

export interface Ingredient {
  id: number;
  name: string;
  description: string;
  type: string;
  alcoholic: boolean;
  abv: number;
}

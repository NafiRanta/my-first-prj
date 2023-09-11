import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  private recipes:Recipe[] = [
    new Recipe("Hainanese Chicken Rice",
      "Singapore Signature Dish",
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/154660.jpg",
      [new Ingredient('Chicken', 1), new Ingredient('Rice', 1)]),
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes(){
    // return a copy of the recipes array
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    console.log("addIngredientsToShoppingList", ingredients)
    this.shoppingListService.addIngredients(ingredients);

  }

}

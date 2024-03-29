import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../services/ingredient.service';
import { Router } from "@angular/router";
import { Ingredient } from "../models/ingredient";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ingredients: Ingredient[] = [];
  newIngredient: string = '';

  constructor(
    private ingredientService: IngredientService,
    private router: Router
  ) { }

  ngOnInit() {
    localStorage.removeItem("ingredients");
  }

  addIngredient() {
    if (this.newIngredient.trim() !== '') {
      const newIngredient: Ingredient = { name: this.newIngredient.trim() };
      this.ingredientService.addIngredient(newIngredient);
      this.newIngredient = '';
      this.ingredients = this.ingredientService.getIngredients(); // Update ingredients list
    }
  }

  deleteIngredient(index: number) {
    this.ingredientService.deleteIngredient(index);
    this.ingredients = this.ingredientService.getIngredients(); // Update ingredients list
  }

  goToRecipes() {
    const ingredients = this.ingredients.map(ingredient => ingredient.name); // Extract names from Ingredient objects
    this.router.navigate(['/recipes'], { queryParams: { ingredients: ingredients.join(',') } });
  }
}

import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food!: Food;
  constructor(private route: ActivatedRoute,
    private foodservice: FoodService,
    private cartservice: CartService,
    private router:Router) { 
    route.params.subscribe((params:any)=>{
      if(params.id)
      this.food = foodservice.getFoodById(params.id);
    })
  }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartservice.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}

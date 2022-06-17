import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private foodservice: FoodService, private route: ActivatedRoute ,private router:Router) { }

  foods:Food[]=[];

  ngOnInit(): void {
    this.route.params.subscribe((params:any)=>{
      if(params.searchTerm)
      this.foods = this.foodservice.getAllFoodBySearchTerms(params.searchTerm);
      else if(params.tag)
      this.foods = this.foodservice.getfoodByTags(params.tag);
      else this.foods = this.foodservice.getAllfood();
    })
    

  }

}

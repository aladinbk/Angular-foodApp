import { Component, OnInit, Input } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContent:string = 'center';
  
  tags: Tag[]=[];
  constructor(private foodservice:FoodService) { }

  ngOnInit(): void {
  this.tags = this.foodservice.getAllTags();
  }

}

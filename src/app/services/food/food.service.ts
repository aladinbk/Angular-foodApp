import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id: number) : Food{
    return this.getAllfood().find(food => food.id == id)!;
  }
  getAllFoodBySearchTerms(searchTerm:string): Food[]{
    return this.getAllfood().filter(food=>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  getAllTags(): Tag[]{
    return [
      { name: 'All', count: 7 },
      { name: 'FastFood', count: 6 },
      { name: 'Pizza', count: 3 },
      { name: 'Lunch', count: 1 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }
  getfoodByTags(tag: string) :Food[]{
    return tag =="All"?
    this.getAllfood():
    this.getAllfood().filter(food =>food.tags?.includes(tag));

  }
  getAllfood():Food[]{
    return [
      {
        id:1,
        name: 'Metaball',
        price: 20,
        cookTime: '20-30',
        favorite: false,
        origins: ['Persia','midle-east', 'china'],
        stars: 3.0,
        imageUrl: '/assets/images/food-1.jpg',
        tags: ['SlowFood', 'Lunch']
      },
      {
        id:2,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: true,
        origins: ['Germany', 'us'],
        stars: 4.1,
        imageUrl: '/assets/images/food-2.jpg',
        tags: ['FastFood', 'Hamburger']
      },
      {
        id:3,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['Belguim', 'france'],
        stars: 3.8,
        imageUrl: '/assets/images/food-3.jpg',
        tags: ['FastFood', 'Fry']
      },
      {
        id:4,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['India', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/food-4.jpg',
        tags: ['SlowFood', 'Soup']
      },
      {
        id:5,
        name: 'Pizza',
        price: 10,
        cookTime: '5-10',
        favorite: true,
        origins: ['Italy', 'Napoli'],
        stars: 4.8,
        imageUrl: '/assets/images/food-5.jpg',
        tags: ['FastFood', 'Pizza']
      },
      {
        id:6,
        name: 'HotDog',
        price: 8,
        cookTime: '2-5',
        favorite: false,
        origins: ['US', 'Mexican'],
        stars: 3.1,
        imageUrl: '/assets/images/food-6.jpg',
        tags: ['FastFood', 'HotDog']
      },
      {
        id:7,
        name: 'Pizza Végétarienne',
        price: 8,
        cookTime: '5-10',
        favorite: false,
        origins: ['Italy', 'Napoli'],
        stars: 2.5,
        imageUrl: '/assets/images/food-7.jpg',
        tags: ['FastFood', 'Pizza']
      },
      {
        id:7,
        name: 'Pizza Pepperoni',
        price: 8,
        cookTime: '5-10',
        favorite: true,
        origins: ['Italy', 'Napoli'],
        stars: 4.8,
        imageUrl: '/assets/images/food-8.jpg',
        tags: ['FastFood', 'Pizza']
      }
    ]
  }
}

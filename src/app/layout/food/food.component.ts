import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/core/services/food/food.service';
import { IFood } from 'src/app/models/food';
import { ResponseWrapper } from 'src/app/core/providers/ResponseWrapper';
import { BaseUrlProvider } from 'src/app/core/providers/base.url.provider';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  foods: IFood[];
  foodImageUrl: string;
  constructor(private foodService: FoodService, private foodImage: BaseUrlProvider) {
    this.foodImageUrl = this.foodImage.foodImagesUrl;
  }

  ngOnInit() {
    return this.foodService.getFoods().subscribe((response: ResponseWrapper) => {
      this.foods = response.data as IFood[];
      console.log(this.foods);
    }, error => {
      console.log(error);
    })
  }

}

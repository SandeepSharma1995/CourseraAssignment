import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
leader:Leader
  constructor(private dishservice: DishService,
    private promotionservice: PromotionService, private leaderserrvice:LeaderService) { }

  ngOnInit() {
    // this.dish = this.dishservice.getFeaturedDish();
    // this.dishservice.getFeaturedDish()
    //   .then(dish => this.dish = dish);
    this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish);

    // this.promotion = this.promotionservice.getFeaturedPromotion();
    // this.promotionservice.getFeaturedPromotion()
    //   .then(promotion => this.promotion = promotion);
    this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);

    // this.leader=this.leaderserrvice.getFeaturedLeader();
    // this.leaderserrvice.getFeaturedLeader()
    //   .then(leader => this.leader = leader);
    this.leaderserrvice.getFeaturedLeader().subscribe(leader => this.leader = leader);
  }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'autoTrader-item-details',
  templateUrl: './autoTrader-item-details.component.html',
  styleUrls: ['./autoTrader-item-details.component.css']
})
export class autoTraderItemDetailsComponent implements OnInit {

  public title: string = '';
  public image: string = '';
  public text: string = '';
  public year: number = 0;
  public engine: number = 0;
  public trip: number = 0;
  public price: number = 0;
  public id: string = '';


  constructor(private service: DataService, private route: ActivatedRoute, private authService: AuthService, public router: Router) {
  }

  ngOnInit() {
    let id: string = '';
    this.route.paramMap
      .subscribe((params: any) => {
        id = params.get('id');
      });

    this.service.getById(id).subscribe((res: any) => {
      this.image = res['image'];
      this.title = res['title'];
      this.text = res['text'];
      this.year = res['year'];
      this.engine = res['engine'];
      this.trip = res['trip'];
      this.price = res['price'];
      this.id = res['id'];

    });

  }
  deletePost() {
    if(this.authService.isLoggedIn()) {
      this.service.deletePost(this.id).subscribe((result) => {
        return result;
      });
      this.router.navigate(['/']);
    }
  }

  updatePost() {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/edit', this.id])
    }
  }
}

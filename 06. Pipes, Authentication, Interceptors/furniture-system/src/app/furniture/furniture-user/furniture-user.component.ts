import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FurnitureService } from '../furniture.service';
import IFurniture from '../models/IFurniture';

@Component({
  selector: 'app-furniture-user',
  templateUrl: './furniture-user.component.html',
  styleUrls: ['./furniture-user.component.css']
})
export class FurnitureUserComponent implements OnInit {
public allFurnitureCurrentUser: Observable<Array<IFurniture>>;

  constructor(
    private furnitureService : FurnitureService
  ) { }

  ngOnInit() {
    this.allFurnitureCurrentUser = this.furnitureService.getAllUser();
  }

  public delete(id: string):void{
    this.furnitureService.delete(id).subscribe((_) => {
      this.allFurnitureCurrentUser = this.furnitureService.getAllUser();
    });
  }
}

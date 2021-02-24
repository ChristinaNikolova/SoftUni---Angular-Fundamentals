import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FurnitureService } from '../furniture.service';
import IFurniture from '../models/IFurniture';

@Component({
  selector: 'app-furniture-all',
  templateUrl: './furniture-all.component.html',
  styleUrls: ['./furniture-all.component.css']
})
export class FurnitureAllComponent implements OnInit {
public allFurniture: Observable<Array<IFurniture>>;

  constructor(
    private furnitureService: FurnitureService
  ) { }

  ngOnInit() {
    this.allFurniture = this.furnitureService.getAll();
  }
}

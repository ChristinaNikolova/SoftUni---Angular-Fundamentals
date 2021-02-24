import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FurnitureService } from '../furniture.service';
import IFurniture from '../models/IFurniture';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
public furniture: IFurniture;

  constructor(
    private furnitureService: FurnitureService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      const id: string = data['id'];
      this.furnitureService.getDetails(id).subscribe((data) => {
        this.furniture = data;
      })
    });
  }
}

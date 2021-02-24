import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FurnitureService } from '../furniture.service';

const MAKE_MIN_LENGHT = 4;
const MODEL_MIN_LENGHT = 4;
const YEAR_MIN = 1950;
const YEAR_MAX = 2050;
const DESCRIPTION_MIN_LENGHT = 10;
const PRICE_MIN = 1;

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {
public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private furnitureService: FurnitureService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      make: ['', [Validators.required, Validators.minLength(MAKE_MIN_LENGHT)]],
      model: ['', [Validators.required, Validators.minLength(MODEL_MIN_LENGHT)]],
      year: ['', [Validators.required, Validators.min(YEAR_MIN), Validators.max(YEAR_MAX)]],
      description: ['', [Validators.required, Validators.minLength(DESCRIPTION_MIN_LENGHT)]],
      price: ['', [Validators.required, Validators.min(PRICE_MIN)]],
      image: ['', [Validators.required]],
      material: ['', [Validators.nullValidator]]
    })
  }

  public create(): void{
    this.furnitureService.create(this.form.value).subscribe((_) => {
      this.router.navigate(['/furniture/all']);
    });
  }

  public get f(){
    return this.form.controls;
  }
}

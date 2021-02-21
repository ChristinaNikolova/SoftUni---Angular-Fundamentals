import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
@ViewChild('form') form: NgForm;
public phoneCodes: Array<string>;
public jobs: Array<string>;

  constructor() { 
    this.phoneCodes = ["+971", "+359", "+972", "+198", "+701"];
    this.jobs = ["Manager", "Designer", "Accounting"];
  }

  ngOnInit(): void {
  }

  public register(): void{
    if(this.form.valid){
      this.form.reset();
    }
  }
}

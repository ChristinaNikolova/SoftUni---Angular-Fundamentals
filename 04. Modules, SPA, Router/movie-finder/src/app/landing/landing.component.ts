import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
@ViewChild('form') form: NgForm;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public search(): void {
    const query: string = this.form.value.query;
    this.router.navigate(['movie/search'], {queryParams: {query}});
  }
}

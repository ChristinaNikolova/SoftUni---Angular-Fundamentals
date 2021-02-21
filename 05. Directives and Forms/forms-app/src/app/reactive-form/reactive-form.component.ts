import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  public form: FormGroup;
  public phoneCodes: Array < string > ;
  public jobs: Array < string > ;

  constructor(
    private fb: FormBuilder
  ) {
    this.phoneCodes = ["+971", "+359", "+972", "+198", "+701"];
    this.jobs = ["Manager", "Designer", "Accounting"];
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern('^[A-Z][a-z]+[ ][A-Z][a-z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      job: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9]{3,16}$')]],
      repeatPassword: ['', [Validators.required]],
      url: ['', [Validators.required]]
    });
  }

  public register(): void {
    if (this.form.valid) {
      this.form.reset();
    }
  }

  public get f(){
    return this.form.controls;
  }
}

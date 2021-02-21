import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';

import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  ReactiveFormComponent
} from './reactive-form/reactive-form.component';
import {
  TemplateFormComponent
} from './template-form/template-form.component';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  ImageUrlDirective
} from './validators/image-url.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    ImageUrlDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

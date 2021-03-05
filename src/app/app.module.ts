import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { FormComponent } from './component/form/form.component';
import { InputComponent } from './component/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    InputComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormStatusComponent } from './components/shared/form-status/form-status.component';
import { UserFormStepComponent } from './components/user-form-step/user-form-step.component';
import { AddressFormStepComponent } from './components/address-form-step/address-form-step.component';
import { TopicsFormStepComponent } from './components/topics-form-step/topics-form-step.component';
import { FormResultComponent } from './components/form-result/form-result.component';

@NgModule({
  declarations: [
    AppComponent,
    FormStatusComponent,
    UserFormStepComponent,
    AddressFormStepComponent,
    TopicsFormStepComponent,
    FormResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

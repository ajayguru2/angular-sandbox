import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViewRootComponent } from './view-root/view-root.component';
import { HeaderComponent } from './header/header.component';
import { DemoComponent } from './demo/demo.component';
import {FormsModule} from '@angular/forms';
import { SubmissionFormComponent } from './submission-form/submission-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewRootComponent,
    HeaderComponent,
    DemoComponent,
    SubmissionFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

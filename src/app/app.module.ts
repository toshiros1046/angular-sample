import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartTestComponent } from './chart-test/chart-test.component';
import { ChartDetailComponent } from './chart-detail/chart-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartTestComponent,
    ChartDetailComponent
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

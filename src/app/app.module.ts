import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { routes } from "./routes/main.route";

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      initialNavigation: 'enabledBlocking'
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [
    // provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

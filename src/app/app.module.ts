import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { TopBannerComponent } from './components/top-banner/top-banner.component';
import { SvgComponent } from './components/svg/svg.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBannerComponent,
    SvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

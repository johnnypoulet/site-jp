import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { TopBannerComponent } from './components/top-banner/top-banner.component';
import { SvgComponent } from './components/svg/svg.component';
import { LayerSvgComponent } from './components/layer-svg/layer-svg.component';
import { BunzComponent } from './components/bunz/bunz.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectManagementComponent } from './components/admin/project-management/project-management.component'
import { EnumToArrayPipe } from './services/utils/constantsAndEnums';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { ItemManagementComponent } from './components/admin/item-management/item-management.component';
import { AdministrationComponent } from './components/admin/administration/administration.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBannerComponent,
    SvgComponent,
    LayerSvgComponent,
    BunzComponent,
    ProjectManagementComponent,
    ItemManagementComponent,
    AdministrationComponent
  ],
  imports: [
    EnumToArrayPipe,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatCheckboxModule,
    MatGridListModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

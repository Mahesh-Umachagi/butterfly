import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { EndangeredComponent } from './endangered/endangered.component';
import { ButterflyComponent } from './butterfly/butterfly.component';
import { SightingsComponent } from './sightings/sightings.component';
import { ResourcesComponent } from './resources/resources.component';
import { SupportusComponent } from './supportus/supportus.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    EndangeredComponent,
    ButterflyComponent,
    SightingsComponent,
    ResourcesComponent,
    SupportusComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

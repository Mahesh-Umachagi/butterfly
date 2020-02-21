import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { EndangeredComponent } from './endangered/endangered.component';
import { ButterflyComponent } from './butterfly/butterfly.component';
import { SightingsComponent } from './sightings/sightings.component';
import { ResourcesComponent } from './resources/resources.component';
import { SupportusComponent } from './supportus/supportus.component';



const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'info', component:InfoComponent},
  { path:'endangered', component:EndangeredComponent},
  { path:'butterflies', component:ButterflyComponent},
  { path:'sightings', component:SightingsComponent},
  { path:'resources', component:ResourcesComponent},
  { path:'supportus', component:SupportusComponent},
];
export const appRoutingModule = RouterModule.forRoot(routes)
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

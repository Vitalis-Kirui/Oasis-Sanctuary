import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommondationsComponent } from './Components/accommondations/accommondations.component';
import { CultureCenterComponent } from './Components/culture-center/culture-center.component';
import { HallComponent } from './Components/hall/hall.component';
import { MainGateComponent } from './Components/main-gate/main-gate.component';
import { ShadesComponent } from './Components/shades/shades.component';
import { WrittingsComponent } from './Components/writtings/writtings.component';
import { StructuresComponent } from './structures.component';

const routes: Routes = [
  { path: '', component:StructuresComponent},
  {path: 'shades', component:ShadesComponent},
  {path: 'hall', component:HallComponent},
  {path: 'writtings', component:WrittingsComponent},
  {path: 'main-gate', component:MainGateComponent},
  {path: 'culture-center', component:CultureCenterComponent},
  {path: 'accommondations', component:AccommondationsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructuresRoutingModule { }

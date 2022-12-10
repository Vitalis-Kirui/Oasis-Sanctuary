import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructuresRoutingModule } from './structures-routing.module';
import { StructuresComponent } from './structures.component';
import { AccommondationsComponent } from './Components/accommondations/accommondations.component';
import { CultureCenterComponent } from './Components/culture-center/culture-center.component';
import { HallComponent } from './Components/hall/hall.component';
import { MainGateComponent } from './Components/main-gate/main-gate.component';
import { ShadesComponent } from './Components/shades/shades.component';
import { WrittingsComponent } from './Components/writtings/writtings.component';


@NgModule({
  declarations: [
    StructuresComponent,
    AccommondationsComponent,
    CultureCenterComponent,
    HallComponent,
    MainGateComponent,
    ShadesComponent,
    WrittingsComponent
  ],
  imports: [
    CommonModule,
    StructuresRoutingModule
  ]
})
export class StructuresModule { }

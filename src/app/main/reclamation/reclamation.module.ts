// import { Jtest5SemestreModule } from './../../entities/semestre/semestre.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ReclamationComponent } from './reclamation.component';

// import { FuseSharedModule } from '@fuse/shared.module';

@NgModule({
  declarations: [ReclamationComponent],
  imports: [
    CommonModule,
    ReclamationRoutingModule,
    // FuseSharedModule,
    // Jtest5SemestreModule
  ]
})
export class ReclamationModule { }

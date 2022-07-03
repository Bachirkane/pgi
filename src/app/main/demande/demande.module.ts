import { Jtest5SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { DemandeComponent } from './demande.component';
import { DemandeUpdateComponent } from './demande-update.component';
import { DemandeDeleteDialogComponent } from './demande-delete-dialog.component';
import { DemandeDetailComponent } from './demande-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';


import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
// import {MatDialogModule} from "@angular/material";

@NgModule({
  imports: [
    Jtest5SharedModule,
    BrowserModule,
  HttpClientModule,
  MatDialogModule,
  MatPaginatorModule,
  MatTableModule,
  MatTabsModule,
  BrowserAnimationsModule
],
  declarations: [DemandeComponent, 
     DemandeDeleteDialogComponent
    ],
  entryComponents: [DemandeDeleteDialogComponent],
})
export class Jtest5DemandeModule {}

import { Jtest5SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MailComponent } from './mail.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FuseSharedModule } from '../../../@fuse/shared.module';
import { Jtest5DemandeModule } from './demande.module';

// import {MatDialogModule} from "@angular/material";

@NgModule({
  imports: [
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    // MatPaginatorModule,
    MatRippleModule,
    // MatSelectModule,
    // MatSortModule,
    MatSnackBarModule,
    // MatTableModule,
    // MatTabsModule,
    Jtest5DemandeModule,
    // NgxChartsModule,
    FuseSharedModule,
    // FuseWidgetModule
    ],
  declarations: [
      MailComponent, 
    ],
  entryComponents: [
      MailComponent
    ],
})
export class MailModule {}

import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
// import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

import {MailService  } from './mail.service';

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
@Component({
  selector: 'mail-detail',
  templateUrl: './mail.component.html',
  styleUrls    : ['./mail.component.scss'],
  animations   : fuseAnimations,
  // encapsulation: ViewEncapsulation.None --> détachement des éléments
})
export class MailComponent implements OnInit {

  title = 'EmailTemplate';
  data_form: Details = {
    subject:'',
    content:'',
    to:''
  };

  constructor(private email:MailService, private dialogRef: MatDialogRef<MailComponent>,@Inject(MAT_DIALOG_DATA) data, protected activatedRoute: ActivatedRoute, private dialog: MatDialog) {}
  SendEmail(){
    this.email.sendmail(this.data_form).subscribe((response:any)=>{
      console.log(response);
      // this.snack.open(response.response)
      this.data_form = {
        to : '',
        subject : '',
        content : '',
      
      }
    }, (error)=>{
      console.error(error);
    })
  }
 
  ngOnInit(): void {
  }

  previousState(): void {
    window.history.back();
  }

  close() {
      this.dialogRef.close();
  }

}
interface Details{
  subject:string;
  content:string;
  to:string;
}

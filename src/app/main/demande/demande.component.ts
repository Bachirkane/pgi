import { IDemande } from './../../shared/model/demande.model';
import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
// import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
// import { suhiEventManobjectr } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { HttpClient } from '@angular/common/http';
// import { DemandeService } from './demande.service';
import { DemandeDeleteDialogComponent } from './demande-delete-dialog.component';
// import { MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { DemandeDeleteDialogComponent } from './demande-delete-dialog.component';

import {MatDialog, MatDialogConfig} from '@angular/material/dialog';


import {DemandeService  } from './demande.service';
import { MailComponent } from './mail.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss'],
  // animations : fuseAnimations
})
@Injectable()
export class DemandeComponent  {
  demandes?: IDemande[];
  eventSubscriber?: Subscription;

  title = 'EmailTemplate';
  data_form: Details = {
    subject:'',
    content:'',
    to:''
  };
  matDialog: any;
  constructor(private email:DemandeService, private snack:MatSnackBar,private dialog: MatDialog, protected demandeService: DemandeService,  protected modalService: NgbModal, private https: HttpClient) {}
  SendEmail(){
    this.email.sendmail(this.data_form).subscribe((response:any)=>{
      console.log(response);
      this.snack.open(response.response)
      this.data_form = {
        to : '',
        subject : '',
        content : '',
      
      }
    }, (error)=>{
      console.error(error);
    })
    // this.https.post<Details>('http://localhost:8080/api/mails', this.data_form).subscribe(
    //     res => {
    //       this.data_form = res;
    //       console.log(this.data_form);
    //       alert('Email Sent successfully');
    //       // this.data_form.subject = null;
    //       // this.data_form.content = '';
    //       // this.data_form.to = '';
    //     });

  }
// Pour
listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'email', 'modules', 'type', 'actions'];
  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {
    // this.service.getEmployees().subscribe(
    //   list => {
    //     let array = list.map(item => {
    //       let departmentName = this.departmentService.getDepartmentName(item.payload.val()['department']);
    //       return {
    //         $key: item.key,
    //         departmentName,
    //         ...item.payload.val()
    //       };
    //     });
    //     this.listData = new MatTableDataSource(array);
    //     this.listData.sort = this.sort;
    //     this.listData.paginator = this.paginator;
    //     this.listData.filterPredicate = (data, filter) => {
    //       return this.displayedColumns.some(ele => {
    //         return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
    //       });
    //     };
    //   });
  }

// displayedColumns = ['id', 'reference', 'customer', 'total', 'payment', 'status', 'date'];
search : String =""; //serach bar
onCreate() {
  // this.service.initializeFormGroup();
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "50%";
  dialogConfig.height = "70%";
  this.dialog.open(MailComponent,dialogConfig);
}
// onClear() {
//   this.service.form.reset();
//   this.service.initializeFormGroup();
//   this.notificationService.success(':: Submitted successfully');
// }
// 


  // hidestage: boolean = true; 
  // hidedemandereclamation: boolean = true;  
  // hideservice: boolean = true;
  // reponse: string = '';
  // dishide_demade_reclamation(){
  //   this.hidedemandereclamation = false;
  //   this.hidestage = true;
  //   this.hideservice = true;
  // }
  // dishide_stage(){
  //   this.hidestage = false;
  //   this.hideservice = true;
  //   this.hidedemandereclamation = true;
  // }
  // dishide_service(){
  //   this.hideservice = false;
  //   this.hidestage = true;
  //   this.hidedemandereclamation = true;
  // }
  // dishide_environmantals(){
  //   this.hide = false;
  // }
  // dishide_exhaunauration(){
  //   this.hide = false;
  // }
  // dishide_pedagogie(){
  //   this.hide = false;
  // }
  // hide_textarea(){
  //   this.hide =true;
  // }

  
}

interface Details{
  subject:string;
  content:string;
  to:string;
}


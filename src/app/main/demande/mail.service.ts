import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { SERVER_API_URL } from '../../app.constants';

@Injectable({ providedIn: 'root' })
export class MailService {

  private usersUrl: string= "http://localhost:8080/mails";
  constructor(protected http: HttpClient) {
    // this.usersUrl ;
  }

  sendmail(data_form:any){
    return this.http.post(this.usersUrl, data_form)
  }

  
}

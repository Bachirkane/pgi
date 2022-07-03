import { Component, OnInit } from '@angular/core';
import {fuseAnimations} from '../../../@fuse/animations';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss'],
  animations : fuseAnimations
})
export class ReclamationComponent implements OnInit {
   
  constructor() {

  }

  ngOnInit(): void {
  }

}

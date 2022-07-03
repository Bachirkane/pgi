import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

// import { fuseAnimations } from '@fuse/animations';
// import { FuseUtils } from '@fuse/utils';


import { takeUntil } from 'rxjs/operators';

@Component({
    selector   : 'reclamations',
    templateUrl: './reclamations.component.html',
    styleUrls    : ['./reclamations.component.scss'],
    // animations   : fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class ReclamationsComponent implements OnInit, OnDestroy
{
    // dataSource: FilesDataSource | null;
   displayedColumns = ['id', 'reference', 'customer', 'total', 'payment', 'status', 'date'];

    private _unsubscribeAll: Subject<any>;

    
    constructor(
        
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        
    }
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete(); 
    }
}


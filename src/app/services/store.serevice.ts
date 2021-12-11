import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { distinctUntilChanged } from 'rxjs/operators';
import { fetchStore } from 'src/store/store.selector';
import * as fromReducer from '../../store/store.reducer';

@Injectable({providedIn:'root'})
export class StoreService{
    constructor(private store: Store<fromReducer.State>){
        
    }
    
    fetchStoreValue(){
        return this.store.select(fetchStore,{}).pipe(
            distinctUntilChanged((prev, curr) => prev === curr)
        );
    }
}
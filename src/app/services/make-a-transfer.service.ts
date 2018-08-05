import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface TransferDetails {
  fromAccount : string;
  toAccount : string;
  amount : number;
}

@Injectable()
export class MakeATransferService {
  transferDetails: Observable<TransferDetails[]>
  private _transferDetails: BehaviorSubject<TransferDetails[]>;
  private dataStore : {
     transferDetails: TransferDetails[]
  };

  constructor(){
    this._transferDetails = <BehaviorSubject<TransferDetails[]>>new BehaviorSubject([]);
    this.dataStore = { transferDetails: [] };
    this.transferDetails = this._transferDetails.asObservable();
  }

  saveTransferDetails(details){
    this.dataStore.transferDetails.push(details);
    this._transferDetails.next(Object.assign({}, this.dataStore).transferDetails);
  }


}
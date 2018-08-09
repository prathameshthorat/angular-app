import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { TransferDetails, MakeATransferService } from '../services/make-a-transfer.service';

@Component({
  selector: 'transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss'],
})
export class TransactionHistoryComponent implements OnInit{

  recentHistory : Observable<TransferDetails[]>;
  transactionFilter = "";
  
  constructor( private transferService : MakeATransferService)  {

  }

  ngOnInit(){
    this.recentHistory = this.transferService.transferDetails
    //console.log(this.recentHistory);
  }
}
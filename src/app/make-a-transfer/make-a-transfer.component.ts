import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MakeATransferService, TransferDetails } from '../services/make-a-transfer.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'make-a-transfer',
  templateUrl: './make-a-transfer.component.html',
  styleUrls: ['./make-a-transfer.component.scss']
})
export class MakeATransferComponent implements OnInit {
  
  recentHistory : Observable<TransferDetails[]>;
  public transferForm : FormGroup = new FormGroup({
      fromAccount : new FormControl('', [Validators.required]),
      toAccount : new FormControl('', [Validators.required]),
      amount : new FormControl('', [Validators.required])
  });

  constructor( private transferService : MakeATransferService){}

  ngOnInit(){
    this.recentHistory = this.transferService.transferDetails;
    console.log(this.recentHistory); 
  }

  onSubmit() {
    var obj : TransferDetails = {
       fromAccount : this.transferForm.controls.fromAccount.value,
        toAccount : this.transferForm.controls.toAccount.value,
        amount : this.transferForm.controls.amount.value,
    }
    this.transferService.saveTransferDetails(obj);
  }

}
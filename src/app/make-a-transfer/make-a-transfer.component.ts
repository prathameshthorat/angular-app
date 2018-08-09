import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MakeATransferService, TransferDetails } from '../services/make-a-transfer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'make-a-transfer',
  templateUrl: './make-a-transfer.component.html',
  styleUrls: ['./make-a-transfer.component.scss']
})
export class MakeATransferComponent implements OnInit {
  
  recentHistory : Observable<TransferDetails[]>;
  public transferForm : FormGroup = new FormGroup({
      fromAccount : new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$|^[0-9]{12}$')]),
      toAccount : new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$|^[0-9]{12}$')]),
      amount : new FormControl('', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')])
  });

  constructor( private transferService : MakeATransferService){}

  ngOnInit(){
    this.recentHistory = this.transferService.transferDetails;
  }

  onSubmit() {
    var obj : TransferDetails = {
        fromAccount : this.transferForm.controls.fromAccount.value,
        toAccount : this.transferForm.controls.toAccount.value,
        amount : this.transferForm.controls.amount.value,
        transferedDate: new Date()
    }
    this.transferService.saveTransferDetails(obj);
    this.transferForm.reset();
  }

}
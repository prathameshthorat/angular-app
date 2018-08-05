import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { MakeATransferComponent } from './make-a-transfer/make-a-transfer.component';
import { MakeATransferService } from './services/make-a-transfer.service';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports:      [ BrowserModule, FormsModule,  NgbModule.forRoot(), ReactiveFormsModule,  Ng2SearchPipeModule ],
  declarations: [ AppComponent, MakeATransferComponent, TransactionHistoryComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ MakeATransferService ]
})
export class AppModule { }

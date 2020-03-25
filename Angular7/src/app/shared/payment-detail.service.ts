import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail = {
    CVV: null,
    CardNumber: null,
    CardOwnerName: null,
    ExpirationDate: null,
    PMId: null
  }

  readonly rootURL = 'http://localhost:55927/api';
  list : PaymentDetail[];

  constructor(private http:HttpClient) { }

  postPaymentDetail(formData:PaymentDetail){
    return this.http.post(this.rootURL+'/PaymentDetail',formData);
  }

  putPaymentDetail(){
    return this.http.put(this.rootURL+'/PaymentDetail/'+this.formData.PMId,this.formData);
  }

  deletePaymentDetail(id){
    return this.http.delete(this.rootURL+'/PaymentDetail/'+id);
  }

  refreshList(){
    this.http.get(this.rootURL+'/PaymentDetail')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }

}

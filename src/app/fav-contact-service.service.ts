import { Injectable } from '@angular/core';
import { IFavContactSchema } from './favSchema';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FavContactServiceService {
  public allContactDetails:IFavContactSchema[];
  constructor(private http: HttpClient) {
  }
  addContacts(details:IFavContactSchema){
      this.allContactDetails.push(details);
      return "Data Added Successfully";
  }
  
  public getAllContacts() {
    return this.http.get("http://localhost:4200/assets/file.json");
  }
  
  deleteContact(i){
    this.allContactDetails.splice(i, 1);
  }

  getContact(i){
    return this.allContactDetails[i];
  }

  updateContact(i,updatedContact){
    this.allContactDetails[i] = updatedContact;
  }
}

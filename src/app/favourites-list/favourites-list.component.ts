import { Component, OnInit } from '@angular/core';
import { IFavContactSchema } from '../favSchema';
import { FavContactServiceService } from '../fav-contact-service.service';
@Component({
  selector: 'app-favourites-list',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.css']
})
export class FavouritesListComponent implements OnInit {
  key: string = 'first_name'; //set default
  reverse: boolean = false;
  p: number = 1;
  public favContactLists:IFavContactSchema[];
  constructor(private favConService:FavContactServiceService) { }
  ngOnInit() {
    this.favConService.getAllContacts().subscribe( 
      (data:IFavContactSchema[]) => {
        if(this.favConService.allContactDetails === undefined && this.favContactLists === undefined){
          this.favConService.allContactDetails = this.favContactLists = data;
        }
        
        // if(localStorage.getItem("reqData") === null) {
        //   localStorage.setItem("reqData",JSON.stringify(data));
        //   this.favConService.allContactDetails = this.favContactLists = JSON.parse(localStorage.getItem("reqData"));
        // }
      }
    );
    if(this.favContactLists === undefined){
      this.favContactLists = this.favConService.allContactDetails;
    }
  }
  deleteContact(i:Number){
    this.favConService.deleteContact(i);
  }
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
}

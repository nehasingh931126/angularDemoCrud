import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FavouritesListComponent } from './favourites-list/favourites-list.component';
import { AddFavouritesComponent } from './add-favourites/add-favourites.component';
import { HomeComponent } from './home/home.component';
import { OnlyIntegerDirective } from './directives/only-integer.directive';
import { NamesDirectiveDirective } from './directives/names.directive';
import { CapitalLetterDirective } from './directives/capital-letter.directive';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { FavFilter  }from './filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FavContactServiceService } from './fav-contact-service.service';
import { CheckFormValidationComponent } from './check-form-validation/check-form-validation.component';

const appRoutes: Routes = [
  { path: 'edit/:id', 
    component: AddFavouritesComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'listing',
    component: FavouritesListComponent
  },
  {
    path: 'addFav',
    component: AddFavouritesComponent
  },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**', component:PageNotFoundComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FavouritesListComponent,
    AddFavouritesComponent,
    HomeComponent,
    OnlyIntegerDirective,
    NamesDirectiveDirective,
    FavFilter,
    CheckFormValidationComponent,
    CapitalLetterDirective  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    Ng2SearchPipeModule, //including into imports
    Ng2OrderModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  providers: [FavContactServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

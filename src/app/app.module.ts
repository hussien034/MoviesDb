import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { MoviestComponent } from './moviest/moviest.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { PepoleComponent } from './pepole/pepole.component';
import { AboutComponent } from './about/about.component';
import { NetworkComponent } from './network/network.component';
import { SigninComponent } from './signin/signin.component';
import { SignuoComponent } from './signup/signuo.component';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule} from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";
import {BrowserAnimationsModule   } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    HomeComponent,
    MoviestComponent,
    TvshowComponent,
    PepoleComponent,
    AboutComponent,
    NetworkComponent,
    SigninComponent,
    SignuoComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

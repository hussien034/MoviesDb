import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MoviestComponent } from './moviest/moviest.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PepoleComponent } from './pepole/pepole.component';
import { SigninComponent } from './signin/signin.component';
import { SignuoComponent } from './signup/signuo.component';
import { TvshowComponent } from './tvshow/tvshow.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},

{path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'about',component:AboutComponent,canActivate:[AuthGuard]},
  {path:'footer',component:FooterComponent,canActivate:[AuthGuard]},
  {path:'details/:id',component:DetailsComponent},
  {path:'moviest',component:MoviestComponent},
  {path:'notfound',component:NotfoundComponent},
  {path:'pepole',component:PepoleComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignuoComponent},
  {path:'tvshow',component:TvshowComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

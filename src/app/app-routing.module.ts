import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotographyComponent } from './photography/photography.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TitlePageComponent } from './title-page/title-page.component';

const routes: Routes = [
  { path: '', component: TitlePageComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'photography', component: PhotographyComponent }
  //add error path which would be path: '**'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

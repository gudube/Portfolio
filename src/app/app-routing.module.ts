import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotographyComponent } from './photography/photography.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'about-me', component: PhotographyComponent },
  { path: 'photography', component: PhotographyComponent }
  //add error path which would be path: '**'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

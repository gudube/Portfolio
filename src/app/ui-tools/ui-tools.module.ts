import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './back-button/back-button.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { AppRoutingModule } from '../app-routing.module';
import { FootnotesComponent } from './footnotes/footnotes.component';

@NgModule({
	declarations: [BackButtonComponent, MenuComponent, MenuItemComponent, FootnotesComponent],
	imports: [CommonModule, AppRoutingModule],
	exports: [BackButtonComponent, MenuComponent, MenuItemComponent, FootnotesComponent],
})
export class UiToolsModule {}

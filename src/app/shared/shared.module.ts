import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from '../pages/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent],
  imports: [CommonModule, TranslateModule],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    TranslateModule,
  ],
})
export class SharedModule {}

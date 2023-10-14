import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [    
    HeaderComponent,
    FooterComponent,
    SidebarComponent,    
    DefaultLayoutComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ]
  
})
export class SharedModule { }

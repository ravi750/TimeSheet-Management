import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { LoginPage } from './login.page';
import { IonicModule } from '@ionic/angular';

 
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage
      }
    ])
  ],
  declarations: [LoginPage]
})
export class LoginPageModule { }

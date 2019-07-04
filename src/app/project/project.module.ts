import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ProjectPage } from './project.page';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProjectPage
      }
    ])
  ],
  declarations: [ProjectPage]
})
export class ProjectPageModule { }
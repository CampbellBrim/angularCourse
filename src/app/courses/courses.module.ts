import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { EditCourseFormComponent } from './edit-course-form/edit-course-form.component';


@NgModule({
  declarations: [
    CoursesListComponent,
    EditCourseFormComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgOptimizedImage
  ]
})
export class CoursesModule { }

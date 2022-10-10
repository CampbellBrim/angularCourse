import { CourseResolverGuard } from './../guards/course-resolver.guard';
import { CoursesFormComponent } from './courses-form/courses-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { EditCourseFormComponent } from './edit-course-form/edit-course-form.component';

const routes: Routes = [
  { path: '', component: CoursesListComponent },
  { path: 'new', component: CoursesFormComponent,
    resolve: {
    course: CourseResolverGuard
  }
},
  { path: 'edit/:id', component: EditCourseFormComponent,
    resolve: {
    course: CourseResolverGuard
  }
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }

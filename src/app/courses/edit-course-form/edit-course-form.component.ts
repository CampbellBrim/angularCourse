import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { CoursesService } from '../courses-list/courses.service';

@Component({
  selector: 'app-edit-course-form',
  templateUrl: './edit-course-form.component.html',
  styleUrls: ['./edit-course-form.component.css']
})
export class EditCourseFormComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(),
    id: new FormControl(),
    price: new FormControl(),
    image: new FormControl(),
}); 

  submitted = false;
  
  constructor(private fb: FormBuilder, private service: CoursesService,
    // private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
    ) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        const course$ = this.service.loadByID(id);
        course$.subscribe(course => {
          this.updateForm(course);
        })
      }
    )
  
}
updateForm(course: any) {
  this.form.patchValue({
    name: course.name,
    id: course.id,
    price: course.price,
    image: course.image
  })
}

  hasError(field: string) {
    // return this.form.get(field).errors;
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value)
    if (this.form.valid) {
      
      if (this.form.value.id) {
        // update logic
        this.service.update(this.form.value).subscribe(
            success => {
          alert('produto atualizado com successo!')
        },
        error => {
          alert(error);
        }
        )
      } 
      else {
        this.service.create(this.form.value).subscribe(
          success => console.log(success),
          error => console.error(error),
          // () => console.log('request complete')
        );
      }

      }
  }
  onCancel() {
      this.submitted = false;
      this.form.reset();
    // console.log('cancel)
    
  }


}

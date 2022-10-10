import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { CoursesService } from '../courses-list/courses.service';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.css']
})
// export class CoursesFormComponent implements OnInit {
export class CoursesFormComponent {

  // form: FormGroup;
  // form: any;
  form = new FormGroup({
    // name: new FormControl(),
    name: new FormControl(),
    id: new FormControl(),
    price: new FormControl(),
    image: new FormControl(),
}); 

  submitted = false;

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });
  
  constructor(private fb: FormBuilder, private service: CoursesService,
    // private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
    ) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id);
        const course$ = this.service.loadByID(id);
        course$.subscribe(course => {
          this.updateForm(course);
        })
      }
    )
    // this.route.params.pipe(
    //   map((params: any) => params['id']),
    //   switchMap(id => this.service.loadByID(id))
    // ).subscribe(
    //   (course) => this.updateForm(course))
        // const id = params['id'];
        // console.log(id);
        // const course$ = this.service.loadByID(id);
        // course$.subscribe(course => {
          //   this.updateForm(course);
          // })
      
  //   this.form = this.fb.group({
  //     name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
  //   })
  // const course = this.route.snapshot.data['course'];
  
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
      console.log('submit')
      // this.service.save(this.form.value).subscribe(
      //   success => {
      //     alert('you did it!')
      //   },
      //   error => {console.error(error);}
        
      // );
      if (this.form.value.id) {
        // update logic
        this.service.update(this.form.value).subscribe(
            success => {
          alert('you did it!')
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
          () => console.log('request complete')
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

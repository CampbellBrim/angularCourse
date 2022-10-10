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


  
  constructor(private fb: FormBuilder, private service: CoursesService,
    // private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
    ) { }
  
  ngOnInit(): void {
  
}


  hasError(field: string) {
    // return this.form.get(field).errors;
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    this.submitted = true;
    // console.log(this.form.value)
    if (this.form.valid) {

      if (this.form.value.id) {
        // update logic
        this.service.update(this.form.value).subscribe(
            success => {
          alert('produto atualizado com sucesso!')
        },
        error => {
          alert(error);
        }
        )
      } 
      else {
        this.service.create(this.form.value).subscribe(
          success => alert('produto criado com sucesso!'),
          error => console.error(error),
        );
      }

      }
  }
  onCancel() {
      this.submitted = false;
      this.form.reset();
    
  }


}

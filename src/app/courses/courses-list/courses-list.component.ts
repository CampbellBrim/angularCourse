import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  // courses: any;
  // courses: Course[];

  // courses$: Observable<Course[]>
  courses$: any;
  
  constructor(private service: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    // private modalService: BsModalService,
    ) { }
  
  ngOnInit(): any {
    // this.service.list().subscribe(data => this.courses = data);
    // this.service.list().subscribe(console.log);
    this.courses$ = this.service.list();
  }


  // courses: Course = {
  //     id: 0;
  //     name: 'string'
  //   }
  
  // cursos: any = [{id: 1, nome: "angular"}, {id: 2, nome: "react"}];

  onRefresh: any = () => {
    this.courses$ = this.service.list().pipe()
  }
  onEdit: any = (id: any) => {
    this.router.navigate(['edit', id], { relativeTo: this.route });
  }
  onDelete: any = (id: any) => {
    this.service.remove(id).subscribe();
    this.onRefresh();
  }

  loading: any;

}

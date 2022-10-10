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
  courses$: any;
  
  constructor(private service: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    // private modalService: BsModalService,
    ) { }
  
  ngOnInit(): any {

    this.courses$ = this.service.list();
  }
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

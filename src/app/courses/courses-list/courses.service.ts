import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './course';
import { environment } from 'src/environments/environment';
import { delay, tap, take, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = environment.API + "courses";
  // `environment.API courses` 
  // private readonly API = `http://localhost:3000/courses` 
  // 'http://localhost:3000/courses';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<any>(this.API).pipe(
      delay(1000),
      tap(console.log)
    );
  }

  loadByID(id: any) {
    return this.http.get(`${this.API}/${id}`).pipe(take(1))
  }


  create(course: any) {
    return this.http.post(this.API, course).pipe(take(1));
  }

  update(course: any) {
    return this.http.put(`${this.API}/${course.id}`, course).pipe(take(1));
  }

  save(course: any) {
    if (course.id) {
      return this.update(course);
    } else {
      return this.create(course);
    }
  }

  remove(id: any) {
    console.log(id)
    return this.http.delete(`${this.API}/${id}`).pipe(take(1))
    // return this.http.delete(`${this.API}/${id}`).subscribe();
  }

}

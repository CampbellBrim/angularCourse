import { CoursesService } from './../courses/courses-list/courses.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseResolverGuard implements Resolve<any> {

  constructor(private service: CoursesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']);
    }

    return of({
      id: null,
      name: null
    })
  }
  
}

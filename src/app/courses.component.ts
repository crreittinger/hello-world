import {Component} from '@angular/core';
import { CoursesService } from './courses.service';


@Component({
    selector: 'courses',
    template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <img src="{{ imageURL }}" />
        <img [src]="imageURL" />
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
    `
})
export class CoursesComponent{
    title = "List of courses";
    courses:string[];
    isActive=true;
    imageURL = "http://lorempixel.com/400/200";
    getTitle(){
        return this.title;
    }

    //Logic for call an HTTP service

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

}
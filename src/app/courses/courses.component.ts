import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnDestroy    {
  
  courses: any[];
  subscription: Subscription;

  constructor(db: AngularFireDatabase ) { 
    this.subscription = db.list('/courses')
                            .subscribe( courses => {
                              this.courses = courses;
                              console.log(this.courses);
                            });
  }

// Unsubscribe to the observable for preventing memory leaks
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}

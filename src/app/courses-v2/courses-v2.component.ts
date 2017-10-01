import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-courses-v2',
  templateUrl: './courses-v2.component.html',
  styleUrls: ['./courses-v2.component.css']
})
export class CoursesV2Component {
  courses$: FirebaseListObservable<any[]>;  //  observable for handling firbase memory leaks
  courses: any[];
  course$;
  author$;

  constructor(private db: AngularFireDatabase ) {
    
    this.course$ = db.object('/courses/1');
    this.author$ = db.object('/authors/1');

  }

  read(){
    this.courses$ = this.db.list('/courses');
  }

  add(course){
    this.courses$.push(course.value);
    course.value = '';
  }

  update(course){
    this.db.object('/courses/' + course.$key).update({
      'name': 'updated'
    });
  }

  delete(course){
    this.db.object('/courses/' + course.$key).remove()
      .then(x => {
        console.log('Deleted')
      });
  }


}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {
  users$: Object;
  items: Observable<any[]>;
  constructor(private data: DataService,private db: AngularFirestore) { 
    //this.items = db.collection('users').valueChanges();
    console.log(this.items);
  }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data 
    );
    this.addUser();
  }
public addUser()
{
  
  this.db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

this.items = this.db.collection("users", ref => ref.where('born', '==', 1805)).valueChanges();
console.log(this.items);
}
}

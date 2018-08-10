import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentUrl: string;
  @Input() childMessage: string;
  constructor(private router: Router, private title: AppComponent) {
    this.router.events.subscribe((nav : NavigationEnd) => {
      if(nav.url)
      {
        console.log("url",nav.url)
        this.currentUrl = nav.url;
      } 
    });
  }

  ngOnInit() {
  }

}

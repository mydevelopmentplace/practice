import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute , RoutesRecognized } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('collapse', [
      state('open', style({
        opacity: '1',
        display: 'block',
        transform: 'translate3d(0, 0, 0)'
      })),
      state('closed',   style({
        opacity: '0',
        display: 'none',
        transform: 'translate3d(0, -100%, 0)'
      })),
      transition('closed => open', animate('200ms ease-in')),
      transition('open => closed', animate('100ms ease-out'))
    ])
  ]
})
export class AppComponent {
  title = 'app';
  public constructor(private titleService: Title,private activatedRoute: ActivatedRoute,private router: Router)
  {
    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        let route = event.state.root.firstChild;
        console.log('Page', 'page-' + route.data.title || '');
        this.titleService.setTitle("Practice | "+route.data.title);
      }
    });
  }
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
  
  ngOnInit()
  {
  }
  collapse:string = "closed";

  public toggleCollapse() {
  // this.show = !this.show
  console.log("toggle");
    this.collapse = this.collapse == "open" ? 'closed' : 'open';
  }
}

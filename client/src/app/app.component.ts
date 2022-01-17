import {Component, HostListener, ViewChild} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public innerWidth: any;
  public mode = 'open';

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth < 800) {
      this.mode = 'over';
    }
    else{
      this.mode = 'side'
    }
  }

  openSidenav(){
    this.mode = 'side'
  }

  // @ViewChild(MatSidenav)
  // sidenav!: MatSidenav;
  //
  // constructor(private observer: BreakpointObserver) {}
  //
  // ngAfterViewInit() {
  //   this.observer
  //     .observe(['(max-width: 800px)'])
  //     .pipe(delay(1))
  //     .subscribe((res) => {
  //       if (res.matches) {
  //         this.sidenav.mode = 'over';
  //         this.sidenav.close();
  //         console.log(this.sidenav.mode)
  //       } else {
  //         this.sidenav.mode = 'side';
  //         this.sidenav.open();
  //         console.log(this.sidenav.mode)
  //       }
  //     });
  // }
}

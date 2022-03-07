import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  private sub!: Subscription

  constructor(
    
  ) { }
  
  ngOnInit(): void {
    // this.sub = interval(1000).subscribe(count => {
    //   console.log(count)
    // })
    // new Observable(this.sub, )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}

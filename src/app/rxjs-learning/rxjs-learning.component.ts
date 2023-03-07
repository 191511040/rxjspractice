import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, from, fromEvent, interval, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit{

  @ViewChild('validate') validate!: ElementRef;
  students1: Observable<number> = of(1, 2, 3)
  orders$:Observable<string>=from(["ram","raju","sam"])
  constructor() {

  }
  ngOnInit(): void {
    this.students1.pipe(map(x => x * x)).subscribe(data => console.log(data))
    this.orders$.subscribe((data) => {
      const number$ = interval(500)
      number$.subscribe((num) => {
        if (num < 5) {
          console.log(data+num)
       }

      })
      console.log(data)
    })
  }

  //use case: user should not  be alowed to click 3 times immediately//
  rxjsEventObservable() {
    const btnobservable = fromEvent(this.validate.nativeElement, 'click')

    btnobservable.subscribe((data) => {
      console.log(data)
    })
  }

//use case:
  //debounce time
  //1.search
  //->user types the values
  //->fast->apicalls
  //2) delay/emit the next

}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, map, mergeMap, take, takeLast, takeUntil, takeWhile, Observable, of } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchform!: FormGroup;


  categories:Observable<string[]> = of(['mobille', 'telephone', 'sample'])

  constructor(private formbuilder:FormBuilder) {

  }
//use case:
  //debounce time
  //1.search
  //->user types the values-you cannot call Apis so many times
  //->time lag->debounce time
  //->fast->apicalls
  //2) delay/emit the next
  ngOnInit() {
    this.searchform = this.formbuilder.group({
      name:new FormControl('')
      })
      // this.searchform.get('name')?.valueChanges.pipe(
      //   debounceTime(10000)).subscribe((data) => {

      //   console.log(data)
      // })
      // this.searchform.get('name')?.valueChanges.pipe(
      //   take(2)).subscribe((data) => {

      //   console.log(data)
      //   })
        // this.searchform.get('name')?.valueChanges.pipe(
        //   takeWhile((v)=>this.checkvalue(v)),debounceTime(4000)).subscribe((data) => {

        //   console.log(data)
        // })
        // this.categories.pipe(
        //   takeLast(1)).subscribe((data) => {

        //      console.log(data)
        //    })

  }
  checkvalue(v: any) {
   return v.length>5?false:true
  }
  readvalue() {

  }
}

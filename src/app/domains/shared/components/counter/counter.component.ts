import { Component, Input, SimpleChanges } from '@angular/core';
import { log } from 'console';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message='';


  constructor(){
    //NO ASYNC
    // Before render
    console.log('constructor');
    console.log('-'.repeat(10));

  }
  ngOnChanges(changes: SimpleChanges){
    // Before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
  }
}

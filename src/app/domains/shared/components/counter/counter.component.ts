import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message='';
  counter = signal(0);
  counterRef: number | undefined;


  constructor(){
    //NO ASYNC
    // Before render
    // Una vez
    console.log('constructor');
    console.log('-'.repeat(10));

  }
  ngOnChanges(changes: SimpleChanges){
    // Before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
  }

  ngOnInit(){
    // After render
    // Una vez
    // async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);


  }
  ngAfterViewInit(){
    // After render
    // Cuando los hijos ya fueron pintados
    // Una vez
    // async, then, subs
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }
  ngOnDestroy(){
    // Before destroy
    // Una vez
    // async, then, subs
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }
}

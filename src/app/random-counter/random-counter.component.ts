import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-random-counter',
  templateUrl: './random-counter.component.html',
  styleUrls: ['./random-counter.component.css']
})
export class RandomCounterComponent implements OnInit {

  @Input()
  public valeurCounter: number = 0;

   @Output("valeurCounterChange")
   public valeurCounterChangeEvent: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  public setCounterToRandomValue(): void{
     this.valeurCounter = Math.random() * 100;
     this.valeurCounterChangeEvent.emit(this.valeurCounter);
  }
}

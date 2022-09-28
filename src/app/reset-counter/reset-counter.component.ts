import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-reset-counter',
  templateUrl: './reset-counter.component.html',
  styleUrls: ['./reset-counter.component.css']
})
export class ResetCounterComponent implements OnInit {

  @Output("reset")
  public resetEvent: EventEmitter<number> = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  public reset(): void {
    this.resetEvent.emit(0)
  }

}

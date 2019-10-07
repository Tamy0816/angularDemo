import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<any>();
  public seachInfo = {
    userName: '',
    sex: ''
  };
  constructor() { }
  ngOnInit() {
  }
  search() {
    this.searchEvent.emit(this.seachInfo);
  }
}

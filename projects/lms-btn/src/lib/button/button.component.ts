import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lms-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() disabled : boolean;
  @Input() buttonText: string;

  @Output() click :EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.disabled = this.disabled ? this.disabled : false;
    this.buttonText = this.buttonText ? this.buttonText : 'Click';
  }

  onClick(e) : any {
    if(this.disabled) {
      return;
    } else {
      this.click.emit(e);
  }
}

}

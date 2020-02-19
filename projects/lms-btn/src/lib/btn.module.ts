import { NgModule } from '@angular/core';
import { BtnComponent } from './btn.component';
import { ButtonComponent } from './button/button.component';

import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [BtnComponent, ButtonComponent],
  imports: [
    MatButtonModule
  ],
  exports: [BtnComponent, ButtonComponent]
})
export class BtnModule { }

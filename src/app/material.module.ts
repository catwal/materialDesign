
import {MatButtonModule, MatCheckboxModule, MatSelectModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSelectModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSelectModule, MatToolbarModule, MatIconModule],
})
export class MaterialModule { }

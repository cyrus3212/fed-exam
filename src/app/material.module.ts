import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { 
  MatButtonModule, 
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatCheckboxModule
} from '@angular/material';

import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  imports: [
    MatButtonModule, 
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule 
  ],
  exports: [
    MatButtonModule, 
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule 
   ],
})
export class MaterialModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod1Component } from './mod1.component';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [Mod1Component],
  imports: [
    CommonModule,
    // MatAutocompleteModule,
    FormsModule,
    // MatFormFieldModule,
    SearchPipe

  ],
  exports: [Mod1Component]
})
export class Mod1Module { }

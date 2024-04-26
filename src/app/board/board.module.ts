// board.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardRoutingModule } from './board-routing.module'; // Importa el BoardRoutingModule

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BoardRoutingModule // Agrega el BoardRoutingModule aquí
  ]
})
export class BoardModule { }

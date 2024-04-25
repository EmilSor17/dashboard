import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../shared/error-dialog/error-dialog.component';
import { RegisterComponent } from '../shared/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openErrorDialog(message: string): void {
    this.dialog.open(ErrorDialogComponent, {
      width: '250px',
      data: { message }
    });
  }
  openRegisterForm(): void {
    this.dialog.open(RegisterComponent, {
      width: '700px',
      height: '200vh'
    });
  }
}

import { Component, ViewChild } from '@angular/core';
import { UserData } from '../interfaces/user-data';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { DialogService } from 'src/app/service/dialog.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('registerForm', { static: true }) registerForm: NgForm | undefined
  user: UserData = {
    id: 0,
    status: true,
    created: new Date(),
    userName: '',
    user: '',
    password: '',
    role: 1
  };

  constructor(private authenticationService: AuthenticationService,
    private dialogService: DialogService,
    private dialogRef: MatDialogRef<RegisterComponent>
  ) { }

  register(): void {
    if (this.registerForm && this.registerForm.valid) {
      this.user.created = new Date();
      this.user.role = Number(this.user.role); // Otra opción: this.user.role = Number(this.user.role);

  
      this.authenticationService.register(this.user).subscribe({
        next: (response) => {
          this.dialogService.openErrorDialog('Registro exitoso');
          this.closeForm();
        },
        error: (error) => {
          this.dialogService.openErrorDialog('Error al registrar');
          this.closeForm();
        }
      });
    }
  }
  

  closeForm(): void {
    this.dialogRef.close()
  }
}

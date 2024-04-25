import { Component } from '@angular/core';
import { UserCredentials } from './shared/interfaces/user-credentials';
import { AuthenticationService } from './service/authentication.service';
import { DialogService } from './service/dialog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService,
    private dialogService: DialogService,
    private router: Router
  ) {}

  login(): void {
    const credentials: UserCredentials = {
      user: this.username,
      password: this.password
    };
  
    this.authService.getToken(credentials).subscribe({
      next: (response) => {
        const token = response.token;
        localStorage.setItem('token', token);
        this.router.navigate(['/:board']);
        console.log("aaa");
        
      },
      error: (error) => {
        if (error.status != 200) {
          this.dialogService.openErrorDialog('Usuario o contraseña incorrectos');
        }
      }
    });
  }

  openRegisterForm(){
    this.dialogService.openRegisterForm();
  }
  
}

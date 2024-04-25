import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // Obtener el token del componente de inicio de sesión (asumiendo que está almacenado en localStorage)
    const token = localStorage.getItem('token');
    console.log(token);
     // Ajusta esto según cómo guardes el token
    
    // Clonar la solicitud y agregar el token de autorización en el encabezado
    const authReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(authReq)
    // Continuar con la solicitud modificada
    return next.handle(authReq);
  }
}

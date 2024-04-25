import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Board } from '../shared/interfaces/board';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private endpoint:string = environment.endpoint;

  constructor(private http:HttpClient) { }

  getTemplates(): Observable<Board[]> {
    return this.http.get<Board[]>(`${this.endpoint}Board`);
  }
  createTemplate(template:BoardDTO):Observable<BoardDTO>{
    return this.http.post<BoardDTO>(`${this.endpoint}Board`,template)
  }
  updateTemplate(template:BoardDTO):Observable<BoardDTO>{
    return this.http.put<BoardDTO>(`${this.endpoint}Board`,template)
  }
  deleteTemplate(id: number): Observable<BoardDTO> {
    return this.http.delete<BoardDTO>(`${this.endpoint}Board?id=${id}`);
  }
}

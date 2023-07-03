import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Box} from '../models/Box'

@Injectable({
  providedIn: 'root'
})
export class BoxService {
  private apiUrl = 'http://localhost:8000/box'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  createBox(message: string): Observable<Box> {
    return this.http.post<Box>(`${this.apiUrl}/boxes`, { message });
  }
  getBoxById(boxId: string) {
    return this.http.get(`${this.apiUrl}/boxes/${boxId}`);
  }

  updateBoxMessage(boxId: string, newMessage: string) {
    return this.http.put(`${this.apiUrl}/boxes/${boxId}`, { message: newMessage });
  }

  deleteBox(boxId: string) {
    return this.http.delete(`${this.apiUrl}/boxes/${boxId}`);
  }
}


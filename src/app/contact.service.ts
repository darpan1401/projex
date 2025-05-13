import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://api.sheety.co/0e48fad6658810dd1abf0d491789e405/projex/sheet1';

  constructor(private http: HttpClient) {}

  sendMessage(contactData: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer projexmadebydarpan' // 🟢 Replace with your actual token
    });

    return this.http.post(this.apiUrl, { sheet1: contactData }, { headers });
  }
}

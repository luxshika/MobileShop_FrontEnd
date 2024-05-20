import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Phone } from '../models/phone.model';
import { Observable } from 'rxjs';
// import { PhoneEditComponent } from '../phone-edit/phone-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {
  open() {
    throw new Error('Method not implemented.');
  }
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllPhones(): Observable<Phone[]> {
    return this.http.get<Phone[]>(`${this.baseApiUrl}/api/Phone`);
  }

  addPhone(phone: Phone): Observable<Phone> {
    return this.http.post<Phone>(`${this.baseApiUrl}/api/Phone`, phone);
  }

  deletePhone(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseApiUrl}/api/Phone/${id}`);
  }

  getPhoneById(id: number): Observable<Phone> {
    return this.http.get<Phone>(`${this.baseApiUrl}/api/Phone/${id}`);
  }

  updatePhone(id: number, phone: Phone): Observable<Phone> {
    return this.http.put<Phone>(`${this.baseApiUrl}/api/Phone/${id}`, phone);
  }
}

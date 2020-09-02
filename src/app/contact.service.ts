import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Contact } from './contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  url = '/api/contacts';

  getAll(): Observable<Contact[]>  {
    return this.httpClient.get<Contact[]>(this.url);
  }

}

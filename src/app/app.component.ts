import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private contactService: ContactService) {
  }

  contacts$: Observable<Contact[]>;

  ngOnInit(): void {
    this.contacts$ = this.contactService.getAll();
  }


}

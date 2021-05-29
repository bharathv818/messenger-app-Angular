import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  title = "list of Contacts";
  contacts;

  constructor(service: ContactsService){
    this.contacts = service.getContacts();
}

  ngOnInit(): void {
  }

}

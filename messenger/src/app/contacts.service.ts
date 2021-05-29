import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  getContacts() {
    return ["message1","message2","message3"]
  }

  constructor() { 


  }
}

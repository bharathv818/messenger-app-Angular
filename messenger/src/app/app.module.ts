import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsService } from './contacts.service';
import { MessagesService } from './messages.service';
import { MessagesComponent } from './messages/messages.component';
import { SearchComponent } from './search/search.component';
import { NewMessageComponent } from './new-message/new-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    MessagesComponent,
    SearchComponent,
    NewMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ContactsService,
    MessagesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

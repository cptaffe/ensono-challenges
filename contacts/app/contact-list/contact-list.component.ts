import {Component} from 'angular2/core';
import 'rxjs/add/operator/map'; // crappy shim
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Contact, ContactComponent} from '../contact/contact.component';

@Component({
    selector: 'contact-list',
    templateUrl: 'app/contact-list/contact-list.component.xhtml',
    styleUrls: ['app/contact-list/contact-list.component.css'],
    viewProviders: [HTTP_PROVIDERS],
    directives: [ContactComponent]
})
export class ContactList {
  contacts: Contact[] = new Array<Contact>()
  constructor(http: Http) {
    http.get('seed.json')
    .map(res => res.json())
    .subscribe((contacts : {contacts: Contact[]}) => {
      for (let c of contacts.contacts) {
        this.contacts.push(c)
      }
      this.contacts = this.contacts.sort((c: Contact, o: Contact) => c.name > o.name ? 1 : 0)
    })
  }
}

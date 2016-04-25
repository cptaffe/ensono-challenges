import {Component} from 'angular2/core';
import 'rxjs/add/operator/map'; // crappy shim
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ContactList} from './contact-list/contact-list.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ContactList]
})
export class AppComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string= 'Dojo Mail';
  emails =[
  {'email' :'a@a.com',importance : true, 'subject':'New','content':'New Windows'},
  {'email': 's@s.com',importance:false, 'subject':'Programming','content':'Numbers'},
  {'email' :'g@g.com',importance:false, 'subject':'Algo','content':'Hello'},
  {'email' :'j@j.com',importance:true, 'subject':'Python','content':'Just Kidding'},

  ]
}

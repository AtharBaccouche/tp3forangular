import { Component } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent {
titre:string='opération de tableau'
tab= [15, 46, 0, 89, 80];
tab2= [15, 46, 10, 829, 80];
}

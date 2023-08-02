import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  titre:string ="Formation Angular_Interpolation";
  nom:string="Athar Baccouche";
  age:number=32;
  infos(){
    return this.nom + " a pour âge " + this.age +" ans.";
    } 

}

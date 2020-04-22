import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mark1',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent  {
  nam=[{name:'sr'
  },{name:'kaushalya',
  image:<img src="{{}}">},
  {name:'ar'},
  {name: 'gr'},{name:'vr'}
  ];
images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
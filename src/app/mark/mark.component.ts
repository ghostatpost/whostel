import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mark1',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent  {
  nam=[{name:'sr',
  rate:3.5,
  image: "assets/images/1.jpg"
  },
  {name:'kaushalya',
  rate:3.5,
  image: "assets/images/2.jpg"},
  {name:'ar',
  rate:3.5,
  image: "assets/images/3.jpg"},
  {name: 'gr',
  rate:3.5,
  image: "assets/images/4.jpg"},
  {name:'vr',
  rate:3.5,
  image: "assets/images/5.jpg"}
  ];
images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
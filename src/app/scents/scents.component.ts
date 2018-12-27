import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
@Component({
  selector: 'app-scents',
  templateUrl: './scents.component.html',
  styleUrls: ['./scents.component.css']
})
export class ScentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.AutoInit();
    const elems = document.querySelectorAll('.carousel.carousel-slider');
    const instance = M.Carousel.init(elems,{
      // fullWidth:true,
      // indicators: true
    })
  }

}

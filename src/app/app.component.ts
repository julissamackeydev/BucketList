import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BucketList';

  ngOnInit(){
    M.AutoInit();

    let elems = document.querySelectorAll('.sidenav');
    let instance = M.Sidenav.init(elems, {draggable:true})

  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private keyword;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  search(){
    this.router.navigateByUrl('of/'+this.keyword.trimEnd(' ').toString()) .then(() => {
      window.location.reload();
    });
  }
}

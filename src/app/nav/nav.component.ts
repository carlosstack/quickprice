import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private keyword;
  private query:String;

  constructor(private route: ActivatedRoute,private router:Router) {  
  }

  ngOnInit() {

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        let r = this.route;
        while (r.firstChild) {
          r = r.firstChild;
        }
        r.params.subscribe((params) => {
          this.query = params["keyword"]
        });
      }
    });
   
  }

  search(){
    this.router.navigateByUrl(this.keyword.trimEnd(' ').toString());
  
  }

  titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }
}

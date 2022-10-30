import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ThemeStorageService } from '../theme-storage.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private localStorage: ThemeStorageService
    ) { }
  ngOnInit(): void {
    this.localStorage.getTheme("theme");
  }

   public toggleTheme(): string | null{ // WORKS ! //
    if(this.localStorage.getTheme("theme") === "dark"){
      this.localStorage.saveTheme("theme", "light");
      return this.localStorage.getTheme("theme");
    }
    else{
      this.localStorage.saveTheme("theme", "dark");
      return this.localStorage.getTheme("theme");
      
    }
  }
}

import { Component, VERSION, ViewChild, ElementRef } from '@angular/core';
import { ThemeStorageService } from './theme-storage.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioWebsite';

  constructor(
    private route: ActivatedRoute,
    private localStorage: ThemeStorageService
    ) { }

  @ViewChild("body") body!: ElementRef;

  changeTheme(){
    let currentTheme= this.localStorage.getTheme("theme");
    if(currentTheme == "light" || this.body.nativeElement.classList.contains('light')){
      this.body.nativeElement.classList.replace("light", "dark");
    }
    else{
      this.body.nativeElement.classList.replace("dark", "light");
    }
  }
  ngOnInit(){
    this.changeTheme();
  }

  ngOnChanges(){
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeStorageService {

  key = "theme";
  
  constructor() { }

  public saveTheme(key: string, value: string){
    localStorage.setItem(key, value);
  }

  public getTheme(key:string){
    return localStorage.getItem(key)
  }

}

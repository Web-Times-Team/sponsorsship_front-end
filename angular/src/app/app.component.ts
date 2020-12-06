import { Component, OnInit } from '@angular/core';
import { MenuBarDatas, NavLink, Logo } from '@web-times-team/angular-web-times-tools';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  navLinks: NavLink[] = [new NavLink("Who We Are", "whoWeAre"), new NavLink("Where We Work", "whereWeWork"), new NavLink("Get Involved").appendChildLinks([new NavLink("Say Hello")])];
  logo: Logo = new Logo('../assets/logos/menu_logo.png', "welcome")
  menuBarDatas: MenuBarDatas = new MenuBarDatas(this.navLinks, this.logo)
  ngOnInit(): void {
    console.log(this.menuBarDatas);
  }

}

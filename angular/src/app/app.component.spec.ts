import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
// import { Logo, MenuBarDatas, NavLink } from '@web-times-team/angular-web-times-tools';
// import { by, element } from 'protractor';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
   // expect(app.title).toEqual('angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular app is running!');
  });
  
  // const navLinks: NavLink[] = [new NavLink("Who We Are", "whoWeAre"), new NavLink("Where We Work", "whereWeWork"), new NavLink("What We Do", "whatWeDo"), new NavLink("Get Involved").appendChildLinks([new NavLink("Say Hello", "contactUs"), new NavLink("Contact Us")])];
  // const logo: Logo = new Logo('../assets/logos/menu_logo.png', "welcome")
  // const menuBarDatas: MenuBarDatas = new MenuBarDatas(navLinks, logo)
  
  // it('should pass properties to children properly', async () => {
  //   const parent = element(by.tagName('app-root'));
  //   const child = parent.element(by.tagName('wtt-menu-bar'));
 
  //   //const childTitle = await child.element(by.tagName('h3')).getText();
  // });
});

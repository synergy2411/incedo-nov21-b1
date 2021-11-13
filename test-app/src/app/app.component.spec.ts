import { ComponentFixture, TestBed } from "@angular/core/testing"
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component"
import { DataService } from "./services/data.service"

describe("App Component Suite", () => {

  // setup & tear-down
  beforeEach(async ()=>{
    await TestBed.configureTestingModule({
      imports : [BrowserModule],
      providers : [DataService],
      declarations : [AppComponent]
    }).compileComponents()
  })

  let fixture : ComponentFixture<AppComponent>;
  let app : AppComponent;

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  })

  it("Should create the AppComponent", () => {
    expect(app).toBeTruthy()
  })

  it("Should have username property as 'Foo'", () => {
    expect(app.username).toEqual('Foo')
  })

  it("Should create the template from username", () => {
    let el = fixture.nativeElement
    fixture.detectChanges()
    expect(el.querySelector('h3').textContent).toContain('Hello Foo');
  })

})






// describe("Test Suite 1", ()=>{

//   it("Should be truthy", () => {
//     expect(true).toBeTruthy()
//   })

//   it("Should equal to 1", () => {
//     expect(1).toEqual(1)
//   })

// })

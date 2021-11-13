import { Routes } from "@angular/router";
import { LoginComponent } from "./components/auth/login/login.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { ObservableDemoComponent } from "./components/observable-demo/observable-demo.component";
import { PipeDemoComponent } from "./components/pipe-demo/pipe-demo.component";
import { OverviewComponent } from "./components/products/overview/overview.component";
import { ProductsComponent } from "./components/products/products.component";
import { SpecificationComponent } from "./components/products/specification/specification.component";
import { UsersComponent } from "./components/users/users.component";
import { LoginGaurdService } from "./services/login-gaurd.service";

export const APP_ROUTES : Routes = [
  {
    path : "",          //http://localhost:4200
    redirectTo : "register",
    pathMatch : 'full'
  },{
    path : "login",        // http://localhost:4200/login
    component : LoginComponent
  },{
    path : "register",     // http://localhost:4200/register
    component : RegisterComponent
  },{
    path : "pipe-demo",        // http://localhost:4200/pipe-demo
    component : PipeDemoComponent
  },{
    path : "observable-demo",      // http://localhost:4200/observable-demo
    component : ObservableDemoComponent
  },{
    path : "users",
    component : UsersComponent,
    canActivate : [LoginGaurdService]
  },{
    path : "products",
    component : ProductsComponent,
    children : [
      {path : "overview/:id", component : OverviewComponent},
      {path : "specification", component : SpecificationComponent}
    ]
  },{
    path : "**",              // http://localhost:4200/path_do_not_exist
    redirectTo : 'login',
    pathMatch : 'full'
  }
]

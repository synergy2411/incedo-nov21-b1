import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { CountryCode } from './pipes/country-code.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DataService } from './services/data.service';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { APP_ROUTES } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { OverviewComponent } from './components/products/overview/overview.component';
import { SpecificationComponent } from './components/products/specification/specification.component';

@NgModule({
  declarations: [       // Custom Components | Directives | Pipes
    AppComponent, UsersComponent, UserInfoComponent,
    UserImgComponent, LifeCycleComponent, PipeDemoComponent,
    CountryCode,
    ReversePipe,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    ObservableDemoComponent,
    HeaderComponent,
    ProductsComponent,
    OverviewComponent,
    SpecificationComponent
  ],
  imports: [            // Built-in as well as Custom Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [DataService],        // Register the Service
  bootstrap: [AppComponent]
})
export class AppModule { }

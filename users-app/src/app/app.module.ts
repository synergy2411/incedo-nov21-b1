import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [       // Custom Components | Directives | Pipes
    AppComponent, UsersComponent
  ],
  imports: [            // Built-in as well as Custom Modules
    BrowserModule
  ],
  providers: [],        // Register the Service
  bootstrap: [AppComponent]
})
export class AppModule { }

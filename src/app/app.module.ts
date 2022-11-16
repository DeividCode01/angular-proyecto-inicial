import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponentModule } from './hello.component';
import { MyService } from './my.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HelloComponentModule,
    HttpClientModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [MyService],
})
export class AppModule {}

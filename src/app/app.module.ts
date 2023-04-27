import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListautentiComponent } from './listautenti/listautenti.component';
import { UtenteComponent } from './listautenti/utente/utente.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListautentiComponent,
    UtenteComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

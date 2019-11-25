import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
import { AppComponent } from './app.component';
import { CarteChoixComponent } from './carte-choix/carte-choix.component';
import { FormChoixComponent } from './form-choix/form-choix.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteChoixComponent,
    FormChoixComponent
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      MatGridListModule,
      MatCardModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

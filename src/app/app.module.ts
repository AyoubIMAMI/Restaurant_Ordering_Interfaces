import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IdleComponent } from './components/idle/idle.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { TruncateTextDirective } from './directives/truncate-text.directive';
import { FormsModule } from '@angular/forms'; // Importez FormsModule


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'idle', component: IdleComponent },
  { path: '', redirectTo: '/idle', pathMatch: 'full' }, // Page par défaut
];

@NgModule({
  declarations: [
    AppComponent,
    IdleComponent,
    HomeComponent,
    HeaderComponent,
    CatalogComponent,
    TruncateTextDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

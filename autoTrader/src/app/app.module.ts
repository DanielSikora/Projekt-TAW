import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { autoTraderComponent } from './components/autoTrader/autoTrader.component';
import { autoTraderItemComponent } from './components/autoTrader-item/autoTrader-item.component';
import { autoTraderItemTextComponent } from './components/autoTrader-item-text/autoTrader-item-text.component';
import { autoTraderItemImageComponent } from './components/autoTrader-item-image/autoTrader-item-image.component';
import { autoTraderItemDetailsComponent } from './components/autoTrader-item-details/autoTrader-item-details.component';
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./services/data.service";
import { SummaryPipe } from './pipes/summary.pipe';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import {FormsModule} from "@angular/forms";
import { autoTraderHomeComponent } from './components/autoTrader-home/autoTrader-home.component';
import { FilterTextPipe } from './pipes/filter-text.pipe';
import { TextFormatDirective } from './directives/text-format.directive';
import { HomeComponent } from './components/home/home.component';
import {AuthService} from "./services/auth.service";
import {HTTP_INTERCEPTORS} from
    '@angular/common/http';
import {AuthInterceptor} from './services/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditComponent } from './components/edit/edit.component';
import { CheckNumbersPipe } from './pipes/check-numbers.pipe';
import { PriceColorDirective } from './directives/price-color.directive';





@NgModule({
  declarations: [
    AppComponent,
    autoTraderComponent,
    autoTraderItemComponent,
    autoTraderItemTextComponent,
    autoTraderItemImageComponent,
    autoTraderItemDetailsComponent,
    SummaryPipe,
    SearchBarComponent,
    autoTraderHomeComponent,
    FilterTextPipe,
    TextFormatDirective,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    AddPostComponent,
    EditComponent,
    CheckNumbersPipe,
    PriceColorDirective,





  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DataService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

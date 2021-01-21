import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './contents/header/header.component';
import { HomeComponent } from './contents/home/home.component';
import { UserManagementComponent } from './contents/user-management/user-management.component';
import { ActivityHistoryComponent } from './contents/activity-history/activity-history.component';
import { PopularComponent } from './contents/popular/popular.component';
import { SearchBarComponent } from './contents/search-bar/search-bar.component';
import { ResultListComponent } from './contents/result-list/result-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxTweetModule } from 'ngx-tweet';
import { TrendsComponent } from './contents/trends/trends.component';
import { YoutubeTrendsComponent } from './contents/youtube-trends/youtube-trends.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserManagementComponent,
    ActivityHistoryComponent,
    PopularComponent,
    SearchBarComponent,
    ResultListComponent,
    TrendsComponent,
    YoutubeTrendsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    YouTubePlayerModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxTweetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

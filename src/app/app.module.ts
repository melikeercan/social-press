import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {YouTubePlayerModule} from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';
import { FooterComponent } from './footer/footer.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentFilterComponent } from './content-filter/content-filter.component';
import { InstagramComponent } from './sources/instagram/instagram.component';
import { YoutubeComponent } from './sources/youtube/youtube.component';
import { PictureComponent } from './sources/picture/picture.component';
import {HttpClientModule} from '@angular/common/http';
import { SimpleHttpComponent } from './simple-http/simple-http.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DrawerComponent,
    FooterComponent,
    ContentListComponent,
    ContentFilterComponent,
    InstagramComponent,
    YoutubeComponent,
    PictureComponent,
    SimpleHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatChipsModule,
    MatCardModule,
    MatGridListModule,
    YouTubePlayerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

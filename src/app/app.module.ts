import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PocketflashserviceService } from './pocketflashservice.service';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AuthService} from "./auth.service";
import { ProviderloginComponent } from './providerlogin/providerlogin.component';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AloginComponent } from './alogin/alogin.component';
import { AnavbarComponent } from './anavbar/anavbar.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { TodoComponent } from './todo/todo.component';
import { SeereviewComponent } from './seereview/seereview.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    CategoriesComponent,
    FlashcardsComponent,
    SuggestionComponent,
    ProviderloginComponent,
    ProfileComponent,
    AdminComponent,
    AloginComponent,
    AnavbarComponent,
    AsidebarComponent,
    TodoComponent,
    SeereviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    HttpClientModule, AngularEditorModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'PocketFlash'),
    AngularFirestoreModule,
    FormsModule,
    AngularFireStorageModule,
  ],
  providers: [PocketflashserviceService, { provide: StorageBucket, useValue: 'my-bucket-name' }, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
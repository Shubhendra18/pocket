import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoriesComponent } from './categories/categories.component';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AloginComponent } from './alogin/alogin.component';
import { AnavbarComponent } from './anavbar/anavbar.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { TodoComponent } from './todo/todo.component';
import { SeereviewComponent } from './seereview/seereview.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  { path: 'sidebar' , component: SidebarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'flashcards', component: FlashcardsComponent },
  { path: 'suggestion', component: SuggestionComponent },
  { path: 'admin', canActivate: [AuthGuard], component: AdminComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'alogin',  component: AloginComponent },
  { path: 'anavbar', component: AnavbarComponent },
  { path: 'asidebar', component: AsidebarComponent },
  { path: '', component: HomeComponent },
  {path:'seereview', component: SeereviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
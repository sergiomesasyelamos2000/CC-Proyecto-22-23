import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './auth/guards/auth.guard';
import { LoggedGuard } from './auth/guards/logged.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { BuscarComponent } from './buscar/buscar.component';

const routes: Routes = [
  {
    path: environment.url.components.login,
    component: LoginComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: environment.url.components.users,
    component: UserListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: environment.url.components.logout,
    component: LogoutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: environment.url.components.sign_up,
    component: SignUpComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: environment.url.components.users_details,
    component: UserDetailComponent,
    canLoad: [AuthGuard],
  },
  {
    path: environment.url.components.books,
    component: BookListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: environment.url.components.books_details,
    component: BookDetailComponent,
    canLoad: [AuthGuard],
  },
  {
    path: 'buscar/:termino',
    component: BuscarComponent,
    canLoad: [AuthGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: environment.url.components.login,
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

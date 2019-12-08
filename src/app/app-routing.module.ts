import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComingSoonComponent} from './comingsoon/coming-soon.component';
import {AuthComponent} from './auth/auth.component';

const routes: Routes = [
  {path: '', component: ComingSoonComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

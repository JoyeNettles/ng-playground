import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComingSoonComponent} from './comingsoon/coming-soon.component';
import {AuthComponent} from './auth/auth.component';
import {InstagramContainerComponent} from './instagram-container/instagram-container.component';

const routes: Routes = [
  {path: '', component: ComingSoonComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'ig', component: InstagramContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

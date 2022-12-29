import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomepageComponent} from "./homepage/homepage.component";
import {ServicesComponent} from "./services/services.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'services', component: ServicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

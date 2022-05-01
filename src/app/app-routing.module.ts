import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { VagasComponent } from './views/vagas/vagas.component';
import { NotfoundComponent } from './views/notfound/notfound.component';

const routes: Routes = [
  {path: '', component:HomeComponent, pathMatch:'full'},
  {path: 'vaga', component:VagasComponent, pathMatch:'full'},
  {path: '**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

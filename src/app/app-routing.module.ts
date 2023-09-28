import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path :'inicio', loadChildren:()=>
    import('./components/pages/inicio/inicio.module').then(m=>m.InicioModule),
   
  },
  {
    path :'home', loadChildren:()=>
    import('./components/pages/home/home.module').then(m=>m.HomeModule,),
   
  },

  {path:'', pathMatch:'full', redirectTo:'inicio'},
  {path:'**', pathMatch:'full', redirectTo:'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

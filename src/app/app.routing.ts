import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {AboutUsComponent, FeaturesComponent} from './pages';

@NgModule({
  imports: [
    RouterModule.forRoot([
      // pages
      {
        path: '',
        component: FeaturesComponent
      },
      {
        path: 'features',
        component: FeaturesComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      }
    ])
  ],
  exports: [RouterModule]
})

export class AppRouting {
}

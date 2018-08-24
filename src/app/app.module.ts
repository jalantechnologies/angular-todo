import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import * as Raven from 'raven-js';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {Angulartics2Module} from 'angulartics2';
import {Angulartics2Mixpanel} from 'angulartics2/mixpanel';
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import CONFIG from '@config';
import {AppComponent} from './app.component';
import {AppRouting} from './app.routing';
import {NavbarComponent, FooterComponent, TodoItemComponent} from './components';
import {IntercomService, TodoService} from './services';

// build declarations
const declarations = [
  // app components
  AppComponent,
  NavbarComponent,
  FooterComponent,
  TodoItemComponent
  // app pages
];

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// error Monitoring using sentry
Raven
  .config(CONFIG.sentryDSN)
  .install();

class RavenErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    Raven.captureException(err);
  }
}

@NgModule({
  declarations,
  imports: [
    // app routing
    AppRouting,
    // browser module
    BrowserModule,
    // bootstrap
    NgbModule,
    // for advanced form directives
    ReactiveFormsModule,
    // logging
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,
      // will log ERROR to CONFIG.serverLogUrl
      serverLoggingUrl: CONFIG.serverLogUrl,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
    // translation
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    // analytics
    Angulartics2Module.forRoot([
      Angulartics2Mixpanel,
      Angulartics2GoogleAnalytics
    ])
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: RavenErrorHandler
    },
    // bootstrap modal service
    NgbActiveModal,
    // app services
    IntercomService,
    TodoService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(public translate: TranslateService) {
    // for initializing translation service
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
    // for initializing mixpanel
    // mixpanel.init(CONFIG.mixpanelToken);
    // for initializing google analytics
    // ga('create', CONFIG.gaTrackingId, 'auto');
    // for initializing intercom
    // IntercomService.boot(userParams);
  }
}

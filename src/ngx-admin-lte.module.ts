import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

export function createTranslateLoader( http: Http ) {
    return new TranslateHttpLoader( http, './public/assets/i18n', '.json' );
}

import { AppHeaderComponent } from './widgets/app-header';
import { LogoComponent } from './widgets/logo';
import { AppFooterComponent } from './widgets/app-footer';
import { MenuAsideComponent } from './widgets/menu-aside';
import { ControlSidebarComponent } from './widgets/control-sidebar';
import { MessagesBoxComponent } from './widgets/messages-box';
import { NotificationBoxComponent } from './widgets/notification-box';
import { TasksBoxComponent } from './widgets/tasks-box';
import { UserBoxComponent } from './widgets/user-box';
import { BreadcrumbComponent } from './widgets/breadcrumb';

const widgets = [
    BreadcrumbComponent,
    AppHeaderComponent,
    LogoComponent,
    AppFooterComponent,
    MenuAsideComponent,
    ControlSidebarComponent,
    MessagesBoxComponent,
    NotificationBoxComponent,
    TasksBoxComponent,
    UserBoxComponent
];

import { UserService } from './services/user.service';
import { MenuService } from './services/menu.service';
import { LogoService } from './services/logo.service';
import { MessagesService } from './services/messages.service';
import { CanActivateGuard } from './services/can-activate-guard.service';
import { NotificationService } from './services/notification.service';
import { BreadcrumbService } from './services/breadcrumb.service';
import { TranslateService } from './services/translate.service';
import { LoggerService } from './services/logger.service';

const services = [
    UserService,
    MenuService,
    LogoService,
    BreadcrumbService,
    MessagesService,
    CanActivateGuard,
    NotificationService,
    TranslateService,
    LoggerService
];

// les layouts
import { LayoutsAuthComponent } from './layouts/auth/auth';
import { LayoutLoginComponent } from './layouts/login/login.component';
import { RegisterComponent } from './layouts/register/register.component';

const layouts = [
    LayoutsAuthComponent,
    LayoutLoginComponent,
    RegisterComponent
];


@NgModule({
  declarations: [
    ...widgets,
    ...layouts
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ToasterModule,
    TranslateModule.forRoot({
      loader: {
        deps: [Http],
        provide: TranslateLoader,
        useFactory: (createTranslateLoader)
    }}),
  ],
  providers: [
    ...services
  ],
  bootstrap: []
})
export class NgxAdminLteModule { }

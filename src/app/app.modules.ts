import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AlertDetailsComponent } from './components/alert-details/alert-details.component';
import { CasesComponent } from './components/cases/cases.component';
import { CaseDetailsComponent } from './components/case-details/case-details.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Services
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import { CaseService } from './services/case.service';
import { UserService } from './services/user.service';
import { SettingsService } from './services/settings.service';
import { NotificationService } from './services/notification.service';

// Interceptors
import { AuthInterceptor } from './interceptors/auth.interceptor';

// Angular Material Modules
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AlertsComponent,
    AlertDetailsComponent,
    CasesComponent,
    CaseDetailsComponent,
    AnalyticsComponent,
    UserManagementComponent,
    SettingsComponent,
    NotificationsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AuthService,
    AlertService,
    CaseService,
    UserService,
    SettingsService,
    NotificationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

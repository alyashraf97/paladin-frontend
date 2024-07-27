import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'alerts', loadChildren: () => import('./components/alerts/alerts.component').then(m => m.AlertsComponent) },
  { path: 'alerts/:id', loadChildren: () => import('./components/alert-details/alert-details.component').then(m => m.AlertDetailsComponent) },
  { path: 'cases', loadChildren: () => import('./components/cases/cases.component').then(m => m.CasesComponent) },
  { path: 'cases/:id', loadChildren: () => import('./components/case-details/case-details.component').then(m => m.CaseDetailsComponent) },
  { path: 'analytics', loadChildren: () => import('./components/analytics/analytics.component').then(m => m.AnalyticsComponent) },
  { path: 'users', loadChildren: () => import('./components/user-management/user-management.component').then(m => m.UserManagementComponent) },
  { path: 'settings', loadChildren: () => import('./components/settings/settings.component').then(m => m.SettingsComponent) },
  { path: 'notifications', loadChildren: () => import('./components/notifications/notifications.component').then(m => m.NotificationsComponent) },
  { path: '**', loadChildren: () => import('./components/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) }
];

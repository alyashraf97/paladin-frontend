# Define the list of components and services
$components = @(
    "dashboard",
    "alerts",
    "alert-details",
    "cases",
    "case-details",
    "analytics",
    "user-management",
    "settings",
    "notifications",
    "page-not-found"
)

$services = @(
    "auth",
    "alert",
    "case",
    "user",
    "settings",
    "notification"
)

# Create Angular components
foreach ($component in $components) {
    ng generate component components/$component
}

# Create Angular services
foreach ($service in $services) {
    ng generate service services/$service
}

# Create Angular interceptor
ng generate interceptor interceptors/auth

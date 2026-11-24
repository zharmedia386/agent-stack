<!-- id: 41ce82f897e581cbb9a7e62ad8edaa0f -->
<!-- emoji: 🐘 -->
Here is the result of "fetch" for the Page with URL https://app.notion.com/p/41ce82f897e581cbb9a7e62ad8edaa0f as of 2026-11-18T12:42:24.741Z:
<page url="https://app.notion.com/p/41ce82f897e581cbb9a7e62ad8edaa0f" icon="🐘">
<ancestor-path></ancestor-path>
<properties>
{"title":"Laravel / PHP"}
</properties>
<iconMetadata>{"type":"emoji","emoji":"🐘"}</iconMetadata>
<content>
Laravel packages, apps and a self-hosted PaaS built in PHP. 9 repos.

## Overview

| Repo | One-liner | Lang | ⭐ |
| --- | --- | --- | --- |
| [coollabsio/coolify](https://github.com/coollabsio/coolify) · [Details ↓](https://app.notion.com/p/41ce82f897e581cbb9a7e62ad8edaa0f#41ce82f897e581d9b1d8f32326ba017a) | Self-hosted PaaS: Vercel/Heroku/Netlify alternative | PHP | 66.2k |
| [filamentphp/filament](https://github.com/filamentphp/filament) · [Details ↓](https://app.notion.com/p/41ce82f897e581cbb9a7e62ad8edaa0f#41ce82f897e581ef902bf189d1d808d4) | Laravel framework for admin panels and business apps | PHP | 32.5k |
| [spatie/laravel-activitylog](https://github.com/spatie/laravel-activitylog) · [Details ↓](https://app.notion.com/p/41ce82f897e581cbb9a7e62ad8edaa0f#41ce82f897e581b2b055f339cef51de2) | Log user and model activity in Laravel | PHP | 5.9k |
| [opcodesio/log-viewer](https://github.com/opcodesio/log-viewer) · [Details ↓](https://app.notion.com/p/41ce82f897e581cbb9a7e62ad8edaa0f#41ce82f897e581b990d1ebce1b8ca0df) | Fast web UI for browsing Laravel logs | PHP | 4.4k |
| [4jean/lav\_sms](https://github.com/4jean/lav_sms) · [Details ↓](https://app.notion.com/p/41ce82f897e581cbb9a7e62ad8edaa0f#41ce82f897e581168adedf315223328b) | Laravel 8 school management system | PHP | 1.2k |
| [laramint/laravel-brain](https://github.com/laramint/laravel-brain) · [Details ↓](https://app.notion.com/p/41ce82f897e581cbb9a7e62ad8edaa0f#41ce82f897e58149809ecb04f5c7c0a1) | Interactive graph of your Laravel request lifecycle | PHP | 941 |
| [mschwarzmueller/laravel-shopping-cart-tutorial](https://github.com/mschwarzmueller/laravel-shopping-cart-tutorial) · [Details ↓](https://app.notion.com/p/41ce82f897e581cbb9a7e62ad8edaa0f#41ce82f897e581a29be9ddd4a5aae8a1) | Code for Max Schwarzmüller's Laravel shopping cart YouTube series | PHP | 112 |
| [getartisanflow/wireflow](https://github.com/getartisanflow/wireflow) · [Details ↓](https://app.notion.com/p/41ce82f897e581cbb9a7e62ad8edaa0f#41ce82f897e581bab732dda4e17865a8) | Livewire components for interactive flow diagrams | PHP | 98 |
| [RichieMcMullen/laravel-reorderable](https://github.com/RichieMcMullen/laravel-reorderable) · [Details ↓](https://app.notion.com/p/41ce82f897e581cbb9a7e62ad8edaa0f#41ce82f897e581c79449d5efc954c7dd) | Drag-and-drop ordering for Eloquent models (Blade + Livewire) | PHP | 44 |

## Details

#### coollabsio/coolify

- Link: [github](https://github.com/coollabsio/coolify) · [homepage](https://coolify.io)
- ⭐ 66.2k · PHP
- <b>What:</b> Laravel app that deploys apps (from Git or Docker), databases and 360+ one-click services onto your own servers over SSH, with SSL, backups and previews.
- <b>How to use:</b> On a fresh Linux server:

```bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | sudo bash
# then open http://<server-ip>:8000 and create the admin account
```

- <b>Reach for it when:</b> You want push-to-deploy on your own VPS instead of paying per-seat PaaS pricing.

#### filamentphp/filament

- Link: [github](https://github.com/filamentphp/filament) · [homepage](https://filamentphp.com)
- ⭐ 32.5k · PHP
- <b>What:</b> Builds admin panels, CRUD resources, forms, tables, widgets and notifications on the TALL stack (Tailwind, Alpine, Livewire, Laravel).
- <b>How to use:</b>

```bash
composer require filament/filament
php artisan filament:install --panels
php artisan make:filament-user
php artisan make:filament-resource Customer   # CRUD for the Customer model
```

- <b>Reach for it when:</b> You need an internal admin or back-office UI in a Laravel app fast.

#### spatie/laravel-activitylog

- Link: [github](https://github.com/spatie/laravel-activitylog) · [homepage](https://docs.spatie.be/laravel-activitylog)
- ⭐ 5.9k · PHP
- <b>What:</b> Stores an activity log in the database: who did what to which model, with changed attributes. Can log automatically via a trait.
- <b>How to use:</b>

```php
// composer require spatie/laravel-activitylog
// publish + run its migration, then:
activity()
    ->performedOn($article)
    ->causedBy($user)
    ->log('edited');

// or add the LogsActivity trait to a model and define getActivitylogOptions()
```

- <b>Reach for it when:</b> You need an audit trail of changes in a Laravel app.

#### opcodesio/log-viewer

- Link: [github](https://github.com/opcodesio/log-viewer) · [homepage](https://log-viewer.opcodes.io)
- ⭐ 4.4k · PHP
- <b>What:</b> Package that adds a searchable, filterable log viewer to your Laravel app, handling large files and multiple log formats.
- <b>How to use:</b>

```bash
composer require opcodesio/log-viewer
php artisan log-viewer:publish
# visit {APP_URL}/log-viewer
```

- <b>Reach for it when:</b> You keep tailing storage/logs over SSH and want a proper UI.

#### 4jean/lav\_sms

- Link: [github](https://github.com/4jean/lav_sms)
- ⭐ 1.2k · PHP
- <b>What:</b> Open-source school management app with seven roles (super admin, admin, librarian, accountant, teacher, student, parent), marksheets, tabulation sheets and settings.
- <b>How to use:</b> Clone, <code>composer install</code>, configure <code>.env</code>, then <code>php artisan migrate</code> and <code>php artisan db:seed</code>, and log in with the seeded accounts listed in the README.
- <b>Reach for it when:</b> You need a starting point for a school or education admin app, or a sample of a mid-size Laravel 8 project.

#### laramint/laravel-brain

- Link: [github](https://github.com/laramint/laravel-brain) · [homepage](https://laravel-brain.laramint.dev/)
- ⭐ 941 · PHP
- <b>What:</b> Dev tool that statically scans a Laravel app and renders a node graph of routes, controllers, services, models, jobs, events, commands, schedules and channels, including DB queries, cache calls and outgoing HTTP. Supports Filament.
- <b>How to use:</b>

```bash
composer require --dev laramint/laravel-brain
php artisan brain:scan
# open http://localhost:8000/_laravel-brain
php artisan brain:export-context --route="GET /users"   # context for an AI agent
```

- <b>Reach for it when:</b> You join an unfamiliar Laravel codebase and need to see what a route touches.

#### mschwarzmueller/laravel-shopping-cart-tutorial

- Link: [github](https://github.com/mschwarzmueller/laravel-shopping-cart-tutorial)
- ⭐ 112 · PHP
- <b>What:</b> Source for an older YouTube tutorial series on building a shopping cart in Laravel.
- <b>What's inside:</b> The finished project code that accompanies the videos; no written guide in the repo.
- <b>Reach for it when:</b> You follow that video series. The Laravel version is old, so expect outdated APIs.

#### getartisanflow/wireflow

- Link: [github](https://github.com/getartisanflow/wireflow) · [homepage](https://artisanflow.dev)
- ⭐ 98 · PHP
- <b>What:</b> Livewire/Blade wrapper around AlpineFlow for node-and-edge editors (like React Flow) with server-side state sync and no custom JavaScript.
- <b>How to use:</b>

```php
// composer require getartisanflow/wireflow && php artisan wireflow:install
use ArtisanFlow\WireFlow\Concerns\WithWireFlow;

class MyFlowEditor extends Component
{
    use WithWireFlow;
    public array $nodes = [
        ['id' => '1', 'position' => ['x' => 0, 'y' => 0], 'data' => ['label' => 'Start']],
    ];
    public array $edges = [];
}
// Blade: <x-flow :nodes="$nodes" :edges="$edges"> ... </x-flow>
```

- <b>Reach for it when:</b> You need a workflow builder or diagram editor inside a Livewire app.

#### RichieMcMullen/laravel-reorderable

- Link: [github](https://github.com/RichieMcMullen/laravel-reorderable)
- ⭐ 44 · PHP
- <b>What:</b> Adds a sort column to any model, a drag-and-drop list component, an endpoint that saves the new order, grouping (e.g. per project\_id), programmatic reordering and a reorder event. Requires PHP 8.3, Laravel 13, Livewire 4. Note: the Composer package is <code>atomcoder/laravel-reorderable</code>.
- <b>How to use:</b>

```bash
composer require atomcoder/laravel-reorderable
php artisan reorderable:install
# add a sort_order column, implement the contract on the model, then query with ->ordered()
```

- <b>Reach for it when:</b> Users need to reorder tasks, menu items or lessons by dragging.
</content>
</page>
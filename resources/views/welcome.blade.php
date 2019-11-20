<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="IE=Edge">

        <title>UMKMKu</title>
    </head>
    <body>
        <div id="app">
            <app-root></app-root>
        </div>
    </body>
    <script src="{{ mix('/js/app.js') }}"></script>
</html>
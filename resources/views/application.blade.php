<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->

  <title>Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template</title>

  <!-- Splash Screen/Loader Styles -->


  <!-- Styles -->



  <!-- Favicon -->
  <link rel="shortcut icon" href="{{ asset('images/logo/favicon.png') }}">

  <!-- Font -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
    rel="stylesheet">
{{--     <script type="module" src="http://localhost:3000/@vite/client"></script>--}}
    @devserver
    <script type="module" src="http://localhost:3000/resources/scss/loader.css" ></script>
    <script type="module" src="http://localhost:3000/resources/scss/app.scss" ></script>
    <script type="module" src="http://localhost:3000/resources/js/app.js" ></script>
    @else
       <link rel="stylesheet" href="{{vitex('loader.css')}}">
        <link rel="stylesheet" href="{{vitex('app.css')}}">
       <script type="module" src="{{vitex('app.js')}}" defer></script>

    @enddevserver
</head>

<body>
  <noscript>
    <strong>We're sorry but Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template doesn't work properly without
      JavaScript enabled. Please enable it to continue.</strong>
  </noscript>
  <div id="loading-bg">
    <div class="loading-logo">
      <img src="{{ asset('logo.png') }}" alt="Logo" />
    </div>
    <div class="loading">
      <div class="effect-1 effects"></div>
      <div class="effect-2 effects"></div>
      <div class="effect-3 effects"></div>
    </div>
  </div>
  <div id="app">

  </div>





</body>

</html>

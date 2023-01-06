<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Responsive Admin &amp; Dashboard Template based on Bootstrap 5">
    <meta name="author" content="AdminKit">
    <meta name="keywords"
        content="adminkit, bootstrap, bootstrap 5, admin, dashboard, template, responsive, css, sass, html, theme, front-end, ui kit, web">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="shortcut icon" href="{{ asset('adminkit/img/icons/icon-48x48.png') }}" />

    <title>Sign Up | AdminKit Demo</title>

    <link href="{{ asset('adminkit/css/app.css') }}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
</head>

<body>
    <main class="d-flex w-100">
        <div class="container d-flex flex-column">
            <div class="row vh-100">
                <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                    <div class="d-table-cell align-middle">

                        <div class="text-center mt-4">
                            
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <div class="m-sm-4">
                                    <form method="POST" action="{{ route('register') }}">
                                        @csrf
                                        
                                        <div class="mb-3">
                                            <label for="name" class="form-label">Nom</label>
                                            <input id="name"
                                                class="form-control form-control-lg @error('name') is-invalid @enderror"
                                                type="text" name="name" value="{{ old('name') }}" required
                                                autocomplete="name" autofocus placeholder="Entrer votre nom" />

                                            @error('name')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror

                                        </div>

                                        <div class="mb-3">
                                            <label for="email" class="form-label">Email</label>
                                            <input id="email"
                                                class="form-control form-control-lg @error('email') is-invalid @enderror"
                                                type="email" name="email" value="{{ old('email') }}" required
                                                autocomplete="email" placeholder="Entrer votre email" />

                                            @error('email')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror

                                        </div>

                                        <div class="mb-3">
                                            <label for="password" class="form-label">Mot de passe</label>
                                            <input id="password"
                                                class="form-control form-control-lg @error('password') is-invalid @enderror"
                                                type="password" name="password" name="password" required
                                                autocomplete="new-password" placeholder="Entrer votre mot de passe" />

                                            @error('password')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror

                                        </div>


                                        <div class="mb-3">
                                            <label for="password-confirm" class="form-label">Confimer mot de
                                                passe</label>
                                            <input id="password-confirm" class="form-control form-control-lg"
                                                type="password" name="password_confirmation" required
                                                autocomplete="new-password" />
                                        </div>

                                        <div class="text-center mt-3">
                                            {{-- <a href="index.html" class="btn btn-lg btn-primary">Sign up</a> --}}
                                            <button type="submit" class="btn btn-lg btn-primary">S'inscrire</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>

    <script src="{{ asset('adminkitjs/app.js') }}"></script>

</body>

</html>

@extends('layouts.app')

@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title mb-0">Liste</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <th>#</th>
                                <th>Département</th>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Téléphone</th>
                                <th>Habitation</th>
                                <th>Urgence</th>
                                <th>Foyer</th>
                                <th>Superficie</th>
                                <th>Date & Heure</th>
                            </thead>
                            <tbody>
                                @foreach ($infos as $info)
                                    <tr>
                                        <td>{{ $info->id }}</td>
                                        <td>{{ $info->dpt }}</td>
                                        <td>{{ $info->nom }}</td>
                                        <td>{{ $info->prenom }}</td>
                                        <td>{{ $info->mobile }}</td>
                                        <td>{{ $info->habitation }}</td>
                                        <td>{{ $info->urgence }}</td>
                                        <td>{{ $info->foyer }}</td>
                                        <td>{{ $info->superficie }}</td>
                                        <td>
                                            {{ $info->created_at->format('d-m-Y') }} à {{ $info->created_at->format('H:i') }}
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

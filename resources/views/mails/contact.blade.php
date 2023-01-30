<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
</head>

<body>
    <h2>Nouveau contact</h2>
    <p>Les informations :</p>
    <ul>
        <li><strong>Nom</strong> : {{ $contact['nom'] }}</li>
        <li><strong>Prenom</strong> : {{ $contact['prenom'] }}</li>
        <li><strong>Téléphone</strong> : {{ $contact['mobile'] }}</li>
        <li><strong>Email</strong> : {{ $contact['email'] }}</li>
        <li><strong>Message</strong> : {{ $contact['subject'] }}</li>
    </ul>
</body>

</html>

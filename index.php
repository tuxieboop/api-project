<?php
    $ch = curl_init();
    curl_setopt($ch, CURL_URL, "www.googleapis.com/books/v1/volumes?q=their+eyes+were+watching+god");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPGET, 1);
    ecurl_exec($ch)
    var_dump(json_decode(curl_exec($ch), true));
    curl_close($ch);
?>
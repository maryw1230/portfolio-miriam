console.log("Hey, its me!")

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
      } else {
        x.className = 'navtoggle';
      }
}

AOS.init();

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    function checkPassword() {
      const correctPassword = "1805";
      const input = document.getElementById("password").value.trim();
      if (input === correctPassword) {
        document.getElementById("login").style.display = "none";
        document.getElementById("cake").style.display = "block";
        document.querySelector('.cake-wrapper').style.display = "flex";
        document.querySelector('.cake-message').style.display = "block";
        document.querySelector('.cake').style.display = "block";
        document.getElementById("bizcocho_1").beginElement();
        document.querySelector('.cake').classList.add('cake-animate');
        const music = document.getElementById("birthdayMusic");
        music.play();

      } else {
        alert("Ups! Password salah. Formatnya ddmm ya 😊");
      }
    }
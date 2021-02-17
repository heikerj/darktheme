function switchSheet() {
  let theme = document.getElementById("theme");
  let pa = document.getElementById("dia")
  let mode = document.getElementById("modo")
  let img = document.getElementById("sol")
  let title = document.getElementById("title")
  let icon = document.getElementById("icon")

  if (theme.getAttribute("href") == "dia.css") {
    theme.href = "noche.css";
    pa.innerHTML= " ahora estamos en tema oscuro";
    img.src = "\luna.png";
    mode.innerHTML= " Activar tema claro";
    title.innerHTML= "Tema oscuro";
    icon.href= "luna.png";
    
  } else {
    theme.href = "dia.css";
    pa.innerHTML=("estamos en tema claro")
    img.src = "\sol.png";
    mode.innerHTML=(" Activar tema oscuro")
    title.innerHTML = "Tema claro";
    icon.href= "sol.png";
  }
}

   




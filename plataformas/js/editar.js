function editar(n, id){
    const elemento = document.getElementById('edn'+n);
    const elemento2 = document.getElementById('edu'+n);
    const elemento3 = document.getElementById('edp'+n);
    const boton= document.getElementById('bt'+n);
    boton.setAttribute('onclick', 'guardar('+n+','+id+')');
    boton.style.backgroundColor='#62C6F5';
    elemento.setAttribute('contenteditable', 'true');
    elemento.style.borderBottom='1px solid green';
    elemento.focus();
    elemento.addEventListener('keydown', (a)=>{if (event.keyCode == 13)document.getElementById('edu'+n).focus();});
    elemento2.style.borderBottom='1px solid green';
    elemento2.addEventListener('keydown', (a)=>{if (event.keyCode == 13)document.getElementById('edp'+n).focus();});
    elemento3.style.borderBottom='1px solid green';
    elemento3.addEventListener('keydown', (a)=>{if (event.keyCode == 13)document.getElementById('bt'+n).focus();});
    elemento2.setAttribute('contenteditable', 'true');
    elemento3.setAttribute('contenteditable', 'true');
    boton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">.st0{display:none;}.st1{display:none;fill:#1D1D1B;stroke:#000000;stroke-miterlimit:10;}.st2{display:inline;stroke:#000000;stroke-miterlimit:10;}.st3{fill:none;stroke:#FFFFFF;stroke-width:30;stroke-miterlimit:10;}</style><g id="Capa_2"><rect class="st0" width="500" height="500"/></g><g id="Capa_1"><g id="Capa_1_1_" class="st1"><rect class="st2" width="500" height="500"/></g><g id="Capa_2_1_"><polygon class="st3" points="23.4,476.2 476.6,476.2 476.6,133.5 362.2,23.8 23.4,23.8   "/><polyline class="st3" points="114.6,23.8 114.6,189 344.9,189 344.9,23.8   "/><line class="st3" x1="307.2" y1="57.1" x2="307.2" y2="152"/><line class="st3" x1="114.6" y1="328.3" x2="359.3" y2="328.3"/><line class="st3" x1="114.6" y1="362.8" x2="359.3" y2="362.8"/><line class="st3" x1="114.6" y1="397.3" x2="359.3" y2="397.3"/></g></g></svg>Guardar&nbsp;';
}

function guardar(n, id){
    const elemento = document.getElementById('edn'+n);
    const elemento2 = document.getElementById('edu'+n);
    const elemento3 = document.getElementById('edp'+n);
    const valor = document.getElementById('edn'+n);
    const valor2 = document.getElementById('edu'+n);
    const valor3 = document.getElementById('edp'+n);
    const boton= document.getElementById('bt'+n);
    boton.setAttribute('onclick', 'editar('+n+','+id+')');
    elemento.setAttribute('contenteditable', 'false');
    elemento2.setAttribute('contenteditable', 'false');
    elemento3.setAttribute('contenteditable', 'false');
    if(valor.innerHTML.includes('<br>') || valor2.innerHTML.includes('<br>') || valor3.innerHTML.includes('<br>')){
        if(valor.innerHTML.includes('<br>') && valor2.innerHTML.includes('<br>') && valor3.innerHTML.includes('<br>')){
            let valor1sinsaltos = valor.innerHTML.split("<br>").join("");
            let valor2sinsaltos = valor2.innerHTML.split("<br>").join("");
            let valor3sinsaltos = valor3.innerHTML.split("<br>").join("");
            enviar(valor1sinsaltos, valor2sinsaltos, valor3sinsaltos, id);
        }else if(valor.innerHTML.includes('<br>') && valor2.innerHTML.includes('<br>')){
            let valor1sinsaltos = valor.innerHTML.split("<br>").join("");
            let valor2sinsaltos = valor2.innerHTML.split("<br>").join("");
            enviar(valor1sinsaltos, valor2sinsaltos, valor3.innerHTML, id);
        }else if(valor.innerHTML.includes('<br>') && valor3.innerHTML.includes('<br>')){
            let valor1sinsaltos = valor.innerHTML.split("<br>").join("");
            let valor3sinsaltos = valor3.innerHTML.split("<br>").join("");
            enviar(valor1sinsaltos, valor2.innerHTML, valor3sinsaltos, id);
        }else if(valor2.innerHTML.includes('<br>') && valor3.innerHTML.includes('<br>')){
            let valor2sinsaltos = valor2.innerHTML.split("<br>").join("");
            let valor3sinsaltos = valor3.innerHTML.split("<br>").join("");
            enviar(valor.innerHTML, valor2sinsaltos, valor3sinsaltos, id);
        }else if(valor3.innerHTML.includes('<br>')){
            let valor3sinsaltos = valor3.innerHTML.split("<br>").join("");
            enviar(valor.innerHTML, valor2.innerHTML, valor3sinsaltos, id);
        }else if(valor2.innerHTML.includes('<br>')){
            let valor2sinsaltos = valor2.innerHTML.split("<br>").join("");
            enviar(valor.innerHTML, valor2sinsaltos, valor3.innerHTML, id);
        }else if(valor.innerHTML.includes('<br>')){
            let valor1sinsaltos = valor.innerHTML.split("<br>").join("");
            enviar(valor1sinsaltos, valor2.innerHTML, valor3.innerHTML, id);
        }
    }else{
    
    boton.innerHTML="<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-pencil-square' viewBox='0 0 16 16'><path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z'></path><path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'></path></svg>Editar&nbsp;";
    axios.post("editar.php", {"registro":id, "nombre":"'"+valor.innerHTML+"'", "usuario":"'"+valor2.innerHTML+"'", "pass":"'"+valor3.innerHTML+"'"}).then(respuesta=>{console.log(respuesta);
    location.reload();
    });
    
    }
}

function enviar(val1, val2, val3, id){
    axios.post("editar.php", {"registro":id, "nombre":"'"+val1+"'", "usuario":"'"+val2+"'", "pass":"'"+val3+"'"}).then(respuesta=>{console.log(respuesta);
    location.reload();
    });
}

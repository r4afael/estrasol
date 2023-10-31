axios("verificarCredencial.php").then(respuesta=>{console.log(respuesta.data);
    if(respuesta.data=='Hay sesion'){
        
    }else{
        window.location.href='login.html';
    }
});

let fecha1;
let areaIco;
let diaSeleccion=[];
let mesSeleccion=[];
let añoSeleccion=[];
let id;
let solicitud=[];
let solucitudDate=[];
let fechaSeleccionada=false;
let boss;
let Acargada=false;
let Pcargada=false;
let Dcargada=false;
let botonVacacionesCargado=false;
let nameID;
obtenerDatos(true);

function obtenerDatos(cargarBotones){
    axios("obtenerDatos.php").then(respuesta=>{
        console.log(respuesta.data["nombre"]);
        if(respuesta.data["sexo"].toLowerCase()=="mujer" || respuesta.data["sexo"].toLowerCase()=="femenino" || respuesta.data["sexo"].toLowerCase()=="m"){
            let b = document.querySelector('.bienvenida');
            b.innerHTML='Bienvenida '+respuesta.data["nombre"];
        }else{
            let b = document.querySelector('.bienvenida');
            b.innerHTML='Bienvenido '+respuesta.data["nombre"];
        }
        
        let foto = document.querySelector('.foto');
        foto.setAttribute('src', 'img/fotos/'+respuesta.data["foto"]);
    
        let header = document.querySelector('.header');
        if(cargarBotones){
            let contenedorHeader = document.createElement('DIV');
                contenedorHeader.setAttribute('class', 'contenedorHeader');
                header.appendChild(contenedorHeader);
            if(respuesta.data["area"].toLowerCase()=='administración' || respuesta.data["area"].toLowerCase()=='dirección'){
                
                let botonModificar = document.createElement('BUTTON');
                botonModificar.setAttribute('class','modificar botones');
                botonModificar.setAttribute('onclick', 'modificar()');
                if(screen.width < 600){
                    botonModificar.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>People</title><path d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>';
                }else{
                    botonModificar.innerHTML='Modificar Datos';
                }
                contenedorHeader.appendChild(botonModificar);
                let botonSancionar = document.createElement('BUTTON');
                botonSancionar.setAttribute('class','sancionar botones');
                botonSancionar.setAttribute('onclick', 'sancionar()');
                if(screen.width < 600){
                    botonSancionar.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Gift</title><path d="M256 104v56h56a56 56 0 10-56-56zM256 104v56h-56a56 56 0 1156-56z" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><rect x="64" y="160" width="384" height="112" rx="32" ry="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M416 272v144a48 48 0 01-48 48H144a48 48 0 01-48-48V272M256 160v304" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>';
                }else{
                    botonSancionar.innerHTML='Sanciones/bonos';
                }
                contenedorHeader.appendChild(botonSancionar);
            }
            let botonVacaciones = document.createElement('BUTTON');
            botonVacaciones.setAttribute('class','vacaciones botones');
            botonVacaciones.setAttribute('onclick', 'vacaciones()');
            if(screen.width < 600){
                botonVacaciones.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Airplane</title><path d="M407.72 224c-3.4 0-14.79.1-18 .3l-64.9 1.7a1.83 1.83 0 01-1.69-.9L193.55 67.56a9 9 0 00-6.66-3.56H160l73 161a2.35 2.35 0 01-2.26 3.35l-121.69 1.8a8.06 8.06 0 01-6.6-3.1l-37-45c-3-3.9-8.62-6-13.51-6H33.08c-1.29 0-1.1 1.21-.75 2.43l19.84 71.42a16.3 16.3 0 010 11.9L32.31 333c-.59 1.95-.52 3 1.77 3H52c8.14 0 9.25-1.06 13.41-6.3l37.7-45.7a8.19 8.19 0 016.6-3.1l120.68 2.7a2.7 2.7 0 012.43 3.74L160 448h26.64a9 9 0 006.65-3.55L323.14 287c.39-.6 2-.9 2.69-.9l63.9 1.7c3.3.2 14.59.3 18 .3C452 288.1 480 275.93 480 256s-27.88-32-72.28-32z" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>';
            }else{
                botonVacaciones.innerHTML='Vacaciones';
            }
            contenedorHeader.appendChild(botonVacaciones);
        }
    
        let area = document.querySelector('.area');
        area.innerHTML=respuesta.data['area'];
        areaIco=respuesta.data['area'];
        let nombre = document.querySelector('.nombre');
        nombre.innerHTML=respuesta.data["nombre"]+' '+respuesta.data["apellidop"]+' '+respuesta.data["apellidom"];
        let edad = document.querySelector('.edad');
        edad.innerHTML=respuesta.data["edad"]+' años';
        let direccion = document.querySelector(".direccion");
        direccion.innerHTML=respuesta.data["direccion"];
        let ingreso = document.querySelector('.fechaIngreso');
        ingreso.innerHTML=respuesta.data["fechaIngreso"];
        fecha1=respuesta.data["fechaIngreso"];
        id=respuesta.data["id"];
        boss=respuesta.data["jefe"];
        nameID=respuesta.data["nombre"];
    });
    
    setTimeout(function(){
    const colorThief = new ColorThief();
    const img = document.querySelector('.foto');
    let rgb= colorThief.getColor(img);
    let caja = document.querySelector('.datos');
    caja.style.backgroundColor='rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')'
    if(rgb[0]+rgb[1]+rgb[2]<382){
        caja.style.color='white';
        let icono = document.querySelector('.icono');
        if(areaIco.toLowerCase()=='plataformas'){
            icono.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve" class="svgT"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0{stroke:#fffffff;stroke-miterlimit:10;}	.st1{fill:none;stroke:#ffffff;stroke-miterlimit:10;}	.st2{font-family:"MyriadPro-Regular";}	.st3{font-size:168.1496px;}</style><g id="Capa_2">	<rect x="68.5" y="241.5" class="st0" width="360" height="9"/>	<polyline class="st0" points="421.5,241.5 421.5,30.5 428.5,30.5 428.5,241.5  "/>	<polyline class="st0" points="68.5,241.5 68.5,30.5 74.5,30.5 74.5,241.5  "/>	<rect x="68.5" y="23.5" class="st0" width="360" height="7"/>	<polygon class="st0" points="68.5,250.5 38.5,473.5 48.5,473.5 74.5,261.5 428.5,261.5 428.5,250.5  "/>	<polygon class="st0" points="421.5,261.5 434.5,378.5 442.5,473.5 450.5,473.5 428.5,261.5  "/>	<polygon class="st0" points="304.18,261.82 310.5,379.5 317.5,379.5 310.8,261.35  "/>	<polygon class="st0" points="352.5,261.5 362.5,379.5 372.5,379.5 358.5,261.5  "/>	<polygon class="st0" points="315.93,351.88 329.5,351.5 327.5,326.5 344.5,326.5 346.5,351.5 360.13,351.53 356,303.82    312.5,303.5  "/>	<polygon class="st0" points="38.5,473.5 450.5,473.5 449.98,468.5 39.17,468.5  "/>	<polygon class="st0" points="171.5,385.5 171.5,379.5 60.09,379 49.11,468.5 163.5,468.5  "/>	<polyline class="st0" points="171.5,385.5 435.09,385.5 434.5,378.5 171.5,379.5  "/>	<polygon class="st0" points="306.5,385.5 315.5,468.88 442.08,468.5 435.5,385.5  "/></g><g id="Capa_1">	<rect x="68.5" y="23.5" class="st1" width="360" height="227"/>	<path class="st1" d="M68.5,250.5"/>	<polyline class="st1" points="428.5,250.5 450.5,473.5 38.51,473 68.49,247.99  "/>	<rect x="74.5" y="30.5" class="st1" width="347" height="211"/>	<polygon class="st1" points="73.06,261.5 59.5,379 310.8,379 305.38,261.5  "/>	<line class="st1" x1="70.84" y1="280.71" x2="306.26" y2="280.71"/>	<line class="st1" x1="65.66" y1="325.6" x2="308.34" y2="325.6"/>	<line class="st1" x1="62.67" y1="351.53" x2="309.53" y2="351.53"/>	<line class="st1" x1="88.4" y1="261.5" x2="86.27" y2="281.53"/>	<line class="st1" x1="96.91" y1="280.71" x2="95.21" y2="303.39"/>	<line class="st1" x1="104.99" y1="303.39" x2="102.44" y2="325.6"/>	<line class="st1" x1="91.1" y1="326" x2="88.34" y2="351.36"/>	<line class="st1" x1="96.56" y1="351.88" x2="93.5" y2="379"/>	<line class="st1" x1="267.07" y1="261.5" x2="267.07" y2="280.71"/>	<polyline class="st1" points="274.72,280.71 274.72,303.68 283.68,303.68 283.68,325.6  "/>	<line class="st1" x1="68.23" y1="303.39" x2="274.64" y2="303.68"/>	<line class="st1" x1="260.26" y1="325.6" x2="260.26" y2="351.53"/>	<line class="st1" x1="135.62" y1="379" x2="137.75" y2="351.53"/>	<line class="st1" x1="118.6" y1="351.53" x2="116.05" y2="379"/>	<line class="st1" x1="264.51" y1="351.88" x2="264.51" y2="379"/>	<line class="st1" x1="281.53" y1="351.53" x2="281.53" y2="379"/>	<line class="st1" x1="295.14" y1="351.53" x2="295.43" y2="379"/>	<line class="st1" x1="104.99" y1="261.5" x2="103.71" y2="280.71"/>	<line class="st1" x1="120.3" y1="261.5" x2="120.07" y2="280.58"/>	<line class="st1" x1="137.75" y1="261.5" x2="137.75" y2="280.58"/>	<line class="st1" x1="154.34" y1="261.5" x2="154.34" y2="280.58"/>	<line class="st1" x1="171.43" y1="261.5" x2="171.59" y2="280.58"/>	<line class="st1" x1="188.55" y1="261.5" x2="188.55" y2="280.58"/>	<line class="st1" x1="204.53" y1="261.5" x2="204.53" y2="280.58"/>	<line class="st1" x1="219.85" y1="261.5" x2="219.85" y2="280.58"/>	<line class="st1" x1="236.01" y1="261.5" x2="236.01" y2="280.71"/>	<line class="st1" x1="250.9" y1="261.5" x2="250.9" y2="280.58"/>	<line class="st1" x1="110.79" y1="280.58" x2="110.79" y2="303.16"/>	<line class="st1" x1="128.81" y1="280.71" x2="128.81" y2="303.16"/>	<line class="st1" x1="146.25" y1="280.58" x2="146.25" y2="303.39"/>	<line class="st1" x1="163.7" y1="280.71" x2="163.46" y2="302.68"/>	<line class="st1" x1="181.56" y1="280.71" x2="181.54" y2="302.68"/>	<line class="st1" x1="197.3" y1="280.58" x2="197.3" y2="303.68"/>	<line class="st1" x1="211.76" y1="280.58" x2="211.37" y2="303.68"/>	<line class="st1" x1="226.74" y1="280.58" x2="226.73" y2="303.68"/>	<line class="st1" x1="243.24" y1="280.58" x2="243" y2="303.68"/>	<line class="st1" x1="258.56" y1="280.71" x2="258.37" y2="303.68"/>	<line class="st1" x1="120.3" y1="303.39" x2="118.6" y2="325.6"/>	<line class="st1" x1="137.75" y1="303.68" x2="136.68" y2="325.6"/>	<line class="st1" x1="154.34" y1="303.39" x2="154.34" y2="325.6"/>	<line class="st1" x1="171.59" y1="303.68" x2="171.43" y2="325.6"/>	<line class="st1" x1="188.77" y1="303.68" x2="188.77" y2="325.6"/>	<line class="st1" x1="204.53" y1="303.68" x2="204.53" y2="325.6"/>	<line class="st1" x1="219.85" y1="303.68" x2="219.85" y2="325.6"/>	<line class="st1" x1="236.01" y1="303.68" x2="236.01" y2="325.6"/>	<line class="st1" x1="250.9" y1="303.68" x2="250.9" y2="325.6"/>	<line class="st1" x1="267.07" y1="303.68" x2="267.41" y2="325.77"/>	<line class="st1" x1="110.79" y1="325.77" x2="109.24" y2="351.53"/>	<line class="st1" x1="128.81" y1="325.77" x2="128.81" y2="351.53"/>	<line class="st1" x1="146.25" y1="325.6" x2="146.25" y2="351.53"/>	<line class="st1" x1="163.46" y1="325.6" x2="163.46" y2="351.88"/>	<line class="st1" x1="181.56" y1="325.6" x2="181.54" y2="351.88"/>	<line class="st1" x1="197.3" y1="325.6" x2="197.3" y2="351.53"/>	<line class="st1" x1="211.76" y1="325.77" x2="211.76" y2="351.53"/>	<line class="st1" x1="226.74" y1="325.77" x2="226.74" y2="351.53"/>	<polyline class="st1" points="243,325.77 243.24,351.53 243.24,379  "/>	<polygon class="st1" points="310.8,261.5 352.38,261.5 356,303.68 312.61,303.68  "/>	<line class="st1" x1="311.71" y1="282.59" x2="354.19" y2="282.59"/>	<line class="st1" x1="325.77" y1="261.5" x2="327.9" y2="303.68"/>	<line class="st1" x1="338.53" y1="261.5" x2="341.54" y2="303.68"/>	<polygon class="st1" points="317.44,379 315.32,351.88 360.88,351.88 363,379  "/>	<polyline class="st1" points="332.09,379 329.92,352 328,326 344.3,326 346.22,352 348.34,379  "/>	<polygon class="st1" points="358.5,261.5 421.5,261.5 434.5,379.5 372.5,379.5  "/>	<line class="st1" x1="360.76" y1="280.58" x2="423.62" y2="280.71"/>	<line class="st1" x1="363.5" y1="302.99" x2="410.96" y2="303.28"/>	<line class="st1" x1="366.1" y1="325.6" x2="428.61" y2="326"/>	<line class="st1" x1="369.16" y1="351.36" x2="416" y2="351.53"/>	<polyline class="st1" points="375.24,261.5 377.59,280.58 387.25,351.36  "/>	<polyline class="st1" points="392.19,261.5 394.77,280.58 405.82,379.5  "/>	<polyline class="st1" points="405.82,261.5 408.18,280.58 419,379.5  "/>	<polygon class="st1" points="171.5,385.5 306.5,385.5 315.5,468.5 163.5,468.5  "/>	<line class="st1" x1="165.24" y1="450.47" x2="313.55" y2="450.47"/>	<line class="st1" x1="239.5" y1="450.47" x2="239.5" y2="468.5"/>	<text transform="matrix(1.1677 0 0 1 94 181.9629)" class="st2 st3">&lt;/&gt;</text></g></svg>';
            let svg = document.querySelector('.icono');
            svg.style.fill='#ffffff';
        }else if(areaIco.toLowerCase()=='administración'){
            icono.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve" class="svgT"><style type="text/css">	.st0{font-family:"CooperBlack";}	.st1{font-size:294.2412px;}</style><text transform="matrix(1.1669 0 0 1 152.8076 277.7568)" class="st0 st1">$</text><g>	<g>		<path d="M414.98,356.98c2.93-14.2-6.47-22.21-30.58-31.92l-10.5-4.21c-29.78-11.98-45.87-26.3-41.21-48.84    c4.75-22.99,33.37-38.14,67.87-34.15c30.3,3.5,51.51,19.8,49.31,39.39c-3.38,4.46-8.94,6.12-14.64,5.46    c-6.6-0.76-13.45-4.79-14.63-16.92l-1.56-17.72l13.92,9.92c-11.81-5.29-22.38-7.66-31.38-8.7c-22.2-2.57-41.02,3.79-44.51,20.7    c-2.98,14.42,7.39,23.7,27.62,31.34l10.8,4.25c38.31,15.28,47.59,31.35,43.77,49.83c-4.98,24.11-33.11,38.4-73.91,33.68    c-32.1-3.71-53.66-19.82-50.81-39.56c3.63-4.2,8.34-6.19,14.94-5.43c7.2,0.83,13.19,4.53,14.33,16.89l1.56,17.72l-14.23-9.95    c12.96,5.65,26.23,8.34,37.93,9.69C393.68,381.29,411.53,373.66,414.98,356.98z M379.43,313.42l12,1.39l-20.33,98.49l-12-1.39    L379.43,313.42z M379.73,313.45l19.91-96.46l12,1.39l-19.91,96.46L379.73,313.45z"/>	</g></g><g>	<g>		<path d="M173.58,350.36c-6.46-13.53-19.82-17.22-47.2-17.17l-11.91,0.04c-33.81,0.08-57.07-6.78-67.31-28.26    c-10.45-21.9,5.08-45.43,37.96-54.21c28.87-7.72,57.89-0.95,68.42,17.06c-0.14,5.12-3.97,8.57-9.4,10.02    c-6.29,1.68-14.87,0.58-23.63-9.67l-12.65-15.02l18.55,3.76c-13.75-0.44-24.55,1.24-33.13,3.53    c-21.16,5.65-33.66,17.96-25.97,34.06c6.56,13.74,21.58,18.2,44.23,17.72l12.2-0.11c43.41-0.22,61.79,10.61,70.19,28.21    c10.96,22.98-4.69,45.57-43.57,55.96c-30.59,8.18-59.79,1.69-69.85-16.68c0.52-4.98,3.4-8.42,9.69-10.1    c6.86-1.83,14.48-0.72,23.34,9.74l12.65,15.02l-18.84-3.68c15,0.35,28.37-2.01,39.52-4.99    C170.32,379.33,181.17,366.26,173.58,350.36z M114.89,324.65l-43.86-91.91l11.44-3.06l43.86,91.91L114.89,324.65z M114.61,324.72    l11.44-3.06l44.78,93.84l-11.44,3.06L114.61,324.72z"/>	</g></g></svg><g id="Capa_2">	<rect x="68.5" y="241.5" class="st0" width="360" height="9"/>	<polyline class="st0" points="421.5,241.5 421.5,30.5 428.5,30.5 428.5,241.5  "/>	<polyline class="st0" points="68.5,241.5 68.5,30.5 74.5,30.5 74.5,241.5  "/>	<rect x="68.5" y="23.5" class="st0" width="360" height="7"/>	<polygon class="st0" points="68.5,250.5 38.5,473.5 48.5,473.5 74.5,261.5 428.5,261.5 428.5,250.5  "/>	<polygon class="st0" points="421.5,261.5 434.5,378.5 442.5,473.5 450.5,473.5 428.5,261.5  "/>	<polygon class="st0" points="304.18,261.82 310.5,379.5 317.5,379.5 310.8,261.35  "/>	<polygon class="st0" points="352.5,261.5 362.5,379.5 372.5,379.5 358.5,261.5  "/>	<polygon class="st0" points="315.93,351.88 329.5,351.5 327.5,326.5 344.5,326.5 346.5,351.5 360.13,351.53 356,303.82    312.5,303.5  "/>	<polygon class="st0" points="38.5,473.5 450.5,473.5 449.98,468.5 39.17,468.5  "/>	<polygon class="st0" points="171.5,385.5 171.5,379.5 60.09,379 49.11,468.5 163.5,468.5  "/>	<polyline class="st0" points="171.5,385.5 435.09,385.5 434.5,378.5 171.5,379.5  "/>	<polygon class="st0" points="306.5,385.5 315.5,468.88 442.08,468.5 435.5,385.5  "/></g></svg>';
            let svg = document.querySelector('.icono');
            svg.style.fill='#ffffff';
        }else if(areaIco.toLowerCase()=='operaciones'){
            icono.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve" class="svgT"><path d="M445.8,518.5c0,14.5-80.7-13-188.8-13s-202.7,20.1-202.7,13c0-99.6,87.6-180.3,195.8-180.3S445.8,418.9,445.8,518.5z"/><ellipse cx="249.1" cy="247.5" rx="112.9" ry="106.5"/><path d="M54.3,189h391.5C445.8,189,272.5,45,54.3,189z"/><path d="M176,153l18-98c0,0,55-27,115,0l23,98"/><path d="M54.3,189c0,0,192.3,42,391.5,0"/></svg>';
            let svg = document.querySelector('.icono');
            svg.style.fill='#ffffff';
        }else if(areaIco.toLowerCase()=='análisis y proyectos'){
            icono.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve" class="svgT"><style type="text/css">	.st0{fill:none;stroke:#ffffff;stroke-width:36;stroke-miterlimit:10;}	.st1{stroke:#000000;stroke-miterlimit:10;}	.st2{fill:none;stroke:#000000;stroke-miterlimit:10;}</style><path d="M439.29,381.02"/><ellipse class="st0" cx="330.13" cy="165.49" rx="126.02" ry="129.27"/><path class="st1" d="M246.02,244.43L11.79,451.52c0,0-0.9,19.76,18.85,18.9l232.83-208.8L246.02,244.43z"/><path class="st2" d="M309.8,83.37c0,0,73.17-23.58,95.12,46.34"/><path class="st2" d="M323.63,89.07c0,0,47.97-4.07,67.48,30.08"/></svg>';
            let svg = document.querySelector('.icono');
            svg.style.fill='#ffffff';
        }else if(areaIco.toLowerCase()=='otros'){
            icono.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve" class="svgT"><path d="M218.16,381.02"/><path d="M80.94,428.81c0-69.79,32.22-126.36,71.96-126.36s71.96,56.58,71.96,126.36"/><ellipse cx="152.89" cy="257.97" rx="43.77" ry="76.87"/><path d="M439.29,381.02"/><path d="M302.07,428.81c0-69.79,32.22-126.36,71.96-126.36s71.96,56.58,71.96,126.36"/><ellipse cx="374.03" cy="257.97" rx="43.77" ry="76.87"/><path d="M367.26,362.13"/><path d="M140.7,480.93c0-129.94,53.12-235.28,118.65-235.28S378,350.99,378,480.93"/><ellipse cx="262.6" cy="179.73" rx="70.19" ry="113.94"/></svg>';
            let svg = document.querySelector('.icono');
            svg.style.fill='#ffffff';
        }else if(areaIco.toLowerCase()=='dirección'){
            icono.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve" class="svgT"><style type="text/css">	.st0{fill:#FFFFFF;}	.st1{stroke:#000000;stroke-miterlimit:10;}	.st2{fill:none;stroke:#000000;stroke-width:5;stroke-miterlimit:10;}</style><path class="st0" d="M445.37,387.69H55.81c-6.6,0-12-5.4-12-12V126.81c0-6.6,5.4-12,12-12h389.56c6.6,0,12,5.4,12,12v248.88  C457.37,382.29,451.97,387.69,445.37,387.69z"/><polygon class="st0" points="324.58,114.81 324.58,47.02 175.42,47.02 175.42,114.81 196.36,114.81 196.36,63.97 305.68,64.81   305.68,114.81 "/><rect x="216.95" y="237.69" class="st1" width="66.1" height="43.22"/><polyline class="st2" points="43.81,201.25 175.42,268.2 216.95,268.2 "/><polyline class="st2" points="283.05,268.2 324.58,268.2 457.37,201.25 "/></svg>';
            let svg = document.querySelector('.icono');
            svg.style.fill='#ffffff';
        }else if(areaIco.toLowerCase()=='calidad y base de datos'){
            icono.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve" class="svgT"><style type="text/css">	.st0{fill:none;stroke:#ffffff;stroke-width:12;stroke-miterlimit:10;}</style><polygon class="st0" points="246.35,163.5 456,163.5 351.17,325.75 246.35,488 141.52,325.75 36.7,163.5 "/><polygon class="st0" points="113.97,47.16 378.12,44.77 456.53,154.48 37,154 "/><polyline class="st0" points="114,47 185.49,163.5 246,488 331.81,163.5 378,45 "/><polyline class="st0" points="183.76,160.68 246,49 335.38,154.34 "/></svg>';
            let svg = document.querySelector('.icono');
            svg.style.fill='#ffffff';
        }
    }else{
        let icono = document.querySelector('.icono');
        if(areaIco.toLowerCase()=='plataformas'){
            icono.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve" class="svgT"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0{stroke:#000000;stroke-miterlimit:10;}	.st1{fill:none;stroke:#000000;stroke-miterlimit:10;}	.st2{font-family:"MyriadPro-Regular";}	.st3{font-size:168.1496px;}</style><g id="Capa_2">	<rect x="68.5" y="241.5" class="st0" width="360" height="9"/>	<polyline class="st0" points="421.5,241.5 421.5,30.5 428.5,30.5 428.5,241.5  "/>	<polyline class="st0" points="68.5,241.5 68.5,30.5 74.5,30.5 74.5,241.5  "/>	<rect x="68.5" y="23.5" class="st0" width="360" height="7"/>	<polygon class="st0" points="68.5,250.5 38.5,473.5 48.5,473.5 74.5,261.5 428.5,261.5 428.5,250.5  "/>	<polygon class="st0" points="421.5,261.5 434.5,378.5 442.5,473.5 450.5,473.5 428.5,261.5  "/>	<polygon class="st0" points="304.18,261.82 310.5,379.5 317.5,379.5 310.8,261.35  "/>	<polygon class="st0" points="352.5,261.5 362.5,379.5 372.5,379.5 358.5,261.5  "/>	<polygon class="st0" points="315.93,351.88 329.5,351.5 327.5,326.5 344.5,326.5 346.5,351.5 360.13,351.53 356,303.82    312.5,303.5  "/>	<polygon class="st0" points="38.5,473.5 450.5,473.5 449.98,468.5 39.17,468.5  "/>	<polygon class="st0" points="171.5,385.5 171.5,379.5 60.09,379 49.11,468.5 163.5,468.5  "/>	<polyline class="st0" points="171.5,385.5 435.09,385.5 434.5,378.5 171.5,379.5  "/>	<polygon class="st0" points="306.5,385.5 315.5,468.88 442.08,468.5 435.5,385.5  "/></g><g id="Capa_1">	<rect x="68.5" y="23.5" class="st1" width="360" height="227"/>	<path class="st1" d="M68.5,250.5"/>	<polyline class="st1" points="428.5,250.5 450.5,473.5 38.51,473 68.49,247.99  "/>	<rect x="74.5" y="30.5" class="st1" width="347" height="211"/>	<polygon class="st1" points="73.06,261.5 59.5,379 310.8,379 305.38,261.5  "/>	<line class="st1" x1="70.84" y1="280.71" x2="306.26" y2="280.71"/>	<line class="st1" x1="65.66" y1="325.6" x2="308.34" y2="325.6"/>	<line class="st1" x1="62.67" y1="351.53" x2="309.53" y2="351.53"/>	<line class="st1" x1="88.4" y1="261.5" x2="86.27" y2="281.53"/>	<line class="st1" x1="96.91" y1="280.71" x2="95.21" y2="303.39"/>	<line class="st1" x1="104.99" y1="303.39" x2="102.44" y2="325.6"/>	<line class="st1" x1="91.1" y1="326" x2="88.34" y2="351.36"/>	<line class="st1" x1="96.56" y1="351.88" x2="93.5" y2="379"/>	<line class="st1" x1="267.07" y1="261.5" x2="267.07" y2="280.71"/>	<polyline class="st1" points="274.72,280.71 274.72,303.68 283.68,303.68 283.68,325.6  "/>	<line class="st1" x1="68.23" y1="303.39" x2="274.64" y2="303.68"/>	<line class="st1" x1="260.26" y1="325.6" x2="260.26" y2="351.53"/>	<line class="st1" x1="135.62" y1="379" x2="137.75" y2="351.53"/>	<line class="st1" x1="118.6" y1="351.53" x2="116.05" y2="379"/>	<line class="st1" x1="264.51" y1="351.88" x2="264.51" y2="379"/>	<line class="st1" x1="281.53" y1="351.53" x2="281.53" y2="379"/>	<line class="st1" x1="295.14" y1="351.53" x2="295.43" y2="379"/>	<line class="st1" x1="104.99" y1="261.5" x2="103.71" y2="280.71"/>	<line class="st1" x1="120.3" y1="261.5" x2="120.07" y2="280.58"/>	<line class="st1" x1="137.75" y1="261.5" x2="137.75" y2="280.58"/>	<line class="st1" x1="154.34" y1="261.5" x2="154.34" y2="280.58"/>	<line class="st1" x1="171.43" y1="261.5" x2="171.59" y2="280.58"/>	<line class="st1" x1="188.55" y1="261.5" x2="188.55" y2="280.58"/>	<line class="st1" x1="204.53" y1="261.5" x2="204.53" y2="280.58"/>	<line class="st1" x1="219.85" y1="261.5" x2="219.85" y2="280.58"/>	<line class="st1" x1="236.01" y1="261.5" x2="236.01" y2="280.71"/>	<line class="st1" x1="250.9" y1="261.5" x2="250.9" y2="280.58"/>	<line class="st1" x1="110.79" y1="280.58" x2="110.79" y2="303.16"/>	<line class="st1" x1="128.81" y1="280.71" x2="128.81" y2="303.16"/>	<line class="st1" x1="146.25" y1="280.58" x2="146.25" y2="303.39"/>	<line class="st1" x1="163.7" y1="280.71" x2="163.46" y2="302.68"/>	<line class="st1" x1="181.56" y1="280.71" x2="181.54" y2="302.68"/>	<line class="st1" x1="197.3" y1="280.58" x2="197.3" y2="303.68"/>	<line class="st1" x1="211.76" y1="280.58" x2="211.37" y2="303.68"/>	<line class="st1" x1="226.74" y1="280.58" x2="226.73" y2="303.68"/>	<line class="st1" x1="243.24" y1="280.58" x2="243" y2="303.68"/>	<line class="st1" x1="258.56" y1="280.71" x2="258.37" y2="303.68"/>	<line class="st1" x1="120.3" y1="303.39" x2="118.6" y2="325.6"/>	<line class="st1" x1="137.75" y1="303.68" x2="136.68" y2="325.6"/>	<line class="st1" x1="154.34" y1="303.39" x2="154.34" y2="325.6"/>	<line class="st1" x1="171.59" y1="303.68" x2="171.43" y2="325.6"/>	<line class="st1" x1="188.77" y1="303.68" x2="188.77" y2="325.6"/>	<line class="st1" x1="204.53" y1="303.68" x2="204.53" y2="325.6"/>	<line class="st1" x1="219.85" y1="303.68" x2="219.85" y2="325.6"/>	<line class="st1" x1="236.01" y1="303.68" x2="236.01" y2="325.6"/>	<line class="st1" x1="250.9" y1="303.68" x2="250.9" y2="325.6"/>	<line class="st1" x1="267.07" y1="303.68" x2="267.41" y2="325.77"/>	<line class="st1" x1="110.79" y1="325.77" x2="109.24" y2="351.53"/>	<line class="st1" x1="128.81" y1="325.77" x2="128.81" y2="351.53"/>	<line class="st1" x1="146.25" y1="325.6" x2="146.25" y2="351.53"/>	<line class="st1" x1="163.46" y1="325.6" x2="163.46" y2="351.88"/>	<line class="st1" x1="181.56" y1="325.6" x2="181.54" y2="351.88"/>	<line class="st1" x1="197.3" y1="325.6" x2="197.3" y2="351.53"/>	<line class="st1" x1="211.76" y1="325.77" x2="211.76" y2="351.53"/>	<line class="st1" x1="226.74" y1="325.77" x2="226.74" y2="351.53"/>	<polyline class="st1" points="243,325.77 243.24,351.53 243.24,379  "/>	<polygon class="st1" points="310.8,261.5 352.38,261.5 356,303.68 312.61,303.68  "/>	<line class="st1" x1="311.71" y1="282.59" x2="354.19" y2="282.59"/>	<line class="st1" x1="325.77" y1="261.5" x2="327.9" y2="303.68"/>	<line class="st1" x1="338.53" y1="261.5" x2="341.54" y2="303.68"/>	<polygon class="st1" points="317.44,379 315.32,351.88 360.88,351.88 363,379  "/>	<polyline class="st1" points="332.09,379 329.92,352 328,326 344.3,326 346.22,352 348.34,379  "/>	<polygon class="st1" points="358.5,261.5 421.5,261.5 434.5,379.5 372.5,379.5  "/>	<line class="st1" x1="360.76" y1="280.58" x2="423.62" y2="280.71"/>	<line class="st1" x1="363.5" y1="302.99" x2="410.96" y2="303.28"/>	<line class="st1" x1="366.1" y1="325.6" x2="428.61" y2="326"/>	<line class="st1" x1="369.16" y1="351.36" x2="416" y2="351.53"/>	<polyline class="st1" points="375.24,261.5 377.59,280.58 387.25,351.36  "/>	<polyline class="st1" points="392.19,261.5 394.77,280.58 405.82,379.5  "/>	<polyline class="st1" points="405.82,261.5 408.18,280.58 419,379.5  "/>	<polygon class="st1" points="171.5,385.5 306.5,385.5 315.5,468.5 163.5,468.5  "/>	<line class="st1" x1="165.24" y1="450.47" x2="313.55" y2="450.47"/>	<line class="st1" x1="239.5" y1="450.47" x2="239.5" y2="468.5"/>	<text transform="matrix(1.1677 0 0 1 94 181.9629)" class="st2 st3">&lt;/&gt;</text></g></svg>';
            let svg = document.querySelector('.icono');
            svg.style.fill='#000000';
        }else if(areaIco.toLowerCase()=='administracion'){
            icono.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve" class="svgT"><style type="text/css">	.st0{font-family:"CooperBlack";}	.st1{font-size:294.2412px;}</style><text transform="matrix(1.1669 0 0 1 152.8076 277.7568)" class="st0 st1">$</text><g>	<g>		<path d="M414.98,356.98c2.93-14.2-6.47-22.21-30.58-31.92l-10.5-4.21c-29.78-11.98-45.87-26.3-41.21-48.84    c4.75-22.99,33.37-38.14,67.87-34.15c30.3,3.5,51.51,19.8,49.31,39.39c-3.38,4.46-8.94,6.12-14.64,5.46    c-6.6-0.76-13.45-4.79-14.63-16.92l-1.56-17.72l13.92,9.92c-11.81-5.29-22.38-7.66-31.38-8.7c-22.2-2.57-41.02,3.79-44.51,20.7    c-2.98,14.42,7.39,23.7,27.62,31.34l10.8,4.25c38.31,15.28,47.59,31.35,43.77,49.83c-4.98,24.11-33.11,38.4-73.91,33.68    c-32.1-3.71-53.66-19.82-50.81-39.56c3.63-4.2,8.34-6.19,14.94-5.43c7.2,0.83,13.19,4.53,14.33,16.89l1.56,17.72l-14.23-9.95    c12.96,5.65,26.23,8.34,37.93,9.69C393.68,381.29,411.53,373.66,414.98,356.98z M379.43,313.42l12,1.39l-20.33,98.49l-12-1.39    L379.43,313.42z M379.73,313.45l19.91-96.46l12,1.39l-19.91,96.46L379.73,313.45z"/>	</g></g><g>	<g>		<path d="M173.58,350.36c-6.46-13.53-19.82-17.22-47.2-17.17l-11.91,0.04c-33.81,0.08-57.07-6.78-67.31-28.26    c-10.45-21.9,5.08-45.43,37.96-54.21c28.87-7.72,57.89-0.95,68.42,17.06c-0.14,5.12-3.97,8.57-9.4,10.02    c-6.29,1.68-14.87,0.58-23.63-9.67l-12.65-15.02l18.55,3.76c-13.75-0.44-24.55,1.24-33.13,3.53    c-21.16,5.65-33.66,17.96-25.97,34.06c6.56,13.74,21.58,18.2,44.23,17.72l12.2-0.11c43.41-0.22,61.79,10.61,70.19,28.21    c10.96,22.98-4.69,45.57-43.57,55.96c-30.59,8.18-59.79,1.69-69.85-16.68c0.52-4.98,3.4-8.42,9.69-10.1    c6.86-1.83,14.48-0.72,23.34,9.74l12.65,15.02l-18.84-3.68c15,0.35,28.37-2.01,39.52-4.99    C170.32,379.33,181.17,366.26,173.58,350.36z M114.89,324.65l-43.86-91.91l11.44-3.06l43.86,91.91L114.89,324.65z M114.61,324.72    l11.44-3.06l44.78,93.84l-11.44,3.06L114.61,324.72z"/>	</g></g></svg><g id="Capa_2">	<rect x="68.5" y="241.5" class="st0" width="360" height="9"/>	<polyline class="st0" points="421.5,241.5 421.5,30.5 428.5,30.5 428.5,241.5  "/>	<polyline class="st0" points="68.5,241.5 68.5,30.5 74.5,30.5 74.5,241.5  "/>	<rect x="68.5" y="23.5" class="st0" width="360" height="7"/>	<polygon class="st0" points="68.5,250.5 38.5,473.5 48.5,473.5 74.5,261.5 428.5,261.5 428.5,250.5  "/>	<polygon class="st0" points="421.5,261.5 434.5,378.5 442.5,473.5 450.5,473.5 428.5,261.5  "/>	<polygon class="st0" points="304.18,261.82 310.5,379.5 317.5,379.5 310.8,261.35  "/>	<polygon class="st0" points="352.5,261.5 362.5,379.5 372.5,379.5 358.5,261.5  "/>	<polygon class="st0" points="315.93,351.88 329.5,351.5 327.5,326.5 344.5,326.5 346.5,351.5 360.13,351.53 356,303.82    312.5,303.5  "/>	<polygon class="st0" points="38.5,473.5 450.5,473.5 449.98,468.5 39.17,468.5  "/>	<polygon class="st0" points="171.5,385.5 171.5,379.5 60.09,379 49.11,468.5 163.5,468.5  "/>	<polyline class="st0" points="171.5,385.5 435.09,385.5 434.5,378.5 171.5,379.5  "/>	<polygon class="st0" points="306.5,385.5 315.5,468.88 442.08,468.5 435.5,385.5  "/></g></svg>';
            let svg = document.querySelector('.icono');
            svg.style.fill='#000000';
        }else if(areaIco.toLowerCase()=='operaciones'){
            icono.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve" class="svgT"><path d="M445.8,518.5c0,14.5-80.7-13-188.8-13s-202.7,20.1-202.7,13c0-99.6,87.6-180.3,195.8-180.3S445.8,418.9,445.8,518.5z"/><ellipse cx="249.1" cy="247.5" rx="112.9" ry="106.5"/><path d="M54.3,189h391.5C445.8,189,272.5,45,54.3,189z"/><path d="M176,153l18-98c0,0,55-27,115,0l23,98"/><path d="M54.3,189c0,0,192.3,42,391.5,0"/></svg>';
            let svg = document.querySelector('.icono');
            svg.style.fill='#000000';
        }else if(areaIco.toLowerCase()=='analisis y proyectos'){
            icono.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve" class="svgT"><style type="text/css">	.st0{fill:none;stroke:#000000;stroke-width:36;stroke-miterlimit:10;}	.st1{stroke:#000000;stroke-miterlimit:10;}	.st2{fill:none;stroke:#000000;stroke-miterlimit:10;}</style><path d="M439.29,381.02"/><ellipse class="st0" cx="330.13" cy="165.49" rx="126.02" ry="129.27"/><path class="st1" d="M246.02,244.43L11.79,451.52c0,0-0.9,19.76,18.85,18.9l232.83-208.8L246.02,244.43z"/><path class="st2" d="M309.8,83.37c0,0,73.17-23.58,95.12,46.34"/><path class="st2" d="M323.63,89.07c0,0,47.97-4.07,67.48,30.08"/></svg>';
            let svg = document.querySelector('.icono');
            svg.style.fill='#000000';
        }else if(areaIco.toLowerCase()=='otros'){
            icono.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve" class="svgT"><path d="M218.16,381.02"/><path d="M80.94,428.81c0-69.79,32.22-126.36,71.96-126.36s71.96,56.58,71.96,126.36"/><ellipse cx="152.89" cy="257.97" rx="43.77" ry="76.87"/><path d="M439.29,381.02"/><path d="M302.07,428.81c0-69.79,32.22-126.36,71.96-126.36s71.96,56.58,71.96,126.36"/><ellipse cx="374.03" cy="257.97" rx="43.77" ry="76.87"/><path d="M367.26,362.13"/><path d="M140.7,480.93c0-129.94,53.12-235.28,118.65-235.28S378,350.99,378,480.93"/><ellipse cx="262.6" cy="179.73" rx="70.19" ry="113.94"/></svg>';
            let svg = document.querySelector('.icono');
            svg.style.fill='#000000';
        }else if(areaIco.toLowerCase()=='direccion'){
            icono.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve" class="svgT"><style type="text/css">	.st0{fill:#FFFFFF;}	.st1{stroke:#000000;stroke-miterlimit:10;}	.st2{fill:none;stroke:#000000;stroke-width:5;stroke-miterlimit:10;}</style><path class="st0" d="M445.37,387.69H55.81c-6.6,0-12-5.4-12-12V126.81c0-6.6,5.4-12,12-12h389.56c6.6,0,12,5.4,12,12v248.88  C457.37,382.29,451.97,387.69,445.37,387.69z"/><polygon class="st0" points="324.58,114.81 324.58,47.02 175.42,47.02 175.42,114.81 196.36,114.81 196.36,63.97 305.68,64.81   305.68,114.81 "/><rect x="216.95" y="237.69" class="st1" width="66.1" height="43.22"/><polyline class="st2" points="43.81,201.25 175.42,268.2 216.95,268.2 "/><polyline class="st2" points="283.05,268.2 324.58,268.2 457.37,201.25 "/></svg>';
            let svg = document.querySelector('.icono');
            svg.style.fill='#000000';
        }else if(areaIco.toLowerCase()=='calidad y base de datos'){
            icono.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve" class="svgT"><style type="text/css">	.st0{fill:none;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}</style><polygon class="st0" points="246.35,163.5 456,163.5 351.17,325.75 246.35,488 141.52,325.75 36.7,163.5 "/><polygon class="st0" points="113.97,47.16 378.12,44.77 456.53,154.48 37,154 "/><polyline class="st0" points="114,47 185.49,163.5 246,488 331.81,163.5 378,45 "/><polyline class="st0" points="183.76,160.68 246,49 335.38,154.34 "/></svg>';
            let svg = document.querySelector('.icono');
            svg.style.fill='#000000';
        }
    }
    const fecha = new Date();
    console.log(fecha.getFullYear()+'/'+(fecha.getMonth()+1)+'/'+fecha.getDate());
    let a1=parseInt(fecha1.substr(0,4));
    let a2=parseInt(fecha.getFullYear());
    let m1=parseInt(fecha1.substr(5,7));
    let m2=fecha.getMonth()+1;
    let d1=parseInt(fecha1.substr(8,10));
    let d2=parseInt(fecha.getDate());
    let af=a2-a1;
    let mf;
    let df;
    if(m2<m1){
        af-=1;
        mf=12-m1;
        mf+=m2;
    }else{
        mf=m2-m1;
    }
    if(d2<d1){
        mf-1;
        df=30-d1;
        df+=d2;
    }else{
        df=d2-d1;
    }
    
    let tiempoEmpresa = document.querySelector('.time');
    if(af==1 && mf==1 && df==1){
        tiempoEmpresa.innerHTML=af+'año '+mf+'mes '+df+'día';
    }else if(af==1 && mf==1){
        tiempoEmpresa.innerHTML=af+'año '+mf+'mes '+df+'días';
    }else if(af==1 && df==1){
        tiempoEmpresa.innerHTML=af+'año '+mf+'meses '+df+'día';
    }else if(af==1){
        tiempoEmpresa.innerHTML=af+'año '+mf+'meses '+df+'días';
    }else if(mf==1 && df==1){
        tiempoEmpresa.innerHTML=af+'años '+mf+'mes '+df+'día';
    }else if(mf==1){
        tiempoEmpresa.innerHTML=af+'años '+mf+'mes '+df+'días';
    }else if(df==1){
        tiempoEmpresa.innerHTML=af+'años '+mf+'meses '+df+'día';
    }else{
        tiempoEmpresa.innerHTML=af+'años '+mf+'meses '+df+'días';
    }
    cargarNotificacionesBuenas();
    cargarNotificacionesMalas();
    }, 1000);
}


function vacaciones(){
    let cuerpo = document.querySelector('.cuerpo');
    let bv = document.querySelector('.vacaciones');
    let header = document.querySelector('.contenedorHeader');
    cuerpo.style.animationDuration='1s';
    cuerpo.style.animationName='desvanecer';
    if(botonVacacionesCargado==false){
        if(document.querySelector('.inicio')){
            let botonInicio = document.querySelector('.inicio');
            if(botonInicio.classList[1]=='i2'){
                botonInicio.remove();
                bn = document.createElement('BUTTON');
                bn.setAttribute('class', 'modificar botones');
                bn.setAttribute('onclick', 'modificar()');
                if(screen.width < 600){
                    bn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>People</title><path d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>';
                }else{
                    bn.innerHTML='Modificar Datos';
                }
                let add = document.querySelector('.add');
                add.remove();
                header.appendChild(bn);
            }else if(botonInicio.classList[1]=='i3'){
                botonInicio.remove();
                bn = document.createElement('BUTTON');
                bn.setAttribute('class', 'sancionar botones');
                bn.setAttribute('onclick', 'sancionar()');
                if(screen.width < 600){
                    bn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Gift</title><path d="M256 104v56h56a56 56 0 10-56-56zM256 104v56h-56a56 56 0 1156-56z" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><rect x="64" y="160" width="384" height="112" rx="32" ry="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M416 272v144a48 48 0 01-48 48H144a48 48 0 01-48-48V272M256 160v304" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>';
                }else{
                    bn.innerHTML='Sanciones/bonos';
                }
                header.appendChild(bn);
            }
        }

        bv.remove();
        let boton = document.createElement('BUTTON');
        boton.setAttribute('class', 'inicio i1 botones');
        boton.setAttribute('onclick', 'inicio()');
        if(screen.width < 600){
            boton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Home</title><path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>';
        }else{
            boton.innerHTML='Inicio';
        }
        header.appendChild(boton);
    }
    setTimeout(function(){
        cuerpo.remove();
        let contenedor = document.querySelector('.contenedor');
        let nuevoCuerpo = document.createElement('DIV');
        nuevoCuerpo.setAttribute('class', 'cuerpo');
        let bi = document.createElement('BUTTON');
        bi.setAttribute('class', 'botonIzquierda');
        bi.setAttribute('onclick', 'nextPrevius("deslizarDerecha")');
        bi.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1{fill:#FFFFFF;stroke:#000000;stroke-miterlimit:10;}</style><path class="st0" d="M447.59,429.86l-0.11,67.4L239.85,374.89L32.22,252.54l208.04-121.65L448.31,9.24c0,0-0.17,9.51-0.18,17.51  s-0.13,38.8,0.05,57.91c-97.52,55.81-195.04,111.62-292.56,167.44C252.94,311.35,350.26,370.6,447.59,429.86z"/><path class="st1" d="M41.5,476.5"/><path class="st1" d="M41.5,476.5"/><path class="st0" d="M40.5,471.5"/><path class="st0" d="M83.5,448.5"/><path class="st1" d="M228.5,249.5"/></svg>';
        let bd = document.createElement('BUTTON');
        bd.setAttribute('class', 'botonDerecha');
        bd.setAttribute('onclick', 'nextPrevius("deslizarIzquierda")');
        bd.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1{fill:#FFFFFF;stroke:#000000;stroke-miterlimit:10;}</style><path class="st0" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1" d="M41.5,476.5"/><path class="st1" d="M41.5,476.5"/><path class="st0" d="M40.5,471.5"/><path class="st0" d="M83.5,448.5"/><path class="st1" d="M228.5,249.5"/></svg>';
        nuevoCuerpo.appendChild(bi);
        nuevoCuerpo.appendChild(bd);
        let contenedorCalendario = document.createElement('DIV');
        contenedorCalendario.setAttribute('class', 'contenedorCalendario');
        nuevoCuerpo.appendChild(contenedorCalendario);
        let fondo = document.createElement('IMG');
        fondo.setAttribute('src', 'img/Sunglasses-summer-glitter_2560x1600.jpg');
        fondo.setAttribute('class', 'fondo');
        contenedorCalendario.appendChild(fondo);
        let mes = document.createElement('P');
        mes.setAttribute('class', 'mes');
        const fecha = new Date();
        let mesActual = fecha.getMonth()+1;
        mes.innerHTML=obtenerMes(mesActual);
        let año = document.createElement('P');
        año.setAttribute('class', 'año year');
        let añoActual = fecha.getFullYear();
        año.innerHTML=añoActual;
        contenedorCalendario.appendChild(año);
        contenedorCalendario.appendChild(mes);
        let calendario = document.createElement('DIV');
        calendario.setAttribute('class', 'calendario');
        for(let i=0, dia; i<diasEnUnMes(mesActual, añoActual); i++){
            dia=document.createElement('DIV');
            dia.setAttribute('class', 'dias d'+(i+1));
            dia.setAttribute('onclick', 'marcar("d'+(i+1)+'")');
            dia.innerHTML=i+1;
            calendario.appendChild(dia);
        }
        contenedorCalendario.appendChild(calendario);
        let boton = document.createElement('BUTTON');
        boton.setAttribute('class', 'solicitar');
        boton.setAttribute('onclick', 'armarSolicitud()');
        boton.innerHTML='Solicitar';
        contenedorCalendario.appendChild(boton);
        nuevoCuerpo.appendChild(contenedorCalendario);
        contenedor.appendChild(nuevoCuerpo);
        if(boss==1){
            let contenedorJefe = document.createElement('DIV');
            contenedorJefe.setAttribute('class', 'contenedorJefe');
            let et = document.createElement('P');
            et.innerHTML='Solicitudes de vacaciones pendientes:';
            contenedorJefe.appendChild(et);
            axios.post("cargarSolicitudes.php", {"area":areaIco, "id":id}).then(respuesta=>{
                let solicitud;
                let nombre;
                let foto;
                let Svacaciones;
                let aprobar;
                let denegar;
                if(respuesta.data.length!=0){
                    for (const r in respuesta.data) {
                        solicitud=document.createElement('DIV');
                        solicitud.setAttribute('class', 'solicitud sol'+(r+1));
                        foto=document.createElement('IMG');
                        foto.setAttribute('class', 'fotoSolicitud elementoSolicitud');
                        foto.setAttribute('src', 'img/fotos/'+respuesta.data[r]["foto"]);
                        solicitud.appendChild(foto);
                        nombre=document.createElement('P');
                        nombre.innerHTML=respuesta.data[r]["nombre"];
                        nombre.setAttribute('class', 'elementoSolicitud')
                        solicitud.appendChild(nombre);
                        Svacaciones=document.createElement('P');
                        Svacaciones.innerHTML=respuesta.data[r]["vacaciones"].slice(11, respuesta.data[r]["vacaciones"].length);
                        Svacaciones.setAttribute('class', 'elementoSolicitud');
                        solicitud.appendChild(Svacaciones);
                        if(respuesta.data[r]["comentario"]!='' && respuesta.data[r]["comentario"]!='undefined'){
                            comentario=document.createElement('BUTTON');
                            comentario.setAttribute('class', 'bAD elementoSolicitud');
                            comentario.setAttribute('onclick', 'comentarioSolicitud("'+respuesta.data[r]["comentario"]+'")');
                            comentario.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0msg{fill:#BCE1E6;}	.st1msg{fill:#E30613;}	.st2msg{fill:none;stroke:#000000;stroke-width:5;stroke-miterlimit:10;}</style><path class="st0msg" d="M408.64,400.41H88.31c-17.01,0-30.93-13.92-30.93-30.93V133.88c0-17.01,13.92-30.93,30.93-30.93h320.34  c17.01,0,30.93,13.92,30.93,30.93v235.59C439.58,386.49,425.66,400.41,408.64,400.41z"/><polyline class="st0msg" points="315.85,400.41 439.58,484.31 439.58,378.37 "/><circle class="st1msg" cx="430.25" cy="86.85" r="61.23"/><path class="st2msg" d="M94.66,164.44c0,0,11.04-14.51,18.55,0c7.51,14.51,19.96,0,19.96,0s8.69-16.32,18.78,0s16.44-0.4,16.44-0.4"/><path class="st2msg" d="M168.39,164.44c0,0,11.04-14.51,18.55,0c7.51,14.51,19.96,0,19.96,0s8.69-16.32,18.78,0s16.44-0.4,16.44-0.4"/><path class="st2msg" d="M242.12,164.44c0,0,11.04-14.51,18.55,0c7.51,14.51,19.96,0,19.96,0s8.69-16.32,18.78,0s16.44-0.4,16.44-0.4"/><path class="st2msg" d="M94.66,216.51c0,0,11.04-14.51,18.55,0c7.51,14.51,19.96,0,19.96,0s8.69-16.32,18.78,0s16.44-0.4,16.44-0.4"/><path class="st2msg" d="M168.39,216.51c0,0,11.04-14.51,18.55,0c7.51,14.51,19.96,0,19.96,0s8.69-16.32,18.78,0s16.44-0.4,16.44-0.4"/><path class="st2msg" d="M242.12,216.51c0,0,11.04-14.51,18.55,0c7.51,14.51,19.96,0,19.96,0s8.69-16.32,18.78,0s16.44-0.4,16.44-0.4"/><path class="st2msg" d="M94.66,272.44c0,0,11.04-14.51,18.55,0s19.96,0,19.96,0s8.69-16.32,18.78,0s16.44-0.4,16.44-0.4"/><path class="st2msg" d="M168.39,272.44c0,0,11.04-14.51,18.55,0s19.96,0,19.96,0s8.69-16.32,18.78,0s16.44-0.4,16.44-0.4"/><path class="st2msg" d="M242.12,272.44c0,0,11.04-14.51,18.55,0s19.96,0,19.96,0s8.69-16.32,18.78,0s16.44-0.4,16.44-0.4"/></svg>';
                            comentario.title='Comentario de '+respuesta.data[r]["nombre"]+': '+respuesta.data[r]["comentario"];
                            solicitud.appendChild(comentario);
                        }
                        aprobar=document.createElement('BUTTON');
                        aprobar.setAttribute('class', 'bAD elementoSolicitud');
                        aprobar.setAttribute('onclick', 'aprobarSolicitud('+respuesta.data[r]["id"]+', "'+respuesta.data[r]["fecha"]+'", "sol'+(r+1)+'")');
                        aprobar.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0d{fill:#0A9F39;}</style><polygon class="st0d" points="32.57,300.45 235.82,488.25 484.6,20.77 459.4,28.09 456.96,4.51 434.2,15.08 433.38,0 226.88,377.68   89.48,250 100.86,288.25 49.64,244.13 82.98,298.01 32.57,258.17 69.97,311.83 15.5,285 "/></svg>';
                        solicitud.appendChild(aprobar);
                        denegar=document.createElement('BUTTON');
                        denegar.setAttribute('class', 'bAD elementoSolicitud');
                        denegar.setAttribute('onclick', 'denegarSolicitud('+respuesta.data[r]["id"]+', "'+respuesta.data[r]["fecha"]+'", "sol'+(r+1)+'")');
                        denegar.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0c{fill:#FF0000;}</style><polygon class="st0c" points="381.5,63.5 439.5,13.5 393.5,61.5 466.5,13.5 411.5,60.5 479.5,20.5 431.5,62.5 476.5,35.5 412.5,95.5   479.5,52.5 86.5,443.5 118.5,393.5 73.5,438.5 95.5,405.5 71.5,432.5 98.5,389.5 72.5,417.5 90.5,378.5 54.5,432.5 66.5,399.5   32.5,430.5 "/><path class="st0c" d="M37,74L18,34c0,0,31,47,31,44S28,40,28,40l31,33L18,14l41,42L38,23l60,50L50,9l429,434l-53-34l31,28l-37-25  l59,58l-66-52l37,34l-46-29l40,47L37,74z"/></svg>';
                        solicitud.appendChild(denegar);
                        contenedorJefe.appendChild(solicitud);
                    }
                }
            });
            nuevoCuerpo.appendChild(contenedorJefe);
        }
        if(boss==2){
            let contenedorSuperJefe = document.createElement('DIV');
            contenedorSuperJefe.setAttribute('class', 'contenedorJefe');
            let et = document.createElement('P');
            et.innerHTML='Solicitudes de vacaciones pendientes:';
            contenedorSuperJefe.appendChild(et);
            axios.post("cargarSolicitudesJefes.php", {"jefe":1}).then(respuesta=>{
                let solicitud;
                let nombre;
                let foto;
                let Svacaciones;
                let aprobar;
                let denegar;
                if(respuesta.data.length!=0){
                    for (const r in respuesta.data) {
                        solicitud=document.createElement('DIV');
                        solicitud.setAttribute('class', 'solicitud sol'+(r+1));
                        foto=document.createElement('IMG');
                        foto.setAttribute('class', 'fotoSolicitud elementoSolicitud');
                        foto.setAttribute('src', 'img/fotos/'+respuesta.data[r]["foto"]);
                        solicitud.appendChild(foto);
                        nombre=document.createElement('P');
                        nombre.innerHTML=respuesta.data[r]["nombre"];
                        nombre.setAttribute('class', 'elementoSolicitud')
                        solicitud.appendChild(nombre);
                        Svacaciones=document.createElement('P');
                        Svacaciones.innerHTML=respuesta.data[r]["vacaciones"].slice(11, respuesta.data[r]["vacaciones"].length);
                        Svacaciones.setAttribute('class', 'elementoSolicitud');
                        solicitud.appendChild(Svacaciones);
                        if(respuesta.data[r]["comentario"]!='' && respuesta.data[r]["comentario"]!='undefined'){
                            comentario=document.createElement('BUTTON');
                            comentario.setAttribute('class', 'bAD elementoSolicitud');
                            comentario.setAttribute('onclick', 'comentarioSolicitud("'+respuesta.data[r]["comentario"]+'")');
                            comentario.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0msg{fill:#BCE1E6;}	.st1msg{fill:#E30613;}	.st2msg{fill:none;stroke:#000000;stroke-width:5;stroke-miterlimit:10;}</style><path class="st0msg" d="M408.64,400.41H88.31c-17.01,0-30.93-13.92-30.93-30.93V133.88c0-17.01,13.92-30.93,30.93-30.93h320.34  c17.01,0,30.93,13.92,30.93,30.93v235.59C439.58,386.49,425.66,400.41,408.64,400.41z"/><polyline class="st0msg" points="315.85,400.41 439.58,484.31 439.58,378.37 "/><circle class="st1msg" cx="430.25" cy="86.85" r="61.23"/><path class="st2msg" d="M94.66,164.44c0,0,11.04-14.51,18.55,0c7.51,14.51,19.96,0,19.96,0s8.69-16.32,18.78,0s16.44-0.4,16.44-0.4"/><path class="st2msg" d="M168.39,164.44c0,0,11.04-14.51,18.55,0c7.51,14.51,19.96,0,19.96,0s8.69-16.32,18.78,0s16.44-0.4,16.44-0.4"/><path class="st2msg" d="M242.12,164.44c0,0,11.04-14.51,18.55,0c7.51,14.51,19.96,0,19.96,0s8.69-16.32,18.78,0s16.44-0.4,16.44-0.4"/><path class="st2msg" d="M94.66,216.51c0,0,11.04-14.51,18.55,0c7.51,14.51,19.96,0,19.96,0s8.69-16.32,18.78,0s16.44-0.4,16.44-0.4"/><path class="st2msg" d="M168.39,216.51c0,0,11.04-14.51,18.55,0c7.51,14.51,19.96,0,19.96,0s8.69-16.32,18.78,0s16.44-0.4,16.44-0.4"/><path class="st2msg" d="M242.12,216.51c0,0,11.04-14.51,18.55,0c7.51,14.51,19.96,0,19.96,0s8.69-16.32,18.78,0s16.44-0.4,16.44-0.4"/><path class="st2msg" d="M94.66,272.44c0,0,11.04-14.51,18.55,0s19.96,0,19.96,0s8.69-16.32,18.78,0s16.44-0.4,16.44-0.4"/><path class="st2msg" d="M168.39,272.44c0,0,11.04-14.51,18.55,0s19.96,0,19.96,0s8.69-16.32,18.78,0s16.44-0.4,16.44-0.4"/><path class="st2msg" d="M242.12,272.44c0,0,11.04-14.51,18.55,0s19.96,0,19.96,0s8.69-16.32,18.78,0s16.44-0.4,16.44-0.4"/></svg>';
                            comentario.title='Comentario de '+respuesta.data[r]["nombre"]+': '+respuesta.data[r]["comentario"];
                            solicitud.appendChild(comentario);
                        }
                        aprobar=document.createElement('BUTTON');
                        aprobar.setAttribute('class', 'bAD elementoSolicitud');
                        aprobar.setAttribute('onclick', 'aprobarSolicitud('+respuesta.data[r]["id"]+', "'+respuesta.data[r]["fecha"]+'", "sol'+(r+1)+'")');
                        aprobar.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0d{fill:#0A9F39;}</style><polygon class="st0d" points="32.57,300.45 235.82,488.25 484.6,20.77 459.4,28.09 456.96,4.51 434.2,15.08 433.38,0 226.88,377.68   89.48,250 100.86,288.25 49.64,244.13 82.98,298.01 32.57,258.17 69.97,311.83 15.5,285 "/></svg>';
                        solicitud.appendChild(aprobar);
                        denegar=document.createElement('BUTTON');
                        denegar.setAttribute('class', 'bAD elementoSolicitud');
                        denegar.setAttribute('onclick', 'denegarSolicitud('+respuesta.data[r]["id"]+', "'+respuesta.data[r]["fecha"]+'", "sol'+(r+1)+'")');
                        denegar.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0c{fill:#FF0000;}</style><polygon class="st0c" points="381.5,63.5 439.5,13.5 393.5,61.5 466.5,13.5 411.5,60.5 479.5,20.5 431.5,62.5 476.5,35.5 412.5,95.5   479.5,52.5 86.5,443.5 118.5,393.5 73.5,438.5 95.5,405.5 71.5,432.5 98.5,389.5 72.5,417.5 90.5,378.5 54.5,432.5 66.5,399.5   32.5,430.5 "/><path class="st0c" d="M37,74L18,34c0,0,31,47,31,44S28,40,28,40l31,33L18,14l41,42L38,23l60,50L50,9l429,434l-53-34l31,28l-37-25  l59,58l-66-52l37,34l-46-29l40,47L37,74z"/></svg>';
                        solicitud.appendChild(denegar);
                        contenedorSuperJefe.appendChild(solicitud);
                    }
                }
            });
            let contenedorVacacionesAprobadas = document.createElement('DIV');
            contenedorVacacionesAprobadas.setAttribute('class', 'contenedorRegistroA');
            et = document.createElement('P');
            et.innerHTML='Solicitudes de vacaciones aprobadas:';
            contenedorVacacionesAprobadas.appendChild(et);
            axios("solicitudesAprobadas.php").then(respuesta=>{
                let solicitud;
                let nombre;
                let foto;
                let Svacaciones;
                if(respuesta.data.length!=0){
                    for (const r in respuesta.data) {
                        solicitud=document.createElement('DIV');
                        solicitud.setAttribute('class', 'solicitud a'+(r+1));
                        foto=document.createElement('IMG');
                        foto.setAttribute('class', 'fotoSolicitud elementoSolicitud');
                        foto.setAttribute('src', 'img/fotos/'+respuesta.data[r]["foto"]);
                        solicitud.appendChild(foto);
                        nombre=document.createElement('P');
                        nombre.innerHTML=respuesta.data[r]["nombre"];
                        nombre.setAttribute('class', 'elementoSolicitud')
                        solicitud.appendChild(nombre);
                        Svacaciones=document.createElement('P');
                        Svacaciones.innerHTML=respuesta.data[r]["vacaciones"].slice(11, respuesta.data[r]["vacaciones"].length);
                        Svacaciones.setAttribute('class', 'elementoSolicitud');
                        solicitud.appendChild(Svacaciones);
                        contenedorVacacionesAprobadas.appendChild(solicitud);
                    }
                }
            });
            nuevoCuerpo.appendChild(contenedorSuperJefe);
            nuevoCuerpo.appendChild(contenedorVacacionesAprobadas);
        }

        cargarVacaciones(true);
        
        

    },1000);
    
    
}

function comentarioSolicitud(comentario){
    let contenedor = document.querySelector('.contenedorJefe');
    let fondo = document.createElement('DIV');
    fondo.setAttribute('class', 'fondoT');
    fondo.style.position='absolute';
    fondo.style.minHeight='110%';
    fondo.style.width='100%';
    fondo.style.borderRadius='20px';
    fondo.style.backgroundColor='rgba(0, 0, 0, .5)';
    fondo.style.zIndex='4';
    fondo.style.display='flex';
    fondo.style.justifyContent='center';
    fondo.style.alignItems='center';
    fondo.style.top='-50px';
    contenedor.appendChild(fondo);
    let contenedorMsg = document.createElement('DIV');
    contenedorMsg.style.width='70%';
    contenedorMsg.style.height='300px';
    contenedorMsg.style.background='linear-gradient(45deg, #26986B, #38bb94, #ACC0B1)';
    contenedorMsg.style.borderRadius='20px';
    contenedorMsg.style.display='flex';
    contenedorMsg.style.alignItems='center';
    contenedorMsg.style.textAlign='center';
    contenedorMsg.style.justifyContent='center';
    let msg = document.createElement('P');
    msg.innerHTML=comentario;
    msg.style.color='#ffffff';
    contenedorMsg.appendChild(msg);
    fondo.appendChild(contenedorMsg);
    let cerrar = document.createElement('BUTTON');
    cerrar.setAttribute('class', 'cerrarFondo');
    cerrar.setAttribute('onclick', 'cerrarFondo()');
    cerrar.style.marginTop='80px';
    if(screen.width < 600){
        cerrar.style.top='50px';
    }
    cerrar.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0c{fill:#FFFFFF;}</style><polygon class="st0c" points="381.5,63.5 439.5,13.5 393.5,61.5 466.5,13.5 411.5,60.5 479.5,20.5 431.5,62.5 476.5,35.5 412.5,95.5   479.5,52.5 86.5,443.5 118.5,393.5 73.5,438.5 95.5,405.5 71.5,432.5 98.5,389.5 72.5,417.5 90.5,378.5 54.5,432.5 66.5,399.5   32.5,430.5 "/><path class="st0c" d="M37,74L18,34c0,0,31,47,31,44S28,40,28,40l31,33L18,14l41,42L38,23l60,50L50,9l429,434l-53-34l31,28l-37-25  l59,58l-66-52l37,34l-46-29l40,47L37,74z"/></svg>';
    fondo.appendChild(cerrar);
}

function modificar(){
    let cuerpo = document.querySelector('.cuerpo');
    let bv = document.querySelector('.modificar');
    let header = document.querySelector('.contenedorHeader');
    cuerpo.style.animationDuration='1s';
    cuerpo.style.animationName='desvanecer';
    if(document.querySelector('.inicio')){
        let botonInicio = document.querySelector('.inicio');
        if(botonInicio.classList[1]=='i1'){
            botonInicio.remove();
            bn = document.createElement('BUTTON');
            bn.setAttribute('class', 'vacaciones botones');
            bn.setAttribute('onclick', 'vacaciones()');
            if(screen.width < 600){
                bn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Airplane</title><path d="M407.72 224c-3.4 0-14.79.1-18 .3l-64.9 1.7a1.83 1.83 0 01-1.69-.9L193.55 67.56a9 9 0 00-6.66-3.56H160l73 161a2.35 2.35 0 01-2.26 3.35l-121.69 1.8a8.06 8.06 0 01-6.6-3.1l-37-45c-3-3.9-8.62-6-13.51-6H33.08c-1.29 0-1.1 1.21-.75 2.43l19.84 71.42a16.3 16.3 0 010 11.9L32.31 333c-.59 1.95-.52 3 1.77 3H52c8.14 0 9.25-1.06 13.41-6.3l37.7-45.7a8.19 8.19 0 016.6-3.1l120.68 2.7a2.7 2.7 0 012.43 3.74L160 448h26.64a9 9 0 006.65-3.55L323.14 287c.39-.6 2-.9 2.69-.9l63.9 1.7c3.3.2 14.59.3 18 .3C452 288.1 480 275.93 480 256s-27.88-32-72.28-32z" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>';
            }else{
                bn.innerHTML='Vacaciones';
            }
            header.appendChild(bn);
        }else if(botonInicio.classList[1]=='i3'){
            botonInicio.remove();
            bn = document.createElement('BUTTON');
            bn.setAttribute('class', 'sancionar botones');
            bn.setAttribute('onclick', 'sancionar()');
            if(screen.width < 600){
                    bn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Gift</title><path d="M256 104v56h56a56 56 0 10-56-56zM256 104v56h-56a56 56 0 1156-56z" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><rect x="64" y="160" width="384" height="112" rx="32" ry="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M416 272v144a48 48 0 01-48 48H144a48 48 0 01-48-48V272M256 160v304" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>';
                }else{
                    bn.innerHTML='Sanciones/bonos';
                }
            header.appendChild(bn);
        }
    }
    bv.remove();
    let boton = document.createElement('BUTTON');
    boton.setAttribute('class', 'inicio i2 botones');
    boton.setAttribute('onclick', 'inicio()');
    if(screen.width < 600){
            boton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Home</title><path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>';
        }else{
            boton.innerHTML='Inicio';
        }
    header.appendChild(boton);
    Acargada=false;
    Pcargada=false;
    Dcargada=false;

    setTimeout(function(){
        cuerpo.remove();
        let contenedor = document.querySelector('.contenedor');
        let nuevoCuerpo = document.createElement('DIV');
        nuevoCuerpo.setAttribute('class', 'cuerpo flexible');
        contenedor.appendChild(nuevoCuerpo);
        let tabla = document.createElement('DIV');
        tabla.setAttribute('class', 'tabla');
        nuevoCuerpo.appendChild(tabla);
        let titulo = document.createElement('P');
        titulo.innerHTML='Editar Usuarios';
        titulo.style.textAlign='center';
        titulo.style.fontSize='calc(.95em + .95vw)';
        titulo.style.letterSpacing='5px';
        tabla.appendChild(titulo);
        axios("cargarUsuarios.php").then(respuesta=>{
            let nombre;
            let foto;
            let area;
            let apellidop;
            let apellidom;
            let top;
            let cnombre;
            let cbotones;
            let carea;
            if(respuesta.data.length!=0){
                for (const r in respuesta.data) {
                    usuario=document.createElement('DIV');
                    usuario.setAttribute('class', 'usuario u'+respuesta.data[r]["id"]);
                    top = document.createElement('DIV');
                    top.setAttribute('class', 'top t'+respuesta.data[r]["id"]);
                    foto=document.createElement('IMG');
                    foto.setAttribute('class', 'fotoSolicitud elementoSolicitud');
                    foto.setAttribute('src', 'img/fotos/'+respuesta.data[r]["foto"]);
                    cnombre = document.createElement('DIV');
                    cnombre.setAttribute('class', 'semicontenedor sc1');
                    cbotones = document.createElement('DIV');
                    cbotones.setAttribute('class', 'semicontenedor sc3');
                    carea = document.createElement('DIV');
                    carea.setAttribute('class', 'semicontenedor sc2');
                    cnombre.appendChild(foto);
                    nombre=document.createElement('P');
                    nombre.innerHTML=respuesta.data[r]["nombre"];
                    nombre.setAttribute('class', 'elementoSolicitud')
                    cnombre.appendChild(nombre);
                    apellidop=document.createElement('P');
                    apellidop.innerHTML=respuesta.data[r]["apellidop"];
                    apellidop.setAttribute('class', 'elementoSolicitud');
                    cnombre.appendChild(apellidop);
                    apellidom=document.createElement('P');
                    apellidom.innerHTML=respuesta.data[r]["apellidom"];
                    apellidom.setAttribute('class', 'elementoSolicitud');
                    cnombre.appendChild(apellidom);
                    area=document.createElement('P');
                    area.innerHTML=respuesta.data[r]["area"];
                    area.setAttribute('class', 'elementoSolicitud');
                    top.appendChild(cnombre);
                    carea.appendChild(area);
                    top.appendChild(carea);
                    aprobar=document.createElement('BUTTON');
                    aprobar.setAttribute('class', 'bED elementoSolicitud bED'+respuesta.data[r]["id"]);
                    aprobar.setAttribute('onclick', 'editarUsuario('+respuesta.data[r]["id"]+')');
                    aprobar.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 500 500" class="lapiz" style="enable-background:new 0 0 500 500; transform: scale(.7);" xml:space="preserve">    <style type="text/css">        .st0l{fill:#FCC574;stroke:#000000;stroke-miterlimit:10;}        .st1l{fill:none;stroke:#000000;stroke-miterlimit:10;}        .st2l{fill:#C6C6C6;stroke:#000000;stroke-miterlimit:10;}        .st3l{fill:#F5B2C1;stroke:#000000;stroke-miterlimit:10;}        .st4l{fill:#F39200;stroke:#000000;stroke-miterlimit:10;}    </style>    <g id="Capa_2">        <path d="M71.78,480.92l10.1-22.06c0,0,13.85-8.61,10.68,8.37L71.78,480.92z"/>        <path class="st0l" d="M92.57,467.22c0,0,4.36-16.92-10.68-8.37l19.89-43.44l20.85-6.53l-1.97,20.82l14.68-11.5l-2.74,21.12v1.52   L92.57,467.22z"/>        <path class="st1l" d="M81.88,458.85c0,0,14.09-8.61,10.68,8.37"/>    </g>    <g id="Capa_1">                    <rect x="417.54" y="42.78" transform="matrix(0.7715 0.6363 -0.6363 0.7715 138.317 -267.318)" class="st2l" width="47.46" height="32.2"/>                    <rect x="442.44" y="25.04" transform="matrix(0.7715 0.6363 -0.6363 0.7715 128.5798 -283.6999)" class="st3l" width="33.54" height="24.19"/>        <polygon class="st4l" points="132.6,440.84 135.34,418.2 120.55,430.89 122.63,408.88 101.77,415.41 415.61,58.59 446.44,84.02  "/>        <polyline class="st1l" points="101.77,415.41 71.78,480.92 132.6,440.84  "/>        <path class="st1l" d="M81.88,458.85c0,0,13.68-8.72,10.68,8.37"/>    </g>    </svg>Editar';
                    cbotones.appendChild(aprobar);
                    denegar=document.createElement('BUTTON');
                    denegar.setAttribute('class', 'bEL elementoSolicitud bEL'+respuesta.data[r]["id"]);
                    denegar.setAttribute('onclick', 'eliminarUsuario('+respuesta.data[r]["id"]+')');
                    denegar.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill:#ff0000; transform:scale(.6);" xml:space="preserve"><style type="text/css">	.st0c{fill:#FF0000;}</style><polygon class="st0c" points="381.5,63.5 439.5,13.5 393.5,61.5 466.5,13.5 411.5,60.5 479.5,20.5 431.5,62.5 476.5,35.5 412.5,95.5   479.5,52.5 86.5,443.5 118.5,393.5 73.5,438.5 95.5,405.5 71.5,432.5 98.5,389.5 72.5,417.5 90.5,378.5 54.5,432.5 66.5,399.5   32.5,430.5 "/><path class="st0c" d="M37,74L18,34c0,0,31,47,31,44S28,40,28,40l31,33L18,14l41,42L38,23l60,50L50,9l429,434l-53-34l31,28l-37-25  l59,58l-66-52l37,34l-46-29l40,47L37,74z"/></svg>Eliminar';
                    cbotones.appendChild(denegar);
                    top.appendChild(cbotones);
                    usuario.appendChild(top);
                    tabla.appendChild(usuario);
                }
            }
        });
        let add = document.createElement('BUTON');
        add.setAttribute('onclick', 'nuevoUsuario()');
        add.setAttribute('class', 'add');
        add.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill: #ffffff; transform: scale(.7);" xml:space="preserve"><rect x="190.5" y="20.5" width="117" height="461"/><rect x="191" y="10" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 490 -9)" width="117" height="461"/></svg>';
        contenedor.appendChild(add);


    },1000);
}

function sancionar(){
    let cuerpo = document.querySelector('.cuerpo');
    let bv = document.querySelector('.sancionar');
    let header = document.querySelector('.contenedorHeader');
    cuerpo.style.animationDuration='1s';
    cuerpo.style.animationName='desvanecer';
    if(document.querySelector('.inicio')){
        let botonInicio = document.querySelector('.inicio');
        if(botonInicio.classList[1]=='i1'){
            botonInicio.remove();
            bn = document.createElement('BUTTON');
            bn.setAttribute('class', 'vacaciones botones');
            bn.setAttribute('onclick', 'vacaciones()');
            if(screen.width < 600){
                bn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Airplane</title><path d="M407.72 224c-3.4 0-14.79.1-18 .3l-64.9 1.7a1.83 1.83 0 01-1.69-.9L193.55 67.56a9 9 0 00-6.66-3.56H160l73 161a2.35 2.35 0 01-2.26 3.35l-121.69 1.8a8.06 8.06 0 01-6.6-3.1l-37-45c-3-3.9-8.62-6-13.51-6H33.08c-1.29 0-1.1 1.21-.75 2.43l19.84 71.42a16.3 16.3 0 010 11.9L32.31 333c-.59 1.95-.52 3 1.77 3H52c8.14 0 9.25-1.06 13.41-6.3l37.7-45.7a8.19 8.19 0 016.6-3.1l120.68 2.7a2.7 2.7 0 012.43 3.74L160 448h26.64a9 9 0 006.65-3.55L323.14 287c.39-.6 2-.9 2.69-.9l63.9 1.7c3.3.2 14.59.3 18 .3C452 288.1 480 275.93 480 256s-27.88-32-72.28-32z" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>';
            }else{
                bn.innerHTML='Vacaciones';
            }
            header.appendChild(bn);
        }else if(botonInicio.classList[1]=='i2'){
            botonInicio.remove();
            bn = document.createElement('BUTTON');
            bn.setAttribute('class', 'modificar botones');
            bn.setAttribute('onclick', 'modificar()');
            if(screen.width < 600){
                    bn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>People</title><path d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>';
                }else{
                    bn.innerHTML='Modificar Datos';
                }
            header.appendChild(bn);
            let add = document.querySelector('.add');
            add.remove();
        }
    }
    bv.remove();
    let boton = document.createElement('BUTTON');
    boton.setAttribute('class', 'inicio i3 botones');
    boton.setAttribute('onclick', 'inicio()');
    if(screen.width < 600){
            boton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Home</title><path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>';
        }else{
            boton.innerHTML='Inicio';
        }
    header.appendChild(boton);
    Acargada=false;
    Pcargada=false;
    Dcargada=false;

    setTimeout(function(){
        cuerpo.remove();
        let contenedor = document.querySelector('.contenedor');
        let nuevoCuerpo = document.createElement('DIV');
        nuevoCuerpo.setAttribute('class', 'cuerpo flexible');
        contenedor.appendChild(nuevoCuerpo);
        let tabla = document.createElement('DIV');
        tabla.setAttribute('class', 'tabla');
        tabla.style.order='2';
        tabla.style.marginBottom='100px';
        let separador = document.createElement('HR');
        separador.style.borderColor='#39c097';
        tabla.appendChild(separador);
        let etTabla1 = document.createElement('P');
        etTabla1.innerHTML='Colaboradores:';
        etTabla1.style.textAlign='center';
        etTabla1.style.letterSpacing='5px';
        tabla.appendChild(etTabla1);
        
        cargarInsentivos();
        cargarSanciones();
        nuevoCuerpo.appendChild(tabla);
        let div = document.createElement('DIV');
        div.style.order='5';
        div.style.height= '1px';
        div.style.width= '100%';
        nuevoCuerpo.appendChild(div);

        axios("cargarUsuarios.php").then(respuesta=>{
            let nombre;
            let foto;
            let area;
            let apellidop;
            let apellidom;
            let top;
            let cnombre;
            let cbotones;
            let carea;
            if(respuesta.data.length!=0){
                for (const r in respuesta.data) {
                    usuario=document.createElement('DIV');
                    usuario.setAttribute('class', 'usuario u'+respuesta.data[r]["id"]);
                    top = document.createElement('DIV');
                    top.setAttribute('class', 'top t'+respuesta.data[r]["id"]);
                    foto=document.createElement('IMG');
                    foto.setAttribute('class', 'fotoSolicitud elementoSolicitud');
                    foto.setAttribute('src', 'img/fotos/'+respuesta.data[r]["foto"]);
                    cnombre = document.createElement('DIV');
                    cnombre.setAttribute('class', 'semicontenedor sc1');
                    cbotones = document.createElement('DIV');
                    cbotones.setAttribute('class', 'semicontenedor sc3');
                    carea = document.createElement('DIV');
                    carea.setAttribute('class', 'semicontenedor sc2');
                    cnombre.appendChild(foto);
                    nombre=document.createElement('P');
                    nombre.innerHTML=respuesta.data[r]["nombre"];
                    nombre.setAttribute('class', 'elementoSolicitud')
                    cnombre.appendChild(nombre);
                    apellidop=document.createElement('P');
                    apellidop.innerHTML=respuesta.data[r]["apellidop"];
                    apellidop.setAttribute('class', 'elementoSolicitud');
                    cnombre.appendChild(apellidop);
                    apellidom=document.createElement('P');
                    apellidom.innerHTML=respuesta.data[r]["apellidom"];
                    apellidom.setAttribute('class', 'elementoSolicitud');
                    cnombre.appendChild(apellidom);
                    area=document.createElement('P');
                    area.innerHTML=respuesta.data[r]["area"];
                    area.setAttribute('class', 'elementoSolicitud');
                    top.appendChild(cnombre);
                    carea.appendChild(area);
                    top.appendChild(carea);
                    aprobar=document.createElement('BUTTON');
                    aprobar.setAttribute('class', 'bI elementoSolicitud bI'+respuesta.data[r]["id"]);
                    aprobar.setAttribute('onclick', 'incentivo('+respuesta.data[r]["id"]+')');
                    aprobar.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0bI{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}	.st1bI{fill:rgb(62, 231, 84);stroke:#ffffff;stroke-miterlimit:10;}</style><polyline class="st0bI" points="48.02,208.58 48.02,472.8 453.71,472.8 453.71,208.58 "/><polyline class="st1bI" points="287.04,126.46 287.04,472.8 204.93,472.8 204.93,126.46 287.04,126.46 204.93,126.46 204.93,472.8   204.93,126.46 "/><path class="st0bI" d="M196.8,126.46c0,0-127.64-4.88-129.27-56.1c-1.63-51.22,137.4-58.54,137.4-58.54s38.93-3.25,45.07,43.9  c0,0,63.87-67.58,152.49-43.95s-32.52,114.68-32.52,114.68"/><path class="st1bI" d="M204.93,105.33c0,0-89.43-9.12-88.62-38.71c0.81-29.58,88.62-11.7,88.62-11.7S247.2,84.19,204.93,105.33z"/><path class="st1bI" d="M266.72,77.44c0,0,81.3-53.94,124.39-41.22s-47.97,69.11-47.97,69.11S235.82,125.98,266.72,77.44z"/><rect x="30.13" y="126.46" class="st0bI" width="443.9" height="82.11"/><rect x="48.02" y="293.13" class="st1bI" width="405.69" height="66.67"/></svg>Incentivo';
                    cbotones.appendChild(aprobar);
                    denegar=document.createElement('BUTTON');
                    denegar.setAttribute('class', 'bS elementoSolicitud bS'+respuesta.data[r]["id"]);
                    denegar.setAttribute('onclick', 'sancion('+respuesta.data[r]["id"]+')');
                    denegar.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0Sancion{fill:#ffffff;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0Sancion" d="M34.32,445.53c0,0-17.79,0-24.2-22.07L149.6,287.59l21.35,18.62L34.32,445.53z"/><polyline class="st0Sancion" points="153.02,290.57 243.54,202.07 256.34,213.1 166.82,302.61 "/><path class="st0Sancion" d="M187.51,153.1l124.25,108.97c0,0-6.31,4.83-11.29,20s16.37,16.55,16.37,16.55s92.83-28.75,98.92-96.56  c1.42-15.86-21.35-13.1-21.35-13.1l-116-103.45c0,0,7.83-6.21,8.54-18.62c0.71-12.41-30.6-12.41-30.6-12.41  s-63.33,11.72-93.93,79.31S187.51,153.1,187.51,153.1z"/><path class="st0Sancion" d="M469.15,381.75c-1.33-0.36-2.67-0.71-4.01-1.05c-82.92-20.99-180.63,1.05-180.63,1.05v13.82l-24.31,8.13v14.63  h228.46v-15.45l-20.33-7.9L469.15,381.75z"/></svg>Sanción';
                    cbotones.appendChild(denegar);
                    top.appendChild(cbotones);
                    usuario.appendChild(top);
                    tabla.appendChild(usuario);
                }
            }
        });

    },1000);
}

function inicio(){
    let cuerpo = document.querySelector('.cuerpo');
    let bv = document.querySelector('.inicio');
    let header = document.querySelector('.contenedorHeader');
    cuerpo.style.animationDuration='1s';
    cuerpo.style.animationName='desvanecer';
    if(bv.classList[1]=='i1'){
        bv.remove();
        bv = document.createElement('BUTTON');
        bv.setAttribute('class', 'vacaciones botones');
        bv.setAttribute('onclick', 'vacaciones()');
        if(screen.width < 600){
                bv.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Airplane</title><path d="M407.72 224c-3.4 0-14.79.1-18 .3l-64.9 1.7a1.83 1.83 0 01-1.69-.9L193.55 67.56a9 9 0 00-6.66-3.56H160l73 161a2.35 2.35 0 01-2.26 3.35l-121.69 1.8a8.06 8.06 0 01-6.6-3.1l-37-45c-3-3.9-8.62-6-13.51-6H33.08c-1.29 0-1.1 1.21-.75 2.43l19.84 71.42a16.3 16.3 0 010 11.9L32.31 333c-.59 1.95-.52 3 1.77 3H52c8.14 0 9.25-1.06 13.41-6.3l37.7-45.7a8.19 8.19 0 016.6-3.1l120.68 2.7a2.7 2.7 0 012.43 3.74L160 448h26.64a9 9 0 006.65-3.55L323.14 287c.39-.6 2-.9 2.69-.9l63.9 1.7c3.3.2 14.59.3 18 .3C452 288.1 480 275.93 480 256s-27.88-32-72.28-32z" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>';
            }else{
                bv.innerHTML='Vacaciones';
            }
    }else if(bv.classList[1]=='i2'){
        bv.remove();
        bv = document.createElement('BUTTON');
        bv.setAttribute('class', 'modificar botones');
        bv.setAttribute('onclick', 'modificar()');
        if(screen.width < 600){
                    bv.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>People</title><path d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>';
                }else{
                    bv.innerHTML='Modificar Datos';
                }
        let add = document.querySelector('.add');
        add.remove();
    }else{
        bv.remove();
        bv = document.createElement('BUTTON');
        bv.setAttribute('class', 'sancionar botones');
        bv.setAttribute('onclick', 'sancionar()');
        if(screen.width < 600){
                    bv.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Gift</title><path d="M256 104v56h56a56 56 0 10-56-56zM256 104v56h-56a56 56 0 1156-56z" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><rect x="64" y="160" width="384" height="112" rx="32" ry="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M416 272v144a48 48 0 01-48 48H144a48 48 0 01-48-48V272M256 160v304" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>';
                }else{
                    bv.innerHTML='Sanciones/bonos';
                }
    }
    
    
    header.appendChild(bv);
    Acargada=false;
    Pcargada=false;
    Dcargada=false;
    

    setTimeout(function(){
        cuerpo.remove();
        let contenedor = document.querySelector('.contenedor');
        let nuevoCuerpo = document.createElement('DIV');
        nuevoCuerpo.setAttribute('class', 'cuerpo');
        let bienvenida = document.createElement('P');
        bienvenida.setAttribute('class', 'bienvenida');
        bienvenida.innerHTML='Bienvenido';
        nuevoCuerpo.appendChild(bienvenida);
        let contenedorFoto = document.createElement('DIV');
        contenedorFoto.setAttribute('class', 'contenedorFoto');
        let foto = document.createElement('IMG');
        foto.setAttribute('class', 'foto');
        contenedorFoto.appendChild(foto);
        nuevoCuerpo.appendChild(contenedorFoto);
        let datos = document.createElement('DIV');
        datos.setAttribute('class', 'datos');
        let left = document.createElement('DIV');
        left.setAttribute('class', 'left');
        let dato=[];
        dato.push(document.createElement('P'));
        dato[0].setAttribute('class', 'area i');
        dato.push(document.createElement('P'));
        dato[1].setAttribute('class', 'nombre d');
        dato.push(document.createElement('P'));
        dato[2].setAttribute('class', 'edad i');
        dato.push(document.createElement('P'));
        dato[3].setAttribute('class', 'direccion d');
        dato.push(document.createElement('P'));
        dato[4].setAttribute('class', 'fechaIngreso i');
        for (const d in dato) {
            left.appendChild(dato[d]);
        }
        datos.appendChild(left);
        let right = document.createElement('DIV');
        right.setAttribute('class', 'right');
        let icono = document.createElement('P');
        icono.setAttribute('class', 'icono d');
        right.appendChild(icono);
        datos.appendChild(right);
        nuevoCuerpo.appendChild(datos);
        let contenedorTiempo = document.createElement('DIV');
        contenedorTiempo.setAttribute('class', 'tiempo');
        let etiqueta = document.createElement('P');
        etiqueta.setAttribute('class', 'et');
        etiqueta.innerHTML='Tiempo dentro de Inmega:';
        contenedorTiempo.appendChild(etiqueta);
        let tiempo = document.createElement('P');
        tiempo.setAttribute('class', 'time');
        contenedorTiempo.appendChild(tiempo);
        nuevoCuerpo.appendChild(contenedorTiempo);

        contenedor.appendChild(nuevoCuerpo);
        obtenerDatos(false);
    },1000);
}

function diasEnUnMes(mes, año) {
    const fecha = new Date();
	return new Date(año, mes, 0).getDate();
}

function obtenerMes(mes){
    
    if(typeof mes == 'string'){
        if(mes=='Enero'){
            return 1;
        }else if(mes=='Febrero'){
            return 2;
        }else if(mes=='Marzo'){
            return 3;
        }else if(mes=='Abril'){
            return 4;
        }else if(mes=='Mayo'){
            return 5;
        }else if(mes=='Junio'){
            return 6;
        }else if(mes=='Julio'){
            return 7;
        }else if(mes=='Agosto'){
            return 8;
        }else if(mes=='Septiembre'){
            return 9;
        }else if(mes=='Octubre'){
            return 10;
        }else if(mes=='Noviembre'){
            return 11;
        }else if(mes=='Diciembre'){
            return 12;
        }
    }else{
        if(mes==1){
            return 'Enero';
        }else if(mes==2){
            return 'Febrero';
        }else if(mes==3){
            return 'Marzo';
        }else if(mes==4){
            return 'Abril';
        }else if(mes==5){
            return 'Mayo';
        }else if(mes==6){
            return 'Junio';
        }else if(mes==7){
            return 'Julio';
        }else if(mes==8){
            return 'Agosto';
        }else if(mes==9){
            return 'Septiembre';
        }else if(mes==10){
            return 'Octubre';
        }else if(mes==11){
            return 'Noviembre';
        }else if(mes==12){
            return 'Diciembre';
        }
    }
    
}

function marcar(clase){
    fechaSeleccionada=true;
    let nDia = clase.slice(1);
    diaSeleccion.push(parseInt(nDia));
    mesSeleccion.push(obtenerMes(document.querySelector('.mes').innerHTML));
    añoSeleccion.push(document.querySelector('.año').innerHTML);
    let dia = document.querySelector('.'+clase);
    dia.style.backgroundColor='cadetblue';
    console.log(document.querySelector('.d1').style.backgroundColor);
    if(diaSeleccion.length==2){
        if(añoSeleccion[0]<añoSeleccion[1]){
            for(let i=1, dia; i<diaSeleccion[1]; i++){
                let dia = document.querySelector('.d'+i);
                dia.style.backgroundColor='cadetblue';
                if((i+1)==diaSeleccion[1]){
                    solicitud.push('Vacaciones del '+diaSeleccion[0]+' de '+obtenerMes(mesSeleccion[0])+' del '+añoSeleccion[0]+' al '+diaSeleccion[1]+' de '+obtenerMes(mesSeleccion[1])+' del '+añoSeleccion[1]);
                    solucitudDate.push(diaSeleccion[0]+'/'+mesSeleccion[0]+'/'+añoSeleccion[0]+'-',diaSeleccion[1]+'/'+mesSeleccion[1]+'/'+añoSeleccion[1]+',');
                }
            }
        }else if(añoSeleccion[0]>añoSeleccion[1]){
            for(let i=diaSeleccion[1], dia; i<=diasEnUnMes(mesSeleccion[1], añoSeleccion[1]); i++){
                let dia = document.querySelector('.d'+i);
                dia.style.backgroundColor='cadetblue';
                if((i+1)==diasEnUnMes(mesSeleccion[1], añoSeleccion[1])){
                    solicitud.push('vacaciones del '+diaSeleccion[1]+' de '+obtenerMes(mesSeleccion[1])+' del '+añoSeleccion[1]+' al '+diaSeleccion[0]+' de '+obtenerMes(mesSeleccion[0])+' del '+añoSeleccion[0]);
                    solucitudDate.push(diaSeleccion[1]+'/'+mesSeleccion[1]+'/'+añoSeleccion[1]+'-',diaSeleccion[0]+'/'+mesSeleccion[0]+'/'+añoSeleccion[0]+',');
                }
            }
        }else if(diaSeleccion[0]<diaSeleccion[1] && mesSeleccion[0]==mesSeleccion[1]){
            for(let i=diaSeleccion[0], dia; i<diaSeleccion[1]; i++){
                let dia = document.querySelector('.d'+i);
                dia.style.backgroundColor='cadetblue';
                if((i+1)==diaSeleccion[1]){
                    solicitud.push('vacaciones del '+diaSeleccion[0]+' de '+document.querySelector('.mes').innerHTML+' del '+añoSeleccion[0]+' al '+diaSeleccion[1]+' de '+document.querySelector('.mes').innerHTML+' del '+añoSeleccion[1]);
                    solucitudDate.push(diaSeleccion[0]+'/'+mesSeleccion[0]+'/'+añoSeleccion[0]+'-',diaSeleccion[1]+'/'+mesSeleccion[1]+'/'+añoSeleccion[1]+',');
                }
            }
        }else if(mesSeleccion[0]<mesSeleccion[1]){
            for(let i=1, dia; i<diaSeleccion[1]; i++){
                let dia = document.querySelector('.d'+i);
                dia.style.backgroundColor='cadetblue';
                if((i+1)==diaSeleccion[1]){
                    solicitud.push('vacaciones del '+diaSeleccion[0]+' de '+obtenerMes(mesSeleccion[0])+' del '+añoSeleccion[0]+' al '+diaSeleccion[1]+' de '+obtenerMes(mesSeleccion[1])+' del '+añoSeleccion[1]);
                    solucitudDate.push(diaSeleccion[0]+'/'+mesSeleccion[0]+'/'+añoSeleccion[0]+'-',diaSeleccion[1]+'/'+mesSeleccion[1]+'/'+añoSeleccion[1]+',');
                }
            }
        }else if(mesSeleccion[0]>mesSeleccion[1]){
            for(let i=diaSeleccion[1], dia; i<=diasEnUnMes(mesSeleccion[1]); i++){
                let dia = document.querySelector('.d'+i);
                dia.style.backgroundColor='cadetblue';
                if((i+1)==diasEnUnMes(mesSeleccion[1])){
                    solicitud.push('vacaciones del '+diaSeleccion[1]+' de '+obtenerMes(mesSeleccion[1])+' del '+añoSeleccion[1]+' al '+diaSeleccion[0]+' de '+obtenerMes(mesSeleccion[0])+' del '+añoSeleccion[0]);
                    solucitudDate.push(diaSeleccion[1]+'/'+mesSeleccion[1]+'/'+añoSeleccion[1]+'-',diaSeleccion[0]+'/'+mesSeleccion[0]+'/'+añoSeleccion[0]+',');
                }
            }
        }else{
            for(let i=diaSeleccion[1], dia; i<diaSeleccion[0]; i++){
                let dia = document.querySelector('.d'+i);
                dia.style.backgroundColor='cadetblue';
                if((i+1)==diaSeleccion[0]){
                    solicitud.push('vacaciones del '+diaSeleccion[1]+' de '+document.querySelector('.mes').innerHTML+' del '+añoSeleccion[1]+' al '+diaSeleccion[0]+' de '+document.querySelector('.mes').innerHTML+' del '+añoSeleccion[0]);
                    solucitudDate.push(diaSeleccion[1]+'/'+mesSeleccion[1]+'/'+añoSeleccion[1]+'-',diaSeleccion[0]+'/'+mesSeleccion[0]+'/'+añoSeleccion[0]+',');
                }
            }
        }
        diaSeleccion=[];
        mesSeleccion=[];
        añoSeleccion=[];
    }
}

function nextPrevius(opcion){
    let et = obtenerMes(document.querySelector('.mes').innerHTML);
    let año = document.querySelector('.año').innerHTML;
    let cambioAño=false;
    let etaño;
    if(opcion=='deslizarIzquierda'){
        et++;
    }else{
        et--;
    }
    if(et==13){
        et=1;
        año++;
        etaño = document.querySelector('.año');
        etaño.style.animationDuration='1s';
        etaño.style.animationName=opcion;
        cambioAño=true;
    }else if(et==0){
        et=12;
        año--;
        etaño = document.querySelector('.año');
        etaño.style.animationDuration='1s';
        etaño.style.animationName=opcion;
        cambioAño=true;
    }
    let nuevoMes = obtenerMes(et);
    let calendario = document.querySelector('.calendario');
    calendario.style.animationDuration='1s';
    calendario.style.animationName=opcion;
    let etmes = document.querySelector('.mes');
    etmes.style.animationDuration='1s';
    etmes.style.animationName=opcion;

    setTimeout(function(){
        calendario.remove();
        etmes.remove();
        let contenedor = document.querySelector('.contenedorCalendario');
        if(cambioAño==true){
            etaño.remove();
            let nuevaEtA = document.createElement('P');
            nuevaEtA.setAttribute('class', 'año year');
            nuevaEtA.innerHTML=año;
            contenedor.appendChild(nuevaEtA);
        }
        let nuevaEt = document.createElement('P');
        nuevaEt.setAttribute('class', 'mes');
        nuevaEt.innerHTML=nuevoMes;
        contenedor.appendChild(nuevaEt);
        let nuevoCalendario = document.createElement('DIV');
        nuevoCalendario.setAttribute('class', 'calendario');
        for(let i=0, dia; i<diasEnUnMes(obtenerMes(nuevoMes), año); i++){
            dia=document.createElement('DIV');
            dia.setAttribute('class', 'dias d'+(i+1));
            dia.setAttribute('onclick', 'marcar("d'+(i+1)+'")');
            dia.innerHTML=i+1;
            nuevoCalendario.appendChild(dia);
        }
        if (diaSeleccion.length!=0){
            if(mesSeleccion==nuevoMes){
                
            }
        }
        contenedor.appendChild(nuevoCalendario);
        cargarVacaciones(false);
    }, 900);
}

function armarSolicitud(){
    
    let contenedor = document.querySelector('.cuerpo');
    let fondo = document.createElement('DIV');
    fondo.setAttribute('class', 'fondoT');
    fondo.style.position='absolute';
    if(screen.width < 600){
        fondo.style.minHeight='500px';
    }else{
        fondo.style.minHeight='800px';
    }
    fondo.style.width='100%';
    fondo.style.borderRadius='20px';
    fondo.style.backgroundColor='rgba(0, 0, 0, .5)';
    fondo.style.zIndex='4';
    fondo.style.display='flex';
    fondo.style.justifyContent='center';
    fondo.style.alignItems='center';
    fondo.style.top='-50px';
    contenedor.appendChild(fondo);
    let comentario = document.createElement('DIV');
    comentario.style.width='70%';
    comentario.style.height='300px';
    comentario.style.background='linear-gradient(45deg, #26986B, #38bb94, #ACC0B1)';
    comentario.style.borderRadius='20px';
    comentario.style.textAlign='center';
    let etCom= document.createElement('P');
    etCom.style.color='#ffffff';
    etCom.innerHTML='Agregar Comentario:';
    comentario.appendChild(etCom);
    let inpCom = document.createElement('TEXTAREA');
    inpCom.setAttribute('class', 'inpCom');
    inpCom.style.width='80%';
    inpCom.style.height='50%';
    inpCom.style.borderRadius='20px';
    inpCom.style.border='none';
    inpCom.style.outline='none';
    inpCom.style.padding='8px';
    comentario.appendChild(inpCom);
    let zonaB = document.createElement('DIV');
    zonaB.style.height='15%';
    zonaB.style.display='flex';
    zonaB.style.justifyContent='space-between';
    zonaB.style.padding='10px';
    let bEnviar = document.createElement('BUTTON');
    bEnviar.style.padding='10px';
    bEnviar.style.color='#ffffff';
    bEnviar.innerHTML='Enviar';
    bEnviar.style.backgroundColor='rgb(62, 231, 84)';
    bEnviar.style.borderRadius='20px';
    bEnviar.style.marginRight='15px';
    bEnviar.style.border='none';
    bEnviar.style.outline='none';
    bEnviar.style.order='2';
    bEnviar.style.cursor='pointer';
    zonaB.appendChild(bEnviar);
    let bOmitir = document.createElement('BUTTON');
    bOmitir.style.padding='10px';
    bOmitir.style.color='#ffffff';
    bOmitir.innerHTML='Omitir';
    bOmitir.style.backgroundColor='rgb(231, 62, 62)';
    bOmitir.style.borderRadius='20px';
    bOmitir.style.marginLeft='15px';
    bOmitir.style.border='none';
    bOmitir.style.outline='none';
    bOmitir.style.order='1';
    bOmitir.style.cursor='pointer';
    zonaB.appendChild(bOmitir);
    comentario.appendChild(zonaB);
    fondo.appendChild(comentario);
    let cerrar = document.createElement('BUTTON');
    cerrar.setAttribute('class', 'cerrarFondo');
    cerrar.setAttribute('onclick', 'cerrarFondo()');
    cerrar.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0c{fill:#FFFFFF;}</style><polygon class="st0c" points="381.5,63.5 439.5,13.5 393.5,61.5 466.5,13.5 411.5,60.5 479.5,20.5 431.5,62.5 476.5,35.5 412.5,95.5   479.5,52.5 86.5,443.5 118.5,393.5 73.5,438.5 95.5,405.5 71.5,432.5 98.5,389.5 72.5,417.5 90.5,378.5 54.5,432.5 66.5,399.5   32.5,430.5 "/><path class="st0c" d="M37,74L18,34c0,0,31,47,31,44S28,40,28,40l31,33L18,14l41,42L38,23l60,50L50,9l429,434l-53-34l31,28l-37-25  l59,58l-66-52l37,34l-46-29l40,47L37,74z"/></svg>';
    fondo.appendChild(cerrar);
    contenedor.appendChild(fondo);
    if(diaSeleccion.length==1){
        solicitud.push('Vacaciones del '+diaSeleccion[0]+' de '+obtenerMes(mesSeleccion[0])+' del '+añoSeleccion[0]+' al '+diaSeleccion[0]+' de '+obtenerMes(mesSeleccion[0])+' del '+añoSeleccion[0]);
        solucitudDate.push(diaSeleccion[0]+'/'+mesSeleccion[0]+'/'+añoSeleccion[0]+'-',diaSeleccion[0]+'/'+mesSeleccion[0]+'/'+añoSeleccion[0]+',');
        diaSeleccion=[];
        mesSeleccion=[];
        añoSeleccion=[];
    }else if(diaSeleccion.length==0 && fechaSeleccionada==false){
        return console.log('no hay fecha seleccionada');
    }
    let peticion='';
    let fecha='';
    Pcargada=false;
    for (const s in solicitud) {
        if(s==0){
            peticion+=solicitud[s];
        }else if((s+1)==solicitud.length){
            peticion+=' y '+solicitud[s];
        }else{
            peticion+=', '+solicitud[s];
        }
    }
    for(const f in solucitudDate){
        fecha+=solucitudDate[f];
    }
    fecha = fecha.slice(0, -1);
    solicitud=[];
    solucitudDate=[];
    fechaSeleccionada=false;
    bOmitir.setAttribute('onclick', 'solicitar("'+peticion+'", "'+id+'", "'+fecha+'")');
    bEnviar.setAttribute('onclick', 'solicitar("'+peticion+'", "'+id+'", "'+fecha+'")');
}

function solicitar(vacaciones, id, fecha){
    let comentario = document.querySelector('.inpCom').value;
    cerrarFondo();
    axios.post("solicitarVacaciones.php", {"vacaciones":vacaciones, "id":id, "area":areaIco, "fecha":fecha, "comentario":comentario}).then(respuesta=>{console.log(respuesta.data);
        if(respuesta.data=='Exito'){
            console.log('Vacaciones Solicitadas!');
            cargarVacaciones(true);
        }
    });
}

function cargarVacaciones(cargarEstatus){
    axios.post("cargarVacaciones.php", {"id":id}).then(respuesta=>{
    if(respuesta.data.length!=0){
        let cuerpo = document.querySelector('.cuerpo');
        if(cargarEstatus==true){
            if(document.querySelector('.estatus')){
                let viejoEstatus=document.querySelector('.estatus');
                viejoEstatus.remove();
            }
        }
        let estatus = document.createElement('DIV');
        let estatusA = document.createElement('DIV');
        let estatusD = document.createElement('DIV');
        let et = document.createElement('P');
        let etA = document.createElement('P');
        let etD = document.createElement('P');
        
        let cancelar = document.createElement('BUTTON');
        let cerrar = document.createElement('BUTTON');
        if(cargarEstatus==true){
            
            estatus.setAttribute('class', 'estatus');
            estatusA.setAttribute('class', 'estatusA');
            estatusD.setAttribute('class', 'estatusD');
            
            et.setAttribute('class', 'solicitudEt');
            et.innerHTML='Solicitud:';
            estatus.appendChild(et);
            etA.setAttribute('class', 'etA');
            etA.innerHTML='Solicitud Aprobada';
            estatusA.appendChild(etA);
            etD.setAttribute('class', 'etD');
            etD.innerHTML='Solicitud Denegada';
            estatusD.appendChild(etD);
            cancelar.setAttribute('class', 'cancelar');
            
            cancelar.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0c{fill:#FF0000;}</style><polygon class="st0c" points="381.5,63.5 439.5,13.5 393.5,61.5 466.5,13.5 411.5,60.5 479.5,20.5 431.5,62.5 476.5,35.5 412.5,95.5   479.5,52.5 86.5,443.5 118.5,393.5 73.5,438.5 95.5,405.5 71.5,432.5 98.5,389.5 72.5,417.5 90.5,378.5 54.5,432.5 66.5,399.5   32.5,430.5 "/><path class="st0c" d="M37,74L18,34c0,0,31,47,31,44S28,40,28,40l31,33L18,14l41,42L38,23l60,50L50,9l429,434l-53-34l31,28l-37-25  l59,58l-66-52l37,34l-46-29l40,47L37,74z"/></svg>Cancelar';
            estatus.appendChild(cancelar);
            cerrar.setAttribute('class', 'cerrar');
            
            cerrar.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0d{fill:#FFFFFF;}</style><polygon class="st0d" points="381.5,63.5 439.5,13.5 393.5,61.5 466.5,13.5 411.5,60.5 479.5,20.5 431.5,62.5 476.5,35.5 412.5,95.5   479.5,52.5 86.5,443.5 118.5,393.5 73.5,438.5 95.5,405.5 71.5,432.5 98.5,389.5 72.5,417.5 90.5,378.5 54.5,432.5 66.5,399.5   32.5,430.5 "/><path class="st0d" d="M37,74L18,34c0,0,31,47,31,44S28,40,28,40l31,33L18,14l41,42L38,23l60,50L50,9l429,434l-53-34l31,28l-37-25  l59,58l-66-52l37,34l-46-29l40,47L37,74z"/></svg>Cerrar';
            estatusD.appendChild(cerrar);
        }
        let solicitudes;
        let cuadroSolicitudes=false;
        let cuadroAprobadas=false;
        let cuadroDenegadas=false;
        let cuadro=[];

        for (const v in respuesta.data) {
            if(cargarEstatus==true){
                if(respuesta.data[v]["estatus"]=='Pendiente'){
                    cuadroSolicitudes=true;
                    cuadroAprobadas=false;
                    cuadroDenegadas=false;
                    solicitudes = document.createElement('P');
                    solicitudes.setAttribute('class', 'solicitudes s'+(v+1));
                    solicitudes.innerHTML=respuesta.data[v]["fecha"]+' '+respuesta.data[v]["estatus"];
                    
                }else if(respuesta.data[v]["estatus"]=='Aprobada'){
                    cuadroAprobadas=true;
                    cuadroSolicitudes=false;
                    cuadroDenegadas=false;
                    solicitudes = document.createElement('P');
                    solicitudes.setAttribute('class', 'solicitudes s'+(v+1));
                    let conjunto=[];
                    let fechasArreglo;
                    let fechas;
                    let fecha1;
                    let fecha2;
                    let dia1;
                    let dia2;
                    let mes1;
                    let mes2;
                    let año1;
                    let año2;
                    const fecha = new Date();
                    if(respuesta.data[v]["fecha"].includes(',')){
                        fechasArreglo=respuesta.data[v]["fecha"].split(',');
                        for(const f in fechasArreglo){
                            fechas=fechasArreglo[f].split('-');
                            fecha1=fechas[0].split('/');
                            fecha2=fechas[1].split('/');
                            dia1=fecha1[0];
                            dia2=fecha2[0];
                            mes1=fecha1[1];
                            mes2=fecha2[1];
                            año1=fecha1[2];
                            año2=fecha2[2];
                            conjunto.push(dia2);
                            conjunto.push(mes2);
                            conjunto.push(año2);
                        }
                        for(let i=0, semiConjunto; i<conjunto.length; i+=3){
                            for(let i2=i; i2<3; i2++){
                                semiConjunto.push(conjunto[i2]);
                            }
                            for(let i3=0; i3<semiConjunto; i+=3) {
                                if (i3==0){
                                    if(fechaMayor(semiConjunto[i], semiConjunto[i+1], semiConjunto[i+2], semiConjunto[i+3], semiConjunto[i+4], semiConjunto[i+5])){
                                        dia2=semiConjunto[i];
                                        mes2=semiConjunto[i+1];
                                        año2=semiConjunto[i+2];
                                    }else{
                                        dia2=semiConjunto[i+3];
                                        mes2=semiConjunto[i+4];
                                        año2=semiConjunto[i+5];
                                    }
                                }else{
                                    if(fechaMayor(semiConjunto[i], semiConjunto[i+1], semiConjunto[i+2], dia2, mes2, año2)){
                                        dia2=semiConjunto[i];
                                        mes2=semiConjunto[i+1];
                                        año2=semiConjunto[i+2];
                                    }
                                }
                            }
                        }
                        if(fechaMayor(fecha.getDate(), (fecha.getMonth()+1), fecha.getFullYear(), dia2, mes2, año2)==false){
                            solicitudes.innerHTML=respuesta.data[v]["fecha"]+' '+respuesta.data[v]["estatus"];
                            estatusA.appendChild(solicitudes);

                        }
                    }else{
                        fechas=respuesta.data[v]["fecha"].split('-');
                        fecha1=fechas[0].split('/');
                        fecha2=fechas[1].split('/');
                        dia1=fecha1[0];
                        dia2=fecha2[0];
                        mes1=fecha1[1];
                        mes2=fecha2[1];
                        año1=fecha1[2];
                        año2=fecha2[2];
                        if(fechaMayor(fecha.getDate(), (fecha.getMonth()+1), fecha.getFullYear(), dia2, mes2, año2)==false){
                            
                            solicitudes.innerHTML=respuesta.data[v]["fecha"]+' '+respuesta.data[v]["estatus"];
                            estatusA.appendChild(solicitudes);

                        }
                    }
                }else if(respuesta.data[v]["estatus"]=='Denegada'){
                    cuadroDenegadas=true;
                    cuadroAprobadas=false;
                    cuadroSolicitudes=false;
                    solicitudes = document.createElement('P');
                    solicitudes.setAttribute('class', 'solicitudes s'+(v+1));
                    solicitudes.innerHTML=respuesta.data[v]["fecha"]+' '+respuesta.data[v]["estatus"];
                    
                }
            }
            let fechasArreglo
            let fechas
            let fecha1
            let fecha2
            let dia1
            let dia2
            let mes1
            let mes2
            let año1
            let año2
            
            if(respuesta.data[v]["fecha"].includes(',')){
                fechasArreglo=respuesta.data[v]["fecha"].split(',');
                for(const f in fechasArreglo){
                    fechas=fechasArreglo[f].split('-');
                    fecha1=fechas[0].split('/');
                    fecha2=fechas[1].split('/');
                    dia1=fecha1[0];
                    dia2=fecha2[0];
                    mes1=fecha1[1];
                    mes2=fecha2[1];
                    año1=fecha1[2];
                    año2=fecha2[2];
                    cuadro.push(definirDias(dia1, dia2, mes1, mes2, año1, año2, cargarEstatus, estatus, estatusA, estatusD, solicitudes, cuadroSolicitudes, cuadroAprobadas, cuadroDenegadas));
                }
            }else{
                fechas=respuesta.data[v]["fecha"].split('-');
                fecha1=fechas[0].split('/');
                fecha2=fechas[1].split('/');
                dia1=fecha1[0];
                dia2=fecha2[0];
                mes1=fecha1[1];
                mes2=fecha2[1];
                año1=fecha1[2];
                año2=fecha2[2];
                cuadro.push(definirDias(dia1, dia2, mes1, mes2, año1, año2, cargarEstatus, estatus, estatusA, estatusD, solicitudes, cuadroSolicitudes, cuadroAprobadas, cuadroDenegadas));
            }
            
        }
        if(cargarEstatus==true){
            if(buscar('A', cuadro) && Acargada==false){
                cuerpo.appendChild(estatusA);
                window.scroll(0, 700);
                Acargada=true;
            }
            if(buscar('P', cuadro) && Pcargada==false){
                cancelar.setAttribute('onclick', 'cancelar("Pendiente")');
                cuerpo.appendChild(estatus);
                if(Acargada && Dcargada){
                    window.scroll(0, 2000);
                }else if(Acargada || Dcargada){
                    window.scroll(0, 1400);
                }else{
                    window.scroll(0, 700);
                }
                Pcargada=true;
            }
            if(buscar('D', cuadro) && Dcargada==false){
                cerrar.setAttribute('onclick', 'cancelar("Denegada")');
                cuerpo.appendChild(estatusD);
                window.scroll(0, 700);
                Dcargada=true;
            }

        }
    }
    });   
}

function definirDias(dia1, dia2, mes1, mes2, año1, año2, cargarEstatus, estatus, estatusA, estatusD, solicitudes, cuadroSolicitudes, cuadroAprobadas, cuadroDenegadas){
    if(año1==document.querySelector('.año').innerHTML && año2==document.querySelector('.año').innerHTML){
        if(obtenerMes(document.querySelector('.mes').innerHTML)==mes1 && obtenerMes(document.querySelector('.mes').innerHTML)==mes2){
            cargarMarcas(dia1, dia2);
        }else if(obtenerMes(document.querySelector('.mes').innerHTML)==mes1 && mes2>mes1){
            cargarMarcas(dia1, diasEnUnMes(mes1, año1));
        }else if(obtenerMes(document.querySelector('.mes').innerHTML)==mes1 && mes2<mes1){
            cargarMarcas(1, dia1);
        }else if(obtenerMes(document.querySelector('.mes').innerHTML)==mes2 && mes2>mes1){
            cargarMarcas(1, dia2);
        }else if(obtenerMes(document.querySelector('.mes').innerHTML)==mes2 && mes2<mes1){
            cargarMarcas(dia2, diasEnUnMes(mes2, año2));
        }else if(obtenerMes(document.querySelector('.mes').innerHTML)>mes1 && obtenerMes(document.querySelector('.mes').innerHTML)<mes2){
            cargarMarcas(1, diasEnUnMes(obtenerMes(document.querySelector('.mes').innerHTML), document.querySelector('.año').innerHTML));
        }
    }else if(año1==document.querySelector('.año').innerHTML){
        if(mes1==obtenerMes(document.querySelector('.mes').innerHTML)){
            cargarMarcas(dia1, diasEnUnMes(mes1, año1));
        }else{
            cargarMarcas(1, diasEnUnMes(obtenerMes(document.querySelector('.mes').innerHTML), document.querySelector('.año').innerHTML));
        }
    }else if(año2==document.querySelector('.año').innerHTML){
        if(mes2==obtenerMes(document.querySelector('.mes').innerHTML)){
            cargarMarcas(1, dia2);
        }
    }else{
    }
    if(cargarEstatus==true){
        if(solicitudes.innerHTML!=''){
            if(cuadroSolicitudes){
                estatus.appendChild(solicitudes);
                return 'P';
            }else if(cuadroAprobadas){
                estatusA.appendChild(solicitudes);
                return 'A';
            }else if(cuadroDenegadas){
                estatusD.appendChild(solicitudes);
                return 'D';
            }
        }
    }
}

function cargarMarcas(d1, d2){
    d2++;
    for(let i=d1; i<d2; i++){
        let dia = document.querySelector('.d'+i);
        dia.style.backgroundColor='cadetblue';
}
}

function cancelar(estatus){
    axios.post("cancelar.php", {"id":id, "estatus":estatus}).then(respuesta=>{
        if(respuesta.data=='cancelada'){
            Acargada=false;
            Pcargada=false;
            Dcargada=false;
            botonVacacionesCargado=true;
            vacaciones();
        }
    });
}

function buscar(str, arr){
    for (const p in arr) {
        if(arr[p]==str){
            return true;
        }
    }
    return false;
}

function aprobarSolicitud(id, solicitud, elemento){
    actualizarEstatus(id, solicitud, 'Aprobada', elemento);
}

function denegarSolicitud(id, solicitud, elemento){
    actualizarEstatus(id, solicitud, 'Denegada', elemento);
}

function actualizarEstatus(id, solicitud, respuesta, elemento){
    axios.post("actualizarEstatus.php", {"id":id, "solicitud":solicitud, "respuesta":respuesta, "responsable":nameID}).then(respuesta=>{console.log(respuesta.data);
        if(respuesta.data=='actualizado'){
            let e = document.querySelector('.'+elemento);
            e.style.animationDuration='1s';
            e.style.animationName='deslizarIzquierda';
            setTimeout(function(){
                e.remove();
            }, 900);
        }
    });
}

 function fechaMayor(dia1, mes1, año1, dia2, mes2, año2){
    if(año1>año2){
        return true;
    }else if(año1<año2){
        return false;
    }else{
        if(mes1>mes2){
            return true;
        }else if(mes1<mes2){
            return false;
        }else{
            if(dia1>dia2){
                return true;
            }else if(dia1<dia2){
                return false
            }else{
                return true;
            }
        }
    }
 }

function sancion(id){
    let contenedor = document.querySelector('.u'+id);
    let funcion = document.querySelector('.bS'+id);
    funcion.removeAttribute('onclick');
    let funcion2 = document.querySelector('.bI'+id);
    funcion2.removeAttribute('onclick');
    funcion2.style.opacity='0%';
    funcion.setAttribute('onclick', 'minimizar('+id+', 0)');
    funcion.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;transform: rotate(270deg) scale(.5);" xml:space="preserve"><style type="text/css">	.st0min{fill:#ffffff;stroke:#FFFFFF;stroke-miterlimit:10;}	.st1min{fill:#FFFFFF;stroke:#FF0000;stroke-miterlimit:10;}</style><path class="st0min" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1min" d="M41.5,476.5"/><path class="st1min" d="M41.5,476.5"/><path class="st0min" d="M40.5,471.5"/><path class="st0min" d="M83.5,448.5"/><path class="st1min" d="M228.5,249.5"/></svg>';
    contenedor.style.animationDuration='.5s';
    contenedor.style.animationName='desplegarOp2';
    contenedor.style.animationFillMode='forwards';
    let opciones = document.createElement('DIV');
    opciones.setAttribute('class', 'opciones o'+id);
    let co1 = document.createElement('DIV');
    co1.setAttribute('class', 'co co1'+id);
    let co2 = document.createElement('DIV');
    co2.setAttribute('class', 'co co2'+id);
    let inp1 = document.createElement('INPUT');
    inp1.setAttribute('class', 'check ci1'+id);
    inp1.type='checkbox';
    inp1.setAttribute('onclick', 'checkbox('+id+', 1)');
    let op1 = document.createElement('P');
    op1.innerHTML='Carta Administrativa: ';
    let inp2 = document.createElement('INPUT');
    inp2.setAttribute('class', 'check ci2'+id);
    inp2.type='checkbox';
    inp2.setAttribute('onclick', 'checkbox('+id+', 2)');
    let op2 = document.createElement('P');
    op2.innerHTML='Retiro de home: ';
    let boton = document.createElement('BUTTON');
    boton.setAttribute('class', 'darIncentivo dI'+id);
    boton.setAttribute('onclick', 'darSancion('+id+')');
    boton.innerHTML='Asignar';
    co1.appendChild(inp1);
    co1.appendChild(op1);
    co2.appendChild(inp2);
    co2.appendChild(op2);
    opciones.appendChild(co1);
    opciones.appendChild(co2);
    contenedor.appendChild(opciones);
    contenedor.appendChild(boton);
}

function checkbox(id, op){
    let input = document.querySelector('.ci'+op+id);
    let co = document.querySelector('.co'+op+id);
    if(input.checked){
        let inp = document.createElement('TEXTAREA');
        inp.setAttribute('class', 'inp op'+op+id);
        inp.type='text';
        co.appendChild(inp);
    }else{
        let inp = document.querySelector('.op'+op+id);
        inp.remove();
    }
}

function incentivo(id){
    let contenedor = document.querySelector('.u'+id);
    let funcion = document.querySelector('.bI'+id);
    funcion.removeAttribute('onclick');
    let funcion2 = document.querySelector('.bS'+id);
    funcion2.removeAttribute('onclick');
    funcion2.style.opacity='0%';
    funcion.setAttribute('onclick', 'minimizar('+id+', 1)');
    funcion.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;transform: rotate(270deg) scale(.5);" xml:space="preserve"><style type="text/css">	.st0min{fill:#ffffff;stroke:#FFFFFF;stroke-miterlimit:10;}	.st1min{fill:#FFFFFF;stroke:#FF0000;stroke-miterlimit:10;}</style><path class="st0min" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1min" d="M41.5,476.5"/><path class="st1min" d="M41.5,476.5"/><path class="st0min" d="M40.5,471.5"/><path class="st0min" d="M83.5,448.5"/><path class="st1min" d="M228.5,249.5"/></svg>';
    contenedor.style.animationDuration='.5s';
    contenedor.style.animationName='desplegarOp1';
    contenedor.style.animationFillMode='forwards';
    let opciones = document.createElement('DIV');
    opciones.setAttribute('class', 'opciones o'+id);
    let inp = document.createElement('INPUT');
    inp.setAttribute('class', 'inpb i'+id);
    inp.type='text';
    let op1 = document.createElement('P');
    op1.innerHTML='Bono: $';
    let boton = document.createElement('BUTTON');
    boton.setAttribute('class', 'darIncentivo dI'+id);
    boton.setAttribute('onclick', 'darIncentivo('+id+')');
    boton.innerHTML='Asignar';
    opciones.appendChild(op1);
    opciones.appendChild(inp);
    contenedor.appendChild(opciones);
    contenedor.appendChild(boton);
}

function minimizar(id, op){
    let opciones = document.querySelector('.o'+id);
    opciones.remove();
    let boton = document.querySelector('.dI'+id);
    boton.remove();
    if(op==1){
        let funcion = document.querySelector('.bI'+id);
        funcion.removeAttribute('onclick');
        funcion.setAttribute('onclick', 'incentivo('+id+')');
        let funcion2 = document.querySelector('.bS'+id);
        funcion2.setAttribute('onclick', 'sancion('+id+')');
        funcion2.style.opacity='100%';
        funcion.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0bI{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}	.st1bI{fill:rgb(62, 231, 84);stroke:#ffffff;stroke-miterlimit:10;}</style><polyline class="st0bI" points="48.02,208.58 48.02,472.8 453.71,472.8 453.71,208.58 "/><polyline class="st1bI" points="287.04,126.46 287.04,472.8 204.93,472.8 204.93,126.46 287.04,126.46 204.93,126.46 204.93,472.8   204.93,126.46 "/><path class="st0bI" d="M196.8,126.46c0,0-127.64-4.88-129.27-56.1c-1.63-51.22,137.4-58.54,137.4-58.54s38.93-3.25,45.07,43.9  c0,0,63.87-67.58,152.49-43.95s-32.52,114.68-32.52,114.68"/><path class="st1bI" d="M204.93,105.33c0,0-89.43-9.12-88.62-38.71c0.81-29.58,88.62-11.7,88.62-11.7S247.2,84.19,204.93,105.33z"/><path class="st1bI" d="M266.72,77.44c0,0,81.3-53.94,124.39-41.22s-47.97,69.11-47.97,69.11S235.82,125.98,266.72,77.44z"/><rect x="30.13" y="126.46" class="st0bI" width="443.9" height="82.11"/><rect x="48.02" y="293.13" class="st1bI" width="405.69" height="66.67"/></svg>Incentivo';
    }else{
        let funcion = document.querySelector('.bS'+id);
        funcion.removeAttribute('onclick');
        funcion.setAttribute('onclick', 'sancion('+id+')');
        let funcion2 = document.querySelector('.bI'+id);
        funcion2.setAttribute('onclick', 'incentivo('+id+')');
        funcion2.style.opacity='100%';
        funcion.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0Sancion{fill:#ffffff;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0Sancion" d="M34.32,445.53c0,0-17.79,0-24.2-22.07L149.6,287.59l21.35,18.62L34.32,445.53z"/><polyline class="st0Sancion" points="153.02,290.57 243.54,202.07 256.34,213.1 166.82,302.61 "/><path class="st0Sancion" d="M187.51,153.1l124.25,108.97c0,0-6.31,4.83-11.29,20s16.37,16.55,16.37,16.55s92.83-28.75,98.92-96.56  c1.42-15.86-21.35-13.1-21.35-13.1l-116-103.45c0,0,7.83-6.21,8.54-18.62c0.71-12.41-30.6-12.41-30.6-12.41  s-63.33,11.72-93.93,79.31S187.51,153.1,187.51,153.1z"/><path class="st0Sancion" d="M469.15,381.75c-1.33-0.36-2.67-0.71-4.01-1.05c-82.92-20.99-180.63,1.05-180.63,1.05v13.82l-24.31,8.13v14.63  h228.46v-15.45l-20.33-7.9L469.15,381.75z"/></svg>Sanción';
    }
    let contenedor = document.querySelector('.u'+id);
    contenedor.style.animationDuration='.5s';
    if(screen.width < 600){
        contenedor.style.animationName='minimizarOp1mobile';
    }else{
        contenedor.style.animationName='minimizarOp1';
    }
    contenedor.style.animationFillMode='forwards';
}

function darIncentivo(id){
    let cantidad = document.querySelector('.i'+id).value;
    axios.post("asignarInsentivo.php", {"bono":cantidad, "id":id}).then(respuesta=>{
        if(respuesta.data=='Exito'){
            minimizar(id, 1);
                cargarInsentivos();
        }
    });
}

function darSancion(id){
    let input1 = document.querySelector('.ci1'+id);
    let input2 = document.querySelector('.ci2'+id);
    if(input1.checked || input2.checked){
        if(input1.checked && input2.checked){
            let nota1 = document.querySelector('.op1'+id).value;
            let nota2 = document.querySelector('.op2'+id).value;
            axios.post("asignarSancion.php", {"nota":nota1, "id":id, "opcion":"Carta Administrativa"}).then(respuesta=>{
                if(respuesta.data=='Exito'){
                    axios.post("asignarSancion.php", {"nota":nota2, "id":id, "opcion":"Retiro de Home"}).then(respuesta2=>{
                        if(respuesta2.data=='Exito'){
                            cargarSanciones();
                        }
                    });
                }
            });
        }else if(input1.checked){
            let nota1 = document.querySelector('.op1'+id).value;
            axios.post("asignarSancion.php", {"nota":nota1, "id":id, "opcion":"Carta Administrativa"}).then(respuesta=>{
                if(respuesta.data=='Exito'){
                    minimizar(id, 2);
                    cargarSanciones();
                }
            });
        }else if(input2.checked){
            let nota2 = document.querySelector('.op2'+id).value;
            axios.post("asignarSancion.php", {"nota":nota2, "id":id, "opcion":"Retiro de Home"}).then(respuesta=>{
                if(respuesta.data=='Exito'){
                    minimizar(id, 2);
                    cargarSanciones();
                }
            });
        }
    }
}

function cargarInsentivos(){
    if(document.querySelector('.tabla2')){
        console.log('tabla vieja');
        let viejatabla = document.querySelector('.tabla2');
        viejatabla.remove();
    }
    let cuerpo = document.querySelector('.cuerpo');
    let tabla2 = document.createElement('DIV');
    tabla2.setAttribute('class', 'tabla tabla2');
    tabla2.style.order='0';
    let etTabla = document.createElement('P');
    etTabla.innerHTML='Insentivos:';
    etTabla.style.textAlign='center';
    etTabla.style.letterSpacing='5px';
    tabla2.appendChild(etTabla);
    let hijos = tabla2.childNodes;
    if(hijos.length>1){
        for(let i=1; i<hijos.length; i++){
            hijos[i].remove();
        }
    }
    axios("cargarInsentivos.php").then(respuesta=>{
        let nombre;
        let foto;
        let area;
        let apellidop;
        let top;
        let cnombre;
        let cicono;
        let carea;
        if(respuesta.data.length!=0){
            for (let r=0;r<respuesta.data.length;r++) {
                usuario=document.createElement('DIV');
                usuario.setAttribute('class', 'usuario Insentivo'+respuesta.data[r]["id"]+respuesta.data[r]["cantidad"]);
                top = document.createElement('DIV');
                top.setAttribute('class', 'top contenedorIncentivo'+respuesta.data[r]["id"]);
                foto=document.createElement('IMG');
                foto.setAttribute('class', 'fotoSolicitud elementoSolicitud');
                foto.setAttribute('src', 'img/fotos/'+respuesta.data[r]["foto"]);
                cnombre = document.createElement('DIV');
                cnombre.setAttribute('class', 'semicontenedor scI1');
                cicono = document.createElement('DIV');
                cicono.setAttribute('class', 'semicontenedor scI3');
                carea = document.createElement('DIV');
                carea.setAttribute('class', 'semicontenedor scI2');
                cnombre.appendChild(foto);
                nombre=document.createElement('P');
                nombre.innerHTML=respuesta.data[r]["nombre"];
                nombre.setAttribute('class', 'elementoSolicitud')
                cnombre.appendChild(nombre);
                apellidop=document.createElement('P');
                apellidop.innerHTML=respuesta.data[r]["apellidop"];
                apellidop.setAttribute('class', 'elementoSolicitud');
                cnombre.appendChild(apellidop);
                area=document.createElement('P');
                area.innerHTML=respuesta.data[r]["area"];
                area.setAttribute('class', 'elementoSolicitud');
                top.appendChild(cnombre);
                carea.appendChild(area);
                top.appendChild(carea);
                aprobar=document.createElement('DIV');
                aprobar.setAttribute('class', 'icoI elementoSolicitud icoI'+respuesta.data[r]["id"]);
                aprobar.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0bIv{fill:rgb(62, 231, 84);stroke:rgb(62, 231, 84);stroke-miterlimit:10;}	.st1bIv{fill:#ffffff;stroke:#ffffff;stroke-miterlimit:10;}</style><polyline class="st0bIv" points="48.02,208.58 48.02,472.8 453.71,472.8 453.71,208.58 "/><polyline class="st1bIv" points="287.04,126.46 287.04,472.8 204.93,472.8 204.93,126.46 287.04,126.46 204.93,126.46 204.93,472.8   204.93,126.46 "/><path class="st0bIv" d="M196.8,126.46c0,0-127.64-4.88-129.27-56.1c-1.63-51.22,137.4-58.54,137.4-58.54s38.93-3.25,45.07,43.9  c0,0,63.87-67.58,152.49-43.95s-32.52,114.68-32.52,114.68"/><path class="st1bIv" d="M204.93,105.33c0,0-89.43-9.12-88.62-38.71c0.81-29.58,88.62-11.7,88.62-11.7S247.2,84.19,204.93,105.33z"/><path class="st1bIv" d="M266.72,77.44c0,0,81.3-53.94,124.39-41.22s-47.97,69.11-47.97,69.11S235.82,125.98,266.72,77.44z"/><rect x="30.13" y="126.46" class="st0bIv" width="443.9" height="82.11"/><rect x="48.02" y="293.13" class="st1bIv" width="405.69" height="66.67"/></svg>';
                cicono.appendChild(aprobar);
                if(respuesta.data[r]["visto"]==1){
                    let visto = document.createElement('DIV');
                    visto.setAttribute('class', 'icoI elementoSolicitud icoI'+respuesta.data[r]["id"]);
                    visto.title='Visto';
                    visto.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0visto{fill:none;stroke:#000000;stroke-width:41;stroke-miterlimit:10;}	.st1visto{stroke:#000000;stroke-width:41;stroke-miterlimit:10;}	.st2visto{fill:none;stroke:#FFFFFF;stroke-width:27;stroke-miterlimit:10;}	.st3visto{fill:none;stroke:#FFFFFF;stroke-width:16;stroke-miterlimit:10;}	.st4visto{fill:none;stroke:#000000;stroke-width:16;stroke-miterlimit:10;}</style><path class="st0visto" d="M495.98,250C271.26-61.3,2.92,249.69,4.93,250"/><path class="st0visto" d="M4.92,250c224.73,311.3,493.07,0.31,491.06,0l-3.14-4.31"/><circle class="st1visto" cx="259.2" cy="210" r="82.72"/><line class="st0visto" x1="7.9" y1="254.1" x2="7.9" y2="237.03"/><path class="st2visto" d="M203.3,198.82c0,0,22.76-54.47,85.37-42.28"/><circle class="st3visto" cx="316.02" cy="158.69" r="3.93"/><polyline class="st4visto" points="32.72,220.87 -6.46,254.1 -12.96,254.1 -8.89,245.69 "/></svg>';
                    cicono.appendChild(visto);
                }
                cantidad= document.createElement('P');
                cantidad.setAttribute('class', 'elementoSolicitud');
                cantidad.innerHTML='$'+respuesta.data[r]["cantidad"];
                cicono.appendChild(cantidad);
                let remover = document.createElement('BUTTON');
                remover.setAttribute('class', 'removerIncentivo');
                remover.setAttribute('onclick', 'removerIncentivo('+respuesta.data[r]["id"]+', "'+respuesta.data[r]["cantidad"]+'")');
                remover.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0c{fill:#FF0000;}</style><polygon class="st0c" points="381.5,63.5 439.5,13.5 393.5,61.5 466.5,13.5 411.5,60.5 479.5,20.5 431.5,62.5 476.5,35.5 412.5,95.5   479.5,52.5 86.5,443.5 118.5,393.5 73.5,438.5 95.5,405.5 71.5,432.5 98.5,389.5 72.5,417.5 90.5,378.5 54.5,432.5 66.5,399.5   32.5,430.5 "/><path class="st0c" d="M37,74L18,34c0,0,31,47,31,44S28,40,28,40l31,33L18,14l41,42L38,23l60,50L50,9l429,434l-53-34l31,28l-37-25  l59,58l-66-52l37,34l-46-29l40,47L37,74z"/></svg>';
                cicono.appendChild(remover);
                top.appendChild(cicono);
                usuario.appendChild(top);
                tabla2.appendChild(usuario);
            }
        }
    });
    cuerpo.appendChild(tabla2);
}

function cargarSanciones(){
    if(document.querySelector('.tabla3')){
        let viejatabla = document.querySelector('.tabla3');
        viejatabla.remove();
    }
    let cuerpo = document.querySelector('.cuerpo');
    let tabla2 = document.createElement('DIV');
    tabla2.setAttribute('class', 'tabla tabla3');
    tabla2.style.order='1';
    let separador = document.createElement('HR');
        separador.style.borderColor='#39c097';
        tabla2.appendChild(separador);
    let etTabla = document.createElement('P');
    etTabla.innerHTML='Sanciones:';
    etTabla.style.textAlign='center';
    etTabla.style.letterSpacing='5px';
    tabla2.appendChild(etTabla);
    let hijos = tabla2.childNodes;
    if(hijos.length>2){
        for(let i=2; i<hijos.length; i++){
            hijos[i].remove();
        }
    }
    axios("cargarSanciones.php").then(respuesta=>{
        let nombre;
        let foto;
        let area;
        let apellidop;
        let top;
        let cnombre;
        let cicono;
        let carea;
        if(respuesta.data.length!=0){
            for (const r in respuesta.data) {
                usuario=document.createElement('DIV');
                usuario.setAttribute('class', 'usuario Insentivo'+respuesta.data[r]["id"]);
                top = document.createElement('DIV');
                top.setAttribute('class', 'top contenedorIncentivo'+respuesta.data[r]["id"]);
                foto=document.createElement('IMG');
                foto.setAttribute('class', 'fotoSolicitud elementoSolicitud');
                foto.setAttribute('src', 'img/fotos/'+respuesta.data[r]["foto"]);
                cnombre = document.createElement('DIV');
                cnombre.setAttribute('class', 'semicontenedor scI1');
                cicono = document.createElement('DIV');
                cicono.setAttribute('class', 'semicontenedor scI3');
                carea = document.createElement('DIV');
                carea.setAttribute('class', 'semicontenedor scI2');
                cnombre.appendChild(foto);
                nombre=document.createElement('P');
                nombre.innerHTML=respuesta.data[r]["nombre"];
                nombre.setAttribute('class', 'elementoSolicitud')
                cnombre.appendChild(nombre);
                apellidop=document.createElement('P');
                apellidop.innerHTML=respuesta.data[r]["apellidop"];
                apellidop.setAttribute('class', 'elementoSolicitud');
                cnombre.appendChild(apellidop);
                area=document.createElement('P');
                area.innerHTML=respuesta.data[r]["nota"];
                area.setAttribute('class', 'elementoSolicitud');
                top.appendChild(cnombre);
                carea.appendChild(area);
                top.appendChild(carea);
                aprobar=document.createElement('DIV');
                aprobar.setAttribute('class', 'icoI elementoSolicitud icoI'+respuesta.data[r]["id"]);
                aprobar.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0Sancionr{fill:#ff0000;stroke:#ff0000;stroke-miterlimit:10;}</style><path class="st0Sancionr" d="M34.32,445.53c0,0-17.79,0-24.2-22.07L149.6,287.59l21.35,18.62L34.32,445.53z"/><polyline class="st0Sancionr" points="153.02,290.57 243.54,202.07 256.34,213.1 166.82,302.61 "/><path class="st0Sancionr" d="M187.51,153.1l124.25,108.97c0,0-6.31,4.83-11.29,20s16.37,16.55,16.37,16.55s92.83-28.75,98.92-96.56  c1.42-15.86-21.35-13.1-21.35-13.1l-116-103.45c0,0,7.83-6.21,8.54-18.62c0.71-12.41-30.6-12.41-30.6-12.41  s-63.33,11.72-93.93,79.31S187.51,153.1,187.51,153.1z"/><path class="st0Sancionr" d="M469.15,381.75c-1.33-0.36-2.67-0.71-4.01-1.05c-82.92-20.99-180.63,1.05-180.63,1.05v13.82l-24.31,8.13v14.63  h228.46v-15.45l-20.33-7.9L469.15,381.75z"/></svg>';
                cicono.appendChild(aprobar);
                if(respuesta.data[r]["visto"]==1){
                    let visto = document.createElement('DIV');
                    visto.setAttribute('class', 'icoI elementoSolicitud icoI'+respuesta.data[r]["id"]);
                    visto.title='Visto';
                    visto.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0visto{fill:none;stroke:#000000;stroke-width:41;stroke-miterlimit:10;}	.st1visto{stroke:#000000;stroke-width:41;stroke-miterlimit:10;}	.st2visto{fill:none;stroke:#FFFFFF;stroke-width:27;stroke-miterlimit:10;}	.st3visto{fill:none;stroke:#FFFFFF;stroke-width:16;stroke-miterlimit:10;}	.st4visto{fill:none;stroke:#000000;stroke-width:16;stroke-miterlimit:10;}</style><path class="st0visto" d="M495.98,250C271.26-61.3,2.92,249.69,4.93,250"/><path class="st0visto" d="M4.92,250c224.73,311.3,493.07,0.31,491.06,0l-3.14-4.31"/><circle class="st1visto" cx="259.2" cy="210" r="82.72"/><line class="st0visto" x1="7.9" y1="254.1" x2="7.9" y2="237.03"/><path class="st2visto" d="M203.3,198.82c0,0,22.76-54.47,85.37-42.28"/><circle class="st3visto" cx="316.02" cy="158.69" r="3.93"/><polyline class="st4visto" points="32.72,220.87 -6.46,254.1 -12.96,254.1 -8.89,245.69 "/></svg>';
                    cicono.appendChild(visto);
                }
                cantidad= document.createElement('P');
                cantidad.setAttribute('class', 'elementoSolicitud');
                cantidad.innerHTML=respuesta.data[r]["tipo"];
                cicono.appendChild(cantidad);
                let remover = document.createElement('BUTTON');
                remover.setAttribute('class', 'removerIncentivo');
                remover.setAttribute('onclick', 'removerSancion('+respuesta.data[r]["id"]+', "'+respuesta.data[r]["tipo"]+'")');
                remover.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0c{fill:#FF0000;}</style><polygon class="st0c" points="381.5,63.5 439.5,13.5 393.5,61.5 466.5,13.5 411.5,60.5 479.5,20.5 431.5,62.5 476.5,35.5 412.5,95.5   479.5,52.5 86.5,443.5 118.5,393.5 73.5,438.5 95.5,405.5 71.5,432.5 98.5,389.5 72.5,417.5 90.5,378.5 54.5,432.5 66.5,399.5   32.5,430.5 "/><path class="st0c" d="M37,74L18,34c0,0,31,47,31,44S28,40,28,40l31,33L18,14l41,42L38,23l60,50L50,9l429,434l-53-34l31,28l-37-25  l59,58l-66-52l37,34l-46-29l40,47L37,74z"/></svg>';
                cicono.appendChild(remover);
                top.appendChild(cicono);
                usuario.appendChild(top);
                tabla2.appendChild(usuario);
            }
        }
    });
    cuerpo.appendChild(tabla2);
}

function removerIncentivo(id, cantidad){
    //metodo axios
    /*axios.post("removerIncentivo.php", {"id":id, "cantidad":cantidad}).then(respuesta=>{
        if(respuesta.data=='eliminado'){
            cargarInsentivos();
        }
    });*/
    
    //metodo ajax
    $.ajax({
        type:'post',
        url: 'removerIncentivo.php',
        data: {'id2':id, "cantidad2":cantidad},   
        cache: false,
        beforeSend : function(){
        },
        success: function(response)
        {
            cargarInsentivos();
            /*let elemento = document.querySelector('.Insentivo'+id+cantidad);
            elemento.remove();*/
        },
        error: function(er) {
            console.log(er);
        }
    });
}

function removerSancion(id, tipo){
    axios.post("removerSancion.php", {"id":id, "tipo":tipo}).then(respuesta=>{
        if(respuesta.data=='eliminado'){
            cargarSanciones();
        }
    });
}

function nuevoUsuario(){
    let DPendientes=['RFC, ', 'CURP, ', 'NSS, ', 'Credito Infonavit, ', 'Solicitud de Empleo, ', 'Identificacion Personal, ', 'Acta de Nacimiento, ', 'Comprobante de Domicilio, ', 'Comprobante de Estudios, ', 'Cartas de Recomendación, ', 'Antecedentes no Penales, ', 'Contratos, ', 'Uniformes, ', 'Datos Bancarios, ', 'Alta, ', 'Contrato Confidencialidad'];
    let contenedor = document.querySelector('.cuerpo');
    let fondo = document.createElement('DIV');
    fondo.setAttribute('class', 'fondoT');
    fondo.style.position='absolute';
    fondo.style.minHeight='100vh';
    fondo.style.width='100vw';
    fondo.style.backgroundColor='rgba(0, 0, 0, .5)';
    fondo.style.zIndex='2';
    fondo.style.display='flex';
    fondo.style.justifyContent='center';
    fondo.style.alignItems='center';
    let caja = document.createElement('DIV');
    caja.setAttribute('class', 'cajaAdd');
    let contenedorInputs1 = document.createElement('DIV');
    contenedorInputs1.setAttribute('class', 'contenedorInputs');
    let contenedorInputs2 = document.createElement('DIV');
    contenedorInputs2.setAttribute('class', 'contenedorInputs');
    let campo1 = document.createElement('DIV');
    campo1.setAttribute('class', 'campo campo1');
    let et1 = document.createElement('P');
    et1.innerHTML='Usuario:';
    campo1.appendChild(et1);
    let inp1 = document.createElement('INPUT');
    inp1.setAttribute('class', 'inpt inpt1');
    inp1.name='usuario';
    inp1.placeholder='Correo@inmega.com';
    campo1.appendChild(inp1);
    contenedorInputs1.appendChild(campo1);
    let campo2 = document.createElement('DIV');
    campo2.setAttribute('class', 'campo campo2');
    let et2 = document.createElement('P');
    et2.innerHTML='Contraseña:';
    campo2.appendChild(et2);
    let inp2 = document.createElement('INPUT');
    inp2.setAttribute('class', 'inpt inpt2');
    inp2.type='password';
    campo2.appendChild(inp2);
    contenedorInputs1.appendChild(campo2);
    let campo3 = document.createElement('DIV');
    campo3.setAttribute('class', 'campo campo3');
    let et3 = document.createElement('P');
    et3.innerHTML='Nombre:';
    campo3.appendChild(et3);
    let inp3 = document.createElement('INPUT');
    inp3.setAttribute('class', 'inpt inpt3');
    campo3.appendChild(inp3);
    contenedorInputs1.appendChild(campo3);
    let campo4 = document.createElement('DIV');
    campo4.setAttribute('class', 'campo campo4');
    let et4 = document.createElement('P');
    et4.innerHTML='Apellido Paterno:';
    campo4.appendChild(et4);
    let inp4 = document.createElement('INPUT');
    inp4.setAttribute('class', 'inpt inpt4');
    campo4.appendChild(inp4);
    contenedorInputs1.appendChild(campo4);
    let campo5 = document.createElement('DIV');
    campo5.setAttribute('class', 'campo campo5');
    let et5 = document.createElement('P');
    et5.innerHTML='Apellido Materno:';
    campo5.appendChild(et5);
    let inp5 = document.createElement('INPUT');
    inp5.setAttribute('class', 'inpt inpt5');
    campo5.appendChild(inp5);
    contenedorInputs1.appendChild(campo5);
    let campo6 = document.createElement('DIV');
    campo6.setAttribute('class', 'campo campo6');
    let et6 = document.createElement('P');
    et6.innerHTML='Sexo:';
    campo6.appendChild(et6);
    let inp6 = document.createElement('INPUT');
    inp6.setAttribute('class', 'inpt inpt6h');
    inp6.setAttribute('checked', '');
    inp6.type='radio';
    inp6.name='genero';
    inp6.value='hombre';
    inp6.id='hombre';
    let label1 = document.createElement('LABEL');
    label1.for='hombre';
    label1.innerHTML='Hombre';
    campo6.appendChild(label1);
    campo6.appendChild(inp6);
    let inp62 = document.createElement('INPUT');
    inp62.setAttribute('class', 'inpt inpt6m');
    inp62.type='radio';
    inp62.name='genero';
    inp62.value='mujer';
    inp62.id='mujer';
    let label2 = document.createElement('LABEL');
    label2.for='mujer';
    label2.innerHTML='Mujer';
    campo6.appendChild(label2);
    campo6.appendChild(inp62);
    contenedorInputs1.appendChild(campo6);
    let campo7 = document.createElement('DIV');
    campo7.setAttribute('class', 'campo campo7');
    let etImss = document.createElement('P');
        etImss.innerHTML='Oficina alta Imss:';
        inpI = document.createElement('DIV');
        inpI.setAttribute('class', 'opcionDesplegable oDI');
        let o2 = document.createElement('DIV');
        o2.setAttribute('class', 'oSeleccionada oSeleccionadaI');
        o2.setAttribute('onclick', 'opcionesImss()');
        let e2 = document.createElement('P');
        e2.setAttribute('class', 'textoO rT3');
        e2.innerHTML='Humana';
        e2.style.marginLeft='10px';
        o2.appendChild(e2);
        let d2 = document.createElement('DIV');
        d2.setAttribute('class', 'botonDes3');
        d2.style.width='20px';
        d2.style.height='20px';
        d2.style.marginRight='10px';
        d2.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill: #ffffff; transform: rotate(90deg);" xml:space="preserve"><style type="text/css">	.st0nn{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1nn{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0nn" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1nn" d="M41.5,476.5"/><path class="st1nn" d="M41.5,476.5"/><path class="st0nn" d="M40.5,471.5"/><path class="st0nn" d="M83.5,448.5"/><path class="st1nn" d="M228.5,249.5"/></svg>';
        o2.appendChild(d2);
        inpI.appendChild(o2);
        campo7.appendChild(etImss);
        campo7.appendChild(inpI);
    contenedorInputs1.appendChild(campo7);
    let campo8 = document.createElement('DIV');
    campo8.setAttribute('class', 'campo campo8');
    let etFisica = document.createElement('P');
        etFisica.innerHTML='Oficina físicamente:';
        inpF = document.createElement('DIV');
        inpF.setAttribute('class', 'opcionDesplegable oDF');
        o2 = document.createElement('DIV');
        o2.setAttribute('class', 'oSeleccionada oSeleccionadaF');
        o2.setAttribute('onclick', 'opcionesFisica()');
        e2 = document.createElement('P');
        e2.setAttribute('class', 'textoO rT4');
        e2.innerHTML='CDMX';
        e2.style.marginLeft='10px';
        o2.appendChild(e2);
        d2 = document.createElement('DIV');
        d2.setAttribute('class', 'botonDes4');
        d2.style.width='20px';
        d2.style.height='20px';
        d2.style.marginRight='10px';
        d2.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill: #ffffff; transform: rotate(90deg);" xml:space="preserve"><style type="text/css">	.st0nn{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1nn{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0nn" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1nn" d="M41.5,476.5"/><path class="st1nn" d="M41.5,476.5"/><path class="st0nn" d="M40.5,471.5"/><path class="st0nn" d="M83.5,448.5"/><path class="st1nn" d="M228.5,249.5"/></svg>';
        o2.appendChild(d2);
        inpF.appendChild(o2);
        campo8.appendChild(etFisica);
        campo8.appendChild(inpF);
        contenedorInputs1.appendChild(campo8);
    let campo9 = document.createElement('DIV');
    campo9.setAttribute('class', 'campo campo9');
    let etPago = document.createElement('P');
        etPago.innerHTML='Periodicidad de pago:';
        inpP = document.createElement('DIV');
        inpP.setAttribute('class', 'opcionDesplegable oDP');
        o2 = document.createElement('DIV');
        o2.setAttribute('class', 'oSeleccionada oSeleccionadaP');
        o2.setAttribute('onclick', 'opcionesPago()');
        e2 = document.createElement('P');
        e2.setAttribute('class', 'textoO rT5');
        e2.innerHTML='Quincenal';
        e2.style.marginLeft='10px';
        o2.appendChild(e2);
        d2 = document.createElement('DIV');
        d2.setAttribute('class', 'botonDes5');
        d2.style.width='20px';
        d2.style.height='20px';
        d2.style.marginRight='10px';
        d2.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill: #ffffff; transform: rotate(90deg);" xml:space="preserve"><style type="text/css">	.st0nn{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1nn{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0nn" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1nn" d="M41.5,476.5"/><path class="st1nn" d="M41.5,476.5"/><path class="st0nn" d="M40.5,471.5"/><path class="st0nn" d="M83.5,448.5"/><path class="st1nn" d="M228.5,249.5"/></svg>';
        o2.appendChild(d2);
        inpP.appendChild(o2);
        campo9.appendChild(etPago);
        campo9.appendChild(inpP);
        contenedorInputs1.appendChild(campo9);
    let campo10 = document.createElement('DIV');
    campo10.setAttribute('class', 'campo campo10');
    let etModalidad = document.createElement('P');
        etModalidad.innerHTML='Modalidad de trabajo:';
        inpM = document.createElement('DIV');
        inpM.setAttribute('class', 'opcionDesplegable oDM');
        o2 = document.createElement('DIV');
        o2.setAttribute('class', 'oSeleccionada oSeleccionadaM');
        o2.setAttribute('onclick', 'opcionesModalidad()');
        e2 = document.createElement('P');
        e2.setAttribute('class', 'textoO rT6');
        e2.innerHTML='Presencial';
        e2.style.marginLeft='10px';
        o2.appendChild(e2);
        d2 = document.createElement('DIV');
        d2.setAttribute('class', 'botonDes6');
        d2.style.width='20px';
        d2.style.height='20px';
        d2.style.marginRight='10px';
        d2.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill: #ffffff; transform: rotate(90deg);" xml:space="preserve"><style type="text/css">	.st0nn{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1nn{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0nn" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1nn" d="M41.5,476.5"/><path class="st1nn" d="M41.5,476.5"/><path class="st0nn" d="M40.5,471.5"/><path class="st0nn" d="M83.5,448.5"/><path class="st1nn" d="M228.5,249.5"/></svg>';
        o2.appendChild(d2);
        inpM.appendChild(o2);
        campo10.appendChild(etModalidad);
        campo10.appendChild(inpM);
        contenedorInputs1.appendChild(campo10);
    let campo11 = document.createElement('DIV');
    campo11.setAttribute('class', 'campo campo11');
    let et11 = document.createElement('P');
    et11.innerHTML='Fecha Firma de Contrato:';
    campo11.appendChild(et11);
    let inp11 = document.createElement('INPUT');
    inp11.setAttribute('class', 'inpt inpt17');
    inp11.type='date';
    inp11.placeholder='AAAA/MM/DD';
    campo11.appendChild(inp11);
    contenedorInputs1.appendChild(campo11);
    let campo12 = document.createElement('DIV');
    campo12.setAttribute('class', 'campo campo12');
    let et12 = document.createElement('P');
    et12.innerHTML='Fecha Vencimiento de Contrato:';
    campo12.appendChild(et12);
    let inp12 = document.createElement('INPUT');
    inp12.setAttribute('class', 'inpt inpt18');
    inp12.placeholder='AAAA/MM/DD';
    inp12.type='date';
    campo12.appendChild(inp12);
    contenedorInputs1.appendChild(campo12);
    let campo13 = document.createElement('DIV');
    campo13.setAttribute('class', 'campo campo13');
    let etCivil = document.createElement('P');
        etCivil.innerHTML='Estado civil:';
        inpCi = document.createElement('DIV');
        inpCi.setAttribute('class', 'opcionDesplegable oDCi');
        o2 = document.createElement('DIV');
        o2.setAttribute('class', 'oSeleccionada oSeleccionadaCi');
        o2.setAttribute('onclick', 'opcionesCivil()');
        e2 = document.createElement('P');
        e2.setAttribute('class', 'textoO rT7');
        e2.innerHTML='Solter@';
        e2.style.marginLeft='10px';
        o2.appendChild(e2);
        d2 = document.createElement('DIV');
        d2.setAttribute('class', 'botonDes7');
        d2.style.width='20px';
        d2.style.height='20px';
        d2.style.marginRight='10px';
        d2.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill: #ffffff; transform: rotate(90deg);" xml:space="preserve"><style type="text/css">	.st0nn{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1nn{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0nn" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1nn" d="M41.5,476.5"/><path class="st1nn" d="M41.5,476.5"/><path class="st0nn" d="M40.5,471.5"/><path class="st0nn" d="M83.5,448.5"/><path class="st1nn" d="M228.5,249.5"/></svg>';
        o2.appendChild(d2);
        inpCi.appendChild(o2);
        campo13.appendChild(etCivil);
        campo13.appendChild(inpCi);
    contenedorInputs1.appendChild(campo13);
    let campo14 = document.createElement('DIV');
    campo14.setAttribute('class', 'campo campo14');
    let etNacionalidad = document.createElement('P');
        etNacionalidad.innerHTML='Nacionalidad:';
        inpN = document.createElement('DIV');
        inpN.setAttribute('class', 'opcionDesplegable oDN');
        o2 = document.createElement('DIV');
        o2.setAttribute('class', 'oSeleccionada oSeleccionadaN');
        o2.setAttribute('onclick', 'opcionesNacionalidad()');
        e2 = document.createElement('P');
        e2.setAttribute('class', 'textoO rT8');
        e2.innerHTML='Mexicana';
        e2.style.marginLeft='10px';
        o2.appendChild(e2);
        d2 = document.createElement('DIV');
        d2.setAttribute('class', 'botonDes8');
        d2.style.width='20px';
        d2.style.height='20px';
        d2.style.marginRight='10px';
        d2.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill: #ffffff; transform: rotate(90deg);" xml:space="preserve"><style type="text/css">	.st0nn{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1nn{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0nn" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1nn" d="M41.5,476.5"/><path class="st1nn" d="M41.5,476.5"/><path class="st0nn" d="M40.5,471.5"/><path class="st0nn" d="M83.5,448.5"/><path class="st1nn" d="M228.5,249.5"/></svg>';
        o2.appendChild(d2);
        inpN.appendChild(o2);
        campo14.appendChild(etNacionalidad);
        campo14.appendChild(inpN);
    contenedorInputs1.appendChild(campo14);
    let campo15 = document.createElement('DIV');
    campo15.setAttribute('class', 'campo campo15');
    let et15 = document.createElement('P');
    et15.innerHTML='Fecha Nacimiento:';
    campo15.appendChild(et15);
    let inp15C = document.createElement('INPUT');
    inp15C.setAttribute('class', 'inpt inpt21');
    inp15C.placeholder='AAAA/MM/DD';
    inp15C.type='date';
    campo15.appendChild(inp15C);
    contenedorInputs1.appendChild(campo15);
    let campo16 = document.createElement('DIV');
    campo16.setAttribute('class', 'campo campo16');
    let et16 = document.createElement('P');
    et16.innerHTML='Fecha Cumpleaños:';
    campo16.appendChild(et16);
    let inp16 = document.createElement('INPUT');
    inp16.setAttribute('class', 'inpt inpt22');
    inp16.placeholder='DD/MM';
    campo16.appendChild(inp16);
    contenedorInputs1.appendChild(campo16);
    inp15C.addEventListener("change", ()=>{
            document.querySelector('.inpt22').value=fechaCumpleaños(inp15C.value);
        });
    let campo17 = document.createElement('DIV');
    campo17.setAttribute('class', 'campo campo17');
    let et17 = document.createElement('P');
    et17.innerHTML='Horario:';
    campo17.appendChild(et17);
    let inp17 = document.createElement('INPUT');
    inp17.setAttribute('class', 'inpt inpt23');
    campo17.appendChild(inp17);
    contenedorInputs1.appendChild(campo17);
    let campo18 = document.createElement('DIV');
    campo18.setAttribute('class', 'campo campo18');
    let et18 = document.createElement('P');
    et18.innerHTML='RFC:';
    et18.style.width='150px';
    campo18.appendChild(et18);
    let inp181 = document.createElement('INPUT');
    inp181.setAttribute('class', 'inpt inpt24');
    inp181.type='file';
    inp181.name='rfc';
    inp181.addEventListener("change", ()=>{
            const archivos = inp181.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[0]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpt34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
    campo18.appendChild(inp181);
    let campo19 = document.createElement('DIV');
    campo19.setAttribute('class', 'campo campo19');
    let et19 = document.createElement('P');
    et19.innerHTML='CURP:';
    et19.style.width='150px';
    campo19.appendChild(et19);
    let inp191 = document.createElement('INPUT');
    inp191.setAttribute('class', 'inpt inpt25');
    inp191.type='file';
    inp191.name='curp';
    inp191.addEventListener("change", ()=>{
            const archivos = inp191.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[1]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpt34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
    campo19.appendChild(inp191);
    let campo20 = document.createElement('DIV');
    campo20.setAttribute('class', 'campo campo20');
    let et20 = document.createElement('P');
    et20.innerHTML='NSS:';
    et20.style.width='150px';
    campo20.appendChild(et20);
    let inp201 = document.createElement('INPUT');
    inp201.setAttribute('class', 'inpt inpt26');
    inp201.type='file';
    inp201.name='nss';
    inp201.addEventListener("change", ()=>{
            const archivos = inp201.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[2]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpt34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
    campo20.appendChild(inp201);
    let campo21 = document.createElement('DIV');
    campo21.setAttribute('class', 'campo campo21');
    let et21 = document.createElement('P');
    et21.innerHTML='Numero Celular:';
    campo21.appendChild(et21);
    let inp21 = document.createElement('INPUT');
    inp21.setAttribute('class', 'inpt inpt27');
    campo21.appendChild(inp21);
    contenedorInputs1.appendChild(campo21);
    let campo22 = document.createElement('DIV');
    campo22.setAttribute('class', 'campo campo22');
    let et22 = document.createElement('P');
    et22.innerHTML='Escolaridad:';
    campo22.appendChild(et22);
    let inp22 = document.createElement('INPUT');
    inp22.setAttribute('class', 'inpt inpt28');
    campo22.appendChild(inp22);
    contenedorInputs1.appendChild(campo22);
    let campo23 = document.createElement('DIV');
    campo23.setAttribute('class', 'campo campo23');
    let et23 = document.createElement('P');
    et23.innerHTML='Salario Mensual:';
    campo23.appendChild(et23);
    let inp23m = document.createElement('INPUT');
    inp23m.setAttribute('class', 'inpt inpt29');
    campo23.appendChild(inp23m);
    inp23m.addEventListener("change", ()=>{
            document.querySelector('.inpt32').value=(parseInt(document.querySelector('.inpt29').value)/30);
        });
    contenedorInputs1.appendChild(campo23);
    let campo24 = document.createElement('DIV');
    campo24.setAttribute('class', 'campo campo24');
    let et24 = document.createElement('P');
    et24.innerHTML='Otros:';
    campo24.appendChild(et24);
    let inp24 = document.createElement('INPUT');
    inp24.setAttribute('class', 'inpt inpt30');
    campo24.appendChild(inp24);
    contenedorInputs1.appendChild(campo24);
    let campo25 = document.createElement('DIV');
    campo25.setAttribute('class', 'campo campo25');
    let et25 = document.createElement('P');
    et25.innerHTML='Antigüedad:';
    campo25.appendChild(et25);
    let inp25 = document.createElement('INPUT');
    inp25.setAttribute('class', 'inpt inpt31');
    campo25.appendChild(inp25);
    contenedorInputs1.appendChild(campo25);
    let campo26 = document.createElement('DIV');
    campo26.setAttribute('class', 'campo campo26');
    let et26 = document.createElement('P');
    et26.innerHTML='Salario Diario:';
    campo26.appendChild(et26);
    let inp26 = document.createElement('INPUT');
    inp26.setAttribute('class', 'inpt inpt32');
    campo26.appendChild(inp26);
    contenedorInputs1.appendChild(campo26);
    caja.appendChild(contenedorInputs1);

    campo1 = document.createElement('DIV');
    campo1.setAttribute('class', 'campo campo1');
    et1 = document.createElement('P');
    et1.innerHTML='Edad:';
    campo1.appendChild(et1);
    inp1 = document.createElement('INPUT');
    inp1.setAttribute('class', 'inpt inpt7');
    campo1.appendChild(inp1);
    contenedorInputs2.appendChild(campo1);
    caja.appendChild(contenedorInputs2);
    campo2 = document.createElement('DIV');
    campo2.setAttribute('class', 'campo campo2');
    et2 = document.createElement('P');
    et2.innerHTML='Dirección:';
    campo2.appendChild(et2);
    inp2 = document.createElement('INPUT');
    inp2.setAttribute('class', 'inpt inpt8');
    campo2.appendChild(inp2);
    contenedorInputs2.appendChild(campo2);
    campo3 = document.createElement('DIV');
    campo3.setAttribute('class', 'campo campo3');
    et3 = document.createElement('P');
    et3.innerHTML='Fecha de Ingreso:';
    campo3.appendChild(et3);
    let inp3F = document.createElement('INPUT');
    inp3F.setAttribute('class', 'inpt inpt9');
    inp3F.placeholder='AAAA/MM/DD';
    inp3F.type='date';
    campo3.appendChild(inp3F);
    contenedorInputs2.appendChild(campo3);
    inp3F.addEventListener("change", ()=>{
            document.querySelector('.inpt31').value=antiguedad(document.querySelector('.inpt9').value);
        });
    campo4 = document.createElement('DIV');
    campo4.setAttribute('class', 'campo campo4');
    et4 = document.createElement('P');
    et4.innerHTML='Área:';
    campo4.appendChild(et4);
    inp4 = document.createElement('DIV');
    inp4.setAttribute('class', 'opcionDesplegable oDA1');
    let o1 = document.createElement('DIV');
    o1.setAttribute('class', 'oSeleccionada oSeleccionadaA1');
    o1.setAttribute('onclick', 'opcionesArea(1)');
    let e1 = document.createElement('P');
    e1.setAttribute('class', 'textoO rr1');
    e1.innerHTML='Plataformas';
    e1.style.marginLeft='10px';
    o1.appendChild(e1);
    let d = document.createElement('DIV');
    d.setAttribute('class', 'botonDes');
    d.style.width='20px';
    d.style.height='20px';
    d.style.marginRight='10px';
    d.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill: #ffffff; transform: rotate(90deg);" xml:space="preserve"><style type="text/css">	.st0nn{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1nn{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0nn" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1nn" d="M41.5,476.5"/><path class="st1nn" d="M41.5,476.5"/><path class="st0nn" d="M40.5,471.5"/><path class="st0nn" d="M83.5,448.5"/><path class="st1nn" d="M228.5,249.5"/></svg>';
    o1.appendChild(d);
    inp4.appendChild(o1);
    campo4.appendChild(inp4);
    contenedorInputs2.appendChild(campo4);
    campo5 = document.createElement('DIV');
    campo5.setAttribute('class', 'campo campo5');
    campo5.style.flexWrap='wrap';
    et5 = document.createElement('P');
    et5.innerHTML='Jerarquía:';
    campo5.appendChild(et5);
    inp5 = document.createElement('INPUT');
    inp5.setAttribute('class', 'inpt inpt110');
    inp5.setAttribute('checked', '');
    inp5.type='radio';
    inp5.name='jefe';
    inp5.value='0';
    inp5.id='0';
    label1 = document.createElement('LABEL');
    label1.for='jefe';
    label1.innerHTML='Subalterno';
    campo5.appendChild(label1);
    campo5.appendChild(inp5);
    let inp52 = document.createElement('INPUT');
    inp52.setAttribute('class', 'inpt inpt111');
    inp52.type='radio';
    inp52.name='jefe';
    inp52.value='1';
    inp52.id='1';
    label2 = document.createElement('LABEL');
    label2.for='jefe';
    label2.innerHTML='Jefe de Area o Gerente';
    campo5.appendChild(label2);
    campo5.appendChild(inp52);
    let inp53 = document.createElement('INPUT');
    inp53.setAttribute('class', 'inpt inpt112');
    inp53.type='radio';
    inp53.name='jefe';
    inp53.value='2';
    inp53.id='2';
    let label3 = document.createElement('LABEL');
    label3.for='jefe';
    label3.innerHTML='Director';
    campo5.appendChild(label3);
    campo5.appendChild(inp53);
    contenedorInputs2.appendChild(campo5);
    campo6 = document.createElement('DIV');
    campo6.setAttribute('class', 'campo campo6');
    et6 = document.createElement('P');
    et6.innerHTML='Foto:';
    campo6.appendChild(et6);
    inp6 = document.createElement('INPUT');
    let formulario = document.createElement('FORM');
    formulario.enctype="multipart/form-data";
    formulario.method='post';
    formulario.id='formulario';
    formulario.name='formulario';
    formulario.action='registrarFoto.php';
    formulario.appendChild(inp6);
    inp6.setAttribute('class', 'inpt inpt12');
    inp6.type='file';
    inp6.name='img';
    inp6.id='img';
    inp6.accept="image/png,.jpeg,.jpg,.svg";
    inp6.style.cursor='pointer';
    label1 = document.createElement('LABEL');
    label1.setAttribute('class', 'etImg');
    label1.setAttribute('for', 'img');
    label1.style.width='100px';
    label1.style.height='100px';
    label1.style.position='absolute';
    label1.style.right='30px';
    label1.style.borderRadius='50%';
    label1.style.cursor='pointer';
    label1.style.backgroundColor='white';
    label1.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; transform: scale(.7);" xml:space="preserve"><path d="M493.5,517.11c0,19.11-100.43-17.11-234.91-17.11S6.5,526.46,6.5,517.11c0-131.34,109.02-237.8,243.5-237.8  S493.5,385.78,493.5,517.11z"/><circle cx="248.82" cy="159.8" r="140.45"/></svg>';
    campo6.appendChild(label1);
    campo6.appendChild(formulario);
    contenedorInputs2.appendChild(campo6);
    contenedorInputs2.appendChild(campo18);
    contenedorInputs2.appendChild(campo19);
    contenedorInputs2.appendChild(campo20);
    campo7 = document.createElement('DIV');
    campo7.setAttribute('class', 'campo campo7');
    et7 = document.createElement('P');
    et7.innerHTML='Salario Diario Imss:';
    campo7.appendChild(et7);
    inp7 = document.createElement('INPUT');
    inp7.setAttribute('class', 'inpt inpt33');
    campo7.appendChild(inp7);
    contenedorInputs1.appendChild(campo7);
    campo8 = document.createElement('DIV');
    campo8.setAttribute('class', 'campo campo8');
    et8 = document.createElement('P');
    et8.innerHTML='Documentos Pendientes:';
    campo8.appendChild(et8);
    inp8 = document.createElement('INPUT');
    inp8.setAttribute('class', 'inpt inpt34');
    campo8.appendChild(inp8);
    campo9 = document.createElement('DIV');
    campo9.setAttribute('class', 'campo campo9');
    et9 = document.createElement('P');
    et9.innerHTML='Crédito Infonavit:';
    et9.style.width='150px';
    campo9.appendChild(et9);
    let inp9I = document.createElement('INPUT');
    inp9I.setAttribute('class', 'inpt inpt35');
    inp9I.type='file';
    inp9I.name='infonavit';
    inp9I.addEventListener("change", ()=>{
            const archivos = inp9I.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[3]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpt34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
    campo9.appendChild(inp9I);
    contenedorInputs2.appendChild(campo9);
    campo10 = document.createElement('DIV');
    campo10.setAttribute('class', 'campo campo10');
    et10 = document.createElement('P');
    et10.innerHTML='Solicitud de Empleo:';
    et10.style.width='150px';
    campo10.appendChild(et10);
    let inp10S = document.createElement('INPUT');
    inp10S.setAttribute('class', 'inpt inpt36');
    inp10S.type='file';
    inp10S.name='solicitudEmpleo';
    inp10S.addEventListener("change", ()=>{
            const archivos = inp10S.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[4]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpt34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
    campo10.appendChild(inp10S);
    contenedorInputs2.appendChild(campo10);
    campo11 = document.createElement('DIV');
    campo11.setAttribute('class', 'campo campo11');
    et11 = document.createElement('P');
    et11.innerHTML='Identificacion Personal:';
    et11.style.width='150px';
    campo11.appendChild(et11);
    let inp11I = document.createElement('INPUT');
    inp11I.setAttribute('class', 'inpt inpt37');
    inp11I.type='file';
    inp11I.name='ine';
    inp11I.addEventListener("change", ()=>{
            const archivos = inp11I.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[5]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpt34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
    campo11.appendChild(inp11I);
    contenedorInputs2.appendChild(campo11);
    campo12 = document.createElement('DIV');
    campo12.setAttribute('class', 'campo campo12');
    et12 = document.createElement('P');
    et12.innerHTML='Acta de Nacimiento:';
    et12.style.width='150px';
    campo12.appendChild(et12);
    let inp12A = document.createElement('INPUT');
    inp12A.setAttribute('class', 'inpt inpt38');
    inp12A.type='file';
    inp12A.name='actaNacimiento';
    inp12A.addEventListener("change", ()=>{
            const archivos = inp12A.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[6]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpt34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
    campo12.appendChild(inp12A);
    contenedorInputs2.appendChild(campo12);
    campo13 = document.createElement('DIV');
    campo13.setAttribute('class', 'campo campo13');
    et13 = document.createElement('P');
    et13.innerHTML='Comprobante de Domicilio:';
    et13.style.width='150px';
    campo13.appendChild(et13);
    let inp13C = document.createElement('INPUT');
    inp13C.setAttribute('class', 'inpt inpt39');
    inp13C.type='file';
    inp13C.name='comprobanteDomicilio';
    inp13C.addEventListener("change", ()=>{
            const archivos = inp13C.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[7]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpt34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
    campo13.appendChild(inp13C);
    contenedorInputs2.appendChild(campo13);
    campo14 = document.createElement('DIV');
    campo14.setAttribute('class', 'campo campo14');
    et14 = document.createElement('P');
    et14.innerHTML='Comprobante de Estudios:';
    et14.style.width='150px';
    campo14.appendChild(et14);
    let inp14C = document.createElement('INPUT');
    inp14C.setAttribute('class', 'inpt inpt40');
    inp14C.type='file';
    inp14C.name='comprobanteEstudios';
    inp14C.addEventListener("change", ()=>{
            const archivos = inp14C.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[8]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpt34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
    campo14.appendChild(inp14C);
    contenedorInputs2.appendChild(campo14);
    campo15 = document.createElement('DIV');
    campo15.setAttribute('class', 'campo campo15');
    et15 = document.createElement('P');
    et15.innerHTML='Cartas de Recomendación:';
    et15.style.width='150px';
    campo15.appendChild(et15);
    let inp15Car = document.createElement('INPUT');
    inp15Car.setAttribute('class', 'inpt inpt41');
    inp15Car.type='file';
    inp15Car.name='cartasRecomendacion';
    inp15Car.addEventListener("change", ()=>{
            const archivos = inp15Car.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[9]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpt34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
    campo15.appendChild(inp15Car);
    contenedorInputs2.appendChild(campo15);
    campo16 = document.createElement('DIV');
    campo16.setAttribute('class', 'campo campo16');
    et16 = document.createElement('P');
    et16.innerHTML='Antecedentes no Penales:';
    et16.style.width='150px';
    campo16.appendChild(et16);
    let inp16A = document.createElement('INPUT');
    inp16A.setAttribute('class', 'inpt inpt42');
    inp16A.type='file';
    inp16A.name='antecedentes';
    inp16A.addEventListener("change", ()=>{
            const archivos = inp16A.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[10]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpt34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
    campo16.appendChild(inp16A);
    contenedorInputs2.appendChild(campo16);
    campo17 = document.createElement('DIV');
    campo17.setAttribute('class', 'campo campo17');
    et17 = document.createElement('P');
    et17.innerHTML='Contratos:';
    et17.style.width='150px';
    campo17.appendChild(et17);
    let inp17C = document.createElement('INPUT');
    inp17C.setAttribute('class', 'inpt inpt43');
    inp17C.type='file';
    inp17C.name='contratos';
    inp17C.addEventListener("change", ()=>{
            const archivos = inp17C.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[11]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpt34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
    campo17.appendChild(inp17C);
    contenedorInputs2.appendChild(campo17);
    campo18 = document.createElement('DIV');
    campo18.setAttribute('class', 'campo campo18');
    et18 = document.createElement('P');
    et18.innerHTML='Observaciones:';
    campo18.appendChild(et18);
    let inp18 = document.createElement('INPUT');
    inp18.setAttribute('class', 'inpt inpt44');
    inp18.name='observaciones';
    campo18.appendChild(inp18);
    campo19 = document.createElement('DIV');
    campo19.setAttribute('class', 'campo campo19');
    et19 = document.createElement('P');
    et19.innerHTML='Uniformes:';
    et19.style.width='150px';
    campo19.appendChild(et19);
    let inp19U = document.createElement('INPUT');
    inp19U.setAttribute('class', 'inpt inpt45');
    inp19U.type='file';
    inp19U.name='uniformes';
    inp19U.addEventListener("change", ()=>{
            const archivos = inp19U.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[12]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpt34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
    campo19.appendChild(inp19U);
    contenedorInputs2.appendChild(campo19);
    campo20 = document.createElement('DIV');
    campo20.setAttribute('class', 'campo campo20');
    et20 = document.createElement('P');
    et20.innerHTML='Datos Bancarios:';
    et20.style.width='150px';
    campo20.appendChild(et20);
    let inp20D = document.createElement('INPUT');
    inp20D.setAttribute('class', 'inpt inpt46');
    inp20D.type='file';
    inp20D.name='claveBanco';
    inp20D.addEventListener("change", ()=>{
            const archivos = inp20D.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[13]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpt34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
    campo20.appendChild(inp20D);
    contenedorInputs2.appendChild(campo20);
    campo22 = document.createElement('DIV');
    campo22.setAttribute('class', 'campo campo22');
    et22 = document.createElement('P');
    et22.innerHTML='Alta:';
    et22.style.width='150px';
    campo22.appendChild(et22);
    let inp22A = document.createElement('INPUT');
    inp22A.setAttribute('class', 'inpt inpt47');
    inp22A.type='file';
    inp22A.name='alta';
    inp22A.addEventListener("change", ()=>{
            const archivos = inp22A.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[14]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpt34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
    campo22.appendChild(inp22A);
    contenedorInputs2.appendChild(campo22);
    campo23 = document.createElement('DIV');
    campo23.setAttribute('class', 'campo campo23');
    et23 = document.createElement('P');
    et23.innerHTML='Contrato Confidencialidad:';
    et23.style.width='150px';
    campo23.appendChild(et23);
    let inp23C = document.createElement('INPUT');
    inp23C.setAttribute('class', 'inpt inpt48');
    inp23C.type='file';
    inp23C.name='contratoConfidencialidad';
    inp23C.addEventListener("change", ()=>{
            const archivos = inp23C.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[15]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpt34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
    campo23.appendChild(inp23C);
    contenedorInputs2.appendChild(campo23);
    contenedorInputs2.appendChild(campo8);
    contenedorInputs2.appendChild(campo18);
    let registrar = document.createElement('BUTTON');
    registrar.setAttribute('class', 'addUser');
    registrar.setAttribute('onclick', 'registrarUsuario()');
    registrar.innerHTML='Registrar';
    registrar.style.height='50px';
    registrar.style.backgroundColor='cadetblue';
    registrar.style.cursor='pointer';
    registrar.style.borderRadius='20px';
    registrar.style.margin='auto';
    registrar.style.border='none';
    registrar.style.outline='none';
    registrar.style.color='white';
    registrar.style.fontFamily='var(--letra)';
    registrar.style.fontSize='calc(.5em + .5vw)';
    registrar.style.fontWeight='blod';
    registrar.style.marginBottom='30px';
    caja.appendChild(registrar);
    fondo.appendChild(caja);
    let cerrar = document.createElement('BUTTON');
    cerrar.setAttribute('class', 'cerrarFondo');
    cerrar.setAttribute('onclick', 'cerrarFondo()');
    cerrar.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0c{fill:#FFFFFF;}</style><polygon class="st0c" points="381.5,63.5 439.5,13.5 393.5,61.5 466.5,13.5 411.5,60.5 479.5,20.5 431.5,62.5 476.5,35.5 412.5,95.5   479.5,52.5 86.5,443.5 118.5,393.5 73.5,438.5 95.5,405.5 71.5,432.5 98.5,389.5 72.5,417.5 90.5,378.5 54.5,432.5 66.5,399.5   32.5,430.5 "/><path class="st0c" d="M37,74L18,34c0,0,31,47,31,44S28,40,28,40l31,33L18,14l41,42L38,23l60,50L50,9l429,434l-53-34l31,28l-37-25  l59,58l-66-52l37,34l-46-29l40,47L37,74z"/></svg>';
    fondo.appendChild(cerrar);
    contenedor.appendChild(fondo);
    let Pen='';
    DPendientes.forEach(p => Pen+=(p));
    let observaciones = document.querySelector('.inpt34');
    if(Pen==''){
        Pen='Ninguno';
    }
    observaciones.value=Pen;

    const input = document.getElementById("img");
    const imagen = document.querySelector(".etImg");
    let url;

    input.addEventListener("change", ()=>{
        const archivos = input.files;
        if(!archivos || !archivos.length){
            return;
        }
        const archivo = archivos[0];
        url = URL.createObjectURL(archivo);
        imagen.innerHTML='';
        let foto = document.createElement('IMG');
        foto.setAttribute('class', 'fotoN');
        foto.style.width='100%';
        foto.style.height='100%';
        foto.src=url;
        foto.style.borderRadius='50%';
        imagen.appendChild(foto);
    });

    //Salto de input
    inp1 = document.querySelector('.inpt1');
    inp1.addEventListener('click', function(){
        inp1.style.boxShadow = '';
    });
    inp1.focus();
    inp2 = document.querySelector('.inpt2');
    inp2.addEventListener("click", function(){
        inp2.style.boxShadow = '';
    });
    inp3 = document.querySelector('.inpt3');
    inp3.addEventListener("click", function(){
        inp3.style.boxShadow = '';
    });
    inp4 = document.querySelector('.inpt4');
    inp4.addEventListener("click", function(){
        inp4.style.boxShadow = '';
    });
    inp5 = document.querySelector('.inpt5');
    inp5.addEventListener("click", function(){
        inp5.style.boxShadow = '';
    });
    inp7 = document.querySelector('.inpt7');
    inp7.addEventListener("click", function(){
        inp7.style.boxShadow = '';
    });
    inp8 = document.querySelector('.inpt8');
    inp8.addEventListener("click", function(){
        inp8.style.boxShadow = '';
    });
    inp9 = document.querySelector('.inpt9');
    inp9.addEventListener("click", function(){
        inp9.style.boxShadow = '';
    });
    
    inp14 = document.querySelector('.inpt17');
    inp15 = document.querySelector('.inpt18');
    inp18 = document.querySelector('.inpt21');
    inp19 = document.querySelector('.inpt22');
    inp20 = document.querySelector('.inpt23');
    inp21 = document.querySelector('.inpt27');
    inp22 = document.querySelector('.inpt28');
    inp23 = document.querySelector('.inpt29');
    inp24 = document.querySelector('.inpt30');
    inp25 = document.querySelector('.inpt31');
    inp26 = document.querySelector('.inpt32');
    inp27 = document.querySelector('.inpt33');
    inp28 = document.querySelector('.inpt34');
    inp29 = document.querySelector('.inpt44');
    

    inp1.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp2.focus();
        }
    });

    inp2.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp3.focus();
        }
    });
    inp3.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp4.focus();
        }
    });
    inp4.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp5.focus();
        }
    });
    inp5.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp7.focus();
        }
    });
    inp7.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp8.focus();
        }
    });
    inp8.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp9.focus();
        }
    });
    inp9.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp14.focus();
        }
    });
    
    inp14.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp15.focus();
        }
    });
    inp15.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp18.focus();
        }
    });
    inp18.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp19.focus();
        }
    });
    inp19.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp20.focus();
        }
    });
    inp20.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp21.focus();
        }
    });
    inp21.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp22.focus();
        }
    });
    inp22.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp23.focus();
        }
    });
    inp23.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp24.focus();
        }
    });
    inp24.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp25.focus();
        }
    });
    inp25.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp26.focus();
        }
    });
    inp26.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp27.focus();
        }
    });
    inp27.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp28.focus();
        }
    });
    inp28.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp29.focus();
        }
    });
    
}

function cerrarFondo(){
    let fondo = document.querySelector('.fondoT');
    fondo.remove();
}

function cargarNotificacionesBuenas(){
    let contenedor = document.querySelector('.contenedorFoto');
    axios.post("notificacionesB.php", {"id":id}).then(respuesta=>{
        if(respuesta.data.length>0){
            let notificacion = document.createElement('DIV');
            notificacion.setAttribute('class', 'notificacion');
            let fondo = document.createElement('DIV');
            fondo.setAttribute('class', 'fnoti');
            let msg = document.createElement('P');
            msg.setAttribute('class', 'msg');
            msg.innerHTML=respuesta.data[0]["msg"];
            msg.style.marginLeft='50px';
            msg.style.order='1';
            fondo.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0noti{fill:rgb(62, 231, 84);}</style><polygon class="st0noti" points="79.87,76.47 79.87,119.77 42.37,98.12 4.87,76.47 42.37,54.82 79.87,33.16 "/><path class="st0noti" d="M475.03,474.98H76.15c-6.6,0-12-5.4-12-12V26.81c0-6.6,5.4-12,12-12h398.88c6.6,0,12,5.4,12,12v436.17  C487.03,469.58,481.63,474.98,475.03,474.98z"/></svg>';
            notificacion.appendChild(fondo);
            notificacion.appendChild(msg);
            if(screen.width < 600){
                notificacion.style.top='-20px';
                notificacion.style.left='210px';
            }else{
                notificacion.style.top='100px';
                notificacion.style.left='450px';
            }
            contenedor.appendChild(notificacion);
            if(respuesta.data.length>1){
                let next = document.createElement('BUTTON');
                next.setAttribute('class', 'Nnotifi');
                next.setAttribute('onclick', 'nextNotificacion(0, "B")');
                next.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill: #ffffff;" xml:space="preserve"><style type="text/css">	.st0nn{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1nn{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0nn" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1nn" d="M41.5,476.5"/><path class="st1nn" d="M41.5,476.5"/><path class="st0nn" d="M40.5,471.5"/><path class="st0nn" d="M83.5,448.5"/><path class="st1nn" d="M228.5,249.5"/></svg>';
                notificacion.appendChild(next);
            }
            verNotificacion(respuesta.data[0]["msg"].replace('Felicidades recibiras un bono de $', ''), 1);
        }
    });
}

function cargarNotificacionesMalas(){
    let contenedor = document.querySelector('.contenedorFoto');
    axios.post("notificacionesM.php", {"id":id}).then(respuesta=>{
        if(respuesta.data.length>0){
            let notificacion = document.createElement('DIV');
            notificacion.setAttribute('class', 'notificacion');
            let fondo = document.createElement('DIV');
            fondo.setAttribute('class', 'fnoti');
            let msg = document.createElement('P');
            msg.setAttribute('class', 'msg');
            msg.innerHTML=respuesta.data[0]["msg"];
            msg.style.marginRight='20px';
            msg.style.marginLeft='8px';
            msg.style.order='1';
            fondo.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; transform: rotateY(180deg);" xml:space="preserve"><style type="text/css">	.st0mala{fill:#E30613;}</style><polygon class="st0mala" points="79.87,76.47 79.87,119.77 42.37,98.12 4.87,76.47 42.37,54.82 79.87,33.16 "/><path class="st0mala" d="M475.03,474.98H76.15c-6.6,0-12-5.4-12-12V26.81c0-6.6,5.4-12,12-12h398.88c6.6,0,12,5.4,12,12v436.17  C487.03,469.58,481.63,474.98,475.03,474.98z"/></svg>';
            notificacion.appendChild(fondo);
            notificacion.appendChild(msg);
            notificacion.style.top='100px';
            notificacion.style.right='450px';
            contenedor.appendChild(notificacion);
            if(respuesta.data.length>1){
                let next = document.createElement('BUTTON');
                next.setAttribute('class', 'Nnotifi');
                next.setAttribute('onclick', 'nextNotificacion(0, "M")');
                next.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill: #ffffff;" xml:space="preserve"><style type="text/css">	.st0nn{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1nn{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0nn" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1nn" d="M41.5,476.5"/><path class="st1nn" d="M41.5,476.5"/><path class="st0nn" d="M40.5,471.5"/><path class="st0nn" d="M83.5,448.5"/><path class="st1nn" d="M228.5,249.5"/></svg>';
                notificacion.appendChild(next);
            }
            verNotificacion(respuesta.data[0]["msg"].replace('Resibiras una sancion tipo ', ''), 2);
        }
    });
}

function nextNotificacion(i, op){
    axios.post("notificaciones"+op+".php", {"id":id}).then(respuesta=>{
        let notificacion = document.querySelector('.notificacion');
        let boton = document.querySelector('.Nnotifi');
        let msg = document.querySelector('.msg');
        if(respuesta.data[i+1]){
            boton.remove();
            let next = document.createElement('BUTTON');
            next.setAttribute('class', 'Nnotifi');
            next.setAttribute('onclick', 'nextNotificacion('+i+')');
            next.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill: #ffffff;" xml:space="preserve"><style type="text/css">	.st0nn{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1nn{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0nn" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1nn" d="M41.5,476.5"/><path class="st1nn" d="M41.5,476.5"/><path class="st0nn" d="M40.5,471.5"/><path class="st0nn" d="M83.5,448.5"/><path class="st1nn" d="M228.5,249.5"/></svg>';
            notificacion.appendChild(next);
            msg.innerHTML=respuesta.data[i]["msg"];
        }else{
            let boton = document.querySelector('.Nnotifi');
            boton.remove();
            msg.innerHTML=respuesta.data[i]["msg"];
        }
        verNotificacion(respuesta.data[0]["msg"].replace('Felicidades recibiras un bono de $', ''), 1);
    });
}

function verNotificacion(notificacion, op){
    axios.post("verNotificacion.php", {"id":id, "notificacion":notificacion, "op":op}).then(respuesta=>{});
}

function opcionesArea(op){
    let contenedor;
    let boton;
    if(op==1){
        contenedor = document.querySelector('.oDA1');
        boton = document.querySelector('.oSeleccionadaA1');
    }else{
        contenedor = document.querySelector('.oDA2');
        boton = document.querySelector('.oSeleccionadaA2');
    }
    boton.removeAttribute('onclick');
    contenedor.style.height='300px';
    let bt = document.querySelector('.botonDes');
    bt.style.animationDuration='.5s';
    bt.style.animationFillMode='forwards';
    bt.style.animationName='girar';
    let o1 = document.createElement('DIV');
    o1.setAttribute('class', 'opD');
    if(op==1){
        o1.setAttribute('onclick', 'fijarOpcion("Comercial", 0)');
    }else{
        o1.setAttribute('onclick', 'fijarOpcion("Comercial", 1)');
    }
    let e1 = document.createElement('P');
    e1.innerHTML='Comercial';
    e1.style.margin='0';
    o1.appendChild(e1);
    contenedor.appendChild(o1);
    let o2 = document.createElement('DIV');
    o2.setAttribute('class', 'opD');
    if(op==1){
        o2.setAttribute('onclick', 'fijarOpcion("Análisis y Proyectos", 0)');
    }else{
        o2.setAttribute('onclick', 'fijarOpcion("Análisis y Proyectos", 1)');
    }
    let e2 = document.createElement('P');
    e2.innerHTML='Análisis y Proyectos';
    e2.style.margin='0';
    o2.appendChild(e2);
    contenedor.appendChild(o2);
    let o3 = document.createElement('DIV');
    o3.setAttribute('class', 'opD');
    o3.style.height='60px';
    if(op==1){
        o3.setAttribute('onclick', 'fijarOpcion("Calidad y Base de datos", 0)');
    }else{
        o3.setAttribute('onclick', 'fijarOpcion("Calidad y Base de datos", 1)');
    }
    let e3 = document.createElement('P');
    e3.innerHTML='Calidad y Base de datos';
    e3.style.margin='0';
    o3.appendChild(e3);
    contenedor.appendChild(o3);
    let o4 = document.createElement('DIV');
    o4.setAttribute('class', 'opD');
    if(op==1){
        o4.setAttribute('onclick', 'fijarOpcion("Operaciones", 0)');
    }else{
        o4.setAttribute('onclick', 'fijarOpcion("Operaciones", 1)');
    }
    let e4 = document.createElement('P');
    e4.innerHTML='Operaciones';
    e4.style.margin='0';
    o4.appendChild(e4);
    contenedor.appendChild(o4);
    let o5 = document.createElement('DIV');
    o5.setAttribute('class', 'opD');
    if(op==1){
        o5.setAttribute('onclick', 'fijarOpcion("Plataformas", 0)');
    }else{
        o5.setAttribute('onclick', 'fijarOpcion("Plataformas", 1)');
    }
    let e5 = document.createElement('P');
    e5.innerHTML='Plataformas';
    e5.style.margin='0';
    o5.appendChild(e5);
    contenedor.appendChild(o5);
    let o6 = document.createElement('DIV');
    o6.setAttribute('class', 'opD');
    if(op==1){
        o6.setAttribute('onclick', 'fijarOpcion("Administración", 0)');
    }else{
        o6.setAttribute('onclick', 'fijarOpcion("Administración", 1)');
    }
    let e6 = document.createElement('P');
    e6.innerHTML='Administración';
    e6.style.margin='0';
    o6.appendChild(e6);
    contenedor.appendChild(o6);
    let o7 = document.createElement('DIV');
    o7.setAttribute('class', 'opD');
    if(op==1){
        o7.setAttribute('onclick', 'fijarOpcion("Dirección", 0)');
    }else{
        o7.setAttribute('onclick', 'fijarOpcion("Dirección", 1)');
    }
    let e7 = document.createElement('P');
    e7.innerHTML='Dirección';
    e7.style.margin='0';
    o7.appendChild(e7);
    contenedor.appendChild(o7);
    let o8 = document.createElement('DIV');
    o8.setAttribute('class', 'opD');
    if(op==1){
        o8.setAttribute('onclick', 'fijarOpcion("Otros", 0)');
    }else{
        o8.setAttribute('onclick', 'fijarOpcion("Otros", 1)');
    }
    let e8 = document.createElement('P');
    e8.innerHTML='Otros';
    e8.style.margin='0';
    o8.appendChild(e8);
    contenedor.appendChild(o8);

}

function opcionesJerarquia(){
    let contenedor = document.querySelector('.oDJ');
    let boton = document.querySelector('.oSeleccionadaJ');
    boton.removeAttribute('onclick');
    contenedor.style.height='120px';
    let bt = document.querySelector('.botonDes2');
    bt.style.animationDuration='.5s';
    bt.style.animationFillMode='forwards';
    bt.style.animationName='girar';
    let o1 = document.createElement('DIV');
    o1.setAttribute('class', 'opD');
    o1.setAttribute('onclick', 'fijarOpcion("Subalterno", 2)');
    let e1 = document.createElement('P');
    e1.innerHTML='Subalterno';
    e1.style.margin='0';
    o1.appendChild(e1);
    contenedor.appendChild(o1);
    let o2 = document.createElement('DIV');
    o2.setAttribute('class', 'opD');
    o2.setAttribute('onclick', 'fijarOpcion("Jefe de Area o Gerente", 2)');
    let e2 = document.createElement('P');
    e2.innerHTML='Jefe de Area o Gerente';
    e2.style.margin='0';
    o2.appendChild(e2);
    contenedor.appendChild(o2);
    let o3 = document.createElement('DIV');
    o3.setAttribute('class', 'opD');
    o3.setAttribute('onclick', 'fijarOpcion("Director", 2)');
    let e3 = document.createElement('P');
    e3.innerHTML='Director';
    e3.style.margin='0';
    o3.appendChild(e3);
    contenedor.appendChild(o3);

}

function opcionesImss(){
    let contenedor = document.querySelector('.oDI');
    let boton = document.querySelector('.oSeleccionadaI');
    boton.removeAttribute('onclick');
    contenedor.style.height='160px';
    let bt = document.querySelector('.botonDes3');
    bt.style.animationDuration='.5s';
    bt.style.animationFillMode='forwards';
    bt.style.animationName='girar';
    let o1 = document.createElement('DIV');
    o1.setAttribute('class', 'opD');
    o1.setAttribute('onclick', 'fijarOpcion("Humana", 3)');
    let e1 = document.createElement('P');
    e1.innerHTML='Humana';
    e1.style.margin='0';
    o1.appendChild(e1);
    contenedor.appendChild(o1);
    let o2 = document.createElement('DIV');
    o2.setAttribute('class', 'opD');
    o2.setAttribute('onclick', 'fijarOpcion("Inmega", 3)');
    let e2 = document.createElement('P');
    e2.innerHTML='Inmega';
    e2.style.margin='0';
    o2.appendChild(e2);
    contenedor.appendChild(o2);
    let o3 = document.createElement('DIV');
    o3.setAttribute('class', 'opD');
    o3.setAttribute('onclick', 'fijarOpcion("SS", 3)');
    let e3 = document.createElement('P');
    e3.innerHTML='SS';
    e3.style.margin='0';
    o3.appendChild(e3);
    contenedor.appendChild(o3);
    let o4 = document.createElement('DIV');
    o4.setAttribute('class', 'opD');
    o4.setAttribute('onclick', 'fijarOpcion("Señales efectivas", 3)');
    let e4 = document.createElement('P');
    e4.innerHTML='Señales efectivas';
    e4.style.margin='0';
    o4.appendChild(e4);
    contenedor.appendChild(o4);
}

function opcionesFisica(){
    let contenedor = document.querySelector('.oDF');
    let boton = document.querySelector('.oSeleccionadaF');
    boton.removeAttribute('onclick');
    contenedor.style.height='210px';
    let bt = document.querySelector('.botonDes4');
    bt.style.animationDuration='.5s';
    bt.style.animationFillMode='forwards';
    bt.style.animationName='girar';
    let o1 = document.createElement('DIV');
    o1.setAttribute('class', 'opD');
    o1.setAttribute('onclick', 'fijarOpcion("CDMX", 4)');
    let e1 = document.createElement('P');
    e1.innerHTML='CDMX';
    e1.style.margin='0';
    o1.appendChild(e1);
    contenedor.appendChild(o1);
    let o2 = document.createElement('DIV');
    o2.setAttribute('class', 'opD');
    o2.setAttribute('onclick', 'fijarOpcion("Guadalajara", 4)');
    let e2 = document.createElement('P');
    e2.innerHTML='Guadalajara';
    e2.style.margin='0';
    o2.appendChild(e2);
    contenedor.appendChild(o2);
    let o3 = document.createElement('DIV');
    o3.setAttribute('class', 'opD');
    o3.setAttribute('onclick', 'fijarOpcion("Monterrey", 4)');
    let e3 = document.createElement('P');
    e3.innerHTML='Monterrey';
    e3.style.margin='0';
    o3.appendChild(e3);
    contenedor.appendChild(o3);
    let o4 = document.createElement('DIV');
    o4.setAttribute('class', 'opD');
    o4.setAttribute('onclick', 'fijarOpcion("Mérida", 4)');
    let e4 = document.createElement('P');
    e4.innerHTML='Mérida';
    e4.style.margin='0';
    o4.appendChild(e4);
    contenedor.appendChild(o4);
    let o5 = document.createElement('DIV');
    o5.setAttribute('class', 'opD');
    o5.setAttribute('onclick', 'fijarOpcion("El Salvador", 4)');
    let e5 = document.createElement('P');
    e5.innerHTML='El Salvador';
    e5.style.margin='0';
    o5.appendChild(e5);
    contenedor.appendChild(o5);
    let o6 = document.createElement('DIV');
    o6.setAttribute('class', 'opD');
    o6.setAttribute('onclick', 'fijarOpcion("Otro", 4)');
    let e6 = document.createElement('P');
    e6.innerHTML='Otro';
    e6.style.margin='0';
    o6.appendChild(e6);
    contenedor.appendChild(o6);
}

function opcionesPago(){
    let contenedor = document.querySelector('.oDP');
    let boton = document.querySelector('.oSeleccionadaP');
    boton.removeAttribute('onclick');
    contenedor.style.height='120px';
    let bt = document.querySelector('.botonDes5');
    bt.style.animationDuration='.5s';
    bt.style.animationFillMode='forwards';
    bt.style.animationName='girar';
    let o1 = document.createElement('DIV');
    o1.setAttribute('class', 'opD');
    o1.setAttribute('onclick', 'fijarOpcion("Semanal", 5)');
    let e1 = document.createElement('P');
    e1.innerHTML='Semanal';
    e1.style.margin='0';
    o1.appendChild(e1);
    contenedor.appendChild(o1);
    let o2 = document.createElement('DIV');
    o2.setAttribute('class', 'opD');
    o2.setAttribute('onclick', 'fijarOpcion("Quincenal", 5)');
    let e2 = document.createElement('P');
    e2.innerHTML='Quincenal';
    e2.style.margin='0';
    o2.appendChild(e2);
    contenedor.appendChild(o2);
    let o3 = document.createElement('DIV');
    o3.setAttribute('class', 'opD');
    o3.setAttribute('onclick', 'fijarOpcion("Otro", 5)');
    let e3 = document.createElement('P');
    e3.innerHTML='Otro';
    e3.style.margin='0';
    o3.appendChild(e3);
    contenedor.appendChild(o3);
}

function opcionesModalidad(){
    let contenedor = document.querySelector('.oDM');
    let boton = document.querySelector('.oSeleccionadaM');
    boton.removeAttribute('onclick');
    contenedor.style.height='120px';
    let bt = document.querySelector('.botonDes6');
    bt.style.animationDuration='.5s';
    bt.style.animationFillMode='forwards';
    bt.style.animationName='girar';
    let o1 = document.createElement('DIV');
    o1.setAttribute('class', 'opD');
    o1.setAttribute('onclick', 'fijarOpcion("Presencial", 6)');
    let e1 = document.createElement('P');
    e1.innerHTML='Presencial';
    e1.style.margin='0';
    o1.appendChild(e1);
    contenedor.appendChild(o1);
    let o2 = document.createElement('DIV');
    o2.setAttribute('class', 'opD');
    o2.setAttribute('onclick', 'fijarOpcion("Hibrido", 6)');
    let e2 = document.createElement('P');
    e2.innerHTML='Hibrido';
    e2.style.margin='0';
    o2.appendChild(e2);
    contenedor.appendChild(o2);
    let o3 = document.createElement('DIV');
    o3.setAttribute('class', 'opD');
    o3.setAttribute('onclick', 'fijarOpcion("Remoto", 6)');
    let e3 = document.createElement('P');
    e3.innerHTML='Remoto';
    e3.style.margin='0';
    o3.appendChild(e3);
    contenedor.appendChild(o3);
}

function opcionesCivil(){
    let contenedor = document.querySelector('.oDCi');
    let boton = document.querySelector('.oSeleccionadaCi');
    boton.removeAttribute('onclick');
    contenedor.style.height='120px';
    let bt = document.querySelector('.botonDes7');
    bt.style.animationDuration='.5s';
    bt.style.animationFillMode='forwards';
    bt.style.animationName='girar';
    let o1 = document.createElement('DIV');
    o1.setAttribute('class', 'opD');
    o1.setAttribute('onclick', 'fijarOpcion("Casad@", 7)');
    let e1 = document.createElement('P');
    e1.innerHTML='Casad@';
    e1.style.margin='0';
    o1.appendChild(e1);
    contenedor.appendChild(o1);
    let o2 = document.createElement('DIV');
    o2.setAttribute('class', 'opD');
    o2.setAttribute('onclick', 'fijarOpcion("Solter@", 7)');
    let e2 = document.createElement('P');
    e2.innerHTML='Solter@';
    e2.style.margin='0';
    o2.appendChild(e2);
    contenedor.appendChild(o2);
    let o3 = document.createElement('DIV');
    o3.setAttribute('class', 'opD');
    o3.setAttribute('onclick', 'fijarOpcion("Otro", 7)');
    let e3 = document.createElement('P');
    e3.innerHTML='Otro';
    e3.style.margin='0';
    o3.appendChild(e3);
    contenedor.appendChild(o3);
}

function opcionesNacionalidad(){
    let contenedor = document.querySelector('.oDN');
    let boton = document.querySelector('.oSeleccionadaN');
    boton.removeAttribute('onclick');
    contenedor.style.height='120px';
    let bt = document.querySelector('.botonDes8');
    bt.style.animationDuration='.5s';
    bt.style.animationFillMode='forwards';
    bt.style.animationName='girar';
    let o1 = document.createElement('DIV');
    o1.setAttribute('class', 'opD');
    o1.setAttribute('onclick', 'fijarOpcion("Mexicana", 8)');
    let e1 = document.createElement('P');
    e1.innerHTML='Mexicana';
    e1.style.margin='0';
    o1.appendChild(e1);
    contenedor.appendChild(o1);
    let o2 = document.createElement('DIV');
    o2.setAttribute('class', 'opD');
    o2.setAttribute('onclick', 'fijarOpcion("Otro", 8)');
    let e2 = document.createElement('P');
    e2.innerHTML='Otro';
    e2.style.margin='0';
    o2.appendChild(e2);
    contenedor.appendChild(o2);
}

function fijarOpcion(op, op2){
    let contenedor;
    if(op2==0){
        contenedor = document.querySelector('.oDA1');
    }else if(op2==1){
        contenedor = document.querySelector('.oDA2');
    }else if(op2==2){
        contenedor = document.querySelector('.oDJ');
    }else if(op2==3){
        contenedor = document.querySelector('.oDI');
    }else if(op2==4){
        contenedor = document.querySelector('.oDF');
    }else if(op2==5){
        contenedor = document.querySelector('.oDP');
    }else if(op2==6){
        contenedor = document.querySelector('.oDM');
    }else if(op2==7){
        contenedor = document.querySelector('.oDCi');
    }else if(op2==8){
        contenedor = document.querySelector('.oDN');
    }
    contenedor.style.height='30px';
    contenedor.innerHTML='';
    let o1 = document.createElement('DIV');
    let e1 = document.createElement('P');
    if(op2==0){
        o1.setAttribute('onclick', 'opcionesArea(1)');
        o1.setAttribute('class', 'oSeleccionada oSeleccionadaA1');
        e1.setAttribute('class', 'textoO rr1');
    }else if(op2==1){
        o1.setAttribute('onclick', 'opcionesArea(2)');
        o1.setAttribute('class', 'oSeleccionada oSeleccionadaA2');
        e1.setAttribute('class', 'textoO rT1');
    }else if(op2==2){
        o1.setAttribute('onclick', 'opcionesJerarquia()');
        o1.setAttribute('class', 'oSeleccionada oSeleccionadaJ');
        e1.setAttribute('class', 'textoO rT2');
    }else if(op2==3){
        o1.setAttribute('onclick', 'opcionesImss()');
        o1.setAttribute('class', 'oSeleccionada oSeleccionadaI');
        e1.setAttribute('class', 'textoO rT3');
    }else if(op2==4){
        o1.setAttribute('onclick', 'opcionesFisica()');
        o1.setAttribute('class', 'oSeleccionada oSeleccionadaF');
        e1.setAttribute('class', 'textoO rT4');
    }else if(op2==5){
        o1.setAttribute('onclick', 'opcionesPago()');
        o1.setAttribute('class', 'oSeleccionada oSeleccionadaP');
        e1.setAttribute('class', 'textoO rT5');
    }else if(op2==6){
        o1.setAttribute('onclick', 'opcionesModalidad()');
        o1.setAttribute('class', 'oSeleccionada oSeleccionadaM');
        e1.setAttribute('class', 'textoO rT6');
    }else if(op2==7){
        o1.setAttribute('onclick', 'opcionesCivil()');
        o1.setAttribute('class', 'oSeleccionada oSeleccionadaCi');
        e1.setAttribute('class', 'textoO rT7');
    }else if(op2==8){
        o1.setAttribute('onclick', 'opcionesNacionalidad()');
        o1.setAttribute('class', 'oSeleccionada oSeleccionadaN');
        e1.setAttribute('class', 'textoO rT8');
    }
    e1.innerHTML=op;
    e1.style.marginLeft='10px';
    o1.appendChild(e1);
    let d = document.createElement('DIV');
    if(op2==2){
        d.setAttribute('class', 'botonDes2');
    }else if(op2==3){
        d.setAttribute('class', 'botonDes3');
    }else if(op2==4){
        d.setAttribute('class', 'botonDes4');
    }else if(op2==5){
        d.setAttribute('class', 'botonDes5');
    }else if(op2==6){
        d.setAttribute('class', 'botonDes6');
    }else if(op2==7){
        d.setAttribute('class', 'botonDes7');
    }else if(op2==8){
        d.setAttribute('class', 'botonDes8');
    }else{
        d.setAttribute('class', 'botonDes');
    }
    d.style.width='20px';
    d.style.height='20px';
    d.style.marginRight='10px';
    d.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill: #ffffff; transform: rotate(90deg);" xml:space="preserve"><style type="text/css">	.st0nn{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1nn{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0nn" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1nn" d="M41.5,476.5"/><path class="st1nn" d="M41.5,476.5"/><path class="st0nn" d="M40.5,471.5"/><path class="st0nn" d="M83.5,448.5"/><path class="st1nn" d="M228.5,249.5"/></svg>';
    o1.appendChild(d);
    contenedor.appendChild(o1);
}

function registrarUsuario(){
    let usuario = document.querySelector('.inpt1').value;
    let pass = document.querySelector('.inpt2').value;
    let nombre = document.querySelector('.inpt3').value;
    let apellidop = document.querySelector('.inpt4').value;
    let apellidom = document.querySelector('.inpt5').value;
    let sexo = document.querySelector('input[name="genero"]:checked').value;
    let edad = document.querySelector('.inpt7').value;
    let direccion = document.querySelector('.inpt8').value;
    let fecha = document.querySelector('.inpt9').value;
    let area = document.querySelector('.rr1').innerHTML;
    let jerarquia = document.querySelector('input[name="jefe"]:checked').value;
    let oficinaAltaImms = document.querySelector('.rT3').innerHTML;
    let oficinaFisica = document.querySelector('.rT4').innerHTML;
    let periodicidadPago = document.querySelector('.rT5').innerHTML;
    let modalidadTrabajo = document.querySelector('.rT6').innerHTML;
    let fechaFirmaContrato = document.querySelector('.inpt17').value;
    let fechaVencimientoContrato = document.querySelector('.inpt18').value;
    let estadoCivil = document.querySelector('.rT7').innerHTML;
    let nacionalidad = document.querySelector('.rT8').innerHTML;
    let fechaNacimiento = document.querySelector('.inpt21').value;
    let fechaCumple = document.querySelector('.inpt22').value;
    let horario = document.querySelector('.inpt23').value;
    let celular = document.querySelector('.inpt27').value;
    let escolaridad = document.querySelector('.inpt28').value;
    let salarioMensual = document.querySelector('.inpt29').value;
    let otros = document.querySelector('.inpt30').value;
    let antiguedad = document.querySelector('.inpt31').value;
    let salarioDiario = document.querySelector('.inpt32').value;
    let salarioDiarioImms = document.querySelector('.inpt33').value;
    let documentosPendientes = document.querySelector('.inpt34').value;
    let observaciones = document.querySelector('.inpt44').value;
    if(observaciones==''){
        observaciones='Ninguna';
    }
    let formulario = document.getElementById('formulario');
    let inp1 = document.querySelector('.inpt1');
    let inp24 = document.querySelector('.inpt24');
    let inp25 = document.querySelector('.inpt25');
    let inp26 = document.querySelector('.inpt26');
    let inp35 = document.querySelector('.inpt35');
    let inp36 = document.querySelector('.inpt36');
    let inp37 = document.querySelector('.inpt37');
    let inp38 = document.querySelector('.inpt38');
    let inp39 = document.querySelector('.inpt39');
    let inp40 = document.querySelector('.inpt40');
    let inp41 = document.querySelector('.inpt41');
    let inp42 = document.querySelector('.inpt42');
    let inp43 = document.querySelector('.inpt43');
    let inp45 = document.querySelector('.inpt45');
    let inp46 = document.querySelector('.inpt46');
    let inp47 = document.querySelector('.inpt47');
    let inp48 = document.querySelector('.inpt48');
    
    formulario.appendChild(inp1);
    formulario.appendChild(inp24);
    formulario.appendChild(inp25);
    formulario.appendChild(inp26);
    formulario.appendChild(inp35);
    formulario.appendChild(inp36);
    formulario.appendChild(inp37);
    formulario.appendChild(inp38);
    formulario.appendChild(inp39);
    formulario.appendChild(inp40);
    formulario.appendChild(inp41);
    formulario.appendChild(inp42);
    formulario.appendChild(inp43);
    formulario.appendChild(inp45);
    formulario.appendChild(inp46);
    formulario.appendChild(inp47);
    formulario.appendChild(inp48);
    

    axios.post("registrarUsuario.php", {"usuario":usuario, "pass":pass, "nombre":nombre, "apellidop": apellidop, "apellidom":apellidom, "sexo":sexo, "edad":edad, "direccion":direccion, "fecha":fecha, "area":area, "jerarquia":jerarquia, "oficinaAltaImms":oficinaAltaImms, "oficinaFisica":oficinaFisica, "periodicidadPago":periodicidadPago, "modalidadTrabajo":modalidadTrabajo, "fechaFirmaContrato":fechaFirmaContrato, "fechaVencimientoContrato":fechaVencimientoContrato, "estadoCivil":estadoCivil, "nacionalidad":nacionalidad, "fechaNacimiento":fechaNacimiento, "fechaCumple":fechaCumple, "horario":horario, "celular":celular, "escolaridad":escolaridad, "salarioMensual":salarioMensual, "otros":otros, "antiguedad":antiguedad, "salarioDiario":salarioDiario, "salarioDiarioImms":salarioDiarioImms, "documentosPendientes":documentosPendientes, "observaciones":observaciones}).then(respuesta=>{console.log(respuesta.data);
        if(respuesta.data=='Exito'){
            //cerrarFondo();
            let contenedor = document.querySelector('.cajaAdd');
            let a = document.createElement('A');
            a.href='javascript:rimagen()';
            a.innerHTML='0';
            contenedor.appendChild(a);
            window.location.href ='javascript:rimagen()';
        }
    });
}

function rimagen(){
    document.forms["formulario"].submit();
}

function eliminarUsuario(id){
    if(confirm('Quieres eliminar este Usuario?')){
        axios.post('eliminarUsuario.php', {"id":id}).then(respuesta=>{console.log(respuesta.data);
            if(respuesta.data=='eliminado'){
                let eliminar = document.querySelector('.u'+id);
                eliminar.remove();
            }
        });
    }
}

function editarUsuario(id){
    let DPendientes=['RFC, ', 'CURP, ', 'NSS, ', 'Credito Infonavit, ', 'Solicitud de Empleo, ', 'Identificacion Personal, ', 'Acta de Nacimiento, ', 'Comprobante de Domicilio, ', 'Comprobante de Estudios, ', 'Cartas de Recomendación, ', 'Antecedentes no Penales, ', 'Contratos, ', 'Uniformes, ', 'Datos Bancarios, ', 'Alta, ', 'Contrato Confidencialidad'];
    let contenedor = document.querySelector('.u'+id);
    let botonE = document.querySelector('.bED'+id);
    botonE.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill: rgb(231, 214, 62); transform: rotate(-90deg) scale(.7);" xml:space="preserve"><style type="text/css">	.st0nn{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1nn{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0nn" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1nn" d="M41.5,476.5"/><path class="st1nn" d="M41.5,476.5"/><path class="st0nn" d="M40.5,471.5"/><path class="st0nn" d="M83.5,448.5"/><path class="st1nn" d="M228.5,249.5"/></svg>Cancelar';
    botonE.setAttribute('onclick', 'minimizarEd('+id+')');
    contenedor.style.height='2100px';
    if(screen.width < 600){
        contenedor.style.height='2880px';
    }
    if(screen.width > 1600){
        contenedor.style.height='2400px';
    }
    contenedor.style.background='linear-gradient(125deg,#ACC0B1 0%, #38BB93 50%, #26986B 100%)';
    contenedor.style.borderRadius='20px';
    contenedor.style.padding='20px';
    axios.post('cargarDatosEditar.php', {"id":id}).then(respuesta=>{
        let c1 = document.createElement('DIV');
        c1.setAttribute('class', 'EdIz');
        c1.style.width='50%';
        c1.style.display='flex';
        c1.style.flexDirection='column';
        c1.style.position='relative';
        c1.style.top='-55px';
        let c2 = document.createElement('DIV');
        c2.setAttribute('class', 'EdDer');
        c2.style.width='50%';
        c2.style.display='flex';
        c2.style.flexDirection='column';
        c2.style.position='relative';
        c2.style.top='-55px';
        let mc1= document.createElement('DIV');
        mc1.style.display='flex';
        mc1.style.justifyContent='space-between';
        let etUsuario = document.createElement('P');
        etUsuario.innerHTML='Usuario:';
        let inpUsuario = document.createElement('INPUT');
        inpUsuario.setAttribute('class', 'inpE inpE1');
        inpUsuario.name='usuario';
        inpUsuario.value=respuesta.data["usuario"];
        mc1.appendChild(etUsuario);
        mc1.appendChild(inpUsuario);
        let mc2= document.createElement('DIV');
        mc2.style.display='flex';
        mc2.style.justifyContent='space-between';
        mc2.style.position='relative';
        let etContraseña = document.createElement('P');
        etContraseña.innerHTML='Contraseña:';
        let inpContraseña = document.createElement('INPUT');
        inpContraseña.type='password';
        inpContraseña.setAttribute('class', 'inpE inpE2');
        inpContraseña.value=respuesta.data["pass"];
        let ver = document.createElement('BUTTON');
        ver.setAttribute('class', 'watch');
        ver.setAttribute('onclick', 'watch(".inpE2")');
        ver.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><style type="text/css">	.st0w{fill:none;stroke:#000000;stroke-width:41;stroke-miterlimit:10;}	.st1w{stroke:#000000;stroke-width:41;stroke-miterlimit:10;}	.st2w{fill:none;stroke:#FFFFFF;stroke-width:27;stroke-miterlimit:10;}	.st3w{fill:none;stroke:#FFFFFF;stroke-width:16;stroke-miterlimit:10;}	.st4w{fill:none;stroke:#000000;stroke-width:16;stroke-miterlimit:10;}</style><path class="st0w" d="M495.98,250C271.26-61.3,2.92,249.69,4.93,250"></path><path class="st0w" d="M4.92,250c224.73,311.3,493.07,0.31,491.06,0l-3.14-4.31"></path><circle class="st1w" cx="259.2" cy="210" r="82.72"></circle><line class="st0w" x1="7.9" y1="254.1" x2="7.9" y2="237.03"></line><path class="st2w" d="M203.3,198.82c0,0,22.76-54.47,85.37-42.28"></path><circle class="st3w" cx="316.02" cy="158.69" r="3.93"></circle><polyline class="st4w" points="32.72,220.87 -6.46,254.1 -12.96,254.1 -8.89,245.69 "></polyline></svg>';
        mc2.appendChild(etContraseña);
        mc2.appendChild(inpContraseña);
        mc2.appendChild(ver);
        let mc3= document.createElement('DIV');
        mc3.style.display='flex';
        mc3.style.justifyContent='space-between';
        let etNombre = document.createElement('P');
        etNombre.innerHTML='Nombre:';
        let inpNombre = document.createElement('INPUT');
        inpNombre.setAttribute('class', 'inpE inpE3');
        inpNombre.value=respuesta.data["nombre"];
        mc3.appendChild(etNombre);
        mc3.appendChild(inpNombre);
        let mc4= document.createElement('DIV');
        mc4.style.display='flex';
        mc4.style.justifyContent='space-between';
        let etApellidoP = document.createElement('P');
        etApellidoP.innerHTML='Apellido Paterno:';
        let inpApellidoP = document.createElement('INPUT');
        inpApellidoP.setAttribute('class', 'inpE inpE4');
        inpApellidoP.value=respuesta.data["apellidop"];
        mc4.appendChild(etApellidoP);
        mc4.appendChild(inpApellidoP);
        let mc5= document.createElement('DIV');
        mc5.style.display='flex';
        mc5.style.justifyContent='space-between';
        let etApellidoM = document.createElement('P');
        etApellidoM.innerHTML='Apellido Materno:';
        let inpApellidoM = document.createElement('INPUT');
        inpApellidoM.setAttribute('class', 'inpE inpE5');
        inpApellidoM.value=respuesta.data["apellidom"];
        mc5.appendChild(etApellidoM);
        mc5.appendChild(inpApellidoM);
        let mc6= document.createElement('DIV');
        mc6.style.display='flex';
        mc6.style.justifyContent='space-between';
        mc6.style.alignItems='center';
        let etSexo = document.createElement('P');
        etSexo.innerHTML='Sexo:';
        let inpSexo = document.createElement('INPUT');
        let etHombre = document.createElement('LABEL');
        etHombre.innerHTML='Hombre';
        inpSexo.type='radio';
        inpSexo.name='genero';
        inpSexo.id='hombre';
        inpSexo.setAttribute('class', 'inpE inpE6H');
        inpSexo.value='hombre';
        let inpSexo2 = document.createElement('INPUT');
        let etMujer = document.createElement('LABEL');
        etMujer.innerHTML='Mujer';
        inpSexo2.type='radio';
        inpSexo2.name='genero';
        inpSexo2.id='mujer';
        inpSexo2.setAttribute('class', 'inpE inpE6M');
        inpSexo2.value='mujer';
        mc6.appendChild(etSexo);
        mc6.appendChild(etHombre);
        mc6.appendChild(inpSexo);
        mc6.appendChild(etMujer);
        mc6.appendChild(inpSexo2);
        if(respuesta.data["sexo"]=='hombre'){
            inpSexo.setAttribute('checked', '');
        }else{
            inpSexo2.setAttribute('checked', '');
        }
        let mc13= document.createElement('DIV');
        mc13.style.display='flex';
        mc13.style.justifyContent='space-between';
        let etImss = document.createElement('P');
        etImss.innerHTML='Oficina alta Imss:';
        inpI = document.createElement('DIV');
        inpI.setAttribute('class', 'opcionDesplegable oDI');
        let o2 = document.createElement('DIV');
        o2.setAttribute('class', 'oSeleccionada oSeleccionadaI');
        o2.setAttribute('onclick', 'opcionesImss()');
        let e2 = document.createElement('P');
        e2.setAttribute('class', 'textoO rT3');
        if(respuesta.data["oficina_alta_imms"]=='Humana'){
            e2.innerHTML='Humana';
        }else if(respuesta.data["oficina_alta_imms"]=='Inmega'){
            e2.innerHTML='Inmega';
        }else if(respuesta.data["oficina_alta_imms"]=='SS'){
            e2.innerHTML='SS';
        }else if(respuesta.data["oficina_alta_imms"]=='Señales Efectivas'){
            e2.innerHTML='Señales Efectivas';
        }
        e2.style.marginLeft='10px';
        o2.appendChild(e2);
        let d2 = document.createElement('DIV');
        d2.setAttribute('class', 'botonDes3');
        d2.style.width='20px';
        d2.style.height='20px';
        d2.style.marginRight='10px';
        d2.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill: #ffffff; transform: rotate(90deg);" xml:space="preserve"><style type="text/css">	.st0nn{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1nn{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0nn" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1nn" d="M41.5,476.5"/><path class="st1nn" d="M41.5,476.5"/><path class="st0nn" d="M40.5,471.5"/><path class="st0nn" d="M83.5,448.5"/><path class="st1nn" d="M228.5,249.5"/></svg>';
        o2.appendChild(d2);
        inpI.appendChild(o2);
        mc13.appendChild(etImss);
        mc13.appendChild(inpI);
        let mc14= document.createElement('DIV');
        mc14.style.display='flex';
        mc14.style.justifyContent='space-between';
        let etFisica = document.createElement('P');
        etFisica.innerHTML='Oficina físicamente:';
        inpF = document.createElement('DIV');
        inpF.setAttribute('class', 'opcionDesplegable oDF');
        o2 = document.createElement('DIV');
        o2.setAttribute('class', 'oSeleccionada oSeleccionadaF');
        o2.setAttribute('onclick', 'opcionesFisica()');
        e2 = document.createElement('P');
        e2.setAttribute('class', 'textoO rT4');
        e2.innerHTML=respuesta.data["oficina_fisicamente"];
        e2.style.marginLeft='10px';
        o2.appendChild(e2);
        d2 = document.createElement('DIV');
        d2.setAttribute('class', 'botonDes4');
        d2.style.width='20px';
        d2.style.height='20px';
        d2.style.marginRight='10px';
        d2.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill: #ffffff; transform: rotate(90deg);" xml:space="preserve"><style type="text/css">	.st0nn{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1nn{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0nn" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1nn" d="M41.5,476.5"/><path class="st1nn" d="M41.5,476.5"/><path class="st0nn" d="M40.5,471.5"/><path class="st0nn" d="M83.5,448.5"/><path class="st1nn" d="M228.5,249.5"/></svg>';
        o2.appendChild(d2);
        inpF.appendChild(o2);
        mc14.appendChild(etFisica);
        mc14.appendChild(inpF);
        let mc15= document.createElement('DIV');
        mc15.style.display='flex';
        mc15.style.justifyContent='space-between';
        let etPago = document.createElement('P');
        etPago.innerHTML='Periodicidad de pago:';
        inpP = document.createElement('DIV');
        inpP.setAttribute('class', 'opcionDesplegable oDP');
        o2 = document.createElement('DIV');
        o2.setAttribute('class', 'oSeleccionada oSeleccionadaP');
        o2.setAttribute('onclick', 'opcionesPago()');
        e2 = document.createElement('P');
        e2.setAttribute('class', 'textoO rT5');
        e2.innerHTML=respuesta.data["periodicidad_de_pago"];
        e2.style.marginLeft='10px';
        o2.appendChild(e2);
        d2 = document.createElement('DIV');
        d2.setAttribute('class', 'botonDes5');
        d2.style.width='20px';
        d2.style.height='20px';
        d2.style.marginRight='10px';
        d2.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill: #ffffff; transform: rotate(90deg);" xml:space="preserve"><style type="text/css">	.st0nn{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1nn{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0nn" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1nn" d="M41.5,476.5"/><path class="st1nn" d="M41.5,476.5"/><path class="st0nn" d="M40.5,471.5"/><path class="st0nn" d="M83.5,448.5"/><path class="st1nn" d="M228.5,249.5"/></svg>';
        o2.appendChild(d2);
        inpP.appendChild(o2);
        mc15.appendChild(etPago);
        mc15.appendChild(inpP);
        let mc16= document.createElement('DIV');
        mc16.style.display='flex';
        mc16.style.justifyContent='space-between';
        let etModalidad = document.createElement('P');
        etModalidad.innerHTML='Modalidad de trabajo:';
        inpM = document.createElement('DIV');
        inpM.setAttribute('class', 'opcionDesplegable oDM');
        o2 = document.createElement('DIV');
        o2.setAttribute('class', 'oSeleccionada oSeleccionadaM');
        o2.setAttribute('onclick', 'opcionesModalidad()');
        e2 = document.createElement('P');
        e2.setAttribute('class', 'textoO rT6');
        e2.innerHTML=respuesta.data["modalidad_trabajo"];
        e2.style.marginLeft='10px';
        o2.appendChild(e2);
        d2 = document.createElement('DIV');
        d2.setAttribute('class', 'botonDes6');
        d2.style.width='20px';
        d2.style.height='20px';
        d2.style.marginRight='10px';
        d2.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill: #ffffff; transform: rotate(90deg);" xml:space="preserve"><style type="text/css">	.st0nn{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1nn{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0nn" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1nn" d="M41.5,476.5"/><path class="st1nn" d="M41.5,476.5"/><path class="st0nn" d="M40.5,471.5"/><path class="st0nn" d="M83.5,448.5"/><path class="st1nn" d="M228.5,249.5"/></svg>';
        o2.appendChild(d2);
        inpM.appendChild(o2);
        mc16.appendChild(etModalidad);
        mc16.appendChild(inpM);
        let mc17= document.createElement('DIV');
        mc17.style.display='flex';
        mc17.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Fecha firma de contrato:';
        inpNombre = document.createElement('INPUT');
        inpNombre.setAttribute('class', 'inpE inpE17');
        inpNombre.type='date';
        inpNombre.value=respuesta.data["fecha_firma_de_contrato"];
        mc17.appendChild(etNombre);
        mc17.appendChild(inpNombre);
        let mc18= document.createElement('DIV');
        mc18.style.display='flex';
        mc18.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Fecha vencimiento de contrato:';
        inpNombre = document.createElement('INPUT');
        inpNombre.setAttribute('class', 'inpE inpE18');
        inpNombre.type='date';
        inpNombre.value=respuesta.data["fecha_vencimiento_de_contrato"];
        mc18.appendChild(etNombre);
        mc18.appendChild(inpNombre);
        let mc19= document.createElement('DIV');
        mc19.style.display='flex';
        mc19.style.justifyContent='space-between';
        let etCivil = document.createElement('P');
        etCivil.innerHTML='Estado civil:';
        inpCi = document.createElement('DIV');
        inpCi.setAttribute('class', 'opcionDesplegable oDCi');
        o2 = document.createElement('DIV');
        o2.setAttribute('class', 'oSeleccionada oSeleccionadaCi');
        o2.setAttribute('onclick', 'opcionesCivil()');
        e2 = document.createElement('P');
        e2.setAttribute('class', 'textoO rT7');
        e2.innerHTML=respuesta.data["estado_civil"];
        e2.style.marginLeft='10px';
        o2.appendChild(e2);
        d2 = document.createElement('DIV');
        d2.setAttribute('class', 'botonDes7');
        d2.style.width='20px';
        d2.style.height='20px';
        d2.style.marginRight='10px';
        d2.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill: #ffffff; transform: rotate(90deg);" xml:space="preserve"><style type="text/css">	.st0nn{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1nn{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0nn" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1nn" d="M41.5,476.5"/><path class="st1nn" d="M41.5,476.5"/><path class="st0nn" d="M40.5,471.5"/><path class="st0nn" d="M83.5,448.5"/><path class="st1nn" d="M228.5,249.5"/></svg>';
        o2.appendChild(d2);
        inpCi.appendChild(o2);
        mc19.appendChild(etCivil);
        mc19.appendChild(inpCi);
        let mc20= document.createElement('DIV');
        mc20.style.display='flex';
        mc20.style.justifyContent='space-between';
        let etNacionalidad = document.createElement('P');
        etNacionalidad.innerHTML='Nacionalidad:';
        inpN = document.createElement('DIV');
        inpN.setAttribute('class', 'opcionDesplegable oDN');
        o2 = document.createElement('DIV');
        o2.setAttribute('class', 'oSeleccionada oSeleccionadaN');
        o2.setAttribute('onclick', 'opcionesNacionalidad()');
        e2 = document.createElement('P');
        e2.setAttribute('class', 'textoO rT8');
        e2.innerHTML=respuesta.data["nacionalidad"];
        e2.style.marginLeft='10px';
        o2.appendChild(e2);
        d2 = document.createElement('DIV');
        d2.setAttribute('class', 'botonDes8');
        d2.style.width='20px';
        d2.style.height='20px';
        d2.style.marginRight='10px';
        d2.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill: #ffffff; transform: rotate(90deg);" xml:space="preserve"><style type="text/css">	.st0nn{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1nn{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0nn" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1nn" d="M41.5,476.5"/><path class="st1nn" d="M41.5,476.5"/><path class="st0nn" d="M40.5,471.5"/><path class="st0nn" d="M83.5,448.5"/><path class="st1nn" d="M228.5,249.5"/></svg>';
        o2.appendChild(d2);
        inpN.appendChild(o2);
        mc20.appendChild(etNacionalidad);
        mc20.appendChild(inpN);
        let mc21= document.createElement('DIV');
        mc21.style.display='flex';
        mc21.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Fecha nacimiento:';
        inpNombreNacimiento = document.createElement('INPUT');
        inpNombreNacimiento.setAttribute('class', 'inpE inpE21');
        inpNombreNacimiento.type='date';
        inpNombreNacimiento.value=respuesta.data["fecha_nacimiento"];
        mc21.appendChild(etNombre);
        mc21.appendChild(inpNombreNacimiento);
        let mc22= document.createElement('DIV');
        mc22.style.display='flex';
        mc22.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Fecha cumpleaños:';
        inpNombreCumple = document.createElement('INPUT');
        inpNombreCumple.setAttribute('class', 'inpE inpE22');
        inpNombreCumple.value=respuesta.data["fecha_cumple"];
        mc22.appendChild(etNombre);
        mc22.appendChild(inpNombreCumple);
        inpNombreNacimiento.addEventListener("change", ()=>{
            inpNombreCumple.value=fechaCumpleaños(inpNombreNacimiento.value);
        });
        let mc23= document.createElement('DIV');
        mc23.style.display='flex';
        mc23.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Horario:';
        inpNombre = document.createElement('INPUT');
        inpNombre.setAttribute('class', 'inpE inpE23');
        inpNombre.value=respuesta.data["horario"];
        mc23.appendChild(etNombre);
        mc23.appendChild(inpNombre);
        let mc24= document.createElement('DIV');
        mc24.style.display='flex';
        mc24.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='RFC:';
        etNombre.style.marginLeft='20px';
        etNombre.style.width='150px';
        let inpNombreRfc = document.createElement('INPUT');
        inpNombreRfc.setAttribute('class', 'inpE inpE24');
        inpNombreRfc.type='file';
        mc24.appendChild(etNombre);
        mc24.appendChild(inpNombreRfc);
        if(respuesta.data["rfc"]!='' && respuesta.data["rfc"]!='0'){
            DPendientes[0]='';
            let archivo = document.createElement('A');
            archivo.style.width='50px';
            archivo.style.height='50px';
            let arrayCadena = respuesta.data["rfc"].split('.');
            if(arrayCadena[1]=='docx'){
                let img = document.createElement('IMG');
                img.src='img/word.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='jpg' || arrayCadena[1]=='png' || arrayCadena[1]=='jpge'){
                let img = document.createElement('IMG');
                img.src='img/img.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='xlsx'){
                let img = document.createElement('IMG');
                img.src='img/excel.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='pdf'){
                let img = document.createElement('IMG');
                img.src='img/pdf.png';
                archivo.appendChild(img);
            }else{
                archivo.innerHTML='Archivo';
            }
            archivo.href='archivos/'+respuesta.data["rfc"];
            mc24.appendChild(archivo);
        }else{
            inpNombreRfc.addEventListener("change", ()=>{
            const archivos = inpNombreRfc.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[0]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpE34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
        }
        let mc25= document.createElement('DIV');
        mc25.style.display='flex';
        mc25.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='CURP:';
        etNombre.style.marginLeft='20px';
        etNombre.style.width='150px';
        let inpNombreCurp = document.createElement('INPUT');
        inpNombreCurp.setAttribute('class', 'inpE inpE25');
        inpNombreCurp.type='file';
        inpNombreCurp.innerHTML=respuesta.data["curp"];
        mc25.appendChild(etNombre);
        mc25.appendChild(inpNombreCurp);
        if(respuesta.data["curp"]!='' && respuesta.data["curp"]!='0'){
            DPendientes[1]='';
            let archivo = document.createElement('A');
            archivo.style.width='50px';
            archivo.style.height='50px';
            let arrayCadena = respuesta.data["curp"].split('.');
            if(arrayCadena[1]=='docx'){
                let img = document.createElement('IMG');
                img.src='img/word.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='jpg' || arrayCadena[1]=='png' || arrayCadena[1]=='jpge'){
                let img = document.createElement('IMG');
                img.src='img/img.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='xlsx'){
                let img = document.createElement('IMG');
                img.src='img/excel.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='pdf'){
                let img = document.createElement('IMG');
                img.src='img/pdf.png';
                archivo.appendChild(img);
            }else{
                archivo.innerHTML='Archivo';
            }
            archivo.href='archivos/'+respuesta.data["curp"];
            mc25.appendChild(archivo);
        }else{
            inpNombreCurp.addEventListener("change", ()=>{
            const archivos = inpNombreCurp.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[1]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpE34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
        }
        let mc26= document.createElement('DIV');
        mc26.style.display='flex';
        mc26.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='NSS:';
        etNombre.style.marginLeft='20px';
        etNombre.style.width='150px';
        let inpNombreNss = document.createElement('INPUT');
        inpNombreNss.setAttribute('class', 'inpE inpE26');
        inpNombreNss.type='file';
        inpNombreNss.innerHTML=respuesta.data["nss"];
        mc26.appendChild(etNombre);
        mc26.appendChild(inpNombreNss);
        if(respuesta.data["nss"]!='' && respuesta.data["nss"]!='0'){
            DPendientes[2]='';
            let archivo = document.createElement('A');
            archivo.style.width='50px';
            archivo.style.height='50px';
            let arrayCadena = respuesta.data["nss"].split('.');
            if(arrayCadena[1]=='docx'){
                let img = document.createElement('IMG');
                img.src='img/word.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='jpg' || arrayCadena[1]=='png' || arrayCadena[1]=='jpge'){
                let img = document.createElement('IMG');
                img.src='img/img.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='xlsx'){
                let img = document.createElement('IMG');
                img.src='img/excel.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='pdf'){
                let img = document.createElement('IMG');
                img.src='img/pdf.png';
                archivo.appendChild(img);
            }else{
                archivo.innerHTML='Archivo';
            }
            archivo.href='archivos/'+respuesta.data["nss"];
            mc26.appendChild(archivo);
        }else{
            inpNombreNss.addEventListener("change", ()=>{
            const archivos = inpNombreNss.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[2]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpE34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
        }
        let mc27= document.createElement('DIV');
        mc27.style.display='flex';
        mc27.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Numero Celular:';
        inpNombre = document.createElement('INPUT');
        inpNombre.setAttribute('class', 'inpE inpE27');
        inpNombre.value=respuesta.data["numero_celular"];
        mc27.appendChild(etNombre);
        mc27.appendChild(inpNombre);
        let mc28= document.createElement('DIV');
        mc28.style.display='flex';
        mc28.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Escolaridad:';
        inpNombre = document.createElement('INPUT');
        inpNombre.setAttribute('class', 'inpE inpE28');
        inpNombre.value=respuesta.data["escolaridad"];
        mc28.appendChild(etNombre);
        mc28.appendChild(inpNombre);
        let mc29= document.createElement('DIV');
        mc29.style.display='flex';
        mc29.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Salario Mensual:';
        inpNombre = document.createElement('INPUT');
        inpNombre.setAttribute('class', 'inpE inpE29');
        inpNombre.value=respuesta.data["salario_mensual"];
        mc29.appendChild(etNombre);
        mc29.appendChild(inpNombre);
        mc29.addEventListener("change", ()=>{
            document.querySelector('.inpE32').value=(parseInt(document.querySelector('.inpE29').value)/30);
        });
        let mc30= document.createElement('DIV');
        mc30.style.display='flex';
        mc30.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Otros:';
        inpNombre = document.createElement('INPUT');
        inpNombre.setAttribute('class', 'inpE inpE30');
        inpNombre.value=respuesta.data["otros"];
        mc30.appendChild(etNombre);
        mc30.appendChild(inpNombre);
        let mc31= document.createElement('DIV');
        mc31.style.display='flex';
        mc31.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Antigüedad:';
        inpNombreA = document.createElement('INPUT');
        inpNombreA.setAttribute('class', 'inpE inpE31');

        mc31.appendChild(etNombre);
        mc31.appendChild(inpNombreA);
        let mc32= document.createElement('DIV');
        mc32.style.display='flex';
        mc32.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Salario Diario:';
        inpNombre = document.createElement('INPUT');
        inpNombre.setAttribute('class', 'inpE inpE32');
        inpNombre.value=respuesta.data["salario_diario"];
        mc32.appendChild(etNombre);
        mc32.appendChild(inpNombre);
        c1.appendChild(mc1);
        c1.appendChild(mc2);
        c1.appendChild(mc3);
        c1.appendChild(mc4);
        c1.appendChild(mc5);
        c1.appendChild(mc6);
        c1.appendChild(mc13);
        c1.appendChild(mc14);
        c1.appendChild(mc15);
        c1.appendChild(mc16);
        c1.appendChild(mc17);
        c1.appendChild(mc18);
        c1.appendChild(mc19);
        c1.appendChild(mc20);
        c1.appendChild(mc21);
        c1.appendChild(mc22);
        c1.appendChild(mc23);
        c1.appendChild(mc27);
        c1.appendChild(mc28);
        c1.appendChild(mc29);
        c1.appendChild(mc30);
        c1.appendChild(mc31);
        c1.appendChild(mc32);

        let mc7= document.createElement('DIV');
        mc7.style.display='flex';
        mc7.style.justifyContent='space-between';
        let etEdad = document.createElement('P');
        etEdad.innerHTML='Edad:';
        etEdad.style.marginLeft='20px';
        let inpEdad = document.createElement('INPUT');
        inpEdad.setAttribute('class', 'inpE inpE7');
        inpEdad.value=respuesta.data["edad"];
        mc7.appendChild(etEdad);
        mc7.appendChild(inpEdad);
        let mc8= document.createElement('DIV');
        mc8.style.display='flex';
        mc8.style.justifyContent='space-between';
        let etDireccion = document.createElement('P');
        etDireccion.innerHTML='Dirección:';
        etDireccion.style.marginLeft='20px';
        let inpDireccion = document.createElement('INPUT');
        inpDireccion.setAttribute('class', 'inpE inpE8');
        inpDireccion.value=respuesta.data["direccion"];
        mc8.appendChild(etDireccion);
        mc8.appendChild(inpDireccion);
        let mc9= document.createElement('DIV');
        mc9.style.display='flex';
        mc9.style.justifyContent='space-between';
        let etFecha = document.createElement('P');
        etFecha.innerHTML='Fecha de Ingreso:';
        etFecha.style.marginLeft='20px';
        let inpFecha = document.createElement('INPUT');
        inpFecha.setAttribute('class', 'inpE inpE9');
        inpFecha.type='date';
        inpFecha.value=respuesta.data["fecha"];
        mc9.appendChild(etFecha);
        mc9.appendChild(inpFecha);
        inpFecha.addEventListener("change", ()=>{
            inpNombreA.value=antiguedad(document.querySelector('.inpE9').value);
        });
        inpNombreA.value=antiguedad(respuesta.data["fecha"]);
        let mc10= document.createElement('DIV');
        mc10.style.display='flex';
        mc10.style.justifyContent='space-between';
        mc10.style.alignItems='center';
        let etArea = document.createElement('P');
        etArea.innerHTML='Área:';
        etArea.style.marginLeft='20px';
        inpA = document.createElement('DIV');
        inpA.setAttribute('class', 'opcionDesplegable oDA2');
        let o1 = document.createElement('DIV');
        o1.setAttribute('class', 'oSeleccionada oSeleccionadaA2');
        o1.setAttribute('onclick', 'opcionesArea(2)');
        let e1 = document.createElement('P');
        e1.setAttribute('class', 'textoO rT1');
        e1.innerHTML=respuesta.data["area"];
        e1.style.marginLeft='10px';
        o1.appendChild(e1);
        let d = document.createElement('DIV');
        d.setAttribute('class', 'botonDes');
        d.style.width='20px';
        d.style.height='20px';
        d.style.marginRight='10px';
        d.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill: #ffffff; transform: rotate(90deg);" xml:space="preserve"><style type="text/css">	.st0nn1{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1nn1{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0nn1" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1nn1" d="M41.5,476.5"/><path class="st1nn" d="M41.5,476.5"/><path class="st0nn" d="M40.5,471.5"/><path class="st0nn1" d="M83.5,448.5"/><path class="st1nn1" d="M228.5,249.5"/></svg>';
        o1.appendChild(d);
        inpA.appendChild(o1);
        mc10.appendChild(etArea);
        mc10.appendChild(inpA);
        let mc11= document.createElement('DIV');
        mc11.style.display='flex';
        mc11.style.justifyContent='space-between';
        mc11.style.alignItems='center';
        let etJerarquia = document.createElement('P');
        etJerarquia.innerHTML='Jerarquía:';
        etJerarquia.style.marginLeft='20px';
        inpJ = document.createElement('DIV');
        inpJ.setAttribute('class', 'opcionDesplegable oDJ');
        o2 = document.createElement('DIV');
        o2.setAttribute('class', 'oSeleccionada oSeleccionadaJ');
        o2.setAttribute('onclick', 'opcionesJerarquia()');
        e2 = document.createElement('P');
        e2.setAttribute('class', 'textoO rT2');
        if(respuesta.data["jefe"]==0){
            e2.innerHTML='Subalterno';
        }else if(respuesta.data["jefe"]==1){
            e2.innerHTML='Jefe de Area o Gerente';
        }else if(respuesta.data["jefe"]==2){
            e2.innerHTML='Director';
        }
        e2.style.marginLeft='10px';
        o2.appendChild(e2);
        d2 = document.createElement('DIV');
        d2.setAttribute('class', 'botonDes2');
        d2.style.width='20px';
        d2.style.height='20px';
        d2.style.marginRight='10px';
        d2.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; fill: #ffffff; transform: rotate(90deg);" xml:space="preserve"><style type="text/css">	.st0nn{stroke:#FFFFFF;stroke-miterlimit:10;}	.st1nn{fill:#FFFFFF;stroke:#ffffff;stroke-miterlimit:10;}</style><path class="st0nn" d="M32.13,76.4L32.09,9l207.9,121.89l207.9,121.89L240.12,374.89L32.36,497.01c0,0,0.14-9.51,0.14-17.51  s0.04-38.8-0.18-57.91c97.39-56.03,194.79-112.06,292.18-168.09C227.04,194.47,129.59,135.43,32.13,76.4z"/><path class="st1nn" d="M41.5,476.5"/><path class="st1nn" d="M41.5,476.5"/><path class="st0nn" d="M40.5,471.5"/><path class="st0nn" d="M83.5,448.5"/><path class="st1nn" d="M228.5,249.5"/></svg>';
        o2.appendChild(d2);
        inpJ.appendChild(o2);
        mc11.appendChild(etJerarquia);
        mc11.appendChild(inpJ);

        let mc12= document.createElement('DIV');
        mc12.style.display='flex';
        mc12.style.justifyContent='center';
        mc12.style.width='100%';
        let formulario = document.createElement('FORM');
        formulario.enctype="multipart/form-data";
        formulario.method='post';
        formulario.id='formulario';
        formulario.name='formulario';
        formulario.action='actualizarFoto.php';
        let inpFoto = document.createElement('INPUT');
        inpFoto.type='file';
        inpFoto.name='img2';
        inpFoto.id='img2';
        inpFoto.accept="image/png,.jpeg,.jpg,.svg";
        inpFoto.style.cursor='pointer';
        inpFoto.style.opacity='0%';
        formulario.appendChild(inpFoto);
        label1 = document.createElement('LABEL');
        label1.setAttribute('class', 'etImg etFoto'+id);
        label1.setAttribute('for', 'img2');
        label1.style.width='250px';
        label1.style.height='250px';
        label1.style.position='absolute';
        label1.style.borderRadius='50%';
        label1.style.cursor='pointer';
        label1.style.backgroundColor='white';
        label1.style.bottom='75px';
        let imagen = document.createElement('IMG');
        imagen.src='img/fotos/'+respuesta.data["foto"];
        imagen.style.width='100%';
        imagen.style.height='100%';
        imagen.style.borderRadius='50%';
        imagen.style.position='relative';
        let borroso = document.createElement('DIV');
        borroso.setAttribute('class', 'hovImg');
        borroso.style.width='100%';
        borroso.style.height='100%';
        borroso.style.borderRadius='50%';
        borroso.style.backgroundColor='#000000';
        borroso.style.opacity='0%';
        borroso.style.position='absolute';
        borroso.style.bottom='0px';
        borroso.style.backdropFilter='15px';
        borroso.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; transform: scale(.5);" xml:space="preserve"><style type="text/css">	.st0editar2{fill:#ffffff;}	.st1{fill:none;stroke:#00000000;stroke-width:14;stroke-miterlimit:10;}</style><g id="Capa_3">	<path class="st0editar2" d="M41.51,457.78l7.83-54.94c0,0,62.56-11.11,50.87,51.36l-58.18,11.29L41.51,457.78z"/>	<path class="st0editar2" d="M112.24,451.67l112.2-21.14l10.57-79.67l-80.49,17.89l19.11-69.92l-78.46,28.46l18.7-77.28l-42.28,37.44   l-18.7,102.44C52.89,389.88,123.63,388.25,112.24,451.67z"/>	<polygon class="st0editar2" points="131.76,232.15 343.41,46.79 391.11,95.31 178.1,286.63 113.06,308.58  "/>	<polygon class="st0editar2" points="170.78,354.92 190.29,289.88 399.48,103.7 437.45,142.2 240.7,337.03  "/>	<polygon class="st0editar2" points="235.01,417.52 246.39,343.54 446.11,150.85 481.35,186.63 235.01,421.59  "/></g><g id="Capa_1">	<path class="st1" d="M126.07,229.72L65.9,285c0,0-34.15,186.18-28.46,185.37c5.69-0.81,190.24-35.77,190.24-35.77l13.01-91.06   l-78.05,18.7l20.33-70.73l-79.67,26.83L126.07,229.72L342.33,37.85l148.78,149.59L227.69,434.59"/>	<path class="st1" d="M46.26,397.72c0,0,70.63-12.89,61.39,59.55"/>	<line class="st1" x1="178.1" y1="293.14" x2="399.48" y2="95.31"/>	<line class="st1" x1="240.7" y1="343.54" x2="446.11" y2="142.2"/>	<g id="Capa_2">	</g></g></svg>';
        label1.appendChild(imagen);
        label1.appendChild(borroso);
        inpFoto.setAttribute('class', 'inpE inpF'+id);
        mc12.appendChild(formulario);
        mc12.appendChild(label1);
        let mc33= document.createElement('DIV');
        mc33.style.display='flex';
        mc33.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Salario Diario Imss:';
        inpNombre = document.createElement('INPUT');
        inpNombre.setAttribute('class', 'inpE inpE33');
        inpNombre.value=respuesta.data["salario_diario_imms"];
        mc33.appendChild(etNombre);
        mc33.appendChild(inpNombre);
        let mc34= document.createElement('DIV');
        mc34.style.display='flex';
        mc34.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Documentos Pendientes:';
        etNombre.style.marginLeft='20px';
        let inpNombreP = document.createElement('INPUT');
        inpNombreP.setAttribute('class', 'inpE inpE34');
        mc34.appendChild(etNombre);
        mc34.appendChild(inpNombreP);
        let mc35= document.createElement('DIV');
        mc35.style.display='flex';
        mc35.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Crédito Infonavit:';
        etNombre.style.marginLeft='20px';
        etNombre.style.width='150px';
        let inpNombreCredito = document.createElement('INPUT');
        inpNombreCredito.setAttribute('class', 'inpE inpE35');
        inpNombreCredito.type='file';
        inpNombreCredito.innerHTML=respuesta.data["credito_infonavit"];
        mc35.appendChild(etNombre);
        mc35.appendChild(inpNombreCredito);
        if(respuesta.data["credito_infonavit"]!='' && respuesta.data["credito_infonavit"]!='0'){
            DPendientes[3]='';
            let archivo = document.createElement('A');
            archivo.style.width='50px';
            archivo.style.height='50px';
            let arrayCadena = respuesta.data["credito_infonavit"].split('.');
            if(arrayCadena[1]=='docx'){
                let img = document.createElement('IMG');
                img.src='img/word.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='jpg' || arrayCadena[1]=='png' || arrayCadena[1]=='jpge'){
                let img = document.createElement('IMG');
                img.src='img/img.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='xlsx'){
                let img = document.createElement('IMG');
                img.src='img/excel.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='pdf'){
                let img = document.createElement('IMG');
                img.src='img/pdf.png';
                archivo.appendChild(img);
            }else{
                archivo.innerHTML='Archivo';
            }
            archivo.href='archivos/'+respuesta.data["credito_infonavit"];
            mc35.appendChild(archivo);
        }else{
            inpNombreCredito.addEventListener("change", ()=>{
            const archivos = inpNombreCredito.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[3]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpE34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
        }
        let mc36= document.createElement('DIV');
        mc36.style.display='flex';
        mc36.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Solicitud de Empleo:';
        etNombre.style.marginLeft='20px';
        etNombre.style.width='150px';
        let inpNombreSoli = document.createElement('INPUT');
        inpNombreSoli.setAttribute('class', 'inpE inpE36');
        inpNombreSoli.type='file';
        inpNombreSoli.innerHTML=respuesta.data["solicitud_de_empleo"];
        mc36.appendChild(etNombre);
        mc36.appendChild(inpNombreSoli);
        if(respuesta.data["solicitud_de_empleo"]!='' && respuesta.data["solicitud_de_empleo"]!='0'){
            DPendientes[4]='';
            let archivo = document.createElement('A');
            archivo.style.width='50px';
            archivo.style.height='50px';
            let arrayCadena = respuesta.data["solicitud_de_empleo"].split('.');
            if(arrayCadena[1]=='docx'){
                let img = document.createElement('IMG');
                img.src='img/word.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='jpg' || arrayCadena[1]=='png' || arrayCadena[1]=='jpge'){
                let img = document.createElement('IMG');
                img.src='img/img.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='xlsx'){
                let img = document.createElement('IMG');
                img.src='img/excel.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='pdf'){
                let img = document.createElement('IMG');
                img.src='img/pdf.png';
                archivo.appendChild(img);
            }else{
                archivo.innerHTML='Archivo';
            }
            archivo.href='archivos/'+respuesta.data["solicitud_de_empleo"];
            mc36.appendChild(archivo);
        }else{
            inpNombreSoli.addEventListener("change", ()=>{
            const archivos = inpNombreSoli.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[4]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpE34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
        }
        let mc37= document.createElement('DIV');
        mc37.style.display='flex';
        mc37.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Identificación Personal:';
        etNombre.style.marginLeft='20px';
        etNombre.style.width='150px';
        let inpNombreIne = document.createElement('INPUT');
        inpNombreIne.setAttribute('class', 'inpE inpE37');
        inpNombreIne.type='file';
        mc37.appendChild(etNombre);
        mc37.appendChild(inpNombreIne);
        if(respuesta.data["ine"]!='' && respuesta.data["ine"]!='0'){
            DPendientes[5]='';
            let archivo = document.createElement('A');
            archivo.style.width='50px';
            archivo.style.height='50px';
            let arrayCadena = respuesta.data["ine"].split('.');
            if(arrayCadena[1]=='docx'){
                let img = document.createElement('IMG');
                img.src='img/word.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='jpg' || arrayCadena[1]=='png' || arrayCadena[1]=='jpge'){
                let img = document.createElement('IMG');
                img.src='img/img.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='xlsx'){
                let img = document.createElement('IMG');
                img.src='img/excel.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='pdf'){
                let img = document.createElement('IMG');
                img.src='img/pdf.png';
                archivo.appendChild(img);
            }else{
                archivo.innerHTML='Archivo';
            }
            archivo.href='archivos/'+respuesta.data["ine"];
            mc37.appendChild(archivo);
        }else{
            inpNombreIne.addEventListener("change", ()=>{
            const archivos = inpNombreIne.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[5]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpE34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
        }
        let mc38= document.createElement('DIV');
        mc38.style.display='flex';
        mc38.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Acta de Nacimiento:';
        etNombre.style.marginLeft='20px';
        etNombre.style.width='150px';
        let inpNombreActa = document.createElement('INPUT');
        inpNombreActa.setAttribute('class', 'inpE inpE38');
        inpNombreActa.type='file';
        inpNombreActa.innerHTML=respuesta.data["acta_de_nacimiento"];
        mc38.appendChild(etNombre);
        mc38.appendChild(inpNombreActa);
        if(respuesta.data["acta_de_nacimiento"]!='' && respuesta.data["acta_de_nacimiento"]!='0'){
            DPendientes[6]='';
            let archivo = document.createElement('A');
            archivo.style.width='50px';
            archivo.style.height='50px';
            let arrayCadena = respuesta.data["acta_de_nacimiento"].split('.');
            if(arrayCadena[1]=='docx'){
                let img = document.createElement('IMG');
                img.src='img/word.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='jpg' || arrayCadena[1]=='png' || arrayCadena[1]=='jpge'){
                let img = document.createElement('IMG');
                img.src='img/img.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='xlsx'){
                let img = document.createElement('IMG');
                img.src='img/excel.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='pdf'){
                let img = document.createElement('IMG');
                img.src='img/pdf.png';
                archivo.appendChild(img);
            }else{
                archivo.innerHTML='Archivo';
            }
            archivo.href='archivos/'+respuesta.data["acta_de_nacimiento"];
            mc38.appendChild(archivo);
        }else{
            inpNombreActa.addEventListener("change", ()=>{
            const archivos = inpNombreActa.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[6]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpE34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
        }
        let mc39= document.createElement('DIV');
        mc39.style.display='flex';
        mc39.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Comprobante de Domicilio:';
        etNombre.style.marginLeft='20px';
        etNombre.style.width='150px';
        let inpNombreDomi = document.createElement('INPUT');
        inpNombreDomi.setAttribute('class', 'inpE inpE39');
        inpNombreDomi.type='file';
        inpNombreDomi.innerHTML=respuesta.data["comprobante_domicilio"];
        mc39.appendChild(etNombre);
        mc39.appendChild(inpNombreDomi);
        if(respuesta.data["comprobante_domicilio"]!='' && respuesta.data["comprobante_domicilio"]!='0'){
            DPendientes[7]='';
            let archivo = document.createElement('A');
            archivo.style.width='50px';
            archivo.style.height='50px';
            let arrayCadena = respuesta.data["comprobante_domicilio"].split('.');
            if(arrayCadena[1]=='docx'){
                let img = document.createElement('IMG');
                img.src='img/word.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='jpg' || arrayCadena[1]=='png' || arrayCadena[1]=='jpge'){
                let img = document.createElement('IMG');
                img.src='img/img.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='xlsx'){
                let img = document.createElement('IMG');
                img.src='img/excel.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='pdf'){
                let img = document.createElement('IMG');
                img.src='img/pdf.png';
                archivo.appendChild(img);
            }else{
                archivo.innerHTML='Archivo';
            }
            archivo.href='archivos/'+respuesta.data["comprobante_domicilio"];
            mc39.appendChild(archivo);
        }else{
            inpNombreDomi.addEventListener("change", ()=>{
            const archivos = inpNombreDomi.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[7]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpE34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
        }
        let mc40= document.createElement('DIV');
        mc40.style.display='flex';
        mc40.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Comprobante de Estudios:';
        etNombre.style.marginLeft='20px';
        etNombre.style.width='150px';
        let inpNombreEstu = document.createElement('INPUT');
        inpNombreEstu.setAttribute('class', 'inpE inpE40');
        inpNombreEstu.type='file';
        inpNombreEstu.innerHTML=respuesta.data["comprobante_de_estudios"];
        mc40.appendChild(etNombre);
        mc40.appendChild(inpNombreEstu);
        if(respuesta.data["comprobante_de_estudios"]!='' && respuesta.data["comprobante_de_estudios"]!='0'){
            DPendientes[8]='';
            let archivo = document.createElement('A');
            archivo.style.width='50px';
            archivo.style.height='50px';
            let arrayCadena = respuesta.data["comprobante_de_estudios"].split('.');
            if(arrayCadena[1]=='docx'){
                let img = document.createElement('IMG');
                img.src='img/word.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='jpg' || arrayCadena[1]=='png' || arrayCadena[1]=='jpge'){
                let img = document.createElement('IMG');
                img.src='img/img.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='xlsx'){
                let img = document.createElement('IMG');
                img.src='img/excel.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='pdf'){
                let img = document.createElement('IMG');
                img.src='img/pdf.png';
                archivo.appendChild(img);
            }else{
                archivo.innerHTML='Archivo';
            }
            archivo.href='archivos/'+respuesta.data["comprobante_de_estudios"];
            mc40.appendChild(archivo);
        }else{
            inpNombreEstu.addEventListener("change", ()=>{
            const archivos = inpNombreEstu.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[8]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpE34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
        }
        let mc41= document.createElement('DIV');
        mc41.style.display='flex';
        mc41.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Cartas de Recomendación:';
        etNombre.style.marginLeft='20px';
        etNombre.style.width='150px';
        let inpNombreCarta = document.createElement('INPUT');
        inpNombreCarta.setAttribute('class', 'inpE inpE41');
        inpNombreCarta.type='file';
        inpNombreCarta.innerHTML=respuesta.data["cartas_recomendacion"];
        mc41.appendChild(etNombre);
        mc41.appendChild(inpNombreCarta);
        if(respuesta.data["cartas_recomendacion"]!='' && respuesta.data["cartas_recomendacion"]!='0'){
            DPendientes[9]='';
            let archivo = document.createElement('A');
            archivo.style.width='50px';
            archivo.style.height='50px';
            let arrayCadena = respuesta.data["cartas_recomendacion"].split('.');
            if(arrayCadena[1]=='docx'){
                let img = document.createElement('IMG');
                img.src='img/word.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='jpg' || arrayCadena[1]=='png' || arrayCadena[1]=='jpge'){
                let img = document.createElement('IMG');
                img.src='img/img.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='xlsx'){
                let img = document.createElement('IMG');
                img.src='img/excel.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='pdf'){
                let img = document.createElement('IMG');
                img.src='img/pdf.png';
                archivo.appendChild(img);
            }else{
                archivo.innerHTML='Archivo';
            }
            archivo.href='archivos/'+respuesta.data["cartas_recomendacion"];
            mc41.appendChild(archivo);
        }else{
            inpNombreCarta.addEventListener("change", ()=>{
            const archivos = inpNombreCarta.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[9]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpE34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
        }
        let mc42= document.createElement('DIV');
        mc42.style.display='flex';
        mc42.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Antecedentes no Penales:';
        etNombre.style.marginLeft='20px';
        etNombre.style.width='150px';
        let inpNombreAnte = document.createElement('INPUT');
        inpNombreAnte.setAttribute('class', 'inpE inpE42');
        inpNombreAnte.type='file';
        inpNombreAnte.innerHTML=respuesta.data["antecedentes_no_penales"];
        mc42.appendChild(etNombre);
        mc42.appendChild(inpNombreAnte);
        if(respuesta.data["antecedentes_no_penales"]!='' && respuesta.data["antecedentes_no_penales"]!='0'){
            DPendientes[10]='';
            let archivo = document.createElement('A');
            archivo.style.width='50px';
            archivo.style.height='50px';
            let arrayCadena = respuesta.data["antecedentes_no_penales"].split('.');
            if(arrayCadena[1]=='docx'){
                let img = document.createElement('IMG');
                img.src='img/word.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='jpg' || arrayCadena[1]=='png' || arrayCadena[1]=='jpge'){
                let img = document.createElement('IMG');
                img.src='img/img.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='xlsx'){
                let img = document.createElement('IMG');
                img.src='img/excel.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='pdf'){
                let img = document.createElement('IMG');
                img.src='img/pdf.png';
                archivo.appendChild(img);
            }else{
                archivo.innerHTML='Archivo';
            }
            archivo.href='archivos/'+respuesta.data["antecedentes_no_penales"];
            mc42.appendChild(archivo);
        }else{
            inpNombreAnte.addEventListener("change", ()=>{
            const archivos = inpNombreAnte.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[10]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpE34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
        }
        let mc43= document.createElement('DIV');
        mc43.style.display='flex';
        mc43.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Contratos:';
        etNombre.style.marginLeft='20px';
        etNombre.style.width='150px';
        let inpNombreContra = document.createElement('INPUT');
        inpNombreContra.setAttribute('class', 'inpE inpE43');
        inpNombreContra.type='file';
        inpNombreContra.innerHTML=respuesta.data["contratos"];
        mc43.appendChild(etNombre);
        mc43.appendChild(inpNombreContra);
        if(respuesta.data["contratos"]!='' && respuesta.data["contratos"]!='0'){
            DPendientes[11]='';
            let archivo = document.createElement('A');
            archivo.style.width='50px';
            archivo.style.height='50px';
            let arrayCadena = respuesta.data["contratos"].split('.');
            if(arrayCadena[1]=='docx'){
                let img = document.createElement('IMG');
                img.src='img/word.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='jpg' || arrayCadena[1]=='png' || arrayCadena[1]=='jpge'){
                let img = document.createElement('IMG');
                img.src='img/img.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='xlsx'){
                let img = document.createElement('IMG');
                img.src='img/excel.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='pdf'){
                let img = document.createElement('IMG');
                img.src='img/pdf.png';
                archivo.appendChild(img);
            }else{
                archivo.innerHTML='Archivo';
            }
            archivo.href='archivos/'+respuesta.data["contratos"];
            mc43.appendChild(archivo);
        }else{
            inpNombreContra.addEventListener("change", ()=>{
            const archivos = inpNombreContra.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[11]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpE34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
        }
        let mc44= document.createElement('DIV');
        mc44.style.display='flex';
        mc44.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Observaciones:';
        etNombre.style.marginLeft='20px';
        etNombre.style.width='150px';
        inpNombreOb = document.createElement('INPUT');
        inpNombreOb.setAttribute('class', 'inpE inpE44');
        inpNombreOb.value=respuesta.data["observaciones"];
        mc44.appendChild(etNombre);
        mc44.appendChild(inpNombreOb);
        let mc50= document.createElement('DIV');
        mc50.style.display='flex';
        mc50.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Uniformes:';
        etNombre.style.marginLeft='20px';
        etNombre.style.width='150px';
        let inpNombreUni = document.createElement('INPUT');
        inpNombreUni.setAttribute('class', 'inpE inpE50');
        inpNombreUni.type='file';
        inpNombreUni.innerHTML=respuesta.data["uniformes"];
        mc50.appendChild(etNombre);
        mc50.appendChild(inpNombreUni);
        if(respuesta.data["uniformes"]!='' && respuesta.data["uniformes"]!='0'){
            DPendientes[12]='';
            let archivo = document.createElement('A');
            archivo.style.width='50px';
            archivo.style.height='50px';
            let arrayCadena = respuesta.data["uniformes"].split('.');
            if(arrayCadena[1]=='docx'){
                let img = document.createElement('IMG');
                img.src='img/word.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='jpg' || arrayCadena[1]=='png' || arrayCadena[1]=='jpge'){
                let img = document.createElement('IMG');
                img.src='img/img.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='xlsx'){
                let img = document.createElement('IMG');
                img.src='img/excel.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='pdf'){
                let img = document.createElement('IMG');
                img.src='img/pdf.png';
                archivo.appendChild(img);
            }else{
                archivo.innerHTML='Archivo';
            }
            archivo.href='archivos/'+respuesta.data["uniformes"];
            mc50.appendChild(archivo);
        }else{
            inpNombreEstu.addEventListener("change", ()=>{
            const archivos = inpNombreEstu.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[12]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpE34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
        }
        let mc45= document.createElement('DIV');
        mc45.style.display='flex';
        mc45.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Datos Bancarios:';
        etNombre.style.marginLeft='20px';
        etNombre.style.width='150px';
        let inpNombreBan = document.createElement('INPUT');
        inpNombreBan.setAttribute('class', 'inpE inpE45');
        inpNombreBan.type='file';
        inpNombreBan.innerHTML=respuesta.data["clave_banco"];
        mc45.appendChild(etNombre);
        mc45.appendChild(inpNombreBan);
        if(respuesta.data["clave_banco"]!='' && respuesta.data["clave_banco"]!='0'){
            DPendientes[13]='';
            let archivo = document.createElement('A');
            archivo.style.width='50px';
            archivo.style.height='50px';
            let arrayCadena = respuesta.data["clave_banco"].split('.');
            if(arrayCadena[1]=='docx'){
                let img = document.createElement('IMG');
                img.src='img/word.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='jpg' || arrayCadena[1]=='png' || arrayCadena[1]=='jpge'){
                let img = document.createElement('IMG');
                img.src='img/img.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='xlsx'){
                let img = document.createElement('IMG');
                img.src='img/excel.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='pdf'){
                let img = document.createElement('IMG');
                img.src='img/pdf.png';
                archivo.appendChild(img);
            }else{
                archivo.innerHTML='Archivo';
            }
            archivo.href='archivos/'+respuesta.data["clave_banco"];
            mc45.appendChild(archivo);
        }else{
            inpNombreBan.addEventListener("change", ()=>{
            const archivos = inpNombreBan.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[13]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpE34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
        }
        let mc49= document.createElement('DIV');
        mc49.style.display='flex';
        mc49.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Alta:';
        etNombre.style.marginLeft='20px';
        etNombre.style.width='150px';
        let inpNombreAlt = document.createElement('INPUT');
        inpNombreAlt.setAttribute('class', 'inpE inpE49');
        inpNombreAlt.type='file';
        inpNombreAlt.innerHTML=respuesta.data["alta"];
        mc49.appendChild(etNombre);
        mc49.appendChild(inpNombreAlt);
        if(respuesta.data["alta"]!='' && respuesta.data["alta"]!='0'){
            DPendientes[14]='';
            let archivo = document.createElement('A');
            archivo.style.width='50px';
            archivo.style.height='50px';
            let arrayCadena = respuesta.data["alta"].split('.');
            if(arrayCadena[1]=='docx'){
                let img = document.createElement('IMG');
                img.src='img/word.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='jpg' || arrayCadena[1]=='png' || arrayCadena[1]=='jpge'){
                let img = document.createElement('IMG');
                img.src='img/img.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='xlsx'){
                let img = document.createElement('IMG');
                img.src='img/excel.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='pdf'){
                let img = document.createElement('IMG');
                img.src='img/pdf.png';
                archivo.appendChild(img);
            }else{
                archivo.innerHTML='Archivo';
            }
            archivo.href='archivos/'+respuesta.data["alta"];
            mc49.appendChild(archivo);
        }else{
            inpNombreAlt.addEventListener("change", ()=>{
            const archivos = inpNombreAlt.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[14]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpE34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
        }
        let mc46= document.createElement('DIV');
        mc46.style.display='flex';
        mc46.style.justifyContent='space-between';
        etNombre = document.createElement('P');
        etNombre.innerHTML='Contrato de Confidencialidad:';
        etNombre.style.marginLeft='20px';
        etNombre.style.width='150px';
        let inpNombreConfi = document.createElement('INPUT');
        inpNombreConfi.setAttribute('class', 'inpE inpE46');
        inpNombreConfi.type='file';
        inpNombreConfi.innerHTML=respuesta.data["contrato_confidencialidad"];
        mc46.appendChild(etNombre);
        mc46.appendChild(inpNombreConfi);
        if(respuesta.data["contrato_confidencialidad"]!='' && respuesta.data["contrato_confidencialidad"]!='0'){
            DPendientes[15]='';
            let archivo = document.createElement('A');
            archivo.style.width='50px';
            archivo.style.height='50px';
            let arrayCadena = respuesta.data["contrato_confidencialidad"].split('.');
            if(arrayCadena[1]=='docx'){
                let img = document.createElement('IMG');
                img.src='img/word.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='jpg' || arrayCadena[1]=='png' || arrayCadena[1]=='jpge'){
                let img = document.createElement('IMG');
                img.src='img/img.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='xlsx'){
                let img = document.createElement('IMG');
                img.src='img/excel.png';
                archivo.appendChild(img);
            }else if(arrayCadena[1]=='pdf'){
                let img = document.createElement('IMG');
                img.src='img/pdf.png';
                archivo.appendChild(img);
            }else{
                archivo.innerHTML='Archivo';
            }
            archivo.href='archivos/'+respuesta.data["contrato_confidencialidad"];
            mc46.appendChild(archivo);
        }else{
            inpNombreConfi.addEventListener("change", ()=>{
            const archivos = inpNombreConfi.files;
            if(!archivos || !archivos.length){
                return;
            }
            DPendientes[15]='';
            let Pen='';
            DPendientes.forEach(p => Pen+=(p));
            let observaciones = document.querySelector('.inpE34');
            if(Pen==''){
                Pen='Ninguno';
            }
            observaciones.value=Pen;
            });
        }
        
        let guardar = document.createElement('BUTTON');
        guardar.setAttribute('class', 'botonGuardar');
        guardar.innerHTML='Guardar';
        guardar.setAttribute('onclick', 'guardarDatos('+id+')');
        let Pen='';
        DPendientes.forEach(p => Pen+=(p));
        if(Pen==''){
            Pen='Ninguno';
        }
        inpNombreP.value=Pen;

        c2.appendChild(mc7);
        c2.appendChild(mc8);
        c2.appendChild(mc9);
        c2.appendChild(mc10);
        c2.appendChild(mc11);
        c1.appendChild(mc33);
        c2.appendChild(mc24);
        c2.appendChild(mc25);
        c2.appendChild(mc26);
        c2.appendChild(mc35);
        c2.appendChild(mc36);
        c2.appendChild(mc37);
        c2.appendChild(mc38);
        c2.appendChild(mc39);
        c2.appendChild(mc40);
        c2.appendChild(mc41);
        c2.appendChild(mc42);
        c2.appendChild(mc43);
        c2.appendChild(mc50);
        c2.appendChild(mc45);
        c2.appendChild(mc49);
        c2.appendChild(mc46);
        c2.appendChild(mc34);
        c2.appendChild(mc44);

        let url;

        inpFoto.addEventListener("change", ()=>{
            const archivos = inpFoto.files;
            if(!archivos || !archivos.length){
                return;
            }
            const archivo = archivos[0];
            url = URL.createObjectURL(archivo);
            label1.innerHTML='';
            let foto = document.createElement('IMG');
            foto.setAttribute('class', 'fotoN');
            foto.style.width='100%';
            foto.style.height='100%';
            foto.src=url;
            foto.style.borderRadius='50%';
            let borroso = document.createElement('DIV');
            borroso.setAttribute('class', 'hovImg');
            borroso.style.width='100%';
            borroso.style.height='100%';
            borroso.style.borderRadius='50%';
            borroso.style.backgroundColor='#000000';
            borroso.style.opacity='0%';
            borroso.style.position='absolute';
            borroso.style.bottom='0px';
            borroso.style.backdropFilter='15px';
            borroso.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500; transform: scale(.5);" xml:space="preserve"><style type="text/css">	.st0editar2{fill:#ffffff;}	.st1{fill:none;stroke:#00000000;stroke-width:14;stroke-miterlimit:10;}</style><g id="Capa_3">	<path class="st0editar2" d="M41.51,457.78l7.83-54.94c0,0,62.56-11.11,50.87,51.36l-58.18,11.29L41.51,457.78z"/>	<path class="st0editar2" d="M112.24,451.67l112.2-21.14l10.57-79.67l-80.49,17.89l19.11-69.92l-78.46,28.46l18.7-77.28l-42.28,37.44   l-18.7,102.44C52.89,389.88,123.63,388.25,112.24,451.67z"/>	<polygon class="st0editar2" points="131.76,232.15 343.41,46.79 391.11,95.31 178.1,286.63 113.06,308.58  "/>	<polygon class="st0editar2" points="170.78,354.92 190.29,289.88 399.48,103.7 437.45,142.2 240.7,337.03  "/>	<polygon class="st0editar2" points="235.01,417.52 246.39,343.54 446.11,150.85 481.35,186.63 235.01,421.59  "/></g><g id="Capa_1">	<path class="st1" d="M126.07,229.72L65.9,285c0,0-34.15,186.18-28.46,185.37c5.69-0.81,190.24-35.77,190.24-35.77l13.01-91.06   l-78.05,18.7l20.33-70.73l-79.67,26.83L126.07,229.72L342.33,37.85l148.78,149.59L227.69,434.59"/>	<path class="st1" d="M46.26,397.72c0,0,70.63-12.89,61.39,59.55"/>	<line class="st1" x1="178.1" y1="293.14" x2="399.48" y2="95.31"/>	<line class="st1" x1="240.7" y1="343.54" x2="446.11" y2="142.2"/>	<g id="Capa_2">	</g></g></svg>';
            label1.appendChild(foto);
            label1.appendChild(borroso);
        });

        contenedor.appendChild(c1);
        contenedor.appendChild(c2);
        contenedor.appendChild(mc12);
        contenedor.appendChild(guardar);

        //Salto de input
    inp1 = document.querySelector('.inpE1');
    inp1.addEventListener('click', function(){
        inp1.style.boxShadow = '';
    });
    inp1.focus();
    inp2 = document.querySelector('.inpE2');
    inp2.addEventListener("click", function(){
        inp2.style.boxShadow = '';
    });
    inp3 = document.querySelector('.inpE3');
    inp3.addEventListener("click", function(){
        inp3.style.boxShadow = '';
    });
    inp4 = document.querySelector('.inpE4');
    inp4.addEventListener("click", function(){
        inp4.style.boxShadow = '';
    });
    inp5 = document.querySelector('.inpE5');
    inp5.addEventListener("click", function(){
        inp5.style.boxShadow = '';
    });
    inp7 = document.querySelector('.inpE7');
    inp7.addEventListener("click", function(){
        inp7.style.boxShadow = '';
    });
    inp8 = document.querySelector('.inpE8');
    inp8.addEventListener("click", function(){
        inp8.style.boxShadow = '';
    });
    inp9 = document.querySelector('.inpE9');
    inp9.addEventListener("click", function(){
        inp9.style.boxShadow = '';
    });
    inp10 = document.querySelector('.inpE13');
    inp11 = document.querySelector('.inpE14');
    inp12 = document.querySelector('.inpE15');
    inp13 = document.querySelector('.inpE16');
    inp14 = document.querySelector('.inpE17');
    inp15 = document.querySelector('.inpE18');
    inp16 = document.querySelector('.inpE19');
    inp17 = document.querySelector('.inpE20');
    inp18 = document.querySelector('.inpE21');
    inp19 = document.querySelector('.inpE22');
    inp20 = document.querySelector('.inpE23');
    inp21 = document.querySelector('.inpE27');
    inp22 = document.querySelector('.inpE28');
    inp23 = document.querySelector('.inpE29');
    inp24 = document.querySelector('.inpE30');
    inp25 = document.querySelector('.inpE31');
    inp26 = document.querySelector('.inpE32');
    inp27 = document.querySelector('.inpE33');
    inp28 = document.querySelector('.inpE34');
    inp29 = document.querySelector('.inpE44');

    inp1.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp2.focus();
        }
    });

    inp2.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp3.focus();
        }
    });
    inp3.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp4.focus();
        }
    });
    inp4.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp5.focus();
        }
    });
    inp5.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp7.focus();
        }
    });
    inp7.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp8.focus();
        }
    });
    inp8.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp9.focus();
        }
    });
    inp9.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp14.focus();
        }
    });
    inp14.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp15.focus();
        }
    });
    inp15.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp18.focus();
        }
    });
    inp18.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp19.focus();
        }
    });
    inp19.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp20.focus();
        }
    });
    inp20.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp21.focus();
        }
    });
    inp21.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp22.focus();
        }
    });
    inp22.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp23.focus();
        }
    });
    inp23.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp24.focus();
        }
    });
    inp24.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp25.focus();
        }
    });
    inp25.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp26.focus();
        }
    });
    inp26.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp27.focus();
        }
    });
    inp27.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp28.focus();
        }
    });
    inp28.addEventListener('keydown', function(e){
        if(e.keyCode==13){
            inp29.focus();
        }
    });
    });
}

function minimizarEd(id){
    let contenedor = document.querySelector('.u'+id);
    let botonE = document.querySelector('.bED'+id);
    let EdIz = document.querySelector('.EdIz');
    let EdDer = document.querySelector('.EdDer');
    let eti = document.querySelector('.inpF'+id);
    let etF = document.querySelector('.etFoto'+id);
    let btsave = document.querySelector('.botonGuardar');
    btsave.remove();
    etF.remove();
    eti.remove();
    EdIz.remove();
    EdDer.remove();
    botonE.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 500 500" class="lapiz" style="enable-background:new 0 0 500 500; transform: scale(.7);" xml:space="preserve">    <style type="text/css">        .st0l{fill:#FCC574;stroke:#000000;stroke-miterlimit:10;}        .st1l{fill:none;stroke:#000000;stroke-miterlimit:10;}        .st2l{fill:#C6C6C6;stroke:#000000;stroke-miterlimit:10;}        .st3l{fill:#F5B2C1;stroke:#000000;stroke-miterlimit:10;}        .st4l{fill:#F39200;stroke:#000000;stroke-miterlimit:10;}    </style>    <g id="Capa_2">        <path d="M71.78,480.92l10.1-22.06c0,0,13.85-8.61,10.68,8.37L71.78,480.92z"/>        <path class="st0l" d="M92.57,467.22c0,0,4.36-16.92-10.68-8.37l19.89-43.44l20.85-6.53l-1.97,20.82l14.68-11.5l-2.74,21.12v1.52   L92.57,467.22z"/>        <path class="st1l" d="M81.88,458.85c0,0,14.09-8.61,10.68,8.37"/>    </g>    <g id="Capa_1">                    <rect x="417.54" y="42.78" transform="matrix(0.7715 0.6363 -0.6363 0.7715 138.317 -267.318)" class="st2l" width="47.46" height="32.2"/>                    <rect x="442.44" y="25.04" transform="matrix(0.7715 0.6363 -0.6363 0.7715 128.5798 -283.6999)" class="st3l" width="33.54" height="24.19"/>        <polygon class="st4l" points="132.6,440.84 135.34,418.2 120.55,430.89 122.63,408.88 101.77,415.41 415.61,58.59 446.44,84.02  "/>        <polyline class="st1l" points="101.77,415.41 71.78,480.92 132.6,440.84  "/>        <path class="st1l" d="M81.88,458.85c0,0,13.68-8.72,10.68,8.37"/>    </g>    </svg>Editar';
    botonE.setAttribute('onclick', 'editarUsuario('+id+')');
    contenedor.style.height='auto';
    contenedor.style.background='white';
    contenedor.style.borderRadius='20px';
    contenedor.style.padding='0';
}

function guardarDatos(id){
    let inp1 = document.querySelector('.inpE1').value;
    let inp2 = document.querySelector('.inpE2').value;
    let inp3 = document.querySelector('.inpE3').value;
    let inp4 = document.querySelector('.inpE4').value;
    let inp5 = document.querySelector('.inpE5').value;
    let inp6;
    if(document.querySelector('.inpE6H').checked){
        inp6='hombre';
    }else if(document.querySelector('.inpE6M').checked){
        inp6='mujer';
    }
    let inp7 = document.querySelector('.inpE7').value;
    let inp8 = document.querySelector('.inpE8').value;
    let inp9 = document.querySelector('.inpE9').value;
    let inp10 = document.querySelector('.rT1').innerHTML;
    let inp11 = document.querySelector('.rT2').innerHTML;
    if(inp11=='Subalterno'){
        inp11=0;
    }else if(inp11=='Jefe de Area o Gerente'){
        inp11=1;
    }else if(inp11=='Director'){
        inp11=2;
    }
    let inp12 = document.getElementById('img2').value;
    let inp13 = document.querySelector('.rT3').innerHTML;
    let inp14 = document.querySelector('.rT4').innerHTML;
    let inp15 = document.querySelector('.rT5').innerHTML;
    let inp16 = document.querySelector('.rT6').innerHTML;
    let inp17 = document.querySelector('.inpE17').value;
    let inp18 = document.querySelector('.inpE18').value;
    let inp19 = document.querySelector('.rT7').innerHTML;
    let inp20 = document.querySelector('.rT8').innerHTML;
    let inp21 = document.querySelector('.inpE21').value;
    let inp22 = document.querySelector('.inpE22').value;
    let inp23 = document.querySelector('.inpE23').value;
    let inp27 = document.querySelector('.inpE27').value;
    let inp28 = document.querySelector('.inpE28').value;
    let inp29 = document.querySelector('.inpE29').value;
    let inp30 = document.querySelector('.inpE30').value;
    let inp31 = document.querySelector('.inpE31').value;
    let inp32 = document.querySelector('.inpE32').value;
    let inp33 = document.querySelector('.inpE33').value;
    let inp34 = document.querySelector('.inpE34').value;
    let inp44 = document.querySelector('.inpE44').value;
    if(inp44==''){
        inp44='Ninguna';
    }
    
    let inp24 = document.querySelector('.inpE24');
    inp24.name='rfc';
    let inp25 = document.querySelector('.inpE25');
    inp25.name='curp';
    let inp26 = document.querySelector('.inpE26');
    inp26.name='nss';
    let inp35 = document.querySelector('.inpE35');
    inp35.name='infonavit';
    let inp36 = document.querySelector('.inpE36');
    inp36.name='solicitudEmpleo';
    let inp37 = document.querySelector('.inpE37');
    inp37.name='ine';
    let inp38 = document.querySelector('.inpE38');
    inp38.name='actaNacimiento';
    let inp39 = document.querySelector('.inpE39');
    inp39.name='comprobanteDomicilio';
    let inp40 = document.querySelector('.inpE40');
    inp40.name='comprobanteEstudios';
    let inp41 = document.querySelector('.inpE41');
    inp41.name='cartasRecomendacion';
    let inp42 = document.querySelector('.inpE42');
    inp42.name='antecedentes';
    let inp43 = document.querySelector('.inpE43');
    inp43.name='contratos';
    let inp45 = document.querySelector('.inpE45');
    inp45.name='claveBanco';
    let inp46 = document.querySelector('.inpE46');
    inp46.name='contratoConfidencialidad';
    let inp49 = document.querySelector('.inpE49');
    inp49.name='alta';
    let inp50 = document.querySelector('.inpE50');
    inp50.name='uniformes';
    
    let inp24v = document.querySelector('.inpE24').value;
    let inp25v = document.querySelector('.inpE25').value;
    let inp26v = document.querySelector('.inpE26').value;
    let inp35v = document.querySelector('.inpE35').value;
    let inp36v = document.querySelector('.inpE36').value;
    let inp37v = document.querySelector('.inpE37').value;
    let inp38v = document.querySelector('.inpE38').value;
    let inp39v = document.querySelector('.inpE39').value;
    let inp40v = document.querySelector('.inpE40').value;
    let inp41v = document.querySelector('.inpE41').value;
    let inp42v = document.querySelector('.inpE42').value;
    let inp43v = document.querySelector('.inpE43').value;
    let inp45v = document.querySelector('.inpE45').value;
    let inp46v = document.querySelector('.inpE46').value;
    let inp49v = document.querySelector('.inpE49').value;
    let inp50v = document.querySelector('.inpE50').value;
    
    

    axios.post("actualizarUsuario.php", {"id":id, "usuario":inp1, "pass":inp2, "nombre":inp3, "apellidop": inp4, "apellidom":inp5, "sexo":inp6, "edad":inp7, "direccion":inp8, "fecha":inp9, "area":inp10, "jerarquia":inp11, "oficina_alta_imms":inp13, "oficina_fisicamente":inp14, "periodicidad_de_pago":inp15, "modalidad_trabajo":inp16, "fecha_firma_de_contrato":inp17, "fecha_vencimiento_de_contrato":inp18, "estado_civil":inp19, "nacionalidad":inp20, "fecha_nacimiento":inp21, "fecha_cumple":inp22, "horario":inp23, "numero_celular":inp27, "escolaridad":inp28, "salario_mensual":inp29, "otros":inp30, "antiguedad":inp31, "salario_diario":inp32, "salario_diario_imms":inp33, "documentos_pendientes":inp34, "observaciones":inp44}).then(respuesta=>{console.log(respuesta.data);
        if(respuesta.data=='Exito'){
            if(inp12.length!=0  || inp24v.length!=0 || inp25v.length!=0 || inp26v.length!=0 || inp35v.length!=0 || inp36v.length!=0 || inp37v.length!=0 || inp38v.length!=0 || inp39v.length!=0 || inp40v.length!=0 || inp41v.length!=0 || inp42v.length!=0 || inp43v.length!=0 || inp45v.length!=0 || inp46v.length!=0 || inp49v.length!=0 || inp50v.length!=0){
                let formulario = document.getElementById('formulario');
                let user = document.querySelector('.inpE1');
                formulario.appendChild(user);
                formulario.appendChild(inp24);
                formulario.appendChild(inp25);
                formulario.appendChild(inp26);
                formulario.appendChild(inp35);
                formulario.appendChild(inp36);
                formulario.appendChild(inp37);
                formulario.appendChild(inp38);
                formulario.appendChild(inp39);
                formulario.appendChild(inp40);
                formulario.appendChild(inp41);
                formulario.appendChild(inp42);
                formulario.appendChild(inp43);
                formulario.appendChild(inp45);
                formulario.appendChild(inp46);
                formulario.appendChild(inp49);
                formulario.appendChild(inp50);
                let contenedor = document.querySelector('.u'+id);
                let a = document.createElement('A');
                a.href='javascript:rimagen()';
                a.innerHTML='0';
                contenedor.appendChild(a);
                window.location.href ='javascript:rimagen()';
            }else{
                minimizarEd(id);
            }
        }
    });
    
}

function watch(inp){
    let input = document.querySelector(inp);
    if(input.type=='password'){
        input.type='text';
    }else{
        input.type='password';
    }
}

function antiguedad(fechaInp){
    let fecha1 = fechaInp;
        const fecha = new Date();
        let a1=parseInt(fecha1.substr(0,4));
        let a2=parseInt(fecha.getFullYear());
        let m1=parseInt(fecha1.substr(5,7));
        let m2=fecha.getMonth()+1;
        let d1=parseInt(fecha1.substr(8,10));
        let di2=parseInt(fecha.getDate());
        let af=a2-a1;
        let mf;
        let df;
        if(m2<m1){
            af-=1;
            mf=12-m1;
            mf+=m2;
        }else{
            mf=m2-m1;
        }
        if(di2<d1){
            mf-1;
            df=30-d1;
            df+=di2;
        }else{
            df=di2-d1;
        }
        
        if(af==1 && mf==1 && df==1){
            return af+'año '+mf+'mes '+df+'día';
        }else if(af==1 && mf==1){
            return af+'año '+mf+'mes '+df+'días';
        }else if(af==1 && df==1){
            return af+'año '+mf+'meses '+df+'día';
        }else if(af==1){
            return af+'año '+mf+'meses '+df+'días';
        }else if(mf==1 && df==1){
            return af+'años '+mf+'mes '+df+'día';
        }else if(mf==1){
            return af+'años '+mf+'mes '+df+'días';
        }else if(df==1){
            return af+'años '+mf+'meses '+df+'día';
        }else{
            return af+'años '+mf+'meses '+df+'días';
        }
}

function fechaCumpleaños(fechaInp){
    let fecha = new Date(fechaInp);
    if(fechaInp.substr(8,10)=='01'){
        if(fecha.getMonth()+2==13){
            return (fechaInp.substr(8,10)+'/'+'01');
        }else{
            return (fechaInp.substr(8,10)+'/'+(fecha.getMonth()+2));
        }
    }else{
        return (fechaInp.substr(8,10)+'/'+(fecha.getMonth()+1));
    }
}


function logout(){
    axios("logout.php").then(respuesta=>{console.log(respuesta.data);
        if(respuesta.data=='sesion cerrada'){
            window.location.href='login.html';
        }
    });
}


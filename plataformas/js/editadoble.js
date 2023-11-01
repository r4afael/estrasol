 $(document).ready(function() {
  $('#bt_add').click(function() {
    agregar();
  });
  $('#bt_del').click(function() {
    eliminar();//eliminar(id_fila_selected); podemos omitir el parámetro pues abajo lo declaras como variable global
  });

  $('#bt_delall').click(function() {
    eliminarTodasFilas();

  });


});
var cont = 0;
var id_fila_selected = [];

function agregar() {
  cont++;
  var fila =

    '<tr class="selected" id="fila' + cont + '" onclick="seleccionar(this.id);"><td>&nbsp;</td>' +

    '<td><input type="text" id="nombre"></td>' +

    '<td><input type="text" id="area"></td>' +

    '<td><input type="text" id="puesto"></td>' +

    '<td><input type="text" id="email" onkeyup="addToTable(event)"></td></tr>';


  $('#tabla').append(fila);
  reordenar();
}

/*
 * Esta función agrega lo ingresado a la tabla
 */
function addToTable(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    const row = e.target.parentNode.parentNode;
    const inputs = row.querySelectorAll('input');
    const values = [].map.call(inputs, input => input.value);
    const tds = row.querySelectorAll('td');
    [].forEach.call(tds, (td, i) => {
      if (i === 0) { td.textContent = i + 1; }
      else { td.innerHTML = values[i - 1]; }
    });
  }
}

function seleccionar(id_fila) {
  if ($('#' + id_fila).hasClass('seleccionada')) {
    $('#' + id_fila).removeClass('seleccionada');
    // borrar también el id del array de filas seleccionadas
    var existe_el_id = id_fila_selected.indexOf(id_fila); 
    id_fila_selected.splice(existe_el_id, 1);
  } else {
    $('#' + id_fila).addClass('seleccionada');
    // agregar id sólo si se hizo click
    id_fila_selected.push(id_fila); 
  }
  //2702id_fila_selected=id_fila;
}

function eliminar() {
  /*$('#'+id_fila).remove();
  reordenar();*/
  for (var i = 0; i < id_fila_selected.length; i++) {
    $('#' + id_fila_selected[i]).remove();
  }
  reordenar();
}

function reordenar() {
  var num = 1;
  $('#tabla tbody tr').each(function() {
    $(this).find('td').eq(0).text(num);
    num++;
  });
}

function eliminarTodasFilas() {
  $('#tabla tr.selected').each(function() {
    $(this).remove();
  });
}

$(function () {
   
  $("td").dblclick(function () {
    var OriginalContent = $(this).text();
    //obtenermos el id de la tabla
    var idtabla =  $(this).parents("tr").find("td")[0].innerHTML;
    console.log(idtabla);
    /*Cacha el texto que esta*/
    console.log(OriginalContent);
    $(this).addClass("cellEditing");
    $(this).html("<input type='text' value='" + OriginalContent + "' />");
    $(this).children().first().focus();
    $(this).children().first().keypress(function (e) {
      if (e.which == 13) { 
        var newContent = $(this).val();
        $(this).parent().text(newContent);
        $(this).parent().removeClass("cellEditing");
        var enviadato = 'idtabla=' + idtabla + 'linkpbi=' + newContent;
        console.log(enviadato);
        //console.log(idtabla);
  //Enviamos por ajax      
        $.ajax({

                type: "POST",
                url: "actualizardash.php",
                data: 'type=consulta_v1&idtabla=' + idtabla + '&linkpbi=' + newContent,
                dataType:"html",
                asycn:false,
                success: function(){
                   alert("Actualizado.");
                }
        }).responseText;

        //console.log(saveme);
        
        }
      }); 
    $(this).children().first().blur(function(){
      $(this).parent().text(OriginalContent);
      $(this).parent().removeClass("cellEditing");
      var nuevotexto = $(this).text();
      }); 
    });
    
  });

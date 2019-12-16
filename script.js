$(document).ready(function(){
	
		$("h1").after('<form><label>Nombre</label><input type="text" name="nombre" placeholder="Ingrese su nombre" required="required"><label>Correo Electronico</label><br><input type="email" name="correo" placeholder="Ingrese su correo"><br><label>Carrera</label><br><select ><option value="Ingenieria">Ingenieria</option><option value="Tecnologico">Estudios Tecnologicos</option><option value="Humanidades">Humanidades</option><option value="Licenciatura">Licenciatura</option><option value="Profesorados">Profesorados</option><option value="Maestrias">Maestrias</option></select><input type="button" name="add" id="btnAgregar" value="Agregar" ></form><div id="dos"></div>')
		$("table").after('<footer><STRONG>Alexander Antonio Castro Maradiaga CM161901</STRONG><STRONG>Cristian Odir Lopez Revelo LR161911</STRONG></footer>')
		$("#dos").hide();

		});


function cargardatos(){
	var array = [];
    /* Obtenemos todos los tr del Body*/
    var rowsBody= $("table").find('tbody > tr ');
    /* Obtenemos todos los th del Thead */
    var rowsHead= $("table").find('thead > tr > th');
    
    /* Iteramos sobre as filas del tbody*/
    for (var i = 0; i < rowsBody.length; i++) {
        var obj={};/* auxiliar*/
        for (var j = 0;j < rowsHead.length;j++) /*  Iteramos sobre los th de THead*/
            /*Asignamos como clave el text del th del thead*/
             /*Asignamos como Valor el text del tr del tbody*/
               
            obj[rowsHead[j].innerText] =  rowsBody[i].getElementsByTagName('td')[j].innerText;
            if(obj["Correo Electronico"] == $("input[name=correo]").val()){
            	console.log("existe correo");
            	return true;
            }
        array.push(obj);/* Añadimos al Array Principal*/
    }

console.log(array);
return false;
}
 



	$(document).on("click", "#btnAgregar", function(){
			
		if($("input[name=correo]").val().match(/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/)){
			 row=createRow({ nombre: $("input[name=nombre]").val(),
							 correo: $("input[name=correo]").val(),
							 carrera: $("select").val()});
					bandera=cargardatos(row);
					if(bandera){
						$("#dos").show();
						$("#dos").html("Usuario ya ha sido agregado");
						$("#dos").fadeOut(3000).hide(400);
						$("#dos").css("background-color","#FA5858");
					}else{
						$('table tbody').append(row);
						$("#dos").show();
						$("#dos").html("Datos agregados exitosamente");
						$("#dos").fadeOut(5000).hide(500);
						$("#dos").css("background-color","#58FAAC");
					}
					
					
									
									
				
			}else{

				$("#dos").show();
				$("#dos").html("Correo electronico ingresado incorrecto");
				$("#dos").fadeOut(5000).hide(500);
				$("#dos").css("background-color","#FA5858");

			}


		});
	

		function createRow (data) {
			return (
    `<tr>` +
      `<td>${data.nombre}</td>` +
      `<td>${data.correo}</td>` +
      `<td>${data.carrera}</td>` +
    `</tr>`
  );
		}
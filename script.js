$(document).ready(function(){
		$("h1").after('<form><label>Nombre</label><input type="text" name="nombre" placeholder="Ingrese su nombre" required="required"><label>Correo Electronico</label><br><input type="email" name="correo" placeholder="Ingrese su correo"><br><label>Carrera</label><br><select ><option value="Ingenieria">Ingenieria</option><option value="Tecnologico">Estudios Tecnologicos</option><option value="Humanidades">Humanidades</option><option value="Licenciatura">Licenciatura</option><option value="Profesorados">Profesorados</option><option value="Maestrias">Maestrias</option></select><input type="button" name="add" id="btnAgregar" value="Agregar" ></form><div id="dos"></div>')
		$("table").after('<footer><STRONG>Alexander Antonio Castro Maradiaga CM161901</STRONG><STRONG>Cristian Odir Lopez Revelo LR161911</STRONG></footer>')
		$("#dos").hide();
		});

	$(document).on("click", "#btnAgregar", function(){
			
		if($("input[name=correo]").val().match(/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/)){
			const row= createRow({ nombre: $("input[name=nombre]").val(),
									correo: $("input[name=correo]").val(),
									carrera: $("select").val()});
									$('table tbody').append(row);
									
				$("#dos").show();
				$("#dos").html("Datos agregados exitosamente");
				$("#dos").fadeOut(5000).hide(500);
				$("#dos").css("background-color","#58FAAC");
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
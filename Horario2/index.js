let materias = [
                {lapso:"08:00"+ "<br>" + "08:40", materiaLunes:"Practica <br>Profesionalizante II",materiaMartes:"Practica <br> Profesionalizante II",
                materiaMiercoles:"Validacion y Verificacion De Programas",materiaJueves:"Programacion III",materiaViernes:"Practica <br> Profesionalizante II"},
                
                {lapso:"08:40"+ "<br>" + "09:20",materiaLunes:"Practica <br> Profesionalizante II",materiaMartes:"Practica <br> Profesionalizante II",
                materiaMiercoles:"Validacion y Verificacion De Programas",materiaJueves:"Programacion III",materiaViernes:"Practica <br> Profesionalizante II"},
                
                {lapso:"09:30"+ "<br>" + "10:10", materiaLunes:"Practica <br> Profesionalizante II",materiaMartes:"Practica <br> Profesionalizante II",
                materiaMiercoles:"Validacion y Verificacion De Programas",materiaJueves:"Programacion III",materiaViernes:"Practica  <br>Profesionalizante II"},
                
                {lapso:"10:10"+ "<br>" + "10:50",materiaLunes:"Programacion III",materiaMartes:"Ingenieria de software",
                materiaMiercoles:"Redes",materiaJueves:"Programacion III",materiaViernes:""},
                
                {lapso:"11:00"+ "<br>" + "11:40",materiaLunes:"Programacion III",materiaMartes:"Ingenieria de software",
                materiaMiercoles:"Redes",materiaJueves:"Interfaz del usuario",materiaViernes:""},
                
                {lapso:"11:40"+ "<br>" + "12:20",materiaLunes:"Ingenieria de software",materiaMartes:"Etica y Deontologia",
                materiaMiercoles:"Redes",materiaJueves:"Interfaz del usuario",materiaViernes:""},
                
                {lapso:"12:30"+ "<br>" + "13:10",materiaLunes:"Ingenieria de software",materiaMartes:"Etica y Deontologia",
                materiaMiercoles:"Redes",materiaJueves:"Interfaz del usuario",materiaViernes:""},
                
                {lapso:"13:10"+ "<br>" + "13:50",materiaLunes:"Ingenieria de software",materiaMartes:"Etica y Deontologia",
                materiaMiercoles:"",materiaJueves:"",materiaViernes:""},

            ];

let crearTabla=function(lista){
    let stringTabla="<tr><th>Lapso</th><th>Lunes</th><th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th></tr>";
    for(let mate of lista){
        let fila="<tr> <td>";
        
        
        fila +=mate.lapso;
        fila +="</td>";

        fila +="<td>";
        fila +=mate.materiaLunes;
        fila +="</td>";

        fila +="<td>";
        fila +=mate.materiaMartes;
        fila +="</td>";

        fila +="<td>";
        fila +=mate.materiaMiercoles;
        fila +="</td>";

        fila +="<td>";
        fila +=mate.materiaJueves;
        fila +="</td>";

        fila +="<td>";
        fila +=mate.materiaViernes;
        fila +="</td>";

        fila +="</tr>";
        stringTabla+=fila;
        console.log(stringTabla)
        
    }
    return stringTabla;
};
document.getElementById("tablahorario").innerHTML= crearTabla(materias);
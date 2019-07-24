

var juego = new Phaser.Game(720, 480, Phaser.CANVAS, "Parque");

var fondojuego;

var btnleft;//declaramos todas las variables que vamos a utilizar en el estado
var btnrigth;
var btndown;
var btnup;
var flechaderecha;//Declaramos las flechas a las que se le asignaran eventos de teclado
var flechaizquierda;
var flechaarriba;
var flechaabajo; 
var right = false;
var left = false;//variables booleanas que serviran para actualizar el estado
var down=false;
var up=false;

var museodelhombre;//variables que van a aludir a botones 
var tajmahal;
var tajmahalimagen;
var cafeteria;
var museodelhombreImagen;
var laboratorio;
var escuela;
var escuelaImagen;
var leon;
var sonidodinosaurio;
var casa;
var casaImagen;
var rio;
var rioImagen;
var fondo;
var estrella;
var salir=false;
var jugar = {
	preload: function() {  //funcion en la que se cargan los archivos de audio e imagen
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //se muestra el escenario al 100%
		juego.load.image("fondo", "ImagenesMapa/mapa2.jpg");            
		   
		//juego.load.image("boton", "Imagenes/derecha.png");
		juego.load.image("btnrigth","ImagenesMapa/rigtht.png");
		juego.load.image("btnleft","ImagenesMapa/leftt.png");
        juego.load.image("btndown","ImagenesMapa/downt.png");//cargamos imagenes de dinosaurios, el infierno, el zoologico,museos y los localizadores en el mapa...
        juego.load.image("btnup","ImagenesMapa/upt.png");
		juego.load.image("punto","ImagenesMapa/punto2.png");//A la imagen le asignamos el nombre de punto y su fuente es el archivo punto2.png
		juego.load.image("laboratorio","ImagenesMapa/laboratorio.png");
		juego.load.image("tajmahal","ImagenesMapa/prueba.png");
		juego.load.image("cafeteria","ImagenesMapa/cafeteria.png");
		//juego.load.image("museoHombre","Imagenes/museoHombre.png");
		juego.load.image("escuela","ImagenesMapa/escuela.png");
	//	juego.load.audio("leon","Sonidos/leon.mp3");
	//	juego.load.audio("dinosauriossonido","Sonidos/dinosauriossonido.mp3");
		juego.load.image("casa","ImagenesMapa/casa.png");
		juego.load.image("rio","ImagenesMapa/rio.png");
		//juego.load.audio("musica","Sonidos/musica.mp3");//cargamos audio, le asignamos el nombre de musica y decimos que su archivo de origen es estrella.mp3
		//juego.load.image("estrella","Imagenes/estrella.png");
	 
	},
	
	create: function() { //el create tiene la funcion de construir el estado
	
		fondojuego = juego.add.tileSprite(0, 0, 1000,1500, "fondo");//agregamos la imagen de fondo principal con inicio en esquina superior izquierda y con ancho de 1000 y alto de 1500 relacionado con la imagen "fondo"
		juego.physics.startSystem(Phaser.Physics.ARCADE);//permite al escenario detectar colisiones y bordes
		



//tajmahalimagen=juego.add.button(650,450,"tajmahal",this.anonima,this);
//	tajmahalimagen.anchor.setTo(0.5);
//	tajmahalimagen.scale.setTo(0.8,0.8);
//	tajmahalimagen.alpha=0;
//		tajmahal=juego.add.button(650,240,"punto",this.mostrartajmahal,this);
//tajmahal.anchor.setTo(0.5);
//tajmahal.scale.setTo(-0.4,0.4);
	//tajmahal.alpha=1;	
	////////////////////////////imagenes
	cafeteriaImagen=juego.add.button(590,320,"cafeteria",this.anonima,this);
	cafeteriaImagen.anchor.setTo(0.5);
	cafeteriaImagen.scale.setTo(0.8,0.8);
	cafeteriaImagen.alpha=0; //los botones que tienen el sufijo imagen le asignamos alpha=0, para que sean totalmente invisibles y solo puedan verse al pasar el cursos sobre otro boton
museodelhombreImagen=juego.add.button(450,190,"museoHombre",this.anonima,this);
        museodelhombreImagen.anchor.setTo(0.5);
		museodelhombreImagen.scale.setTo(0.6,0.6);
		museodelhombreImagen.alpha=0;	
		
	laboratorioImagen=juego.add.button(760,500,"laboratorio",this.anomina,this);
	laboratorioImagen.anchor.setTo(0.5);
	laboratorioImagen.scale.setTo(0.8,0.8);
	laboratorioImagen.alpha=0;
	
	escuelaImagen=juego.add.button(400,200,"escuela",this.anomina,this);
	escuelaImagen.anchor.setTo(0.5);
	escuelaImagen.scale.setTo(0.6,0.6);
	escuelaImagen.alpha=0;
		casaImagen=juego.add.button(920,380,"casa",this.anomina,this);
	casaImagen.anchor.setTo(0.5);
	casaImagen.scale.setTo(0.8,0.8);
	casaImagen.alpha=0;
	
		rioImagen=juego.add.button(330,400,"rio",this.anomina,this);
	rioImagen.anchor.setTo(0.5);
	rioImagen.scale.setTo(0.6,0.6);
	rioImagen.alpha=0;
		
        ////////////////////////////////botones

		cafeteria=juego.add.button(400,300,"punto",this.anonima,this);
	cafeteria.anchor.setTo(0.5);
	cafeteria.scale.setTo(-0.4,0.4);


	//museodelhombre=juego.add.button(600,70,"punto",this.anonima,this);
      //  museodelhombre.anchor.setTo(0.5);
	//	museodelhombre.scale.setTo(-0.4,0.4);
	//	museodelhombre.alpha=1;
laboratorio=juego.add.button(570,450,"punto",this.anomina,this);
	laboratorio.anchor.setTo(0.5);
	laboratorio.scale.setTo(-0.4,0.4);
	laboratorio.alpha=1;
  
  	escuela=juego.add.button(580,120,"punto",this.anomina,this);
	escuela.anchor.setTo(0.5);
	escuela.scale.setTo(-0.4,0.4);
	escuela.alpha=1;
	 
	 
	 	casa=juego.add.button(950,490,"punto",this.anomina,this);
	casa.anchor.setTo(0.5);
	casa.scale.setTo(-0.4,0.4);
	casa.alpha=1;
	
	rio=juego.add.button(225,260,"punto",this.anonima,this);	
	rio.anchor.setTo(0.5);
	rio.scale.setTo(-0.4,0.4);//el numero negativo permite dar un giro a la imagen respecto a la original
	rio.alpha=1;
		//////////////////sonidos
		//leon=juego.add.audio("leon");
		//sonidodinosaurio=juego.add.audio("dinosauriossonido"); //tomamos las variables y le agregamos el audio al que se le asigno el nombre de dinosauriossonido en el preload
		//musica=juego.add.audio("musica");
		//musica.play();//hacemos una reproduccion automatica del audio musica al inicio de la carga de la pagina
		
                                        
		
         		 
         //estrella=juego.add.button(50,50,"estrella",this.anonima,this);//creamos un boton llamado estrella en la posicion x=50,y=50, le asignamos la imagen cargada en el preload llamada estrella, le asignamos la funcion 
                                                                          //anomima que para este caso no ejecuta ninguna accion, y se pone sobre este escenario(this)
        //estrella.anchor.set(0.5);//se configura que las coordenadas de referencia se encuentren en el centro de este objeto
        //estrella.scale.setTo(0.3,0.3);//se configura para que la imagen salga al 30% de su tamaño original
		btnleft=juego.add.button(50,400,"btnrigth",this.izquierda,this); 
        btnleft.anchor.setTo(0.5);           
		btnleft.scale.setTo(0.3, 0.3);    
		btnleft.alpha = 1;   
        btnleft.z=1000;
		  //hacemos que el boton no sea transparente, si la propiedad alpha es cero el boton es invisible, y en 1 es totalmente opaco
		/*btnleft = juego.add.button(15, 30, "btnleft", this.izquierda, this);  
		btnleft.anchor.setTo(0.5);           
		btnleft.scale.setTo(-0.4, 0.4);    
		btnleft.alpha = 0.4; //el boton tendra una opacidad de solo 40%                
		*/
		btnrigth = juego.add.button(150, 400, "btnleft", this.derecha, this); //se declaran de forma similar todos los botones
		btnrigth.anchor.setTo(0.5);
		btnrigth.scale.setTo(0.4, 0.4);
		btnrigth.alpha = 0.4;
		btnrigth.z=1000;
        btndown=juego.add.button(100,400,"btndown",this.abajo,this);
        btndown.anchor.setTo(0.5);
        btndown.scale.setTo(-0.4, 0.4);
        btndown.alpha = 0.4; 
        btndown.z=1000;    
        btnup=juego.add.button(100,340,"btnup",this.arriba,this);
		btnup.anchor.setTo(0.5);
    btnup.scale.setTo(-0.4,0.4);
        btnup.alpha=0.4;
        btndown.z=1000;

		flechaderecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);  //tomamos la variable flechaderecha y le asignamos los eventos generados por la tecla RIGHT del teclado
		flechaizquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);	
		flechaarriba=juego.input.keyboard.addKey(Phaser.Keyboard.UP);
		flechaabajo=juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
		btnleft.events.onInputOver.add(function(){left=true;}); //asignamos que al pasar el cursor sobe el boton 1 hacemos la variable booleana left verdadera lo cual tiene consecuencias en el update del estado
        btnleft.events.onInputOut.add(function(){left=false;});//onInputOver se refiere al evento en el cual el cursor pasa por encima del boton
       btnleft.events.onInputDown.add(function(){left=true;});//onInputDown es cuando se hace click sobre el boton
        btnleft.events.onInputUp.add(function(){left=false;});//onInputUp es el evento en el que se deja de presionar el boton del mouse sobre el boton
		
		btnrigth.events.onInputOver.add(function(){right=true;}); 
        btnrigth.events.onInputOut.add(function(){right=false;});
        btnrigth.events.onInputDown.add(function(){right=true;});
        btnrigth.events.onInputUp.add(function(){right=false;});
        btndown.events.onInputOver.add(function(){down=true;});
        btndown.events.onInputOut.add(function(){ down=false;}); //onInputOut se refiere cuando el cursos no esta encima del boton
        btnup.events.onInputOver.add(function(){up=true;});
        btnup.events.onInputOut.add(function(){ up=false;});
	  //  tajmahal.events.onInputOver.add(this.mostrartajmahal);//decimos que al pasar el cursor sobre el boton tajmahal se ejecute la funcion mostrartajmahal
		//tajmahal.events.onInputOut.add(this.desaparecertajmahal);
	  cafeteria.events.onInputOver.add(this.aparececafeteria);
	   cafeteria.events.onInputOut.add(this.desaparececafeteria);
	 //  museodelhombre.events.onInputOver.add(this.aparecehombre);
	   //museodelhombre.events.onInputOut.add(this.desaparecehombre);
	   laboratorio.events.onInputOver.add(this.aparecelaboratorio);
	   laboratorio.events.onInputOut.add(this.desaparecelaboratorio);
	   escuela.events.onInputOver.add(this.apareceescuela);
	   escuela.events.onInputOut.add(this.desapareceescuela);
	casa.events.onInputOver.add(this.aparececasa);
	  casa.events.onInputOut.add(this.desaparececasa);
	   rio.events.onInputOver.add(this.aparecerio);
	   rio.events.onInputOut.add(this.desaparecerio);
	function interactivity(){
while(true){
/*dinosaurio.position.y+=1;
var i=1;
while(i<1000){
	i++;
console.log(i);
}*/
var i=1;
var j=1;
while(i<10){

		// museodelhombre.position.y+=1;//podemos apreciar que movemos todos los botones en la misma proporcion que el fondo para evitar que los lugares de referencia queden en sitios no relacionados
		// tajmahal.position.y+=1;//Se mueven a la derecha los botones
		  //tajmahalimagen.position.x+=2;
		 // manoDiosImagen.position.x+=2;
		 cafeteria.position.y+=1;
		  //museodelhombreImagen.position.x+=2;
		  laboratorio.position.y+=1;
		  //zoologicoImagen.position.x+=2;
		  escuela.position.y+=1;
		  casa.position.y+=1;
		  //dinosaurioImagen.position.x+=2
		  //barcosImagen.position.x+=2;
		  rio.position.y+=1;
		  //infiernoImagen.position.x+=2;
 j=1;
		  while(j<10000){j++}
		  	i++;
}
i=1;j=1;
while(i<10){

		// museodelhombre.position.y-=1;//podemos apreciar que movemos todos los botones en la misma proporcion que el fondo para evitar que los lugares de referencia queden en sitios no relacionados
		 //tajmahal.position.y-=1;//Se mueven a la derecha los botones
		  //tajmahalimagen.position.x+=2;
		 // manoDiosImagen.position.x+=2;
		  cafeteria.position.y-=1;
		  //museodelhombreImagen.position.x+=2;
		  laboratorio.position.y-=1;
		  //zoologicoImagen.position.x+=2;
		  escuela.position.y-=1;
		  casa.position.y-=1;
		  //dinosaurioImagen.position.x+=2
		  //barcosImagen.position.x+=2;
		  rio.position.y-=1;
		  //infiernoImagen.position.x+=2;
 j=1;
		  while(j<10000){j++}
		  	i++;
}	
}




};
	Concurrent.Thread.create(interactivity);
        
	},
	
	update: function(){ //el update tiene la funcion de actualizar el estado
		if(flechaderecha.isDown){//isDown hace referencia al evento en el que la flecha derecha esta presionada
			this.derecha();
		}
		if(flechaizquierda.isDown){				
			this.izquierda();
			
		}if(flechaabajo.isDown){
			this.abajo();
			
		}
		if(flechaarriba.isDown){
			this.arriba();
			
		}
		if(right){
			this.derecha();//si la variable booleana es rigth entonces se ejecuta la funcion derecha();recordemos que estas variables booleanas so modifican por eventos de click o cursor en el create
		}else {
			btnrigth.alpha = 0.4;//Se cambia el alpha de los botones 
		}	
		if(left){
			this.izquierda();	
		} else {
			btnleft.alpha = 0.4;
		}
        if(down){
            this.abajo();
            
        }else{
            btndown.alpha=0.4;
            
        }
	if(up){
            this.arriba();
            
        }else{
            btnup.alpha=0.4;
            
        }
        
	},
	
	 izquierda: function(){  
		 if (fondojuego.tilePosition.x < 0){  // se propone un limite para evitar desplazamientos sobredimensionados fuera de la imagen
	        fondojuego.tilePosition.x += 2; // mueve el fondo dos unidades a la derecha 
			     
	

		// museodelhombre.position.x+=2;//podemos apreciar que movemos todos los botones en la misma proporcion que el fondo para evitar que los lugares de referencia queden en sitios no relacionados
		 //tajmahal.position.x+=2;//Se mueven a la derecha los botones
		 // tajmahalimagen.position.x+=2;
		  cafeteriaImagen.position.x+=2;
		  cafeteria.position.x+=2;
		  //museodelhombreImagen.position.x+=2;
		  laboratorio.position.x+=2;
		  laboratorioImagen.position.x+=2;
		  escuela.position.x+=2;
		  casa.position.x+=2;
		  escuelaImagen.position.x+=2
		  casaImagen.position.x+=2;
		  rio.position.x+=2;
		  rioImagen.position.x+=2;
		  
		  }
     },
	 derecha: function(){  
		 if (fondojuego.tilePosition.x > -430){  // le pone lÃ­mite al desplazamiento del fondo
	        fondojuego.tilePosition.x -= 2;//Se mueve a la izquierda el fondo
			
			

//museodelhombre.position.x-=2;//se mueven a la izquierda los botones
//		 tajmahal.position.x-=2;
//		 tajmahalimagen.position.x-=2;
		 cafeteriaImagen.position.x-=2;
		 cafeteria.position.x-=2;
		// museodelhombreImagen.position.x-=2;
		 laboratorio.position.x-=2;
		 laboratorioImagen.position.x-=2;
		 escuela.position.x-=2;
		 escuelaImagen.position.x-=2;
		 casa.position.x-=2;
		 casaImagen.position.x-=2;
		 rio.position.x-=2;
		rioImagen.position.x-=2;
		 




		 }

	 },
    abajo:function(){
        if(fondojuego.tilePosition.y>=-180){
            fondojuego.tilePosition.y-=2;//ser mueve hacia arriba el fondo
         
            //museodelhombre.position.y-=2;//Se mueve hacia arriba los botones 2 unidades
            //tajmahal.position.y-=2;
         //tajmahalimagen.position.y-=2;
		cafeteriaImagen.position.y-=2;
		cafeteria.position.y-=2;
		//museodelhombreImagen.position.y-=2;
		laboratorio.position.y-=2;
		laboratorioImagen.position.y-=2;
		escuela.position.y-=2;
		escuelaImagen.position.y-=2;
		casa.position.y-=2;
		casaImagen.position.y-=2;
		rio.position.y-=2;
		rioImagen.position.y-=2;
		}
        
    },
    arriba:function(){
        if(fondojuego.tilePosition.y<0){
            fondojuego.tilePosition.y+=2;//se mueve el fondo hacia abajo dos unidades
          
		//	museodelhombre.position.y+=2;//Se mueven los botones dos unidades hacia abajo
        //tajmahal.position.y+=2;
		//tajmahalimagen.position.y+=2;
		cafeteriaImagen.position.y+=2;
		cafeteria.position.y+=2;
		//museodelhombreImagen.position.y+=2;
		laboratorio.position.y+=2;
		laboratorioImagen.position.y+=2;
		escuela.position.y+=2;
		escuelaImagen.position.y+=2;
		casa.position.y+=2;
		casaImagen.position.y+=2;
		rio.position.y+=2;
		rioImagen.position.y+=2;
		}
        
    },
	anonima:function(){
	
		
	},
	/*mostrartajmahal:function(){//con estas funciones hacemos que los botones se hagan visibles cuando el cursor se les pasa por encima
		tajmahalimagen.alpha=1;
		
	},
	desaparecertajmahal:function(){//con estas funciones hacemos que los botones se hagan invisibles cuando el cursor no se encuentra sobre el boton
		tajmahalimagen.alpha=0;
		
	},*/
	aparececafeteria:function(){
		cafeteriaImagen.alpha=1;
		
		
	},
	desaparececafeteria:function(){
		cafeteriaImagen.alpha=0;
		
	},/*
	aparecehombre:function(){
		museodelhombreImagen.alpha=1;
		
	},
	desaparecehombre: function(){
		museodelhombreImagen.alpha=0;
		
	},*/
	aparecelaboratorio:function(){
		laboratorioImagen.alpha=1;
		//leon.play();
	
	},
	desaparecelaboratorio:function(){
		laboratorioImagen.alpha=0;
		
	},
	apareceescuela:function(){
		escuelaImagen.alpha=1;
		//sonidodinosaurio.play();
	},
	desapareceescuela:function(){
		escuelaImagen.alpha=0;
		
	},
	aparececasa:function(){
		casaImagen.alpha=1;
		
	},
	desaparececasa:function(){
		casaImagen.alpha=0;
		
	},
	aparecerio:function(){
		rioImagen.alpha=1;
		
	},
	desaparecerio:function(){
	rioImagen.alpha=0;
		
	}
   
	
}


juego.state.add("activo", jugar);
juego.state.start("activo");


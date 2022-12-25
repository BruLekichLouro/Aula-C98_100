//ADICIONAR:
var SpeechRecognition = window.WebkitSpeechRecognition;//converter fala em texto
   //Chamando api de reconhecimento de voz
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML= "";
    recognition.start();
}

recognition.onresult() = function(event){
    console.log(event);

    var Content = event.results[0][0].transcript;//texto convertido da nossa fala
    document.getElementById("textbox").innerHTML= Content;
    console.log(Content);

    //AULA 100:
    if(Content == "tire minha selfie"){
        console.log("tirando selfie ---");
        speak(); //adiciona na aula99 //movemos pra cá para falar "tirando a selfie em 5 seg"
    }
}
//AULA 99
function speak(){
    //A funcionalidade dessa função speak() é acionar o sistema para dizer o que for escrito dentro
//dessa função speak
    var synth = window.speechSynthesis;//ativando a api que converte texto em fala
    //AULA99:speakData = document.getElementById("textbox").value;//passar a área de texto pra api
    /*AULA100:substiui linha de cima por:*/
    speakData = "tirando sua selfie em 5 segundos"//quando a funcção speak for chamada, ela dirá a frase entre aspas
    var utterThis = new SpeechSynthesisUtterance(speakData);//converte texto em fala
    synth.speak(utterThis);//passando a var acima para a função speak
    Webcam.attach(camera); //acionar a camera
}

camera= document.getElementById("camera"); //acessando a camera do html
Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality:90
});

//ADICIONAR AULA 100:
function takeSelfie(){
    Webcam.snap(function(data_uri){
        //Webcam.snap=função pre definida da api pra tirar selfie
        //data_uri= local onde vamos exibir a selfie
        document.getElementById("result").innerHTML='<img id="selfieImage" src="'+data_uri+'"/>';
    });
}
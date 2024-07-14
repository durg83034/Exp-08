
var hmessage=["प्रयोग शुरू करने के लिए स्टार्ट बटन दबाएँ",
    "15ml KOH घोल लेने के लिए पिपेट पर क्लिक करें और इसे खाली फ्लास्क में भरें",
    "फिर से 15ml KOH घोल लेने के लिए पिपेट पर क्लिक करें और इसे oil sample में डालें",
    "oil sample को KOH घोल में घुलनशील बनाने के लिए उसे हीटिंग मशीन पर रखने के लिए फ्लास्क पर क्लिक करें",
    "हीट मशीन पर तापमान नॉब पर क्लिक करके, तापमान को 70 डिग्री सेल्सियस पर सेट करें",
    "अब ब्यूरेट में घोल भरने के लिए HCL सॉल्यूशन फ्लास्क पर क्लिक करें",
    "KOH फ्लास्क में फिनोलफ्थलीन इंडिकेटर की कुछ बूंदें डालें",
    "अब फ्लास्क को ब्यूरेट के नीचे रखें",
    "ब्यूरेट नोब पर तब तक क्लिक करें जब तक आपको घोल का पारदर्शी रंग न मिल जाए",
    "यह जानने के लिए ब्यूरेट में दिखाई गई रीडिंग को नोट करें कि 15ml 0.5(N) KOH घोल को टाइट्रेट करने के लिए कितना HCL घोल इस्तेमाल किया गया है",
    "फ्लास्क पर क्लिक करके उसे उसकी मूल स्थिति में रखें",
    "30 मिनट पूरे होने तक प्रतीक्षा करें",
    "oil sample को हीट मशीन से उठाने के लिए उस पर क्लिक करें",
    "फ़िनोल्फ़थेलीन की कुछ बूँदें जोड़ें",
    "फ्लास्क को ब्यूरेट के नीचे रखें",
    "ब्यूरेट नोब पर तब तक क्लिक करें जब तक आपको घोल का पारदर्शी रंग न मिल जाए",
    "यह जानने के लिए ब्यूरेट में दिखाए गए रीडिंग को फिर से नोट करें कि 15ml 0.5(N) KOH घोल के साथ oil को टाइट्रेट करने के लिए कितना HCL घोल उपयोग किया गया है",
    "फ्लास्क पर क्लिक करके उसे उसकी मूल स्थिति में रखें",
    "सटीक परिणाम प्राप्त करने के लिए इस प्रक्रिया को दो बार और दोहराएं",
    "Observations देखने के लिए Observations बटन दबाएँ",
    "सटीक परिणाम प्राप्त करने के लिए इस प्रक्रिया को एक बार और दोहराएं"
    ]

var message=["Press start button to start the experiment",
    "click on pipette to take 15ml KOH solution and fill it in the empty flask",
    "again click on pipette to take 15ml koh and put it in oil sample ",
    "click on oil sample flask to put it on heating machine to make oil soluble in KOH solution",
    "by clicking on temperature nob on heat machine, set the temperature at 70 degree celcius",
    "now click on HCL solution flask to fill the solution in burette",
    "add some drops of phenolphthlein indicator in KOH flask",
    "now put flask under the burette",
    "click on burette nob until you get the transparent colour of the solution",
    "note down the reading shown in the burette to know how much solution is used to titrate 15ml of 0.5(N) KOH solution",
    "put flask at their original postion by clicking on it",
    "wait to complete 30 minutes",
    "click on the oil sample to raise it from the heat machine",
    "add some drops of phenolphthalien",
    "put the flask under the burette",
    "click on burette nob until you get the transparent colour of the solution",
    "again note down the reading shown in the burette to know how much solution is used to titrate oil with 15ml of 0.5(N) KOH solution",
    "put flask at their original postion by clicking on it",
    "repeat this process two more times to get accurate results",
    "to see observations press observations button",
    "repeat this process one more time to get accurate results"
    ]



var startlab = document.querySelector("#startinglab")
var startlab2 = document.querySelector("#workinglab")
var startbutton = document.querySelector("#start")
var langselector = document.querySelector("#langselector")
var mes = document.querySelector("#text")
var tablesdiv = document.querySelector("#tablesdiv")


var statuses = 0
var f=0
var messcounter = 0
var mes1




function start(){
    if(statuses==0){
        statuses=1
        f=1
        startbutton.style.visibility="hidden"
        messcounter=1
        update()
    }
    else if(f==40){
        resizeall()
        f=1
        messcounter=1
        update()
        startbutton.style.visibility="hidden"
        trial()
    }
    else if(f==2000){
        tablesdiv.style.visibility="visible"
        f=3000
    }
}









function hindi1(){
    // console.log(lang)
    lang="hindi"
    // headertext.innerText="'एसिटिक' एसिड के पृथक्करण स्थिरांक को निर्धारित करने के लिए विद्युत चालकता का मापन"
    langselector.style.opacity="0%"
    // startbutton.innerText="आगे"
    ins.innerText="निर्देश :-"

    setTimeout(function(){
        langselector.style.visibility="hidden"
        // s.style.animation="vibrate 1s"
        // s.style.animationIterationCount="infinite"
    },1000)
    update()
}

function eng1(){
    // console.log(lang)
    lang="eng"
    // headertext.innerText="Measurement of Electrical conductance to determine dissociation constant of 'Acetic' acid"
    langselector.style.opacity="0%"
    setTimeout(function(){
        langselector.style.visibility="hidden"
        // s.style.animation="vibrate 1s"
        // s.style.animationIterationCount="infinite"
    },1000)
    update() 
}



function speech1(){
    speechSynthesis.cancel();
    if(lang=="none"){
    }
    else if(lang=="hindi"){
        mes1=hmessage[messcounter-1]
    }
    else if(lang=="eng"){
        mes1=message[messcounter-1]
    }
    setTimeout(function(){ 
        const utterance = new SpeechSynthesisUtterance(mes1);
        const voices = speechSynthesis.getVoices()
        const voice1 = voices.find(voice => voice.name === 'Microsoft Kalpana - Hindi (India)')
        const voice = voices.find(voice => voice.name === 'Microsoft Zira - English (United States)')        
        //const utterance = new SpeechSynthesisUtterance(mes1);
        if(lang=="hindi"){
            utterance.voice=voice1
            utterance.lang='hi-IN';
        }
        else if(lang=="eng"){

            utterance.voice=voice
            utterance.lang='en-IN';
        }
        utterance.pitch=1;
        utterance.rate=1;
        utterance.volume=1;
        speechSynthesis.speak(utterance);
    },500)
}

function update(){
    // console.log(message[messcounter])
    if(lang=="hindi"){
        mes.innerText=hmessage[messcounter]
    }
    else if(lang=="eng"){
        mes.innerText=message[messcounter]
    }
    messcounter+=1
        speech1()
}








































function resizeall(){
    koh15.style.left="10%"
    pc.style.visibility="hidden"
    pb.style.visibility="hidden"
    b27.style.visibility="hidden"
    b27.style.opacity="0%"
    eburette.style.opacity="100%"
    eburette.style.visibility="hidden"
    rotary.style.rotate="-120deg"
    heaterdone.style.opacity="0%"
    oilsample.style.left="20%"
    oilsample.style.visibility="visible"
    oilsample.style.opacity="100%"
    kohoil.style.left="20%"
    kohoil.style.visibility="hidden"
    kohoil.style.opacity="0%"
    ptext.innerHTML="Heat the oil mixture for 30 minutes at 70<sup>0</sup>C to make oil proper soluble in KOH"
    drop.style.left="16%"
    drop.style.top="12%"
    koh15p.style.scale="1"
    koh15p.style.top="50%"
    koh15p.style.left="40%"
    kohoilp.style.top="50%"
    kohoilp.style.left="40%"
    kohoilp.style.scale="1"
    koh15p.style.scale="1"
    koh15p.style.visibility="hidden"
    koh15p.style.opacity="0%"
    koh15.style.visibility="hidden"
    koh15.style.opacity="0%"
    eflask.style.visibility="visible"
    eflask.style.opacity="100%"
    kohsol.style.opacity="100%"
    kohsol.style.visibility="visible"
    hclsol.style.opacity="100%"
    hclsol.style.visibility="visible"
    hclhalf.style.opacity="0%"
    kohneck.style.visibility="visible"
    kohneck.style.opacity="0%"
    kohhalf.style.visibility="visible"
    kohhalf.style.opacity="0%"
    epippete.style.visibility="visible"
    watch.style.visibility="hidden"
    funnel.style.visibility="visible"

}

































/*function hindi1(){
    console.log(lang)
    lang="hindi"
    headertext.innerText="'एसिटिक' एसिड के पृथक्करण स्थिरांक को निर्धारित करने के लिए विद्युत चालकता का मापन"
    langselector.style.opacity="0%"
    s.innerText="आगे"
    ins.innerText="निर्देश :-"

    setTimeout(function(){
        langselector.style.visibility="hidden"
        s.style.animation="vibrate 1s"
        s.style.animationIterationCount="infinite"
    },1000)
    update()
}

function eng1(){
    console.log(lang)
    lang="eng"
    headertext.innerText="Measurement of Electrical conductance to determine dissociation constant of 'Acetic' acid"
    langselector.style.opacity="0%"
    setTimeout(function(){
        langselector.style.visibility="hidden"
        s.style.animation="vibrate 1s"
        s.style.animationIterationCount="infinite"
    },1000)
    update() 
}



function speech1(){
    speechSynthesis.cancel();
    if(lang=="none"){
    }
    else if(lang=="hindi"){
        mes1=hmessage[messcounter-1]
    }
    else if(lang=="eng"){
        mes1=message[messcounter-1]
    }
    setTimeout(function(){ 
        
        const utterance = new SpeechSynthesisUtterance(mes1);
        if(lang=="hindi"){
            utterance.lang='hi-HI';
        }
        else if(lang=="eng"){
            utterance.lang='en-IN';
        }
        utterance.pitch=1;
        utterance.rate=1;
        utterance.volume=1;
        speechSynthesis.speak(utterance);
    },500)
}

function update(){
    console.log(message[messcounter])
    if(lang=="hindi"){
        mes.innerText=hmessage[messcounter]
    }
    else if(lang=="eng"){
        mes.innerText=message[messcounter]
    }
    messcounter+=1
        speech1()
}
*/

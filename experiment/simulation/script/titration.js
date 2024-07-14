


var clicker = document.querySelector("#clicker")





var t=0
var trial = "1st"






function flask1(){
    // console.log(f)
    if(f==13){
        f=14
        koh15p.style.left="12.5%"
        koh15p.style.scale="0.8"
        koh15p.style.top="55%"
        koh15.style.left="12.5%"
        koh15.style.scale="0.8"
        koh15.style.top="55%"
        // drop.style.visibility="visible"
        drop.style.left="16%"
        drop.style.top="60%"
        clicker.style.visibility="visible"
        f=15
        t=10
        messcounter=8
        update()
    }
    else if(f==21){
        // console.log(f)
        f=22
        koh15.style.left="50%"
        koh15.style.scale="1"
        koh15.style.top="50%"
        messcounter=11
        update()
        // setTimeout(function(){
        //     messcounter=12
        //     update()
        // },5000)
    }



}



function flask2(){
    // console.log(f)
    if(f==29){
        f=30
        kohoilp.style.left="12.5%"
        kohoilp.style.scale="0.8"
        kohoilp.style.top="55%"
        kohoil.style.left="12.5%"
        kohoil.style.scale="0.8"
        kohoil.style.top="55%"
        // drop.style.visibility="visible"
        drop.style.left="16%"
        drop.style.top="60%"
        clicker.style.visibility="visible"
        f=31
        t=2
        messcounter=15
        update()
    }
    else if(f==39){
        // console.log(f)
        f=40
        kohoil.style.left="40%"
        kohoil.style.scale="1"
        kohoil.style.top="50%"
        startbutton.style.visibility="visible"
        // console.log(trial)
        messcounter=18
        trial1()
        update()
    }



}



function titrate(){
    if(t==10){
        if(f!=20){
            drop.style.transitionDuration="1s"
            drop.style.visibility="visible"
            f+=1
            setTimeout(function(){
                drop.style.left="16%"
                drop.style.top="80%"
                setTimeout(function(){
                    drop.style.transitionDuration="0.1s"
                    drop.style.visibility="hidden"
                    
                    setTimeout(function(){
                        drop.style.top="60%"
                        b20.style.visibility="visible"
                        
                    },100)
                    
                },500)
            },100)
            if(f==20){
                clicker.style.visibility="hidden"
                phvari.style.opacity="0%"
                koh15.style.opacity="100%"
                b20.style.opacity="100%"
                burette.style.opacity="0%"
                setTimeout(function(){
                    phvari.style.visibility="hidden"
                    burette.style.visibility="hidden"
                    ptext.innerText="Note down the burette reading to see how much 0.5(N) HCL solution used to titrate 15ml KOH solution"
                    popuphider()
                    f=21
                    t=11
                    messcounter=9
                    update()
                    setTimeout(function(){
                        messcounter=10
                        update()
                    },15000)
                    // console.log(f)
                },500)
            }
        }
    }




    else if(t==2){
        if(f!=38){
            // console.log(f)
            drop.style.transitionDuration="1s"
            drop.style.visibility="visible"
            f+=1
            setTimeout(function(){
                drop.style.left="16%"
                drop.style.top="80%"
                setTimeout(function(){
                    drop.style.transitionDuration="0.1s"
                    drop.style.visibility="hidden"
    
                    setTimeout(function(){
                        drop.style.top="60%"
                        b27.style.visibility="visible"
    
                    },100)
    
                },500)
            },100)
            if(f==38){
                clicker.style.visibility="hidden"
                kohoilp.style.opacity="0%"
                kohoil.style.opacity="100%"
                b27.style.opacity="100%"
                b20.style.opacity="0%"
                setTimeout(function(){
                    kohoilp.style.visibility="hidden"
                    b20.style.visibility="hidden"
                    ptext.innerText="Note down the burette reading again to see how much 0.5(N) HCL solution used to titrate oil with 15ml KOH solution"
                    popuphider()
                    f=39
                    t=4
                    messcounter=16
                    update()
                    setTimeout(function(){
                        messcounter=17
                        update()
                    },15000)
                    // console.log(f)
                },500)
            }
        }
    }



}



function trial1(){
    if(trial=="1st"){
        trial="2nd"
    }
    else if(trial=="2nd"){
        trial="3rd"
        messcounter=20
    }
    else if(trial=="3rd"){
        trial="end"
        startbutton.innerText="Observations"
        f=2000
        messcounter=19
    }
}













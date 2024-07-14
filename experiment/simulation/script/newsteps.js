var epippete = document.querySelector("#emptypippete")
var pippete2 = document.querySelector("#pippete")
var koh15 = document.querySelector("#koh15ml")
var kohsol = document.querySelector("#kohsol")
var eflask = document.querySelector("#eflask")
var kohoil = document.querySelector("#kohoil")
var kohneck = document.querySelector("#kohneck")
var kohhalf = document.querySelector("#kohhalf")
var oilsample = document.querySelector("#oilsample")
var heaterdone = document.querySelector("#heaterdone")
var rotary = document.querySelector("#rotary")
var watch = document.querySelector("#watch")
var hclsol = document.querySelector("#hclsol")
var hclneck = document.querySelector("#hclneck")
var hclhalf = document.querySelector("#hclhalf")
var funnel = document.querySelector("#funnel")
var burette = document.querySelector("#burette")
var eburette = document.querySelector("#eburette")
var b20 = document.querySelector("#b20")
var b27 = document.querySelector("#b27")
var drop = document.querySelector("#drop")
var pb = document.querySelector("#pb")
var pc = document.querySelector("#pc")
var koh15p = document.querySelector("#koh15p")
var kohoilp = document.querySelector("#kohoilp")
var ptext = document.querySelector("#ptext")


var phvari
var phvari2



function phenolph(){
    if(f==11){
        f=12
        pc.style.top="20%"
        setTimeout(function(){
            pc.style.left="42.5%"
            drop.style.left="43.3%"
            drop.style.top="53%"
            setTimeout(function(){
                pc.style.top="30%"
                setTimeout(function(){
                    drop.style.visibility="visible"
                    setTimeout(function(){
                        drop.style.top="70%"
                        phvari.style.visibility="visible"
                        setTimeout(function(){
                            drop.style.visibility="hidden"
                            koh15.style.opacity="0%"
                            phvari.style.opacity="100%"
                            setTimeout(function(){
                                pc.style.top="20%"
                                setTimeout(function(){
                                    pc.style.left="60.75%"
                                    setTimeout(function(){
                                        pc.style.top="52.3%"
                                        // phvari=kohoilp
                                        f=13
                                        messcounter=7
                                        update()
                                    },1000)

                                },1000)
                            },1000)
                        },200)
                    },100)
                },1000)
            },1000)
        },1000)
    }

    else if(f==27){
        f=28
        pc.style.top="20%"
        setTimeout(function(){
            pc.style.left="42.5%"
            drop.style.left="43.3%"
            drop.style.top="53%"
            drop.style.transitionDuration="1s"
            setTimeout(function(){
                pc.style.top="30%"
                setTimeout(function(){
                    drop.style.visibility="visible"
                    setTimeout(function(){
                        drop.style.top="70%"
                        kohoilp.style.visibility="visible"
                        setTimeout(function(){
                            drop.style.visibility="hidden"
                            kohoil.style.opacity="0%"
                            kohoilp.style.opacity="100%"
                            setTimeout(function(){
                                pc.style.top="20%"
                                setTimeout(function(){
                                    pc.style.left="60.75%"
                                    setTimeout(function(){
                                        pc.style.top="52.3%"
                                        // phvari=kohoilp
                                        f=29
                                        messcounter=14
                                        update()
                                    },1000)

                                },1000)
                            },1000)
                        },200)
                    },100)
                },1000)
            },1000)
        },1000)
    }
}


























function oilflask(){
    if (f==5){
        f=6
        epippete.style.visibility="hidden"
        pippete2.style.visibility="hidden"
        kohoil.style.top="15%"
        setTimeout(function(){
            kohoil.style.left="81%"
            setTimeout(function(){
                kohoil.style.top="22%"
                setTimeout(function(){
                    // kohhalf.style.visibility="hidden"
                    koh15.style.left="40%"  
                    setTimeout(function(){

                        eburette.style.visibility="visible"
                    },500)
                    // kohneck.style.visibility="hidden"
                },1000)
                kohhalf.style.opacity="0%"  
                f=7
                messcounter=4
                update()
            },1000)
        },1000)
    }
    else if(f==25){
        f=26
        kohoil.style.top="15%"
        setTimeout(function(){
            kohoil.style.left="40%"
            setTimeout(function(){
                kohoil.style.top="50%"
                kohoilp.style.visibility="visible"
                f=27
                messcounter=13
                update()
            },1000)
        },1000)
    }





}

function nob(){
    if (f==7){
        rotary.style.rotate="-70deg"
        f=8
    }
    else if (f==8){
        rotary.style.rotate="-30deg"
        // rotary.style.top="70.6%"
        messcounter=5
        update()
        setTimeout(function(){
            popuphider()
            watch.style.visibility="visible"
            resetBtn()
            startBtn()
            setTimeout(function(){
                stopBtn()
                heaterdone.style.opacity="100%"
                f=25
                messcounter=12
                update()
            },470000)
        },1000)
        f=9
    }
}

function popuphider(){
    popup.style.visibility="visible"
    setTimeout(function(){
        popup.style.visibility="hidden"
    },5000)
}




function hcl(){
    if (f==9){
        f=10
        eburette.style.scale="0.8"
        burette.style.scale="0.8"
        eburette.style.top="12%"
        burette.style.top="12%"
        hclsol.style.top="5%"
        hclhalf.style.top="5%"
        funnel.style.rotate="0deg"
        funnel.style.top="4%"
        setTimeout(function(){
            funnel.style.left="14.1%"
            hclsol.style.left="20%"
            hclhalf.style.left="20%"
            setTimeout(function(){
                funnel.style.top="12.5%"
                hclsol.style.top="-5%"
                hclsol.style.rotate="-90deg"
                hclhalf.style.top="-5%"
                hclhalf.style.rotate="-90deg"
                setTimeout(function(){
                    drop.style.visibility="visible"
                    drop.style.top="15%"
                    burette.style.visibility="visible"
                    hclhalf.style.visibility="visible"
                    setTimeout(function(){
                        drop.style.visibility="hidden"
                        eburette.style.opacity="0%"
                        burette.style.opacity="100%"
                        hclsol.style.opacity="0%"
                        hclhalf.style.opacity="100%"

                        setTimeout(function(){
                            hclsol.style.top="5%"
                            hclsol.style.rotate="0deg"
                            hclhalf.style.top="5%"
                            hclhalf.style.rotate="0deg"
                            funnel.style.top="4%"
                            setTimeout(function(){
                                eburette.style.scale="1"
                                burette.style.scale="1"
                                funnel.style.left="60%"
                                hclsol.style.left="50%"
                                hclhalf.style.left="50%"
                                burette.style.top="5%"
                                eburette.style.top="5%"
                                b20.style.top="5%"
                                b27.style.top="5%"
                                setTimeout(function(){
                                    funnel.style.top="70%"
                                    hclsol.style.top="50%"
                                    hclhalf.style.top="50%"
                                    funnel.style.rotate="70deg"
                                    setTimeout(function(){
                                        pb.style.visibility="visible"
                                        pc.style.visibility="visible"
                                        funnel.style.transitionDuration="0s"
                                        hclhalf.style.transitionDuration="0s"
                                        funnel.style.visibility="hidden"
                                        hclhalf.style.visibility="hidden"
                                        phvari=koh15p
                                        // phvari2=kohoilp
                                        f=11
                                        messcounter=6
                                        update()
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },500)
                },1000)
            },1000)
        },1000)
    }





}

















function pippete1(){
    if(f==1){
        f=2
        epippete.style.rotate="0deg"
        pippete2.style.rotate="0deg"
        epippete.style.transform="translate(0%,-200%)"
        pippete2.style.transform="translate(0%,-200%)"
        setTimeout(function(){
            epippete.style.transform="translate(1200%,-200%)"
            pippete2.style.transform="translate(1200%,-200%)"
            setTimeout(function(){
                epippete.style.transform="translate(1200%,-100%)"
                pippete2.style.transform="translate(1200%,-100%)"
                pippete2.style.visibility="visible"
                setTimeout(function(){
                    epippete.style.opacity="0%"
                    pippete2.style.opacity="100%"
                    kohsol.style.opacity="0%"
                    kohneck.style.opacity="100%"
                    setTimeout(function(){
                        // epippete.style.visibility="hidden"
                        epippete.style.transform="translate(1200%,-200%)"
                        pippete2.style.transform="translate(1200%,-200%)"
                        setTimeout(function(){
                            epippete.style.transform="translate(-780%,-200%)"
                            pippete2.style.transform="translate(-780%,-200%)"
                            setTimeout(function(){
                                epippete.style.transform="translate(-780%,-100%)"
                                pippete2.style.transform="translate(-780%,-100%)"
                                koh15.style.visibility="visible"
                                setTimeout(function(){
                                    epippete.style.opacity="100%"
                                    pippete2.style.opacity="0%"
                                    koh15.style.opacity="100%"
                                    eflask.style.opacity="0%"
                                    setTimeout(function(){
                                        eflask.style.visibility="hidden"
                                        f=3
                                        messcounter=2
                                        update()
                                    },500)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1500)
        
    }
    else if(f==3){
        f=4
        epippete.style.transform="translate(-780%,-200%)"
        pippete2.style.transform="translate(-780%,-200%)"
        setTimeout(function(){
            epippete.style.transform="translate(1200%,-200%)"
            pippete2.style.transform="translate(1200%,-200%)"
            setTimeout(function(){
                epippete.style.transform="translate(1200%,-100%)"
                pippete2.style.transform="translate(1200%,-100%)"
                pippete2.style.visibility="visible"
                setTimeout(function(){
                    epippete.style.opacity="0%"
                    pippete2.style.opacity="100%"
                    kohneck.style.opacity="0%"
                    kohhalf.style.opacity="100%"
                    setTimeout(function(){
                        epippete.style.visibility="hidden"
                        epippete.style.transform="translate(1200%,-200%)"
                        pippete2.style.transform="translate(1200%,-200%)"
                        setTimeout(function(){
                            epippete.style.transform="translate(-130%,-200%)"
                            pippete2.style.transform="translate(-130%,-200%)"
                            setTimeout(function(){
                                epippete.style.transform="translate(-130%,-100%)"
                                pippete2.style.transform="translate(-130%,-100%)"
                                epippete.style.visibility="visible"
                                kohoil.style.visibility="visible"
                                setTimeout(function(){
                                    epippete.style.opacity="100%"
                                    pippete2.style.opacity="0%"
                                    kohoil.style.opacity="100%"
                                    oilsample.style.opacity="0%"
                                    setTimeout(function(){
                                        oilsample.style.visibility="hidden"
                                        pippete2.style.visibility="hidden"
                                        setTimeout(function(){
                                            epippete.style.transform="translate(-130%,-200%)"
                                            pippete2.style.transform="translate(-130%,-200%)"
                                            setTimeout(function(){
                                                epippete.style.transform="translate(300%,-200%)"
                                                pippete2.style.transform="translate(300%,-200%)"
                                                setTimeout(function(){
                                                    epippete.style.transform="translate(-0%,-0%)"
                                                    pippete2.style.transform="translate(-0%,-0%)"
                                                    setTimeout(function(){
                                                        epippete.style.rotate="-90deg"
                                                        f=5
                                                        messcounter=3
                                                        update()
                                                    },1000)
                                                },1000)
                                            },1000)
                                        },1000)
                                    },500)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)    
            },1000)
        },1000)
    }


}
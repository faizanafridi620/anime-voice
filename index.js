let numberOfButtons=document.querySelectorAll("button").length;
for(let i=0;i<numberOfButtons;i++){
        document.querySelectorAll("button")[i].addEventListener("click",function(){
                let buttonAnime=this;
                let clickedButton=buttonAnime.className;
                

                if(clickedButton === "Bakugo"){
                        const oi=new Audio("sounds/bakugou_s oi oi oi scenes(MP3_320K)-[AudioTrimmer.com].mp3");
                        oi.play();
                }
                else if(clickedButton === "Koucho"){
                        const moshi=new Audio("sounds/Shinobu Say _moshi moshi Daijōbudesuka_ --Shinobu--(MP3_320K) Ringtone.mp3");
                        moshi.play();
                }
                else if(clickedButton === "Shinomiya"){
                        const kawai=new Audio("sounds/_O Kawaii Koto_ - Kaguya-sama(MP3_320K).mp3");
                        kawai.play();
                }
                else if(clickedButton === "Gojo"){
                        const yowai=new Audio("sounds/Satoru Gojo - Yowai Mo(MP3_320K).mp3");
                        yowai.play();
                }
                else if(clickedButton === "Anya"){
                        const waku=new Audio("sounds/Anya says waku waku(MP3_320K).mp3");
                        waku.play();
                }
                else if(clickedButton === "Yamete"){
                        const yamete=new Audio("sounds/Yamete kudasai meme sound effect _memes _shorts(MP3_320K).mp3");
                        yamete.play();
                }
                else{
                        console.log("Invalid");
                        
                }
                
        })
}

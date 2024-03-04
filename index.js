var yourName1 = prompt("Your Name?")
var studenWish1 = prompt("mau lanjut kuliah? ?")
function changeEnterUniv(){
    let changeGetUniv = Math.random() * 100
    changeGetUniv = Math.floor(changeGetUniv)    
    return changeGetUniv
}
var changeGetUniv = changeEnterUniv()
if (studenWish1 == "mau") {
    var score = prompt("Berapakah nilai akhir SMA/SMK mu?")
    
    if(score < 30){
        alert("tidak mungkin masuk univ")
    }else if(score < 50){
        if(changeGetUniv < 50){
            alert("hmm kemungkinan kamu " +yourName1+ " kecil masuk UNIV");
        }else if(changeGetUniv > 50){
            alert("hmm kemungkinan kamu " +yourName1+ " bisa masuk UNIV");
        }
    }else if(changeGetUniv > 70 && score > 60){
        alert("hei "+ yourName1 + " pasti masuk UNIV dengan "+score+"mu yang besar itu");
    }else if(score > 80 || changeGetUniv > 70){
        alert("hei "+ yourName1 + " pasti masuk UNIV dengan "+score+"mu yang besar itu");
        }
}else{
    alert("yaudah sih")
}


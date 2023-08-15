const subhanAllahNumber = document.getElementById('subhanAllahNumber')
const subhanAllahIncreamentBtn = document.getElementById('subhanAllahIncreamentBtn')
const subhanAllahDecreamentBtn = document.getElementById('subhanAllahDecreamentBtn')

// Alhamdulillah section
const AlhamdulillahNumber = document.getElementById('AlhamdulillahNumber')
const AlhamdulillahIncreamentBtn = document.getElementById('AlhamdulillahIncreamentBtn')
const AlhamdulillahDecreamentBtn = document.getElementById('AlhamdulillahDecreamentBtn')

// Allahu Akbar section

const AkbarNumber = document.getElementById('AkbarNumber')
const AkbarIncreamentBtn = document.getElementById('AkbarIncreamentBtn')
const AkbarDecreamentBtn = document.getElementById('AkbarDecreamentBtn')

// reset section
const reSetBtn = document.getElementById('reSetBtn')

let subhanAllahNumberInitial = 0
//increament
subhanAllahIncreamentBtn.addEventListener('click', function(){
    if(subhanAllahNumberInitial==33){
        const cm = 'You have completed this, please complete another one.'
        return alert(cm);
    }
    subhanAllahNumberInitial ++ ;
    subhanAllahNumber.innerText = subhanAllahNumberInitial;
})
//Decreament
subhanAllahDecreamentBtn.addEventListener('click', function(){
    if(subhanAllahNumberInitial==0){
        const over = 'You can not go bellow 0'
        return alert(over);
    }
    else {
        subhanAllahNumberInitial -- ;
    }
    subhanAllahNumber.innerText = subhanAllahNumberInitial;
})
// 2nd part
let AlhamdulillahInitial = 0
//increament
AlhamdulillahIncreamentBtn.addEventListener('click', function(){
    if(AlhamdulillahInitial==33){
        const cm = 'You have completed this, please complete another one.'
        return alert(cm);
    }
    AlhamdulillahInitial ++ ;
    AlhamdulillahNumber.innerText = AlhamdulillahInitial;
})
//Decreament
AlhamdulillahDecreamentBtn.addEventListener('click', function(){
    if(AlhamdulillahInitial==0){
        const over = 'You can not go bellow 0'
        return alert(over);
    }
    else {
        AlhamdulillahInitial -- ;
    }
    AlhamdulillahNumber.innerText = AlhamdulillahInitial;
})

//3rd

let AkbarInitial = 0
//increament
AkbarIncreamentBtn.addEventListener('click', function(){
    if(AkbarInitial==33){
        const cm = 'You have completed this, please complete another one.'
        return alert(cm);
    }
    AkbarInitial ++ ;
    AkbarNumber.innerText = AkbarInitial;
})
//Decreament
AkbarDecreamentBtn.addEventListener('click', function(){
    if(AkbarInitial==0){
        const over = 'You can not go bellow 0'
        return alert(over);
    }
    else {
        AkbarInitial -- ;
    }
    AkbarNumber.innerText = AkbarInitial;
})

// reset btn
reSetBtn.addEventListener('click', function(){
subhanAllahNumber.innerText = 0;
AlhamdulillahNumber.innerText = 0;
AkbarNumber.innerText = 0;
subhanAllahNumberInitial = 0;
AlhamdulillahInitial = 0;
AkbarInitial = 0;
})
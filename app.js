let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev')
let nightskyDom = document.querySelector('.nightsky')
let listItemDom = document.querySelector('.nightsky .list')
let thumbnailDom = document.querySelector('.nightsky .thumbnail')

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('');
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    nextDom.click();
}, timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.nightsky .list .item');
    let itemThumbnail = document.querySelectorAll('.nightsky .thumbnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumnbnail[0]);
        nightskyDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSLider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        nightskyDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        nightskyDom.classList.remove('next');
        nightskyDom.classList.remove('prev');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=>{
        nextDom.click();
    }, timeAutoNext);
}
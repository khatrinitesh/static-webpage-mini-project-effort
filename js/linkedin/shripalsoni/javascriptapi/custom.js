const mq = window.matchMedia('(max-width:767px)')
const iphone = mq;
mq.addEventListener('change',function(e){
    console.log('iphone',e.matches);
})
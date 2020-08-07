var tl = gsap.timeline();
tl.from('nav img', {
    y: -30,
    opacity:0,
    ease: 'expo.easeinOut',
})
.from('nav #links a', {
    stagger: .1,
    y: -30,
    opacity:0,
    ease: 'expo.easeinOut',
})
.from('nav>a', {
    y: -30,
    opacity:0,

    ease: 'expo.easeinOut',
})
.from('#main .elem', {
    y: 40,
    opacity:0,
    stagger:.2,
    delay : .2,
    ease: 'expo.easeinOut',
})
.from('#bigImage img', {
    scale:1.2,
    y:50,
    opacity:0,
    delay : .2,
    ease: 'expo.easeinOut',
})

gsap.from("#entryLevel .enteryelem",{
    scrollTrigger :{
        trigger:'#entryLevel',
        toggleActions:'play pause resume reverse',
        
    },
    stagger:.3,
    y:30,
    opacity:0,
    ease:'expo.inOut'
})
gsap.from("#courseBanner .crselem",{
    scrollTrigger :{
        trigger:'#courseBanner',
        toggleActions:'play pause resume reverse',
        
    },
    delay:1.5,
    duration:1,
    stagger:.8,
    y:30,
    opacity:0,
    ease:'expo.inOut'
})
gsap.from("#brandsWork .brelem",{
    scrollTrigger :{
        trigger:'#brandsWork',
        toggleActions:'play pause resume reverse',
        
    },
    duration:1,
    stagger:.1,
    y:30,
    opacity:0,
    ease:'expo.inOut'
})
gsap.from("#showCaseGreen .shwelem",{
    scrollTrigger :{
        trigger:'#showCaseGreen',
        toggleActions:'play pause resume reverse',
        
    },
    delay:.5,
    
    stagger:.6,
    x:-30,
    opacity:0,
    ease:'expo.inOut'
})


var tl2 = gsap.timeline({scrollTrigger :{
    trigger:'#stats',
    toggleActions:'play pause resume reverse',
    
}});
tl2.from("#statsText .sttselem",{
    duration:.5,
    delay:1,
    stagger:.2,
    y:30,
    opacity:0,
    ease:'expo.easeinOut'
})
.from("#cards .card",{
    
    delay:.9,
    
    stagger:.6,
    x:-30,
    opacity:0,
    ease:'expo.easeinOut'
})
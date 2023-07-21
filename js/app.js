window.addEventListener('scroll', (e) => {
  document.body.style.cssText += `--scrollTop : ${this.scrollY}px`
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
 
//  const wrapper = window.document.getElementById('wrapper')
//  const content = window.document.getElementById('content')
  

ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
})

// LOCOMOTIVE SCROLL

const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container"),
    smooth: true,
    tablet: {smooth: true},
    smartphone: {smooth: true},
});


// SCROLL OBSERVER

let observer = new IntersectionObserver(observables => {
    for(let observable of observables){
        if(observable.intersectionRatio > 0.2)
            observable.target.classList.remove("hidden");
    }
}, {
   threshold: 0.2 
});

const sections = document.querySelectorAll("section")
for(let section of sections){
    section.classList.add("hidden");
    observer.observe(section);
}
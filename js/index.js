const sections = document.querySelectorAll('section')
const body = document.querySelector('body')

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        let bg = entry.target.classList;
        if (bg == 'testimonials show'){
            body.style.background='var(--blue)'
        }
        //zostawia po wyświetleniu
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
{
    threshold: 0.2,
    // rootMargin: '-100px'
}
)

sections.forEach(card=>{
    observer.observe(card)
})
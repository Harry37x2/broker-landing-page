const sections = document.querySelectorAll('section')

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
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
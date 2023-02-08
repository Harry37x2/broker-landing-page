const url = 'data/db.json'
const getData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}
const displayData = async () => {
    let payload = await getData();

let i = 0; //Current Slide
let j = payload.length; //Total Slides

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <img src="img/img${payload[i].id}.jpg"/>
    <p class="p-text">${payload[i].text}</p>
    <p class="p-name">${payload[i].name}</p>
    <p>${payload[i].date}</p>
  `;};
  displayTestimonial();
};
window.onload = displayData();

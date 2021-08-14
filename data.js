const d = document;

export function dataSet(carrusel, carruselInner){
    const $carousel = document.querySelector(carruselInner),
    $fragment = document.createDocumentFragment();
    let  $myCarousel = d.querySelector(carrusel),
    $slider = new bootstrap.Carousel($myCarousel, {
  interval: 1000,
});

let img = [
    {src:"https://i.postimg.cc/6QW68bVK/2.jpg"},
    {src:"https://i.postimg.cc/Pxxftd0Z/3.jpg"},
    {src:"https://i.postimg.cc/wxnNbrsF/4.jpg"},
    {src:"https://i.postimg.cc/DwTX7b6X/5.jpg"},
    {src:"https://i.postimg.cc/k5j6NYmQ/6.jpg"}
];


const loadImg = ()=>{
    img.map(e=>{
        const $div = document.createElement("div"),
        $img = document.createElement("img");
        $div.classList.add("carousel-item");
        $img.classList.add("d-block", "w-100");
        $img.setAttribute("src", e.src)

        $div.appendChild($img);

        $fragment.appendChild($div);
    })
    $carousel.appendChild($fragment);
}

loadImg();

}
const cards = document.querySelectorAll(".category__list > .category__item");
for (let i = 0; i < cards.length; i++) {
    cards[i].style.zIndex = 20 - i;
}

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseenter', () => {
        cards[i].style.zIndex = 50;
    })
    cards[i].addEventListener('mouseleave', function(e){ 
        cards[i].style.zIndex = 20 - i;
      });
}
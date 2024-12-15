// func counter cards
document.addEventListener("DOMContentLoaded", () =>{
    const cardsSection = document.querySelector('.cards-section');
    const counterCard = document.querySelector('.counter-dev');

    if(cardsSection && counterCard) {
        const totalCards = cardsSection.querySelectorAll('.card').length;

        let currentCount = 0;

        const increment = () => {
            if(currentCount < totalCards) {
                currentCount++;
                counterCard.textContent = currentCount;
                setTimeout(increment, 200);
            }
        }
        
        increment();

        
    }
})

// func filter cards
document.addEventListener("DOMContentLoaded", () => {
    

    const searchInput = document.querySelector("#search");
    const cards = document.querySelectorAll(".card");

    const filterCards = () => {
        const searchValue = searchInput.value.toLowerCase();

        const normalizeText = (text) => {
            return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        }

        cards.forEach(card => {
            const name = normalizeText(card.querySelector(".personal-info h4").textContent);

            console.log(name);

            if(name.includes(searchValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        })
    }

    searchInput.addEventListener("input", filterCards);
})
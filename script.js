document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion-header");
        const answer = item.querySelector(".answer");
        const arrow = header.querySelector(".arrow");

        header.addEventListener("click", () => {
            const isOpen = answer.style.display === "block";
            
            // Close all answers
            document.querySelectorAll(".answer").forEach(ans => ans.style.display = "none");
            document.querySelectorAll(".arrow").forEach(ar => ar.style.transform = "rotate(0deg)");

            // Open the clicked answer if it wasn't open
            if (!isOpen) {
                answer.style.display = "block";
                arrow.style.transform = "rotate(180deg)";
            }
        });
    });
});

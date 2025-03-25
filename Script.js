document.addEventListener("DOMContentLoaded", function () {
  const cardData = [
    {
      name: "John Doe",
      rating: "⭐4.8",
      category: "Sandbox",
      messages: "📩2.3M",
      img: "./image/card1.jpg",
    },
    {
      name: "Alice Smith",
      rating: "⭐4.5",
      category: "Adventure",
      messages: "📩1.8M",
      img: "./image/card2.jpg",
    },
    {
      name: "Michael Lee",
      rating: "⭐4.6",
      category: "Puzzle",
      messages: "📩2.1M",
      img: "./image/card3.jpg",
    },
    {
      name: "Sarah Connor",
      rating: "⭐4.9",
      category: "Action",
      messages: "📩3.2M",
      img: "./image/card4.jpg",
    },
    {
      name: "David Warner",
      rating: "⭐4.7",
      category: "Strategy",
      messages: "📩2.5M",
      img: "./image/card5.jpg",
    },
    {
      name: "Emma Watson",
      rating: "⭐4.4",
      category: "Education",
      messages: "📩1.5M",
      img: "./image/card6.jpg",
    },
    {
      name: "Chris Evans",
      rating: "⭐4.9",
      category: "Sci-Fi",
      messages: "📩3.0M",
      img: "./image/card7.jpg",
    },
    {
      name: "Sophia Miller",
      rating: "⭐4.3",
      category: "Casual",
      messages: "📩1.9M",
      img: "./image/card3.jpg",
    },
    {
      name: "Liam Johnson",
      rating: "⭐4.6",
      category: "Sports",
      messages: "📩2.7M",
      img: "./image/card1.jpg",
    },
    {
      name: "Olivia Brown",
      rating: "⭐4.8",
      category: "RPG",
      messages: "📩2.8M",
      img: "./image/card2.jpg",
    },
  ];

  const cardContainer = document.getElementById("cardContainer");

  cardContainer.innerHTML = cardData
    .map(
      (card)=>`
        <div class="card">
            <a href="#"><img src="${card.img}" alt="${card.name}"></a>
            <div>
                <h4><b class="text">${card.name}</b> ${card.rating}</h4>
                <h4><b class="text">${card.category}</b> ${card.messages}</h4>
            </div>
        </div>
    `
    )
    .concat("");
});


// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Select elements
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".main-navbar ul");
  const darkModeToggle = document.createElement("button");

  // Create Dark Mode Toggle Button
  darkModeToggle.classList.add("dark-mode-toggle");
  darkModeToggle.innerHTML = "🌙"; // Moon icon
  document.body.appendChild(darkModeToggle);

  // Toggle mobile menu
  if (hamburger) {
      hamburger.addEventListener("click", () => {
          navMenu.classList.toggle("active");
      });
  }

  // Dark Mode Feature
  function enableDarkMode() {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
      darkModeToggle.innerHTML = "☀️"; // Sun icon
  }

  function disableDarkMode() {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
      darkModeToggle.innerHTML = "🌙"; // Moon icon
  }

  // Check localStorage for dark mode setting
  if (localStorage.getItem("darkMode") === "enabled") {
      enableDarkMode();
  }

  // Toggle Dark Mode
  darkModeToggle.addEventListener("click", () => {
      if (document.body.classList.contains("dark-mode")) {
          disableDarkMode();
      } else {
          enableDarkMode();
      }
  });

  // Smooth Scroll for Internal Links
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
      anchor.addEventListener("click", (event) => {
          event.preventDefault();
          const targetId = anchor.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" });
          }
      });
  });
});

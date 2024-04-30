// scripts.js

// JavaScript code can be added here if needed
// For example, form validation, interactive effects, etc.
// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const searchContainer = document.querySelector(".search-container");
    const searchBar = document.querySelector(".search-bar");
    const searchButton = document.querySelector(".search-button");

    // Function to trigger break animation
    function breakSearchBar() {
        searchContainer.classList.add("break");
        searchBar.disabled = true; // Disable the search bar after breaking
    }

    // Event listener to trigger break animation on button click
    searchButton.addEventListener("click", breakSearchBar);
});
// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const searchContainer = document.querySelector(".search-container");
    const searchBar = document.querySelector(".search-bar");
    const searchButton = document.querySelector(".search-button");

    // Function to trigger break animation
    function breakSearchBar() {
        searchContainer.classList.add("break");
        searchBar.disabled = true; // Disable the search bar after breaking
    }

    // Event listener to trigger break animation on button click
    searchButton.addEventListener("click", breakSearchBar);
});
// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const priceElement = document.querySelector(".price");

    let timeoutId;

    // Function to start pulsating animation
    function startPulsating() {
        priceElement.classList.add("pulse");
    }

    // Function to stop pulsating animation
    function stopPulsating() {
        priceElement.classList.remove("pulse");
    }

    // Function to start popping animation
    function startPopping() {
        priceElement.classList.remove("pulse");
        priceElement.classList.add("pop");
    }

    // Event listener for mouseenter on price element
    priceElement.addEventListener("mouseenter", function() {
        timeoutId = setTimeout(startPulsating, 3000); // Start pulsating after 3 seconds
    });

    // Event listener for mouseleave on price element
    priceElement.addEventListener("mouseleave", function() {
        clearTimeout(timeoutId); // Cancel pulsating animation if user leaves before 3 seconds
        stopPulsating(); // Stop pulsating animation
        priceElement.classList.remove("pop"); // Reset popping animation
    });

    // Event listener for click on price element
    priceElement.addEventListener("click", function() {
        startPopping(); // Start popping animation
    });
});
// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const animationContainer = document.querySelector(".animation-container");
    const searchContainer = document.querySelector(".search-container");
    const iconContainer = document.querySelector(".icon-container");
    const priceElement = document.querySelector(".price");

    function createAnimatedElement(iconSrc) {
        const animatedElement = document.createElement("div");
        animatedElement.classList.add("animated-element");

        const icon = document.createElement("img");
        icon.src = iconSrc;
        animatedElement.appendChild(icon);

        animationContainer.appendChild(animatedElement);
    }

    // Call createAnimatedElement function with the path to your icon image
    createAnimatedElement("icon.png");

    const searchBar = document.querySelector(".search-bar");
    const searchButton = document.querySelector(".search-button");

    // Function to trigger break animation
    function breakSearchBar() {
        searchContainer.classList.add("break");
        searchBar.disabled = true; // Disable the search bar after breaking
    }

    // Event listener to trigger break animation on button click
    searchButton.addEventListener("click", breakSearchBar);

    // Function to create icon elements
    function createIcon(iconSrc, altText) {
        const icon = document.createElement("img");
        icon.src = iconSrc;
        icon.alt = altText;
        icon.classList.add("icon");
        iconContainer.appendChild(icon);
    }

    // Call createIcon function for each icon
    createIcon("youtube-icon.png", "YouTube");
    createIcon("twitter-icon.png", "Twitter");
    createIcon("facebook-icon.png", "Facebook");

    let timeoutId;

    // Function to start pulsating animation
    function startPulsating() {
        priceElement.classList.add("pulse");
    }

    // Function to stop pulsating animation
    function stopPulsating() {
        priceElement.classList.remove("pulse");
    }

    // Function to start popping animation
    function startPopping() {
        priceElement.classList.remove("pulse");
        priceElement.classList.add("pop");
    }

    // Event listener for mouseenter on price element
    priceElement.addEventListener("mouseenter", function() {
        timeoutId = setTimeout(startPulsating, 3000); // Start pulsating after 3 seconds
    });

    // Event listener for mouseleave on price element
    priceElement.addEventListener("mouseleave", function() {
        clearTimeout(timeoutId); // Cancel pulsating animation if user leaves before 3 seconds
        stopPulsating(); // Stop pulsating animation
        priceElement.classList.remove("pop"); // Reset popping animation
    });

    // Event listener for click on price element
    priceElement.addEventListener("click", function() {
        startPopping(); // Start popping animation
    });
});
/* Continue from previous JavaScript */

// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const animationContainer = document.querySelector(".animation-container");

    function createAnimatedElement(iconSrc) {
        const animatedElement = document.createElement("div");
        animatedElement.classList.add("animated-element");

        const icon = document.createElement("img");
        icon.src = iconSrc;
        animatedElement.appendChild(icon);

        animationContainer.appendChild(animatedElement);
    }

    // Call createAnimatedElement function with the path to your icon image
    createAnimatedElement("icon.png");

    const searchContainer = document.querySelector(".search-container");
    const searchBar = document.querySelector(".search-bar");
    const searchButton = document.querySelector(".search-button");

    // Function to trigger break animation
    function breakSearchBar() {
        searchContainer.classList.add("break");
        searchBar.disabled = true; // Disable the search bar after breaking
    }

    // Event listener to trigger break animation on button click
    searchButton.addEventListener("click", breakSearchBar);

    const iconContainer = document.querySelector(".icon-container");

    // Function to create icon elements
    function createIcon(iconSrc, altText) {
        const icon = document.createElement("img");
        icon.src = iconSrc;
        icon.alt = altText;
        icon.classList.add("icon");
        iconContainer.appendChild(icon);
    }

    // Call createIcon function for each icon
    createIcon("youtube-icon.png", "YouTube");
    createIcon("twitter-icon.png", "Twitter");
    createIcon("facebook-icon.png", "Facebook");

    const priceElement = document.querySelector(".price");

    let timeoutId;

    // Function to start pulsating animation
    function startPulsating() {
        priceElement.classList.add("pulse");
    }

    // Function to stop pulsating animation
    function stopPulsating() {
        priceElement.classList.remove("pulse");
    }

    // Function to start popping animation
    function startPopping() {
        priceElement.classList.remove("pulse");
        priceElement.classList.add("pop");
    }

    // Event listener for mouseenter on price element
    priceElement.addEventListener("mouseenter", function() {
        timeoutId = setTimeout(startPulsating, 3000); // Start pulsating after 3 seconds
    });

    // Event listener for mouseleave on price element
    priceElement.addEventListener("mouseleave", function() {
        clearTimeout(timeoutId); // Cancel pulsating animation if user leaves before 3 seconds
        stopPulsating(); // Stop pulsating animation
        priceElement.classList.remove("pop"); // Reset popping animation
    });

    // Event listener for click on price element
    priceElement.addEventListener("click", function() {
        startPopping(); // Start popping animation
    });
});
// Continue from previous JavaScript

document.addEventListener("DOMContentLoaded", function() {
    const priceElement = document.querySelector(".price");

    let timeoutId;

    // Function to start pulsating animation
    function startPulsating() {
        priceElement.classList.add("pulse");
    }

    // Function to stop pulsating animation
    function stopPulsating() {
        priceElement.classList.remove("pulse");
    }

    // Function to start popping animation
    function startPopping() {
        priceElement.classList.remove("pulse");
        priceElement.classList.add("pop");
    }

    // Event listener for mouseenter on price element
    priceElement.addEventListener("mouseenter", function() {
        timeoutId = setTimeout(startPulsating, 3000); // Start pulsating after 3 seconds
    });

    // Event listener for mouseleave on price element
    priceElement.addEventListener("mouseleave", function() {
        clearTimeout(timeoutId); // Cancel pulsating animation if user leaves before 3 seconds
        stopPulsating(); // Stop pulsating animation
        priceElement.classList.remove("pop"); // Reset popping animation
    });

    // Event listener for click on price element
    priceElement.addEventListener("click", function() {
        startPopping(); // Start popping animation
    });
});
// Continue from previous JavaScript

document.addEventListener("DOMContentLoaded", function() {
    const animationContainer = document.querySelector(".animation-container");

    function createAnimatedElement(iconSrc) {
        const animatedElement = document.createElement("div");
        animatedElement.classList.add("animated-element");

        const icon = document.createElement("img");
        icon.src = iconSrc;
        animatedElement.appendChild(icon);

        animationContainer.appendChild(animatedElement);
    }

    // Call createAnimatedElement function with the path to your icon image
    createAnimatedElement("icon.png");

    const searchContainer = document.querySelector(".search-container");
    const searchBar = document.querySelector(".search-bar");
    const searchButton = document.querySelector(".search-button");

    // Function to trigger break animation
    function breakSearchBar() {
        searchContainer.classList.add("break");
        searchBar.disabled = true; // Disable the search bar after breaking
    }

    // Event listener to trigger break animation on button click
    searchButton.addEventListener("click", breakSearchBar);

    const iconContainer = document.querySelector(".icon-container");

    // Function to create icon elements
    function createIcon(iconSrc, altText) {
        const icon = document.createElement("img");
        icon.src = iconSrc;
        icon.alt = altText;
        icon.classList.add("icon");
        iconContainer.appendChild(icon);
    }

    // Call createIcon function for each icon
    createIcon("youtube-icon.png", "YouTube");
    createIcon("twitter-icon.png", "Twitter");
    createIcon("facebook-icon.png", "Facebook");

    const priceElement = document.querySelector(".price");

    let timeoutId;

    // Function to start pulsating animation
    function startPulsating() {
        priceElement.classList.add("pulse");
    }

    // Function to stop pulsating animation
    function stopPulsating() {
        priceElement.classList.remove("pulse");
    }

    // Function to start popping animation
    function startPopping() {
        priceElement.classList.remove("pulse");
        priceElement.classList.add("pop");
    }

    // Event listener for mouseenter on price element
    priceElement.addEventListener("mouseenter", function() {
        timeoutId = setTimeout(startPulsating, 3000); // Start pulsating after 3 seconds
    });

    // Event listener for mouseleave on price element
    priceElement.addEventListener("mouseleave", function() {
        clearTimeout(timeoutId); // Cancel pulsating animation if user leaves before 3 seconds
        stopPulsating(); // Stop pulsating animation
        priceElement.classList.remove("pop"); // Reset popping animation
    });

    // Event listener for click on price element
    priceElement.addEventListener("click", function() {
        startPopping(); // Start popping animation
    });
});
// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const animationContainer = document.querySelector(".animation-container");

    function createAnimatedElement(iconSrc) {
        const animatedElement = document.createElement("div");
        animatedElement.classList.add("animated-element");

        const icon = document.createElement("img");
        icon.src = iconSrc;
        animatedElement.appendChild(icon);

        animationContainer.appendChild(animatedElement);
    }

    createAnimatedElement("icon.png");

    const iconContainer = document.querySelector(".icon-container");

    function createIcon(iconSrc, altText) {
        const icon = document.createElement("img");
        icon.src = iconSrc;
        icon.alt = altText;
        icon.classList.add("icon");
        iconContainer.appendChild(icon);
    }

    createIcon("youtube-icon.png", "YouTube");
    createIcon("twitter-icon.png", "Twitter");
    createIcon("facebook-icon.png", "Facebook");

    const priceElement = document.querySelector(".price");

    let timeoutId;

    function startPulsating() {
        priceElement.classList.add("pulse");
    }

    function stopPulsating() {
        priceElement.classList.remove("pulse");
    }

    function startPopping() {
        priceElement.classList.remove("pulse");
        priceElement.classList.add("pop");
    }

    priceElement.addEventListener("mouseenter", function() {
        timeoutId = setTimeout(startPulsating, 3000);
    });

    priceElement.addEventListener("mouseleave", function() {
        clearTimeout(timeoutId);
        stopPulsating();
        priceElement.classList.remove("pop");
    });

    priceElement.addEventListener("click", function() {
        startPopping();
    });
});
// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const animationContainer = document.querySelector(".animation-container");

    function createAnimatedElement(iconSrc) {
        const animatedElement = document.createElement("div");
        animatedElement.classList.add("animated-element");

        const icon = document.createElement("img");
        icon.src = iconSrc;
        animatedElement.appendChild(icon);

        animationContainer.appendChild(animatedElement);
    }

    createAnimatedElement("icon.png");

    const iconContainer = document.querySelector(".icon-container");

    function createIcon(iconSrc, altText) {
        const icon = document.createElement("img");
        icon.src = iconSrc;
        icon.alt = altText;
        icon.classList.add("icon");
        iconContainer.appendChild(icon);
    }

    createIcon("youtube-icon.png", "YouTube");
    createIcon("twitter-icon.png", "Twitter");
    createIcon("facebook-icon.png", "Facebook");

    const priceElement = document.querySelector(".price");

    let timeoutId;

    function startPulsating() {
        priceElement.classList.add("pulse");
    }

    function stopPulsating() {
        priceElement.classList.remove("pulse");
    }

    function startPopping() {
        priceElement.classList.remove("pulse");
        priceElement.classList.add("pop");
    }

    priceElement.addEventListener("mouseenter", function() {
        timeoutId = setTimeout(startPulsating, 3000);
    });

    priceElement.addEventListener("mouseleave", function() {
        clearTimeout(timeoutId);
        stopPulsating();
        priceElement.classList.remove("pop");
    });

    priceElement.addEventListener("click", function() {
        startPopping();
    });
});

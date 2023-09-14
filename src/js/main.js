function handleMenu() {
    let curIcon = null;
    let curMenu = null;
    window.addEventListener("click", function (e) {
        curIcon = e.target.closest(".burger-menu");
        if (!curIcon) return;
        curMenu = curIcon
            .closest(".burger-menu")
            .closest("header").lastElementChild;
        curIcon.classList.toggle("to-close");
        curMenu.classList.toggle("active");
    });
}

function ingectNavbar() {
    let markup = `
    <header>
    <div class="container">
        <h1 class="logo">@Eyad_Ahmed</h1>
        <ul class="links">
            <li>
                <a class="nav__link">_hello</a>
            </li>
            <li>
                <a class="nav__link">_about-me</a>
            </li>
            <li>
                <a class="nav__link">_projects</a>
            </li>
            <li class="contact">
                <a class="nav__link">_contact-me</a>
            </li>
        </ul>
        <div class="burger-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="burger-menu-active">
        <ul class="links">
            <li>
                <a class="nav__link">_hello</a>
            </li>
            <li>
                <a class="nav__link">_about-me</a>
            </li>
            <li>
                <a class="nav__link">_projects</a>
            </li>
            <li class="contact">
                <a >_contact-me</a>
            </li>
        </ul>

        <div class="footer">
            <div class="find">
                <p>find me in:</p>
                <div class="twitter">
                    <a target="_blank" href="https://twitter.com"><i
                            class="fa-brands fa-square-x-twitter"></i></a>
                </div>
                <div class="facebook">
                    <a target="_blank" href="https://www.facebook.com"><i
                            class="fa-brands fa-facebook"></i></a>
                </div>
                <div class="discord">
                    <a target="_blank" href="https://discord.com/users/1080176687792267336"><i
                            class="fa-brands fa-discord"></i></a>
                </div>
            </div>
            <div class="github">
                <a target="_blank" href="https://github.com/EyadAhmedAbdullah">
                    <p>@Eyad-Ahmed</p>
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>
        </div>
    </div>
</header>
    `;
    let sections = [...document.querySelectorAll("main")];
    sections.forEach((section) => {
        section.insertAdjacentHTML("afterbegin", markup);
        let sectionHeader = section.children[0];
        sectionHeader.id = section.id;
        let sectionsTitles = [
            ...section.querySelectorAll("header .links li a"),
        ];

        sectionsTitles.forEach((title) => {
            title.style.cursor = "pointer";
            title.href = "#" + title.textContent;
            if (title.textContent == section.id) {
                let curSectionTitle = title.closest("li");
                curSectionTitle.classList.add("active");
            }
        });
    });
}

function injectFooter() {
    let markup = `<div class="footer">
            <div class="find">
                <p>find me in:</p>
                <div class="twitter">
                    <a
                        target="_blank"
                        href="https://twitter.com"
                    >
                        <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                </div>
                <div class="facebook">
                    <a
                        target="_blank"
                        href="https://www.facebook.com"
                    >
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                </div>
                <div class="discord">
                    <a
                        target="_blank"
                        href="https://discord.com/users/1080176687792267336"
                    >
                        <i class="fa-brands fa-discord"></i>
                    </a>
                </div>
            </div>
            <div class="github">
                <a target="_blank" href="https://github.com/EyadAhmedAbdullah">
                    <p>@Eyad_Ahmed</p>
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>
        </div>`;

    let sections = [...document.querySelectorAll("main")];
    sections.forEach((section) => {
        section.insertAdjacentHTML("beforeend", markup);
    });
}

function handleCollapseLangs() {
    let collapse = [...document.querySelectorAll("aside .title")];
    collapse.forEach((coll) =>
        coll.addEventListener("click", () => {
            coll.classList.toggle("collapse");
        })
    );
}

// Projects section
let langs = [];
let generalMarkup = ``;
let checkboxes = document.querySelectorAll(
    '.project-container aside .langs .container input[type="checkbox"]'
);
let resultsConrainer = document.querySelector(
    ".project-container .results-container"
);
let checkboxesArray = Array.from(checkboxes);

function updateCheckedCheckboxes() {
    let checkedCheckboxes = checkboxesArray.filter(
        (checkbox) => checkbox.checked
    );
    langs = checkedCheckboxes.map((box) => box.dataset.lang);
    genMarkup();
    const filteredStr = Array.from(generalMarkup).filter(
        (char) => char !== ","
    );
    generalMarkup = filteredStr.join("");
    resultsConrainer.innerHTML = generalMarkup;
    console.log(langs);
}

function genMarkup() {
    let projectsData = [
        {
            img: "src/img/WhatsApp Image.png",
            name: "Drawing-App",
            link: "https://eyadahmedabdullah.github.io/-Drawing-App1/",
            des: "Duis aute irure dolor in velit esse cillum dolore.",
            acceptedLangs: ["html", "css", "js"],
        },
        {
            img: "src/img/لقطة شاشة 2023-09-13 151112.png",
            name: "img-gallery",
            link: "https://eyadahmedabdullah.github.io/img-gallery/3/",
            des: "Duis aute irure dolor in velit esse cillum dolore.",
            acceptedLangs: ["html", "css"],
        },
        {
            img: "src/img/لقطة شاشة 2023-09-13 151405.png",
            name: "Shoes-Websit",
            link: "https://eyadahmedabdullah.github.io/Shoes-Websit/",
            des: "Duis aute irure dolor in velit esse cillum dolore.",
            acceptedLangs: ["html", "css"],
        },
        {
            img: "src/img/لقطة شاشة 2023-09-13 151326.png",
            name: "mercedes-s-class-2022",
            link: "https://mercedes-s-class-2022.vercel.app/",
            des: "Duis aute irure dolor in velit esse cillum dolore.",
            acceptedLangs: ["html", "css"],
        },
    ];

    let filteredData = projectsData.filter((project) => {
        return langs.every((lang) => project.acceptedLangs.includes(lang));
    });

    generalMarkup = filteredData.map((project) => {
        return `<div class="result">
        <div class="title">
            <div class="project-num">Project ${
                filteredData.indexOf(project) + 1
            }</div>
            <div class="name">// _${project.name}</div>
        </div>
        <div class="preview">
            <div class="img-holder">
                <img src="${project.img}" alt="">
            </div>
            <p>${project.des}</p>
            <button class="view-btn"><a target="_blank"
                    href="${project.link}">view-project</a>
            </button>
        </div>
    </div>`;
    });

    if (resultsConrainer.innerHTML == "" || resultsConrainer.innerHTML == " ") {
        resultsConrainer.innerHTML = "No Results!!";
    }
}

function eventHandler() {
    checkboxesArray.forEach((checkbox) => {
        checkbox.addEventListener("change", updateCheckedCheckboxes);
    });
}

handleMenu();
ingectNavbar();
injectFooter();
handleCollapseLangs();
eventHandler();

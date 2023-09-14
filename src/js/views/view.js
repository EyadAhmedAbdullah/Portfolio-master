class View {
    handleMenu() {
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

    ingectNavbar() {
        let markup = `
        <header>
        <div class="container">
            <h1 class="logo">amr-ali</h1>
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
                        <a target="_blank" href="https://twitter.com/JWcbqg0u4LM0oXl"><i
                                class="fa-brands fa-square-x-twitter"></i></a>
                    </div>
                    <div class="facebook">
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100053809931700"><i
                                class="fa-brands fa-facebook"></i></a>
                    </div>
                    <div class="discord">
                        <a target="_blank" href="https://discord.com/users/882452170631421993"><i
                                class="fa-brands fa-discord"></i></a>
                    </div>
                </div>
                <div class="github">
                    <a target="_blank" href="https://github.com/Amr-Ali-Saad">
                        <p>@Amr-Ali-Saad</p>
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

    injectFooter() {
        let markup = `<div class="footer">
                <div class="find">
                    <p>find me in:</p>
                    <div class="twitter">
                        <a
                            target="_blank"
                            href="https://twitter.com/JWcbqg0u4LM0oXl"
                        >
                            <i class="fa-brands fa-square-x-twitter"></i>
                        </a>
                    </div>
                    <div class="facebook">
                        <a
                            target="_blank"
                            href="https://www.facebook.com/profile.php?id=100053809931700"
                        >
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                    </div>
                    <div class="discord">
                        <a
                            target="_blank"
                            href="https://discord.com/users/882452170631421993"
                        >
                            <i class="fa-brands fa-discord"></i>
                        </a>
                    </div>
                </div>
                <div class="github">
                    <a target="_blank" href="https://github.com/Amr-Ali-Saad">
                        <p>@Amr-Ali-Saad</p>
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>`;

        let sections = [...document.querySelectorAll("main")];
        sections.forEach((section) => {
            section.insertAdjacentHTML("beforeend", markup);
        });
    }

    handleCollapseLangs() {
        let collapse = [...document.querySelectorAll("aside .title")];
        collapse.forEach((coll) =>
            coll.addEventListener("click", () => {
                coll.classList.toggle("collapse");
            })
        );
    }
}
export default new View();

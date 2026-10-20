import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [],
})

export default router

type PostKind = "certificate" | "experience";

interface Post {
    id: number;
    kind: PostKind;
    image: string;
    caption: string;
    likes: number;
}

const certificateCaptions: string[] = [
    "#CERTIFICATE 1 - 2025 International Conference.",
    "#CERTIFICATE 2 - 2025 International Conference.",
    "#CERTIFICATE 3 - 2025 International Conference.",
    "#CERTIFICATE 4 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.",
    "#CERTIFICATE 5 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.",
    "#CERTIFICATE 6 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.",
    "#CERTIFICATE 7 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.",
    "#CERTIFICATE 8 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.",
    "#CERTIFICATE 9 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.",
    "#CERTIFICATE 10 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.",
    "#CERTIFICATE 11 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.",
    "#CERTIFICATE 12 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.",
    "#CERTIFICATE 13 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025."
];

const experienceCaptions: string[] = [
    "#EXPERIENCE 1 - First Pin and Hard Hat! First Batch",
    "#EXPERIENCE 2 - On the Job Training in Mandaluyong, Picture with our supervisor",
    "#EXPERIENCE 3 - Wireframing, UI/UX, #OJT",
    "#EXPERIENCE 4 - NC2 Training 2026",
    "#EXPERIENCE 5 - Regional Information Technology and Engineering Summit 2026"
];

const certificates: Post[] = certificateCaptions.map(
    (caption, index) => ({
        id: index + 1,
        kind: "certificate",
        image: `cert1.jpg`,
        caption: caption,
        likes: index === 0 ? 42 : index === 1 ? 89 : 0
    })
);

const experiences: Post[] = experienceCaptions.map(
    (caption, index) => ({
        id: index + 1,
        kind: "experience",
        image: `/Exp${index + 1}.jpg`,
        caption: caption,
        likes: 0
    })
);

function showSection(
    sectionId: string,
    button: HTMLButtonElement
): void {
    document
        .querySelectorAll<HTMLElement>(".section-content")
        .forEach(section => {
            section.classList.toggle(
                "active",
                section.id === sectionId
            );
        });

    document
        .querySelectorAll<HTMLButtonElement>(".nav-btn")
        .forEach(navButton => {
            navButton.classList.toggle(
                "active",
                navButton === button
            );
        });
}

function createPost(post: Post): HTMLElement {
    const card = document.createElement("article");
    card.className = "insta-card";

    const safeId = `${post.kind}-${post.id}`;

    const label =
        post.kind === "certificate"
            ? "Certificate"
            : "Experience";

    const username = "yana.peralta";

    card.innerHTML = `
        <div class="insta-header">
            <div class="avatar" aria-hidden="true">J</div>
            <span class="username">${username}</span>
            <span class="post-type">${label} ${post.id}</span>
        </div>

        <div class="insta-image-wrap">
            <img
                src="${post.image}"
                alt="${label} ${post.id}"
                onerror="
                    this.style.display='none';
                    this.nextElementSibling.style.display='block';
                "
            >

            <div class="image-missing" style="display: none;">
                <i class="fa-regular fa-image"></i>
                <br>
                Image not found: ${post.image}
                <br>
                Check the filename in your public folder.
            </div>
        </div>

        <div class="insta-actions">
            <button
                class="action-icon like-button"
                type="button"
                aria-label="Like post"
                aria-pressed="false"
            >
                <i class="fa-regular fa-heart" aria-hidden="true"></i>
            </button>

            <button
                class="action-icon comment-focus-button"
                type="button"
                aria-label="Go to comments"
            >
                <i class="fa-regular fa-comment" aria-hidden="true"></i>
            </button>

            <button
                class="action-icon share-button"
                type="button"
                aria-label="Share post"
            >
                <i class="fa-regular fa-paper-plane" aria-hidden="true"></i>
            </button>
        </div>

        <div class="insta-likes">
            <span class="like-count">${post.likes}</span> likes
        </div>

        <div class="insta-caption">
            <span class="username">${username}</span>
            <span class="caption-text"></span>
        </div>

        <div class="insta-comments" id="comments-${safeId}"></div>

        <form class="comment-input-container">
            <input
                type="text"
                name="comment"
                maxlength="500"
                placeholder="Add a comment..."
                aria-label="Add a comment"
            >
            <button type="submit">Post</button>
        </form>
    `;

    // Display the caption safely.
    const captionText =
        card.querySelector<HTMLElement>(".caption-text");

    if (captionText) {
        captionText.textContent = post.caption;
    }

    const likeButton =
        card.querySelector<HTMLButtonElement>(".like-button")!;

    const likeCount =
        card.querySelector<HTMLElement>(".like-count")!;

    let liked = false;

    likeButton.addEventListener("click", () => {
        liked = !liked;

        likeButton.setAttribute(
            "aria-pressed",
            String(liked)
        );

        likeButton.classList.toggle("liked", liked);

        const icon = likeButton.querySelector("i");

        if (icon) {
            icon.classList.toggle("fa-solid", liked);
            icon.classList.toggle("fa-regular", !liked);
        }

        const currentCount = Number(likeCount.textContent) || 0;

        likeCount.textContent = String(
            Math.max(0, currentCount + (liked ? 1 : -1))
        );
    });

    const input =
        card.querySelector<HTMLInputElement>(
            'input[name="comment"]'
        )!;

    const comments =
        card.querySelector<HTMLElement>(".insta-comments")!;

    const commentFocusButton =
        card.querySelector<HTMLButtonElement>(
            ".comment-focus-button"
        )!;

    commentFocusButton.addEventListener("click", () => {
        input.focus();
    });

    const commentForm =
        card.querySelector<HTMLFormElement>(
            ".comment-input-container"
        )!;

    commentForm.addEventListener("submit", event => {
        event.preventDefault();

        const commentText = input.value.trim();

        if (!commentText) {
            return;
        }

        const comment = document.createElement("div");
        comment.className = "comment";

        const author = document.createElement("strong");
        author.textContent = "viewer:";

        comment.append(
            author,
            document.createTextNode(` ${commentText}`)
        );

        comments.appendChild(comment);
        input.value = "";
    });

    const shareButton =
        card.querySelector<HTMLButtonElement>(".share-button")!;

    shareButton.addEventListener("click", async () => {
        const shareText =
            `${post.caption} — ${window.location.href}`;

        try {
            if (navigator.share) {
                await navigator.share({
                    title: `${label} ${post.id}`,
                    text: post.caption,
                    url: window.location.href
                });
            } else if (
                navigator.clipboard &&
                window.isSecureContext
            ) {
                await navigator.clipboard.writeText(shareText);

                alert("Post link copied to clipboard!");
            } else {
                window.prompt(
                    "Copy this post link:",
                    shareText
                );
            }
        } catch (error) {
            if (
                error instanceof Error &&
                error.name !== "AbortError"
            ) {
                console.error("Unable to share post:", error);
            }
        }
    });

    return card;
}

function renderPosts(
    containerId: string,
    posts: Post[]
): void {
    const container =
        document.getElementById(containerId);

    if (!container) {
        console.error(`Container not found: ${containerId}`);
        return;
    }

    container.replaceChildren(
        ...posts.map(createPost)
    );
}

document
    .querySelectorAll<HTMLButtonElement>(".nav-btn")
    .forEach(button => {
        button.addEventListener("click", () => {
            const sectionId = button.dataset.section;

            if (sectionId) {
                showSection(sectionId, button);
            }
        });
    });

renderPosts("certificates-feed", certificates);
renderPosts("experiences-feed", experiences);

// Directly Print PDF file from public folder
const printCvBtn = document.getElementById("print-cv-btn");
if (printCvBtn) {
    printCvBtn.addEventListener("click", () => {
        let printIframe = document.getElementById("pdf-print-iframe") as HTMLIFrameElement;

        if (!printIframe) {
            printIframe = document.createElement("iframe");
            printIframe.id = "pdf-print-iframe";
            printIframe.style.position = "fixed";
            printIframe.style.right = "0";
            printIframe.style.bottom = "0";
            printIframe.style.width = "0";
            printIframe.style.height = "0";
            printIframe.style.border = "0";
            document.body.appendChild(printIframe);
        }

        printIframe.src = "/cv.pdf";

        printIframe.onload = () => {
            setTimeout(() => {
                printIframe.contentWindow?.focus();
                printIframe.contentWindow?.print();
            }, 500);
        };
    });
}

const year = document.getElementById("current-year");

if (year) {
    year.textContent = String(new Date().getFullYear());
}

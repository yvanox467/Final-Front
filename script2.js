// Updated dummy data for three articles with images
const articles = [
    {
        title: 'Fastest animals',
        content: 'And this is the fastest land animal. The cheetah is capable of running at 80 to 128 km/h (50 to 80 mph) with the fastest reliably recorded speeds being 93 and 98 km/h (58 and 61 mph). It has several adaptations for prolonged chases t...',
        image: 'img/cheetah.jpeg'
    },
    {
        title: 'Top 10 JavaScript Frameworks You Should Know',
        content: 'JavaScript frameworks are essential tools for modern web development. From React and Angular to Vue.js and Svelte, each framework has its strengths...',
        image: 'img/green.jpg'
    },
    {
        title: 'Most beatiful animals',
        content: 'Male Northern cardinals are unmistakable in their vibrant red plumage. Females of this species are not so bright but are also attractive being reddish olive in color. These birds have distinctive crests on their heads and masks on their faces...',
        image: 'img/Red anim.jpeg'
    }
];

const articlesDiv = document.getElementById('articles');

// Function to display articles
function displayArticles() {
    articlesDiv.innerHTML = '';
    articles.forEach((article, index) => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('card');

        const imgElement = document.createElement('img');
        imgElement.src = article.image;
        imgElement.alt = article.title;

        const titleElement = document.createElement('h3');
        titleElement.classList.add('card-title');
        titleElement.textContent = article.title;

        const contentElement = document.createElement('p');
        contentElement.classList.add('card-content');
        contentElement.textContent = article.content;

        const readMoreLink = document.createElement('a');
        readMoreLink.href = 'gallery.html';
        readMoreLink.textContent = 'Read More';
        readMoreLink.classList.add('read-more');

        const footerDiv = document.createElement('div');
        footerDiv.classList.add('card-footer');
        footerDiv.appendChild(readMoreLink);

        articleDiv.appendChild(imgElement);
        articleDiv.appendChild(titleElement);
        articleDiv.appendChild(contentElement);
        articleDiv.appendChild(footerDiv);

        articlesDiv.appendChild(articleDiv);
    });
}

// Initial display of articles
displayArticles();

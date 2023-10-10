console.log("Hey")

const data = [
  {
    heading: "Exploring Nature's Beauty",
    description: "A journey into the wilderness",
    date: "July 15, 2022",
    body: "Embarking on a journey into the heart of nature is a breathtaking experience. From lush forests to serene lakes, there's a world of wonder waiting to be discovered. Get ready to immerse yourself in the beauty of the great outdoors.",
    comments: "23",
    image: "/images/woods.jpg"
  },
  {
    heading: "The Art of Cooking",
    description: "A culinary adventure",
    date: "March 9, 2022",
    body: "Cooking is not just a necessity; it's an art form. Whether you're a seasoned chef or a novice in the kitchen, there's always something new to learn. Join us on a culinary adventure as we explore flavors, techniques, and the joy of creating delicious meals.",
    comments: "37",
    image: "/images/woods.jpg"
  },
  {
    heading: "The Road Less Traveled",
    description: "Discovering hidden gems",
    date: "November 20, 2021",
    body: "Sometimes, the most memorable journeys are the ones that take you off the beaten path. Join us as we venture into lesser-known destinations, uncovering hidden gems, and embracing the beauty of serendipity.",
    comments: "15",
    image: "/images/woods.jpg"
  },
  {
    heading: "Capturing Moments in Time",
    description: "The art of photography",
    date: "May 5, 2021",
    body: "Photography is more than just snapping pictures; it's a way to freeze moments in time. Whether you're a professional photographer or a smartphone enthusiast, there's a story behind every click of the shutter.",
    comments: "42",
    image: "/images/woods.jpg"
  },
  {
    heading: "A Taste of History",
    description: "Exploring ancient cuisines",
    date: "February 14, 2021",
    body: "Delve into the past as we explore the culinary traditions of ancient civilizations. From Egyptian feasts to Roman banquets, we'll take you on a journey through time, one dish at a time.",
    comments: "28",
    image: "/images/woods.jpg"
  }
];

// console.log(values);

const createBlog = (heading, description, date, body, comments, image) => {
    return (
        `
        <div class="w3-card-4 w3-margin w3-white">
        <img src="${image}" alt="Nature" style="width:100%">
        <div class="w3-container">
            <h3><b>${heading}</b></h3>
            <h5>${description}, <span class="w3-opacity">${date}</span></h5>
        </div>

        <div class="w3-container">
            <p>${body}</p>
            <div class="w3-row">
                <div class="w3-col m8 s12">
                    <p><button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE
                                »</b></button></p>
                </div>
                <div class="w3-col m4 w3-hide-small">
                    <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span
                                class="w3-tag">${comments}</span></span></p>
                </div>
            </div>
        </div>
    </div>
        `
    )
}

const blogs = document.querySelector("#blogs")

data.forEach((item) => {
    const blog = createBlog(item.heading, item.description, item.date, item.body, item.comments, item.image);
    const blogParent = document.createElement("div");

    blogParent.innerHTML = blog;
    blogs.appendChild(blogParent);
})
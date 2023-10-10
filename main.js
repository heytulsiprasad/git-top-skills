console.log("Hey")

const values = [
    { heading: "TITLE HEADING", description: "Title description", date: "April 7, 2014", body: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sedultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.", comments: "12", image: "/images/woods.jpg" },
    { heading: "TITLE HEADING", description: "Title description", date: "April 7, 2014", body: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sedultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.", comments: "12", image: "/images/woods.jpg" },
    { heading: "TITLE HEADING", description: "Title description", date: "April 7, 2014", body: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sedultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.", comments: "12", image: "/images/woods.jpg" },
    { heading: "TITLE HEADING", description: "Title description", date: "April 7, 2014", body: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sedultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.", comments: "12", image: "/images/woods.jpg" },
]

console.log(values);

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

values.forEach((item) => {
    const blog = createBlog(item.heading, item.description, item.date, item.body, item.comments, item.image);
    const blogParent = document.createElement("div");

    blogParent.innerHTML = blog;
    blogs.appendChild(blogParent);
})
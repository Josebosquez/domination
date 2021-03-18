// part 1 -- 1 & 2 -----------------------------------------
function strike () {
    const first = document.querySelector('ul li');
    first.style.textDecoration = "line-through"
}
strike();

// part 1 -- 3-6 -----------------------------------------

function imageChange (strId, url){
    const image = document.querySelector('#' + strId);
    image.src = url;
    image.style.width = "200px"
}

imageChange("image-1", "data:image/jpeg;base64,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")

imageChange("image-2", "https://i.ytimg.com/vi/HUOYlNzCmeo/maxresdefault.jpg")

imageChange("image-3", "https://static.wikia.nocookie.net/5d296fb9-3160-4310-92ce-8387fcb61252")

function remove(){
    const disappear = document.querySelector("#arguments");
    disappear.removeChild(disappear.lastElementChild);
}
remove()
remove()

// part 1 -- 7 & 8----------------------------------------

function sizeChange (strId, font){
    const string = document.querySelector("#" + strId);
    string.style.fontSize = font;
}
sizeChange("thing-1", "150px")

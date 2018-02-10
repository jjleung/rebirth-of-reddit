const randId = document.getElementById("random");
const boardsId = document.getElementById("boards");
const getappId = document.getElementById("getapp");
// const typeId = document.getElementById("resourceType");
const contentId = document.getElementById("content");

const fillContent = tab => {
  contentId.innerHTML = "";
  let tabURL;
  if (tab === "random") {
    tabURL = "";
  } else if (tab === "boards") {
    tabURL = "https://www.reddit.com/r/overwatch.json";
  } else if (tab === "getapp") {
    tabUtl = "https://www.reddit.com/r/memes.json";
  }

  getData(tabURL);
};

randId.addEventListener("click", fillContent("random"));
boardsId.addEventListener("click", fillContent("boards"));
getappId.addEventListener("click", fillContent("getapp"));

const getData = tURL => {
  function reqListener() {
    myData = JSON.parse(this.responseText).data;
    console.log("myData: ", myData);
  }

  const oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", tURL);
  oReq.send();
};

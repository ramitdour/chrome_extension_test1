console.log("START content.js");
console.log((new Date()).toString().split("GMT")[0]);

let counter_content_real = 0;
let counter_content_of_background = 0;
let counter_content_of_popup = 0;
let counter_content_of_database = 0;

window.onload = function () {


    console.log("window loaded content.js");
    console.log((new Date()).toString().split("GMT")[0]);

    document.getElementById("above-the-fold");
    document.getElementById("top-row");
    document.getElementById("bottom-row");

    const mcqDivExists = document.getElementById("mcq-div");

    if (mcqDivExists == null) {
        //mcqDivExists NOT exist , inject mcq div

        console.log("mcqDivExists NOT EXISTS content.js");
        console.log((new Date()).toString().split("GMT")[0]);


        const mcq_div = document.createElement("iframe");
        mcq_div.id = "mcq-div1";
        // mcq_div.src = "../mcq-div/mcqdiv.html";
        mcq_div.srcdoc = '<div id = "mcq-div"><h2>Hello MCQ div</h2></div>';
        // mcq_div.innerHTML("./mcq-div/mcqdiv.html"); 
        // <iframe id="myHtml" src="directory/file.html"></iframe>
        above_the_fold = document.getElementById("top-row").append(mcq_div);

        // const mcq_div = document.createElement("div");
        // mcq_div.innerHTML('<div id = "mcq-div"><h2>Hello MCQ div</h2></div>'); 

        // above_the_fold = document.getElementById("top-row").append(mcq_div);


    } else {
        //mcqDivExists  exist , update mcq div

        console.log("mcqDivExists  EXISTS content.js");
        console.log((new Date()).toString().split("GMT")[0]);


    }

}



console.log("END content.js");
console.log((new Date()).toString().split("GMT")[0]);



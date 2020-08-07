//Tabs

function openTab(event, tabName) {

    var tabcontent = document.getElementsByClassName("tabcontent");
    
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    var tablinks = document.getElementsByClassName("tablinks");
    
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active","");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}
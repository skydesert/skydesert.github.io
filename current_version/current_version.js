var cl_sversion = new XMLHttpRequest();
cl_sversion.open('GET', 'https://skydesert.github.io/current_version/version.txt');
cl_sversion.onreadystatechange = function() {
    document.getElementById('version').innerHTML = cl_sversion.responseText;
}
cl_sversion.send();

var cl_sbuild = new XMLHttpRequest();
cl_sbuild.open('GET', 'https://skydesert.github.io/current_version/build.txt');
cl_sbuild.onreadystatechange = function() {
    document.getElementById('build').innerHTML = cl_sbuild.responseText;
}
cl_sbuild.send();

var cl_status = new XMLHttpRequest();
cl_status.open('GET', 'https://skydesert.github.io/current_version/status.txt');
cl_status.onreadystatechange = function() {
    document.getElementById('status').innerHTML = cl_status.responseText;
}
cl_status.send();

var cl_sstage = new XMLHttpRequest();
cl_sstage.open('GET', 'https://skydesert.github.io/current_version/stage.txt');
cl_sstage.onreadystatechange = function() {
    if (cl_sstage.responseText == "PreAlpha") {
        document.getElementById('stage').innerHTML = "Pre-Alpha";
    }
    else {
        document.getElementById('stage').innerHTML = cl_sstage.responseText;
    }
}
cl_sstage.send();

var cl_sdescription = new XMLHttpRequest();
cl_sdescription.open('GET', 'https://skydesert.github.io/current_version/description.txt');
cl_sdescription.onreadystatechange = function() {
    document.getElementById('description').innerHTML = cl_sdescription.responseText;
}
cl_sdescription.send();
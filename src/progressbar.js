UIkit.util.ready(function () {

    var bar = document.getElementById('progressbar');

    var animate = setInterval(function () {

        bar.value+= 10
        console.log(bar.max);        
        console.log(bar.value);        
        if (bar.value >= bar.max) {
            clearInterval(animate);
        }

    }, 1000);

});
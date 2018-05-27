
var a = "app.js";

console.log(a + 'begin');

 var getJS = function(url) {
   
            var script = document.createElement('script');
            script.type = "text/javascript";

            if (script.readyState) { //IE
                script.onreadystatechange = function() {
                    if (script.readyState == "loaded" ||
                        script.readyState == "complete") {
                        script.onreadystatechange = null;
                        console.log('success: ' + url);
                    }
                };
            } else { //Others
                script.onload = function() {
                    console.log('success: ' + url);
                };
            }

            script.onerror = function() {
                console.log((url + 'load error!'));
            };

            script.src = url + '?' + 'time=' + Date.parse(new Date());
            document.body.appendChild(script);
    };

	getJS('scripts/big.js');
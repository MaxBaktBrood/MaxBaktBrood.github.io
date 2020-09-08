

setTimeout(function() {setInterval(htmlAanpasser2, 10000)}, 5000)
var loop0 = setInterval(showHideInfo, onregelmatigheden, 500)
var loop1 = setInterval(htmlAanpasser, 10000)


    function showHideInfo() {
        var datum = new Date();
        var minuut = datum.getMinutes();
        var i;
        var t;
        
        for (t = 0; t < 60; t++) {
        if(minuut < t + 1) {
            var A00 =  document.getElementsByClassName('A' + nulErvoor(t));
            var B00 =  document.getElementsByClassName('B' + nulErvoor(t));
            for (i = 0; i < A00.length; i++) {
            A00[i].style.display='block';}
            for (i = 0; i < B00.length; i++) {
            B00[i].style.display='block';}

        } else {
            var A00 =  document.getElementsByClassName('A' + nulErvoor(t));
            var B00 =  document.getElementsByClassName('B' + nulErvoor(t));
            for (i = 0; i < A00.length; i++) {
            A00[i].style.display='none';}
            for (i = 0; i < B00.length; i++) {
            B00[i].style.display='none';}
        }
        function nulErvoor(i) {
            if (i < 10) {i = "0" + i}; // 0 bij één karakter
            return i;
       }}
       for (t = 0; t < 60; t++) {
        if(minuut > t) {
            var A00 =  document.getElementsByClassName('2-A' + nulErvoor(t));
            var B00 =  document.getElementsByClassName('2-B' + nulErvoor(t));
            for (i = 0; i < A00.length; i++) {
            A00[i].style.display='block';}
            for (i = 0; i < B00.length; i++) {
            B00[i].style.display='block';}

        } else {
            var A00 =  document.getElementsByClassName('2-A' + nulErvoor(t));
            var B00 =  document.getElementsByClassName('2-B' + nulErvoor(t));
            for (i = 0; i < A00.length; i++) {
            A00[i].style.display='none';}
            for (i = 0; i < B00.length; i++) {
            B00[i].style.display='none';}
        }
        function nulErvoor(i) {
            if (i < 10) {i = "0" + i}; // 0 bij één karakter
            return i;
       }}
       for (t = 0; t < 60; t++) {
        if(minuut == t) {
            var D00 =  document.getElementsByClassName('D' + nulErvoor(t));
            for (i = 0; i < D00.length; i++) {
            D00[i].classList.add('blinking');}
        } else {
            var D00 =  document.getElementsByClassName('D' + nulErvoor(t));
            for (i = 0; i < D00.length; i++) {
            D00[i].classList.remove('blinking');}
        }
        function nulErvoor(i) {
            if (i < 10) {i = "0" + i}; // 0 bij één karakter
            return i;
       }}
}

    function tijd() {
        var d = new Date();
        var h = (d.getHours());
        var m = d.getMinutes();
        h2 = h + 1;
        m = dynamisch(m);
        h = dynamisch(h);
        document.getElementById('uur').innerHTML= h;
        document.getElementById('minuut').innerHTML= m;
        var hclasses =  document.getElementsByClassName('h');
        var h2classes =  document.getElementsByClassName('2-h');
        var i;
        for (i = 0; i < hclasses.length; i++) {
        hclasses[i].innerHTML = h;}
        if (h2 >= 24) {
            var h2 = 0;
        }
        h2 = dynamisch(h2);
        for (i = 0; i < h2classes.length; i++) {
        h2classes[i].innerHTML =h2;}
        var t = setTimeout(tijd, 0);}
        function dynamisch(i) {
            if (i < 10) {i = "0" + i}; // 0 bij één karakter
            return i;
       }

    function uniekNummer() {
        var d = new Date();
        var h = (d.getHours());
        var m = d.getMinutes();
      //  m = dynamisch(m);
      //  h = dynamisch(h);
        var lijnnummers = document.getElementsByClassName('1-FR002')
        var lijnnummers2 = document.getElementsByClassName('2-FR002')
        var i;
        for (i = 0; i < lijnnummers.length; i++) {
        lijnnummers[i].classList.add("H" + h)
        lijnnummers2[i].classList.add("H" + (h + 1))}
//        function dynamisch(i) {
//            if (i < 10) {i = "0" + i}; // 0 bij één karakter
//            return i;
//       }
        }


        function htmlMaker() {
            var stations = ["Borba Gato", "Alto da Boa Vista"]
            var afkortingen = ["Bg", "Av"]
            var s;
            function eenUurLater(i) {
                if (h = 23) { i = 0} else {i = h + 1}
                return i;
            }
            for (s = 0; s < stations.length; s++) {
                var tijd = new Date();
                var h = (tijd.getHours());
                var hPlusEen = eenUurLater(h);
                if (document.getElementById("stationsnaam").innerHTML == stations[s]) {
                    var xmlhttp = new XMLHttpRequest()
                    xmlhttp.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                            var t;
                            var treinGegevens = JSON.parse(this.responseText);              //Verkrijg de inhoud van het doc                     
                            for (t = 0; t < treinGegevens.treinen.length; t++) {
                                function tabel(i) {
                                    if (i % 2 == 0) {i = "W"
                                    } else {i = "B"}
                                    return i;
                                }
                                    if (treinGegevens.treinen[t].tussenstations.length != 0) {
                                    var splitTussenstations = treinGegevens.treinen[t].tussenstations.split(", ")
                                    if (splitTussenstations.length > 1) {
                                        splitTussenstations.splice(0, 0, "atrav&eacute;s*")
                                        splitTussenstations.splice(splitTussenstations.length - 1, 0, "*e*")
                                        var tussenstations2 = splitTussenstations.join(", ")
                                        var tussenstations3 = tussenstations2.split('*,').join("")   
                                        var tussenstations = tussenstations3.split(', *').join(" ")  } 
                                    if (splitTussenstations.length == 1) {
                                        splitTussenstations.splice(0, 0, "atrav&eacute;s*")
                                        var tussenstations2 = splitTussenstations.join(", ")
                                        var tussenstations = tussenstations2.split('*,').join("")   }
                                    if (splitTussenstations.length < 1) {
                                        var tussenstations = " "  }} else { var splitTussenstations = ""
                                    var tussenstations = ""}
                                    var leeg = "";
                                    if (treinGegevens.treinen[t].vertrekuur == h && treinGegevens.treinen[t].rijdtNiet.length == 0 && treinGegevens.treinen[t].nieuweBestemming.length == 0 && treinGegevens.treinen[t].bericht.length == 0) {
                                        if (treinGegevens.treinen[t].nieuwVertrekspoor.length != 0) {var vertrekspoor = treinGegevens.treinen[t].nieuwVertrekspoor
                                            var spooropmaak = "spoorrood"
                                            } else {var vertrekspoor = treinGegevens.treinen[t].vertrekspoor
                                            var spooropmaak = "spoor"}
                                        var kleur = t;
                                        var elementA = document.createElement('div');
                                        document.getElementById('contents').appendChild(elementA);
                                        elementA.className ="A A" + treinGegevens.treinen[t].vertrekminuut
                                        elementA.innerHTML = 
                                        '<table class="table ' + tabel(kleur) + 'G"><tr>' +
                                        '<td class="D' + treinGegevens.treinen[t].vertrekminuut + ' w1"><a class="h"></a>:' + treinGegevens.treinen[t].vertrekminuut + '</td>' +
                                        '<td class="w2">' + treinGegevens.treinen[t].bestemming + '</td>' +
                                        '<td class="w3"><a class="' + spooropmaak + '">' + vertrekspoor + '</a></td>' +
                                        '<td class="w4"><img src=""></img>' + treinGegevens.treinen[t].soort + '</td>' +
                                        '<td class="w5"></td>' +
                                        '<td class="w6"></td>' +
                                        '</tr></table></div>'
                                        var elementB = document.createElement('div');
                                        document.getElementById('contents').appendChild(elementB);
                                        elementB.className ="B B" + treinGegevens.treinen[t].vertrekminuut
                                        elementB.innerHTML = '<table class="table ' + tabel(kleur) + 'K"><tr>' +
                                        '<td class="wd1">' + treinGegevens.treinen[t].vertraging + '</td>' +
                                        '<td class="C' + treinGegevens.treinen[t].vertrekminuut + ' wd2">' + tussenstations + '</td>' +
                                        '<td class="wd3" style="color: transparent;">Max</td>' +
                                        '<td class="wd4">' + treinGegevens.treinen[t].storingsoorzaak + '</td>' +
                                        '<td class="wd5"></td>' +
                                        '<td class="wd6"></td>' +
                                        '</tr></table></div>'}
                                    if (treinGegevens.treinen[t].vertrekuur == hPlusEen && treinGegevens.treinen[t].rijdtNiet.length == 0 && treinGegevens.treinen[t].nieuweBestemming.length == 0 && treinGegevens.treinen[t].bericht.length == 0) {
                                        if (treinGegevens.treinen[t].nieuwVertrekspoor.length != 0) {var vertrekspoor = treinGegevens.treinen[t].nieuwVertrekspoor
                                        var spooropmaak = "spoorrood"
                                        } else {var vertrekspoor = treinGegevens.treinen[t].vertrekspoor
                                        var spooropmaak = "spoor"}
                                        var kleur = t;
                                        var elementA = document.createElement('div');
                                        document.getElementById('contents2').appendChild(elementA);
                                        elementA.className ="A 2-A" + treinGegevens.treinen[t].vertrekminuut
                                        elementA.innerHTML = 
                                        '<table class="table ' + tabel(kleur) + 'G"><tr>' +
                                        '<td class="D' + treinGegevens.treinen[t].vertrekminuut + ' w1"><a class="2-h"></a>:' + treinGegevens.treinen[t].vertrekminuut + '</td>' +
                                        '<td class="w2">' + treinGegevens.treinen[t].bestemming + '</td>' +
                                        '<td class="w3"><a class="' + spooropmaak + '">' + vertrekspoor + '</a></td>' +
                                        '<td class="w4"><img src=""></img>' + treinGegevens.treinen[t].soort + '</td>' +
                                        '<td class="w5"></td>' +
                                        '<td class="w6"></td>' +
                                        '</tr></table></div>'
                                        var elementB = document.createElement('div');
                                        document.getElementById('contents2').appendChild(elementB);
                                        elementB.className ="B 2-B" + treinGegevens.treinen[t].vertrekminuut
                                        elementB.innerHTML = '<table class="table ' + tabel(kleur) + 'K"><tr>' +
                                        '<td class="wd1">' + treinGegevens.treinen[t].vertraging + '</td>' +
                                        '<td class="C' + treinGegevens.treinen[t].vertrekminuut + ' wd2">' + tussenstations + '</td>' +
                                        '<td class="wd3" style="color: transparent;">Max</td>' +
                                        '<td class="wd4">' + treinGegevens.treinen[t].storingsoorzaak + '</td>' +
                                        '<td class="wd5"></td>' +
                                        '<td class="wd6"></td>' +
                                        '</tr></table></div>'}
                                        if (treinGegevens.treinen[t].vertrekuur == h && treinGegevens.treinen[t].rijdtNiet.length == 0 && treinGegevens.treinen[t].nieuweBestemming.length == 0 && treinGegevens.treinen[t].bericht.length != 0) {
                                            if (treinGegevens.treinen[t].nieuwVertrekspoor.length != 0) {var vertrekspoor = treinGegevens.treinen[t].nieuwVertrekspoor
                                                var spooropmaak = "spoorrood"
                                                } else {var vertrekspoor = treinGegevens.treinen[t].vertrekspoor
                                                var spooropmaak = "spoor"}
                                                var bericht = treinGegevens.treinen[t].bericht
                                            var kleur = t;
                                            var elementA = document.createElement('div');
                                            document.getElementById('contents').appendChild(elementA);
                                            elementA.className ="A A" + treinGegevens.treinen[t].vertrekminuut
                                            elementA.innerHTML = 
                                            '<table class="table ' + tabel(kleur) + 'G"><tr>' +
                                            '<td class="D' + treinGegevens.treinen[t].vertrekminuut + ' w1"><a class="h"></a>:' + treinGegevens.treinen[t].vertrekminuut + '</td>' +
                                            '<td class="w2">' + treinGegevens.treinen[t].bestemming + '</td>' +
                                            '<td class="w3"><a class="' + spooropmaak + '">' + vertrekspoor + '</a></td>' +
                                            '<td class="w4"><img src=""></img>' + treinGegevens.treinen[t].soort + '</td>' +
                                            '<td class="w5"></td>' +
                                            '<td class="w6"></td>' +
                                            '</tr></table></div>'
                                            var elementB = document.createElement('div');
                                            document.getElementById('contents').appendChild(elementB);
                                            elementB.className ="B B" + treinGegevens.treinen[t].vertrekminuut
                                            elementB.innerHTML = '<table class="table ' + tabel(kleur) + 'K"><tr>' +
                                            '<td class="wd1">' + treinGegevens.treinen[t].vertraging + '</td>' +
                                            '<td class="C' + treinGegevens.treinen[t].vertrekminuut + ' wd2" id="treininfo' + t + '">Algo está errado com este metrô. As informações são recuperadas em 10 segundos.</td>' +
                                            '<td class="wd3" style="color: transparent;">Max</td>' +
                                            '<td class="wd4">' + treinGegevens.treinen[t].storingsoorzaak + '</td>' +
                                            '<td class="wd5"></td>' +
                                            '<td class="wd6"></td>' +
                                            '</tr></table></div>'}
                                        if (treinGegevens.treinen[t].vertrekuur == hPlusEen && treinGegevens.treinen[t].rijdtNiet.length == 0 && treinGegevens.treinen[t].nieuweBestemming.length == 0 && treinGegevens.treinen[t].bericht.length != 0) {
                                            if (treinGegevens.treinen[t].nieuwVertrekspoor.length != 0) {var vertrekspoor = treinGegevens.treinen[t].nieuwVertrekspoor
                                            var spooropmaak = "spoorrood"
                                            } else {var vertrekspoor = treinGegevens.treinen[t].vertrekspoor
                                            var spooropmaak = "spoor"}
                                            var kleur = t;
                                            var elementA = document.createElement('div');
                                            document.getElementById('contents2').appendChild(elementA);
                                            elementA.className ="A 2-A" + treinGegevens.treinen[t].vertrekminuut
                                            elementA.innerHTML = 
                                            '<table class="table ' + tabel(kleur) + 'G"><tr>' +
                                            '<td class="D' + treinGegevens.treinen[t].vertrekminuut + ' w1"><a class="2-h"></a>:' + treinGegevens.treinen[t].vertrekminuut + '</td>' +
                                            '<td class="w2">' + treinGegevens.treinen[t].bestemming + '</td>' +
                                            '<td class="w3"><a class="' + spooropmaak + '">' + vertrekspoor + '</a></td>' +
                                            '<td class="w4"><img src=""></img>' + treinGegevens.treinen[t].soort + '</td>' +
                                            '<td class="w5"></td>' +
                                            '<td class="w6"></td>' +
                                            '</tr></table></div>'
                                            var elementB = document.createElement('div');
                                            document.getElementById('contents2').appendChild(elementB);
                                            elementB.className ="B 2-B" + treinGegevens.treinen[t].vertrekminuut
                                            elementB.innerHTML = '<table class="table ' + tabel(kleur) + 'K"><tr>' +
                                            '<td class="wd1">' + treinGegevens.treinen[t].vertraging + '</td>' +
                                            '<td class="C' + treinGegevens.treinen[t].vertrekminuut + ' wd2" id="treininfo' + t + '">Algo está errado com este metrô. As informações são recuperadas em 10 segundos.</td>' +
                                            '<td class="wd3" style="color: transparent;">Max</td>' +
                                            '<td class="wd4">' + treinGegevens.treinen[t].storingsoorzaak + '</td>' +
                                            '<td class="wd5"></td>' +
                                            '<td class="wd6"></td>' +
                                            '</tr></table></div>'}
                                        if (treinGegevens.treinen[t].vertrekuur == h && treinGegevens.treinen[t].rijdtNiet.length != 0  && treinGegevens.treinen[t].nieuweBestemming.length == 0) {
                                            if (treinGegevens.treinen[t].nieuwVertrekspoor.length != 0) {var vertrekspoor = treinGegevens.treinen[t].nieuwVertrekspoor
                                                var spooropmaak = "spoorrood"
                                                } else {var vertrekspoor = treinGegevens.treinen[t].vertrekspoor
                                                var spooropmaak = "spoor"}
                                            var kleur = t;
                                            var elementA = document.createElement('div');
                                            document.getElementById('contents').appendChild(elementA);
                                            elementA.className ="A A" + treinGegevens.treinen[t].vertrekminuut
                                            elementA.innerHTML = 
                                            '<table class="table ' + tabel(kleur) + 'G"><tr>' +
                                            '<td class="D' + treinGegevens.treinen[t].vertrekminuut + ' wz1"><a class="h"></a>:' + treinGegevens.treinen[t].vertrekminuut + '</td>' +
                                            '<td class="wz2">' + treinGegevens.treinen[t].bestemming + '</td>' +
                                            '<td class="wz3"><a class="geen' + spooropmaak + '">' + treinGegevens.treinen[t].vertrekspoor + '</a></td>' +
                                            '<td class="wz4"><img src=""></img>' + treinGegevens.treinen[t].soort + '</td>' +
                                            '<td class="w5"></td>' +
                                            '<td class="w6"></td>' +
                                            '</tr></table></div>'
                                            if (treinGegevens.treinen[t].bericht.length == 0) {
                                                treinbericht = "Deze trein rijdt niet"
                                            } else { treinbericht = treinGegevens.treinen[t].bericht}
                                            var mededeling = [tussenstations, treinbericht]
                                            var elementB = document.createElement('div');
                                            document.getElementById('contents').appendChild(elementB);
                                            elementB.className ="B B" + treinGegevens.treinen[t].vertrekminuut
                                            elementB.innerHTML = '<table class="table ' + tabel(kleur) + 'K"><tr>' +
                                            '<td class="wdz1">' + treinGegevens.treinen[t].vertraging + '</td>' +
                                            '<td class="C' + treinGegevens.treinen[t].vertrekminuut + ' wd2" id="treininfo' + t + '">Algo está errado com este metrô. As informações são recuperadas em 10 segundos.</td>' +
                                            '<td class="wdz3"></td>' +
                                            '<td class="wdz4">' + treinGegevens.treinen[t].storingsoorzaak + '</td>' +
                                            '<td class="wd5"></td>' +
                                            '<td class="wd6"></td>' +
                                            '</tr></table></div>'}
                                        if (treinGegevens.treinen[t].vertrekuur == hPlusEen && treinGegevens.treinen[t].rijdtNiet.length != 0  && treinGegevens.treinen[t].nieuweBestemming.length == 0) {
                                            if (treinGegevens.treinen[t].nieuwVertrekspoor.length != 0) {var vertrekspoor = treinGegevens.treinen[t].nieuwVertrekspoor
                                                var spooropmaak = "spoorrood"
                                                } else {var vertrekspoor = treinGegevens.treinen[t].vertrekspoor
                                                var spooropmaak = "spoor"}
                                            var kleur = t;
                                            var elementA = document.createElement('div');
                                            document.getElementById('contents2').appendChild(elementA);
                                            elementA.className ="A 2-A" + treinGegevens.treinen[t].vertrekminuut
                                            elementA.innerHTML = 
                                            '<table class="table ' + tabel(kleur) + 'G"><tr>' +
                                            '<td class="D' + treinGegevens.treinen[t].vertrekminuut + ' wz1"><a class="2-h"></a>:' + treinGegevens.treinen[t].vertrekminuut + '</td>' +
                                            '<td class="wz2">' + treinGegevens.treinen[t].bestemming + '</td>' +
                                            '<td class="wz3"><a class="geen' + spooropmaak + '">' + treinGegevens.treinen[t].vertrekspoor + '</a></td>' +
                                            '<td class="wz4"><img src=""></img>' + treinGegevens.treinen[t].soort + '</td>' +
                                            '<td class="w5"></td>' +
                                            '<td class="w6"></td>' +
                                            '</tr></table></div>'
                                            if (treinGegevens.treinen[t].bericht.length == 0) {
                                                treinbericht = "Deze trein rijdt niet"
                                            } else { treinbericht = treinGegevens.treinen[t].bericht}
                                            var elementB = document.createElement('div');
                                            document.getElementById('contents2').appendChild(elementB);
                                            elementB.className ="B 2-B" + treinGegevens.treinen[t].vertrekminuut
                                            elementB.innerHTML = '<table class="table ' + tabel(kleur) + 'K"><tr>' +
                                            '<td class="wdz1">' + treinGegevens.treinen[t].vertraging + '</td>' +
                                            '<td class="C' + treinGegevens.treinen[t].vertrekminuut + ' wd2" id="treininfo' + t + '">Algo está errado com este metrô. As informações são recuperadas em 10 segundos.</td>' +
                                            '<td class="wdz3"></td>' +
                                            '<td class="wdz4">' + treinGegevens.treinen[t].storingsoorzaak + '</td>' +
                                            '<td class="wd5"></td>' +
                                            '<td class="wd6"></td>' +
                                            '</tr></table></div>'}
                                            if (treinGegevens.treinen[t].vertrekuur == h && treinGegevens.treinen[t].nieuweBestemming.length != 0) {
                                                if (treinGegevens.treinen[t].nieuwVertrekspoor.length != 0) {var vertrekspoor = treinGegevens.treinen[t].nieuwVertrekspoor
                                                    var spooropmaak = "spoorrood"
                                                    } else {var vertrekspoor = treinGegevens.treinen[t].vertrekspoor
                                                    var spooropmaak = "spoor"}
                                                var kleur = t;
                                                var elementA = document.createElement('div');
                                                document.getElementById('contents').appendChild(elementA);
                                                elementA.className ="A A" + treinGegevens.treinen[t].vertrekminuut
                                                elementA.innerHTML = 
                                                '<table class="table ' + tabel(kleur) + 'G"><tr>' +
                                                '<td class="D' + treinGegevens.treinen[t].vertrekminuut + ' w1"><a class="h"></a>:' + treinGegevens.treinen[t].vertrekminuut + '</td>' +
                                                '<td class="w2">' + treinGegevens.treinen[t].nieuweBestemming + ' <a class=oudebestemming>' + treinGegevens.treinen[t].bestemming + '</a></td>' +
                                                '<td class="w3"><a class="' + spooropmaak + '">' + treinGegevens.treinen[t].vertrekspoor + '</a></td>' +
                                                '<td class="w4"><img src=""></img>' + treinGegevens.treinen[t].soort + '</td>' +
                                                '<td class="w5"></td>' +
                                                '<td class="w6"></td>' +
                                                '</tr></table></div>'
                                                if (treinGegevens.treinen[t].bericht.length == 0) {
                                                    treinbericht = "Rijdt niet verder dan " + treinGegevens.treinen[t].nieuweBestemming
                                                } else { treinbericht = treinGegevens.treinen[t].bericht}
                                                var mededeling = [tussenstations, treinbericht]
                                                var elementB = document.createElement('div');
                                                document.getElementById('contents').appendChild(elementB);
                                                elementB.className ="B B" + treinGegevens.treinen[t].vertrekminuut
                                                elementB.innerHTML = '<table class="table ' + tabel(kleur) + 'K"><tr>' +
                                                '<td class="wd1">' + treinGegevens.treinen[t].vertraging + '</td>' +
                                                '<td class="C' + treinGegevens.treinen[t].vertrekminuut + ' wd2" id="treininfo' + t + '">Algo está errado com este metrô. As informações são recuperadas em 10 segundos.</td>' +
                                                '<td class="wd3" style="color: transparent;">Max</td>' +
                                                '<td class="wd4">' + treinGegevens.treinen[t].storingsoorzaak + '</td>' +
                                                '<td class="wd5"></td>' +
                                                '<td class="wd6"></td>' +
                                                '</tr></table></div>'}
                                            if (treinGegevens.treinen[t].vertrekuur == hPlusEen && treinGegevens.treinen[t].nieuweBestemming != leeg) {
                                                if (treinGegevens.treinen[t].nieuwVertrekspoor.length != 0) {var vertrekspoor = treinGegevens.treinen[t].nieuwVertrekspoor
                                                    var spooropmaak = "spoorrood"
                                                    } else {var vertrekspoor = treinGegevens.treinen[t].vertrekspoor
                                                    var spooropmaak = "spoor"}
                                                var kleur = t;
                                                var elementA = document.createElement('div');
                                                document.getElementById('contents2').appendChild(elementA);
                                                elementA.className ="A 2-A" + treinGegevens.treinen[t].vertrekminuut
                                                elementA.innerHTML = 
                                                '<table class="table ' + tabel(kleur) + 'G"><tr>' +
                                                '<td class="D' + treinGegevens.treinen[t].vertrekminuut + ' w1"><a class="2-h"></a>:' + treinGegevens.treinen[t].vertrekminuut + '</td>' +
                                                '<td class="w2">' + treinGegevens.treinen[t].nieuweBestemming + ' <a class=oudebestemming>' + treinGegevens.treinen[t].bestemming + '</a></td>' +
                                                '<td class="w3"><a class="' + spooropmaak + '">' + treinGegevens.treinen[t].vertrekspoor + '</a></td>' +
                                                '<td class="w4"><img src=""></img>' + treinGegevens.treinen[t].soort + '</td>' +
                                                '<td class="w5"></td>' +
                                                '<td class="w6"></td>' +
                                                '</tr></table></div>'
                                                if (treinGegevens.treinen[t].bericht.length == 0) {
                                                    treinbericht = "Rijdt niet verder dan " + treinGegevens.treinen[t].nieuweBestemming
                                                } else { treinbericht = treinGegevens.treinen[t].bericht}
                                                var elementB = document.createElement('div');
                                                document.getElementById('contents2').appendChild(elementB);
                                                elementB.className ="B 2-B" + treinGegevens.treinen[t].vertrekminuut
                                                elementB.innerHTML = '<table class="table ' + tabel(kleur) + 'K"><tr>' +
                                                '<td class="wd1">' + treinGegevens.treinen[t].vertraging + '</td>' +
                                                '<td class="C' + treinGegevens.treinen[t].vertrekminuut + ' wd2" id="treininfo' + t + '">Algo está errado com este metrô. As informações são recuperadas em 10 segundos.</td>' +
                                                '<td class="wd3" style="color: transparent;">Max</td>' +
                                                '<td class="wd4">' + treinGegevens.treinen[t].storingsoorzaak + '</td>' +
                                                '<td class="wd5"></td>' +
                                                '<td class="wd6"></td>' +
                                                '</tr></table></div>'}
                            }
                            for (u = 0; u < treinGegevens.treinen.length; u++) {
                            var element = document.getElementById("trein" + u)
                            if (element != null) {
                            var info = [treinGegevens.treinen[u].bericht, tussenstations];
                            document.getElementById("trein" + t).innerHTML = info[1]}
                        }
        
        }}
            xmlhttp.open("GET", "/Sao_Paulo_Powered_By_Victor/data/dienstregeling" + afkortingen[s] + ".json", true);
            xmlhttp.send()
        }}
    var naam = document.getElementById("stationsnaam").innerHTML
    if (naam.includes("â") == true) {
        var aangepasteNaam = naam.replace("â", "&#226;")
        document.getElementById("stationsnaam").innerHTML = aangepasteNaam}
    if (naam.includes("Générateur") == true) {
        var aangepasteNaam = naam.replace("Générateur", "G" + "&#233;" + "n" +"&#233;" + "rateur")
        document.getElementById("stationsnaam").innerHTML = aangepasteNaam}
    }
function htmlAanpasser() {
    var stations = ["Borba Gato", "Alto da Boa Vista"]
    var afkortingen = ["Bg", "Av"]
            var s;
            for (s = 0; s < stations.length; s++) {
                if (document.getElementById("stationsnaam").innerHTML == stations[s]) {var nummer = s}
            }
            var xmlhttp = new XMLHttpRequest()
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var treinGegevens = JSON.parse(this.responseText); 
                    for (x = 0; x < treinGegevens.treinen.length; x++) {
                        var info = document.getElementById("treininfo" + x);
                        if (info != null) {
                        var splitTussenstations = treinGegevens.treinen[x].tussenstations.split(", ")
                        if (splitTussenstations.length > 1) {
                            splitTussenstations.splice(0, 0, "atrav&eacute;s*")
                            splitTussenstations.splice(splitTussenstations.length - 1, 0, "*e*")
                            var tussenstations2 = splitTussenstations.join(", ")
                            var tussenstations3 = tussenstations2.split('*,').join("")   
                            var tussenstations = tussenstations3.split(', *').join(" ")  } 
                        if (splitTussenstations.length == 1) {
                            splitTussenstations.splice(0, 0, "atrav&eacute;s*")
                            var tussenstations2 = splitTussenstations.join(", ")
                            var tussenstations = tussenstations2.split('*,').join("")   }
                        if (splitTussenstations.length < 1) {
                            var tussenstations = " "  }
                        if (treinGegevens.treinen[x].rijdtNiet.length != 0) {
                            info.classList.remove("wd2")
                            info.classList.add("wdz2")
                        }
                        info.classList.remove("important")   
                        info.innerHTML = tussenstations }
                }
        }
        }            
        xmlhttp.open("GET", "/Sao_Paulo_Powered_By_Victor/data/dienstregeling" + afkortingen[nummer] + ".json", true);
        xmlhttp.send()
    }
    function htmlAanpasser2() {
            var stations = ["Borba Gato", "Alto da Boa Vista"]
            var afkortingen = ["Bg", "Av"]
        var s;
        for (s = 0; s < stations.length; s++) {
            if (document.getElementById("stationsnaam").innerHTML == stations[s]) {var nummer = s}
        }
        var xmlhttp = new XMLHttpRequest()
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var treinGegevens = JSON.parse(this.responseText);     
for (x = 0; x < treinGegevens.treinen.length; x++) {
    var info = document.getElementById("treininfo" + x);
    if (info != null) {
    if (treinGegevens.treinen[x].rijdtNiet != "" || treinGegevens.treinen[x].nieuweBestemming != "" || treinGegevens.treinen[x].nieuw_vertrekspoor != "") {
        info.classList.add("important")
        }
    info.innerHTML = treinGegevens.treinen[x].bericht}
    }
}
}          
        xmlhttp.open("GET", "/Sao_Paulo_Powered_By_Victor/data/dienstregeling" + afkortingen[nummer] + ".json", true);
        xmlhttp.send()
}
        function onregelmatigheden() {

        // Met deze functie kunt u onregelmatigheden doorvoeren in de dienstregeling!
        // Typ hetvolgende in:
        // - De lijnnummers (Bijvoorbeeld FR999)
        // - De richting (R1 voor noord/west, R2 voor zuid/oost)
        // - De uren waarin de treinen onregelmatigheden meemaken (bijvoorbeeld H1, H10...)
        var onregelmatigheid = '1-FR2 R1 H21'
        var onregelmatigheid2 = '2-FR1'
        var spoorwijziging = '1-FR2 R1'
        // Vul een '1' in bij de toe te passen maatregel:
        var gewijzigd_vertrekspoor = 10
        var rijdt_niet = 0
            var rijdt_niet_verder_dan = 1
            //Wat is de nieuwe bestemming?
            var oudebestemming = "Nouveau Paris Central"
            var nieuwebestemming = "Nouveau Paris Central"
            var nieuw_vertrekspoor = "1b"

        var bericht = "Rijdt niet verder dan Nouveau Paris Central door werkzaamheden."
        var bericht2 = "Rijdt niet verder dan Nouveau Paris Central door werkzaamheden." //"Rijdt niet door beperkingen in de matrieelinzet"
        //var aangepaste_route = 0
        if (gewijzigd_vertrekspoor == 1) {
            var doel = document.getElementsByClassName(spoorwijziging + " spoor")
            var i;
            for (i = 0; i < doel.length; i++) {
            //if (i.indexOf('table WK') !== -1) {
            doel[i].innerHTML = nieuw_vertrekspoor;
           }
           for (i = 0; i < doel.length; i++) {
            //if (i.indexOf('table WK') !== -1) {
            doel[i].classList.add("spoorrood")
            //doel[i].classList.remove("spoor")
           }}
        //var klassen_onregelmatigheid = document.getElementsByClassName(onregelmatigheid);
        if (rijdt_niet = 1) {
            var tekst = document.getElementsByClassName(onregelmatigheid + " B ")
            var info = document.getElementsByClassName("D" + onregelmatigheid)
            var uiterlijk = ["WK","BK", "WK","BK", "WK","BK", "WK","BK", "WK","BK", "WK","BK", "WK","BK", "WK","BK", "WK","BK", "WK","BK", "WK","BK", "WK","BK", "WK"]
            var i;
        for (i = 0; i < tekst.length; i++) {
            //if (i.indexOf('table WK') !== -1) {
            tekst[i].innerHTML ="<table class='table importantbg " + "'><tr><td class='wd1'></td><td class='C10 wd2 important'>" + bericht + "</td><td class='wd3'></td><td class='wd4'></td><td class='wd5'></td><td class='wd6'></td></tr></table>"
            tekst[i].classList.add("vervalt")
           }
           for (i = 0; i < info.length; i++) {
            //if (i.indexOf('table WK') !== -1) {
            info[i].classList.add("vervalt")
           }}
           //var onregelmatigheid = 'FR001 H18'
           // Vul een '1' in bij de toe te passen maatregel:
           //var aangepaste_route = 0
           if (rijdt_niet_verder_dan = 0) {
               var vervalt = "vervalt";
            if (rijdt_niet_verder_dan = 1) {
                var vervalt = "";
            }
           //var klassen_onregelmatigheid = document.getElementsByClassName(onregelmatigheid);
           if (rijdt_niet = 1) {
               var tekst2 = document.getElementsByClassName(onregelmatigheid2 + " B ")
               var info2 = document.getElementsByClassName("D" + onregelmatigheid2)
               var uiterlijk2 = ["WK","BK", "WK","BK", "WK","BK", "WK","BK", "WK","BK", "WK","BK", "WK","BK", "WK","BK", "WK","BK", "WK","BK", "WK","BK", "WK","BK", "WK"]
               var i;
           for (i = 0; i < tekst2.length; i++) {
               //if (i.indexOf('table WK') !== -1) {
               tekst2[i].innerHTML ="<table class='table importantbg " + "'><tr><td class='wd1'></td><td class='C10 wd2 important'>" + bericht2 + "</td><td class='wd3'></td><td class='wd4'></td><td class='wd5'></td><td class='wd6'></td></tr></table>"
               tekst2[i].classList.add("vervalt")
              }
              for (i = 0; i < info2.length; i++) {
               //if (i.indexOf('table WK') !== -1) {
               info2[i].classList.add(vervalt)
              }}
            if (rijdt_niet_verder_dan = 1) {
                var bestemming = document.getElementsByClassName("D" + onregelmatigheid)
                var bestemming2 = document.getElementsByClassName("D" + onregelmatigheid2)
                var i;
                for (i = 0; i < bestemming.length; i++) {
                    //if (i.indexOf('table WK') !== -1) {
                    bestemming[i].innerHTML = nieuwebestemming + ' <a class="streep">' + oudebestemming + '</a>'
                    bestemming2[i].innerHTML = nieuwebestemming + ' <a class="streep">' + oudebestemming + '</a>'
                    //bestemming[i].classList.add("vervalt")
                   }
                   //for (i = 0; i < info2.length; i++) {
                    //if (i.indexOf('table WK') !== -1) {
                    //info2[i].classList.add("vervalt")
                   //}
                //}    
            }
            var elementen_roltekst = document.getElementsByClassName("C FR3a")
            var elementen_roltekst2 = document.getElementsByClassName("C FR3a")
            var normaletekst = elementen_roltekst.innerHTML[1];
            var normaletekst2 = elementen_roltekst2.innerHTML[1];
            var roltekst = [normaletekst , "Reistip: Naar Châteauville/Tourlonge/Tourlonge Est is sneller atrav&eacute;s de IC Nouveau Paris Nord."]
            var roltekst2 = [normaletekst2 , "Reistip: Naar Châteauville/Tourlonge/Tourlonge Est is sneller atrav&eacute;s de IC Nouveau Paris Nord."]
            var i;
            rollendeTekst(0);
               function rollendeTekst (y) {
                   if (roltekst.length > y) {
                       setTimeout(function() {
                       rollendetekst = roltekst[y];
                       rollendetekst2 = roltekst2[y];
                       rollendeTekst(++i);
                   }, 5000);
                   } else if (example.length == y) { // Loop
                       //example.length == i
                           rollendeTekst(0);
                       }
               }
            for (i = 0; i < elementen_roltekst.length; i++) {

                elementen_roltekst[i].innerHTML = rollendetekst
                elementen_roltekst2[i].innerHTML = rollendetekst2
               }
               




        }}
        

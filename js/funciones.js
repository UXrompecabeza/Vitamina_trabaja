function valida(e){let t=0,l=e.elements[1],i=e.elements[2],n=e.elements[3],s=e.elements[4],a=e.elements[5],o=e.elements[6],u=e.elements[7],c=e.elements[8];return $("input").on("keydown keyup change paste",function(){""!=$(this).val()&&$(this).removeClass("empty-field"),""==$(this).val()&&$(this).addClass("empty-field")}),$("#curriculum").change(function(){""!=$(this).val()&&$(".fake-input").removeClass("empty-field")}),l.value.length<11?l.classList.add("empty-field"):t++,i.value.length<10?i.classList.add("empty-field"):t++,a.value.length<12?a.classList.add("empty-field"):t++,""==n.value?n.classList.add("empty-field"):t++,""==s.value?s.classList.add("empty-field"):t++,""==o.value?o.classList.add("empty-field"):t++,""==u.value?u.classList.add("empty-field"):t++,""==c.value?$(".fake-input").addClass("empty-field"):t++,8==t}function limitMe(e){return 8==e.keyCode||this.value.length<$(this).attr("maxLength")}function youtube(){for(var e=document.getElementsByClassName("reproductor"),t=0;t<e.length;t++){var l=document.createElement("div");l.innerHTML=labnolThumb(e[t].dataset.id),l.onclick=labnolIframe,e[t].appendChild(l)}}function labnolThumb(e){return'<img class="imagen-previa" src="//i.ytimg.com/vi/'+e+'/hqdefault.jpg"><div class="youtube-play"></div>'}function labnolIframe(){var e=document.createElement("iframe");e.setAttribute("src","//www.youtube.com/embed/"+this.parentNode.dataset.id+"?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=1&rel=0&showinfo=0"),e.setAttribute("frameborder","0"),e.setAttribute("id","youtube-iframe"),this.parentNode.replaceChild(e,this)}$(document).ready(function(){youtube()}),$(".btn-search-mobil").click(function(){$(".input-hide-mo").toggleClass("show-searchBar-mo")}),$(".btn-search").click(function(){$(".box-slide").toggleClass("show-searchBar")}),$("#burgerBtn").click(function(){$(this).toggleClass("openBtn"),$(".navbar-mo").toggleClass("close-navbarMo")}),$("#curriculum").on("change",function(){let e=document.getElementById("curriculum").files[0].name;$(".fake-input").text(e)}),$(".selectStyle").each(function(){var e=$(this),t=$(this).children("option").length;e.addClass("select-hidden"),e.wrap('<div class="selectDiv"></div>'),e.after('<div class="select-styled"></div>');var l=e.next("div.select-styled");l.text(e.children("option").eq(0).text());for(var i=$("<ul />",{class:"select-options"}).insertAfter(l),n=0;n<t;n++)$("<li />",{text:e.children("option").eq(n).text(),rel:e.children("option").eq(n).val()}).appendTo(i);var s=i.children("li");l.click(function(e){e.stopPropagation(),$("div.select-styled.activeb").not(this).each(function(){$(this).removeClass("activeb").next("ul.select-options").hide()}),$(this).toggleClass("activeb").next("ul.select-options").toggle()}),s.click(function(t){t.stopPropagation(),l.text($(this).text()).removeClass("activeb"),e.val($(this).attr("rel")),i.hide()}),$(document).click(function(){l.removeClass("activeb"),i.hide()})}),$(".input-nacimiento").attr("maxLength","10").keypress(limitMe),$(".input-telefono").attr("maxLength","12").keypress(limitMe),$(".input-rut").attr("maxLength","12").keypress(limitMe),$(".input-number").on("input",function(){this.value=this.value.replace(/[^0-9]/g,"")}),$(".input-text").on("input",function(){this.value=this.value.replace(/[^A-Za-z\s]/g,"")}),$(".input-rut").on("input",function(){this.value=this.value.replace(/[^k0-9\_]/g,"");let e=this.value;e.length>1&&(e=e.substring(0,e.length-1)+"-"+e.substring(e.length-1,e.length)),e.length>5&&(e=e.substring(0,e.length-5)+"."+e.substring(e.length-5,e.length)),e.length>9&&(e=e.substring(0,e.length-9)+"."+e.substring(e.length-9,e.length)),this.value=e}),$(".input-nacimiento").on("input",function(){this.value=this.value.replace(/[^0-9\_]/g,"");let e=this.value;e.length>4&&(e=e.substring(0,e.length-4)+"/"+e.substring(e.length-4,e.length)),e.length>7&&(e=e.substring(0,e.length-7)+"/"+e.substring(e.length-7,e.length)),this.value=e}),$(".input-telefono").keydown(function(e){this.value=this.value.replace(/[^+0-9\_]/g,"");var t=$(this).val(),l=this;setTimeout(function(){0!==l.value.indexOf("+569")&&$(l).val(t)},1)}),$(".postulaBtn").click(function(){window.location.href="postula.html"}),$("#pills-select").on("change",function(e){$("#pills-tab li a").eq($(this).val()).tab("show")}),$(".owl-carousel").owlCarousel({loop:!0,margin:10,nav:!1,items:1});
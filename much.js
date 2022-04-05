 /*
        ░░░░░░░░░▄░░░░░░░░░░░░░░▄
        ░░░░░░░░▌▒█░░░░░░░░░░░▄▀▒▌ 
        ░░░░░░░░▌▒▒█░░░░░░░░▄▀▒▒▒▐
        ░░░░░░░▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐
        ░░░░░▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐
        ░░░▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌
        ░░▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒▌ so source
        ░░▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐
        ░▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌
        ░▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌
        ▌▒▀▐▄█▄█▌▄░▀▒▒░░░░░░░░░░▒▒▒▐ much code
        ▐▒▒▐▀▐▀▒░▄▄▒▄▒▒▒▒▒▒░▒░▒░▒▒▒▒▌
        ▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒▒▒░▒░▒░▒▒▐
        ░▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒░▒░▒░▒░▒▒▒▌
        ░▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▄▒▒▐ how do you accessed ? wow
        ░░▀▄▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▄▒▒▒▒▌
        ░░░░▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀
        ░░░░░░▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀
        ░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▀▀ 
    */
  var qhm = document.getElementById('shmm');
  var shm = document.getElementById('more');
  qhm.addEventListener("click", function() {
    shm.style.top = "0%";
  });

var mm = document.getElementById("more");
  var mcsb = document.getElementById("clsmm");
  mcsb.addEventListener("click", function() {
    mm.style.top = "-100%";
  });

$(document).ready(function() {
  $.getJSON('https://chain.so/api/v2/get_price/DOGE/USD', function(price) {
                  $('#price').html('$' + price.data.prices[0].price);
  });
  $('#refp').click(function() {
  	$.getJSON('https://chain.so/api/v2/get_price/DOGE/USD', function(price) {
                  $('#price').html('$' + price.data.prices[0].price);
  });
  });
               
           $('#add').on('input', function() {
            function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }
  function wot(ae) {
    fnum = parseFloat(ae).toFixed(2);
    return fnum;
  }
               $.getJSON('https://chain.so/api/v2/get_address_balance/DOGE/' + $('#add').val(), function(data) {
                $.blnc = data.data.confirmed_balance;
                  $('#oneb').html('<div id="addData"><div style="display:block;margin:auto;padding:15px;border:none;border-bottom:1px solid #ccc;"><center><span style="color:#525b54;">Total Balance :</span><br/><span style="color: #000;font-size: 25px;"><b>Ð' + thousands_separators(wot($.blnc)) + '</b></span><br/><span id="val" style="color: #525b54;"></span></center></div><div style="display: block;margin: auto;padding: 25px;">Received Amount : <br/><span id="rv" style="color: green;"></span><br/><br/>Sent Amount : <br/><span id="sv" style="color: red;"></span><br/><br/><center><a id="vosc" href="" target="_blank">View on SoChain</a></center></div></div>');
                  $.getJSON('https://chain.so/api/v2/get_price/DOGE/USD', function(price) {
                  $('#val').html('$' + thousands_separators(wot($.blnc*price.data.prices[0].price)));
          });
                  $.getJSON('https://chain.so/api/v2/get_address_received/DOGE/' + $('#add').val(), function(data) {
                  $('#rv').html('<b>Ð' + thousands_separators(wot(data.data.confirmed_received_value)) + '</b>');
               });
               $.getJSON('https://chain.so/api/v2/get_address_spent/DOGE/' + $('#add').val(), function(data) {
                  $('#sv').html('<b> Ð' + thousands_separators(wot(data.data.confirmed_sent_value)) + '</b>');
               });
               $.vosc = "http://www.chain.so/address/DOGE/" + $('#add').val();
               $("#vosc").attr("href", $.vosc);
               });
               
               
    });
      
});
  $('form').on('click','.form-text + .clear-text', function(e) {
  e.preventDefault();
  console.log('clear text.');
  $(this).prev('input').val('');
  return false;
});

/* input without required attribute */
$('form').on('focus blur keyup','.form-text:not([required])', function(e) {
  e.preventDefault();
  if($(this).val().length) {
    $(this).addClass('valid-text');
  } else {
    $(this).removeClass('valid-text');
  }
});
$('form').on('click','.form-text:not([required]) + .clear-text', function(e) {
  e.preventDefault();
  console.log('remove valid-text.');
  $(this).prev('input').removeClass('valid-text');
  return false;
});


document.onkeydown = function(e) {
if(event.keyCode == 123) {
return false;
}
if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'P'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
return false;
}
}

$(document).bind("contextmenu",function(e) {
 e.preventDefault();
});
$(document).keydown(function(e){
    if(e.ctrlKey && (e.which === 83)){
       e.preventDefault();
       return false;
    }
});

document.addEventListener("keyup", function (e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
            if (keyCode == 44) {
                stopPrntScr();
            }
        });
function stopPrntScr() {

            var inpFld = document.createElement("input");
            inpFld.setAttribute("value", ".");
            inpFld.setAttribute("width", "0");
            inpFld.style.height = "0px";
            inpFld.style.width = "0px";
            inpFld.style.border = "0px";
            document.body.appendChild(inpFld);
            inpFld.select();
            document.execCommand("copy");
            inpFld.remove(inpFld);
        }
       function AccessClipboardData() {
            try {
                window.clipboardData.setData('text', "Access   Restricted");
            } catch (err) {
            }
        }
        setInterval("AccessClipboardData()", 300);

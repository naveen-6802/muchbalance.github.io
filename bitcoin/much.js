
  var mqrs = document.getElementById("minqrs");
  mqrs.addEventListener("click", function() {
    scanner.stop();
  });
  var qhm = document.getElementById('shmm');
  var shm = document.getElementById('more');
  var shmm = document.getElementById('mmc');
  qhm.addEventListener("click", function() {
    shm.style.bottom = "0%";
    shmm.style.bottom = "0%";
  });

var mm = document.getElementById("more");
  var mcsb = document.getElementById("clsmm");
  mm.addEventListener("click", function() {
    mm.style.bottom = "-100%";
    shmm.style.bottom = "-100%";
  });
 function PP(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }
$(document).ready(function() {
  $.getJSON('https://chain.so/api/v2/get_price/BTC/USD', function(price) {
                  $('#price').html('$' + PP(price.data.prices[0].price));
  });
  $('#refp').click(function() {
    $.getJSON('https://chain.so/api/v2/get_price/BTC/USD', function(price) {
                  $('#price').html('$' + PP(price.data.prices[0].price));
  });
  });
               
           $('#add').on('keyup', function() {
            function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }
  function wot(ae) {
    fnum = parseFloat(ae).toFixed(6);
    return fnum;
  }
  function wotpp(ae) {
    fnum = parseFloat(ae).toFixed(2);
    return fnum;
  }

               $.getJSON('https://chain.so/api/v2/get_address_balance/BTC/' + $('#add').val(), function(data) {
                $.blnc = data.data.confirmed_balance;
                  $('#oneb').html('<br/><div id="addData" style="overflow:hidden;"><div id="saData"><div style="display:block;padding:5px;float: left;"><div style="padding-left: 20px;padding-top: 5px;"><p style="font-size: 13px;color: white;">Identified using <strong><a href="https://chain.so" target="_blank" style="color: #fff;text-decoration: underline;">SoChain</a></strong></p><p id="tellAdd" style="color: white;"></p></div></div><div style="padding:10px;margin-top: 18px;" id="qrcode"><img id="qrimg" height="50" width="50" style="background: white;" /></div></div><br/><div style="padding:5px;"><div style="padding-left: 20px;"><span id="totalBalance">Total Balance :</span><br/><span id="showingBalance" style="font-size: 20px;"><b>₿' + thousands_separators(wot($.blnc)) + '</b></span><span id="val" style="font-size:13px;"></span></div></div><br/></div><br/><div id="addData"><div style="display: block;margin: auto;padding: 25px;"><span>Received Amount : </span><br/><span id="rv" style="color: rgb(26,145,70);"></span><span id="rvv" style="font-size:13px;"></span><br/><br/><span>Sent Amount : </span><br/><span id="sv" style="color: rgb(255,69,94);"></span><span id="svv" style="font-size:13px;"></span><br/><br/><center style="display:flex;justify-content:space-around;"><a id="vosc" href="" target="_blank"><i class="fa fa-eye"></i> View on Blockchain</a><a id="senddg" href="">₿ Send Bitcoin</a></center></div></div><br/><br/><br/>');
                  var GenerateQRCode, htmlEncode;
    htmlEncode = function(value) {
    return $('<div/>').text(value).html();
  };
  $('#tellAdd').html('Showing data of : <br/> <b>' + $('#add').val() + '</b>');
    
    $('#qrimg').empty();
    // Generate and Output QR Code
    $('#qrimg').attr('src', 'https://chart.googleapis.com/chart?cht=qr&chl=' + htmlEncode('bitcoin:'+$('#add').val()) + '&chs=500x500&chld=L|0');
//$("#qdn").prop("download", $('#add').val());
//$("#qdn").prop("href", $('#qrimg').attr("src")+'.jpg');
var modal = document.getElementById("sQRModal");
var img = document.getElementById("qrimg");
var btn = document.getElementById("qdn");
var modalImg = document.getElementById("sQRimg");
var captionText = document.getElementById("dsQR");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.href = img.src+'.png';
  document.getElementById("sQRadrs").innerHTML = $("#add").val();
}

var span = document.getElementsByClassName("sQRclose")[0];

span.onclick = function() { 
  modal.style.display = "none";
}
                  $.getJSON('https://chain.so/api/v2/get_price/BTC/USD', function(price) {
                  $('#val').html('&nbsp;($' + thousands_separators(wotpp($.blnc*price.data.prices[0].price)) + ')');
                   
          });
                  $.getJSON('https://chain.so/api/v2/get_address_received/BTC/' + $('#add').val(), function(data) {
                  $('#rv').html('<b>₿' + thousands_separators(wot(data.data.confirmed_received_value)) + '</b>');
                  $.getJSON('https://chain.so/api/v2/get_price/BTC/USD', function(price) {
                  $.rv = data.data.confirmed_received_value;
                  $('#rvv').html('&nbsp;($' + thousands_separators(wotpp($.rv*price.data.prices[0].price)) + ')');
                  });
               });
               $.getJSON('https://chain.so/api/v2/get_address_spent/BTC/' + $('#add').val(), function(data) {
                  $('#sv').html('<b>₿' + thousands_separators(wot(data.data.confirmed_sent_value)) + '</b>');
                  $.getJSON('https://chain.so/api/v2/get_price/BTC/USD', function(price) {
                  $.sv = data.data.confirmed_sent_value;
                  $('#svv').html('&nbsp;($' + thousands_separators(wotpp($.sv*price.data.prices[0].price)) + ')');
                  });
               });
               $.vosc = "https://www.blockchain.com/btc/address/" + $('#add').val();
               $("#vosc").attr("href", $.vosc);
               $.senddg = "bitcoin:"+$("#add").val();
               $("#senddg").attr("href", $.senddg);
               });


    });
      
});
function thousands_separatorsH(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }
  function loAt(be) {
    numf = parseFloat(be).toFixed(6);
    return numf;
  }
  function lAt(ce) {
    numf = parseFloat(ce).toFixed(2);
    return numf;
  }
   $('#dolv').on('input', function() {
      $.getJSON('https://chain.so/api/v2/get_price/BTC/USD', function(daata) {
                  $("#dogv").val(thousands_separatorsH(loAt($("#dolv").val()/daata.data.prices[0].price)));
                   
          });
   });
   
   $('#dogv').on('input', function() {
      $.getJSON('https://chain.so/api/v2/get_price/BTC/USD', function(daata) {
                  $("#dolv").val(thousands_separatorsH(lAt($("#dogv").val()*daata.data.prices[0].price)));
                   
          });
   });
   $("#clrud").on("click", function() {
      $("#dogv").val("");
      $("#dolv").val("");
   });
   $('#nadd').on('input', function() {
      $.getJSON('https://chain.so/api/v2/get_address_balance/BTC/' + $('#nadd').val(), function(daata) {
        
        $("#amnt").removeAttr("disabled");
        $("#generate").removeAttr("disabled");
        $("#generate").css("color", "rgb(26,145,70)");

         $('#generate').on('click', function() {
          $("#damta").html('<center><br/><img style="margin-top:10px;border-radius:6px;" id="qrimgz" height="100" width="100" /><br/><a id="ndq"><ion-icon name="arrow-down-circle"></ion-icon></a></center>');

          var GenerateQRCode, htmlEncode;
    htmlEncode = function(value) {
    return $('<div/>').text(value).html();
  };
      $('#qrimgz').attr('src', 'https://chart.googleapis.com/chart?cht=qr&chl='+htmlEncode('bitcoin:'+$('#nadd').val()+'?amount='+$('#amnt').val())+'&chs=500x500&chld=L|0.png');
      $("#ndq").prop("href", $('#qrimgz').attr("src")+'.jpg');
                   
          });
         });
      
        
   });
  $("#qclr").on("click", function() {
    $("#damta").empty();
    $("#nadd").val('');
    $("#amnt").val('');
    $("#amnt").attr("disabled", "true");
    $("#generate").attr("disabled", "true");
    $("#generate").css("color", "#ccc");
  });
  $('form').on('click','.form-text + .clear-text', function(e) {
  e.preventDefault();
  console.log('clear text.');
  $(this).prev('input').val('');
  $(this).prev('input').focus();
  $("#oneb").html('');
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
var scanner = new Instascan.Scanner({ video: document.getElementById('preview'), scanPeriod: 5, mirror: false });

  scanner.addListener('scan',function(content){
    $("#add").val(content);
    var timer = 0;
    var sensor_word = ['bitcoin:', 'bitcoin: ', 'bitcoin', ':','bitcoin:','BITCOIN'];
    var sensor_replace = ['', '', '','','',''];

    

        clearTimeout(timer);
        var new_value = this.value;
        var new_sensor = $('#add').val();

        $.each(sensor_word, function (idx, word) {
            new_sensor = new_sensor.replace(word, '');
        });

        timer = setTimeout(function () {
             $('#add').val(new_sensor);
             $("#add").keyup();
        }, 0);
        $("#mhqr").css("display","none");
        scanner.stop();
    //window.location.href=content;
  });
  var a = document.getElementById("anim");
      a.addEventListener("click", function() {
        var b = document.getElementById("mhqr");
        b.style.display = "block";
        Instascan.Camera.getCameras().then(function (cameras){
    if(cameras.length>0){
      scanner.start(cameras[1]);
      $('[name="options"]').on('change',function(){
        if($(this).val()==1){
          if(cameras[0]!=""){
            scanner.start(cameras[0]);
          }else{
            alert('No Front camera found!');
          }
        }else if($(this).val()==2){
          if(cameras[1]!=""){
            scanner.start(cameras[1]);
          }else{
            alert('No Back camera found!');
          }
        }
      });
    }else{
      console.error('No cameras found.');
      alert('No cameras found.');
    }

  }).catch(function(e){
    console.error(e);
    alert(e);
  });
      });
      const uqrw = document.querySelector(".uqrw"),
form = document.querySelector("#uqrf"),
fileInp = form.querySelector("#Inp"),
infoText = form.querySelector("#pop");

function fetchRequest(file, formData) {
    infoText.innerText = "Scanning QR Code...";
    fetch("https://api.qrserver.com/v1/read-qr-code/", {
        method: 'POST', body: formData
    }).then(res => res.json()).then(result => {
        result = result[0].symbol[0].data;
        infoText.innerText = result ? "Upload QR Code to Scan" : "Couldn't scan QR Code";
        if(!result) return;
        document.getElementById("add").value = result+'';
        
        var timer = 0;
    var sensor_word = ['bitcoin:', 'bitcoin: ', 'bitcoin', ':','bitcoin:','BITCOIN'];
    var sensor_replace = ['', '', '','','',''];

    

        clearTimeout(timer);
        var new_value = this.value;
        var new_sensor = $('#add').val();

        $.each(sensor_word, function (idx, word) {
            new_sensor = new_sensor.replace(word, '');
        });

        timer = setTimeout(function () {
             $('#add').val(new_sensor);
             $("#add").keyup();
        }, 0);
        $("#mhqr").css("display", "none");
        scanner.stop();
        
    }).catch(() => {
        infoText.innerText = "Couldn't scan QR Code";
    });
            var element = document.getElementById('add');  
element.addEventListener('input', () => console.log('input'))  
var event = new Event('input');  
element.dispatchEvent(event);
}



fileInp.addEventListener("change", async e => {
    let file = e.target.files[0];
    if(!file) return;
    let formData = new FormData();
    formData.append('file', file);
    fetchRequest(file, formData);
});

form.addEventListener("click", () => fileInp.click());

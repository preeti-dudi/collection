$(".cart").slideToggle(600);
var cart=[];
var i=0;
$(".ADDbtn").click(function() {
    if(cart.indexOf($(this).parent().attr("id"))==-1){
    cart[i++]=$(this).parent().attr("id");
    var name = $(this).siblings().eq("1").text();
    var price = $(this).siblings().eq("2").text();
    var imgSRC = $(this).siblings().eq("0").attr("src");
    var cartItem = '<div class="cartRow" id="'+$(this).parent().attr("id")+'"><div class="sr.No."></div><div class="item"><img src="'+ imgSRC + '">' +name +'</div><div class="quantity"><input type="number" value="1"></div><div class="price">'+ price +'</div><button class="remove">remove</button></div>';
    $(".cart").append(cartItem);
        $(".num").empty();
    $(".num").append($(".cart").children().length-2);
        }
    else{alert("item already in cart");}
    });

$(document).on('click','.remove',function(events) {
    var removeID= cart.indexOf($(this).parent().attr("id"));
    for(j=removeID;j<cart.length;j++){
        cart[j]=cart[j+1];
    }
    cart.pop();
    $(this).parent().remove();
     $(".num").empty();
    $(".num").append($(".cart").children().length-2);
    if($(".cart").children().length==2){
         $(".cart").slideToggle(600);
       }
});

$(document).on('change','.quantity',function(){
    var id = $(this).parent().attr("id");
    id = '#' + id;
    var quantity = $(this).children().eq("0").val();
    var price = $(id).children().eq("1").text();
    amount=parseInt(price) * parseInt(quantity);
    $(this).next().text(amount);
});

$(".num").click(function(){
if( $(".cart").children().length>2){
$(".cart").slideToggle(500); }
        });

$(".reg").click(function (){
    var register='<form onsubmit="return validate()" action="#" method="post">Name<br><input type="text" id="name"><span id="noticeN"></span><br>Email Id<br><input type="text" id="email"><span id="noticeEI"></span><br>Mobile Number<br><input value="+91" type="number" id="mobile"><span id="noticeM"></span><br><input type="submit" value="SUBMIT" ></form>';
    document.getElementsById("reg").innerHTML=register;
    alert("hello");
});

function validate(){
       if( document.getElementById("name").value == ""){
           document.getElementById("noticeN").innerHTML='<p style="font-size:12; color:red">**name can\'t be empty</p>';
           return false;
            }
     if( document.getElementById("email").value == ""){
           document.getElementById("noticeEI").innerHTML='<p style="font-size:12; color:red">**enter valid email</p>';
           return false;
            }
     if( document.getElementById("mobile").value.length != 10){
           document.getElementById("noticeM").innerHTML='<p style="font-size:12; color:red">**mobile number is incorrect</p>';
           return false;
            }
    else{
        alert("submitted");
        return true;
            }
}
// window.onload = function(){
//     console.log(window.screen)
//     if (window.screen > 1220){
//         var menu = document.getElementsByClassName('left-bar');
//         menu[0].style.display="block";
//     }
// }

    function getMenu(){
        event.stopPropagation()
        var menu = document.getElementsByClassName('left-bar');
        menu[0].style.display="block";
    }

    document.addEventListener("click", function() {
            var menu = document.getElementsByClassName('left-bar');
            if (menu[0].style.display=="block" && window.screen.width < 900){
                menu[0].style.display="none";
            }
        }
    );

    window.addEventListener('resize',function(){
        if (window.screen.width > 900){
            var menu = document.getElementsByClassName('left-bar');
            menu[0].style.display="block";
        } else if (window.screen.width <= 900){
            var menu = document.getElementsByClassName('left-bar');
            menu[0].style.display="none";
        }
    });
    
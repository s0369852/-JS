"use strict";

var Body = {
    setColor : function(color){
    // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor : function(color){
    // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
}
};

var Links = {
    setColor : function(color){
        // var links = document.querySelectorAll('a');
        // var i = 0;
        // while(i < links.length){
        //     links[i].style.color = color;
        //     i = i + 1;
        // }
        $('a').css('color', color)
        // jqeury는 $로 시작한다. $() -> $이름의 함수
        // $('a') -> 이 웹페이지에 있는 모든 a태그를 jquery로 제어하겠다. 
        // jquery css(검색)
        // .css('color', 매개변수) -> 'color'는 css의 속성을, 뒤의 매개변수를 통해 들어온 color를 준다.
        // jquery는 새로운 언어가 아니고 javascript를 이용해서 우리 대신에 css라는 함수를 jquery가 만들어 둔 것이다. 
        // 우리는 저 css라는 함수를 사용하면 저 함수가 내부적으로 우리 대신에 처리를 하고 있는 것이다. 
        

    } 
};

function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('yellow');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('blue');
    }
}

// jquey를 이용해서 수정. 
// jquery를 이용했을 때, 처리해야될 태그가 여러가지가 있을때, 
// 반복문을 통해서 처리를 해야하는데, 
// jquery를 이용하면 반복문을 사용하지 않아도 된다. 
// 반복문을 jquery가 우리 대신에 처리해 준다. 
// 우리는 그냥 한줄짜리 코드로 대체 할 수 있다. 

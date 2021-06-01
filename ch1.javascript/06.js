

// 화살표 함수
// function을 완벽하게 대체할 수 없으므로 function도 사용해야 함

function add1(x, y){
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
};

const add3 = (x, y) => x + y;
// 중괄호 다음에 return이 바로 오는 경우 생략 가능

const add4 = (x, y) => (x + y);
// return 값을 괄호로 묶어준다.

function not1(x) {
    return !x;
}

const not2 = x => !x;
// 매개변수가 하나일 때 괄호 생략 가능

// ----------------------------------------------
var relationship1 = {
    name:'yubom',
        friends:['bombom','bom','bbom'],
        logFriend: function (){
        var that = this;
        this.friends.forEach(function (friend){
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriend();

// -----------------------------------------------
// 화살표 함수
var relationship2 = {
    name : 'yubom',
    friends : ['bombom', 'bom', 'bbom'],
    logFriend() {
        this.friends.forEach(friend => {
        // forEach안의 this와 logFriends의 this가 같아짐
            console.log(this.name, friend);
            // 부모의 this와 여기 this가 같아짐
            // 다른 this를 가지고자 한다면 function을 사용해야함.
        });
    },
};
relationship2.logFriend();



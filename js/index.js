window.onload = function () {
    search();
    timeCount();

};


//搜索框下拉效果
const search = function () {
    const searchBox = document.getElementsByClassName("jd_header_box")[0];
    const bannerHeight = document.getElementsByClassName("jd_banner")[0].offsetHeight;
    window.onscroll = function () {
        var top = document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop;
        if (top > bannerHeight) {
            searchBox.style.backgroundColor = "rgba(201,21,35,0.85)";
        }else {
            let opacity = top/bannerHeight*0.85;
            searchBox.style.backgroundColor = "rgba(201,21,35,"+opacity+")";
        }
    }
}


//秒杀倒计时效果
const timeCount = function () {

    let allTime = 4* 60 * 60;
    const timeLis = document.getElementsByClassName("jd_sk_time")[0].children;
    setInterval(function () {
        const h = Math.floor(allTime/60/60);
        const m = Math.floor(Math.floor(allTime/60)%60);
        const s = allTime%60;

        timeLis[0].innerHTML = h>10?Math.floor(h/10):0;
        timeLis[1].innerHTML = (h%10);

        timeLis[3].innerHTML = m>10?Math.floor(m/10):0;
        timeLis[4].innerHTML = m%10;

        timeLis[6].innerHTML = s>10?Math.floor(s/10):0;
        timeLis[7].innerHTML = s%10;
        allTime--;
    },1000);
}

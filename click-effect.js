// 设置全局点击影之诗特效
const GlobalClickEffect = (Event) =>
{

    // 设置点状星星特效
    const Dot = [];
    const DotExpandDirection = [];
    for (let i = 0; i < 10; i++)
    {
        Dot.push(document.createElement("span"));
        Dot[i].className = "Dot";
        Dot[i].innerText = "✦";
        Dot[i].style.transform = "translateX(-50%) translateY(-50%)";
        DotExpandDirection.push([Math.random() * 5 - 2.5, Math.random() * 5 - 2.5]);
    }

    // 设置放射状线条特效
    const Stick = [];
    const StickDirection = [];
    for (let i = 0; i < 20; i++)
    {
        Stick.push(document.createElement("span"));
        Stick[i].style.opacity = "0";
        Stick[i].className = "Stick";
        Stick[i].innerHTML = "&nbsp;";
        Stick[i].style.width = `${Math.random() * 150 + 50}px`;
        StickDirection.push(Math.random() * 360);
        Stick[i].style.transform = `translateX(-50%) rotateZ(${StickDirection[i]}deg)`;
    }

    // 设置上述元素的父元素
    const ClickEffect = document.createElement("span");
    ClickEffect.className = "ClickEffect";
    ClickEffect.style.left = Event.clientX + "px";
    ClickEffect.style.top = Event.clientY + "px";
    for (let i = 0; i < 10; i++)
        ClickEffect.appendChild(Dot[i]);
    for (let i = 0; i < 20; i++)
        ClickEffect.appendChild(Stick[i]);
    document.body.appendChild(ClickEffect);

    // 逐渐变为透明
    setTimeout(() =>
    {
        for (let i = 0; i < 20; i++)
            Stick[i].style.opacity = "1";
    }, 50);
    setTimeout(() =>
    {
        for (let i = 0; i < 20; i++)
            Stick[i].style.opacity = "0";
    }, 350);

    // 随机朝向
    let FirstTime = true;
    let Size = 5;
    let temp = setInterval(() =>
    {
        ClickEffect.style.width = Size + "px";
        ClickEffect.style.height = Size + "px";
        for (let i = 0; i < 10; i++)
            Dot[i].style.transform = `translateX(-50%) translateY(-50%) translateX(${DotExpandDirection[i][0] * Size}px) translateY(${DotExpandDirection[i][1] * Size}px)`;
        for (let i = 0; i < 20; i++)
            Stick[i].style.transform = `translateX(-50%) translateX(${Size / 2}px) translateY(${Size / 2}px) rotateZ(${StickDirection[i]}deg)`;


        if (Size >= 50 && FirstTime)        // 达到一定大小后，一定时间内清除当前特效
        {
            FirstTime = false;
            ClickEffect.style.opacity = "0";
            setTimeout(() =>
            {
                clearInterval(temp);
                document.body.removeChild(ClickEffect);
            }, 500);
        }
        else if (FirstTime)                 // 未达到一定大小，继续扩大
            Size += 5;
        else                                // 已达到一定大小，扩大放缓
            Size += 2;
    }, 20);
};



window.addEventListener("load", () =>
{
    window.addEventListener("mousedown", GlobalClickEffect);
});
function OnMouseScroll()
{
    let scale = 1;
    event.preventDefault();
    scale += event.deltaY * 0.01;
    scale = Math.max(0.5, scale);
    box.style.transform = `scale(${scale})`;
}

function OnMouseInside(type)
{
    let img = document.getElementById(type)
    img.src = "/MyRoom/pasocon_colored.png";
    btn.style.transform = 2;
}

function TextboxFlowsIn()
{
    const start = -1000;
    const moveTarget  = 830;
    const moveTooMuch = 880;
    let current = 0;
    let currentPos = start;
    let finishFlag_1 = false;
    let finishFlag_2 = false;
    let timer = null;

    let moveSpeed = 1;
    const moveSpeedDivider = 18;
    
    clearInterval(timer);

    timer = setInterval(function()
    {
        if(!finishFlag_1 && !finishFlag_2)
        {
            if(current <= moveTooMuch)
            {
                moveSpeed = (moveTooMuch - current) / moveSpeedDivider;
                moveSpeed = moveSpeed > 10 ? moveSpeed : 10;

                current += moveSpeed;
                currentPos = start + current;
                tbx.style.top = currentPos + "px";
                //console.log(current);
                //console.log(tbx.style.top);
            }
            else
            {
                finishFlag_1 = true;
            }
        }
        
        if(finishFlag_1 && (!finishFlag_2))
        {
            if(current > moveTarget)
                {
                    moveSpeed = (current - moveTarget) / moveSpeedDivider;
                    moveSpeed = moveSpeed > 10 ? moveSpeed : 10;
    
                    current -= moveSpeed;
                    currentPos = start + current;
                    tbx.style.top = currentPos + "px";
                }
                else
                {
                    finishFlag_2 = true;
                }
        }

        if(finishFlag_1 && finishFlag_2)
        {
            clearInterval(timer);
            finishFlag_1 = false;
            finishFlag_2 = false;
        }
    }, 1);
}

function TextboxFlowsOut()
{
    const start = -180;
    const moveTarget  = 820;
    let current = 0;
    let currentPos = start;
    let finishFlag = false;
    
    let timer = null;

    let moveSpeed = 1;
    const moveSpeedDivider = 20;

    clearInterval(timer);

    timer = setInterval(function()
    {
        if(!finishFlag)
        {
            if(current <= moveTarget)
            {
                moveSpeed = (moveTarget - current) / moveSpeedDivider;
                moveSpeed = moveSpeed > 10 ? moveSpeed : 10;

                current += moveSpeed;
                currentPos = start + current;
                tbx.style.top = currentPos + "px";
                //console.log(current);
                //console.log(tbx.style.top);
            }
            else
            {
                finishFlag_1 = true;
            }
        }
        
    }, 1);

}

function BioboxFlowsIn(dayMode)
{
    const start = -1000;
    const moveTarget  = 780;
    const moveTooMuch = 830;
    let current = 0;
    let currentPos = start;
    let finishFlag_1 = false;
    let finishFlag_2 = false;
    let timer = null;

    let moveSpeed = 1;
    const moveSpeedDivider = 18;
    
    clearInterval(timer);

    timer = setInterval(function()
    {
        if(!finishFlag_1 && !finishFlag_2)
        {
            if(current <= moveTooMuch)
            {
                moveSpeed = (moveTooMuch - current) / moveSpeedDivider;
                moveSpeed = moveSpeed > 10 ? moveSpeed : 10;

                current += moveSpeed;
                currentPos = start + current;
                if(dayMode) bbx.style.top  = currentPos + "px";
                else        bbxn.style.top = currentPos + "px";
                //console.log(current);
                //console.log(tbx.style.top);
            }
            else
            {
                finishFlag_1 = true;
            }
        }
        
        if(finishFlag_1 && (!finishFlag_2))
        {
            if(current > moveTarget)
                {
                    moveSpeed = (current - moveTarget) / moveSpeedDivider;
                    moveSpeed = moveSpeed > 10 ? moveSpeed : 10;
    
                    current -= moveSpeed;
                    currentPos = start + current;
                    if(dayMode) bbx.style.top  = currentPos + "px";
                    else        bbxn.style.top = currentPos + "px";
                }
                else
                {
                    finishFlag_2 = true;
                }
        }

        if(finishFlag_1 && finishFlag_2)
        {
            clearInterval(timer);
            finishFlag_1 = false;
            finishFlag_2 = false;
        }
    }, 1);
}

function BioboxFlowsOut(dayMode)
{
    const start = -180;
    const moveTarget  = 820;
    let current = 0;
    let currentPos = start;
    let finishFlag = false;
    
    let timer = null;

    let moveSpeed = 1;
    const moveSpeedDivider = 20;

    clearInterval(timer);

    timer = setInterval(function()
    {
        if(!finishFlag)
        {
            if(current <= moveTarget)
            {
                moveSpeed = (moveTarget - current) / moveSpeedDivider;
                moveSpeed = moveSpeed > 10 ? moveSpeed : 10;

                current += moveSpeed;
                currentPos = start + current;
                if(dayMode) bbx.style.top  = currentPos + "px";
                else        bbxn.style.top = currentPos + "px";
                //console.log(current);
                //console.log(tbx.style.top);
            }
            else
            {
                finishFlag = true;
            }
        }
        
    }, 1);

}

function ImageFadeSwitch(id1, id2)
{
    let currentImage = document.getElementById(id1);
    let newImage     = document.getElementById(id2);

}

function SwitchDayNight()
{
    let body = document.body;

    if(dayMode)
    {
        FadeInFilter(body);
    }
    else
    {
        FadeOutFilter(body);
    }
}

function FadeInFilter(body)
{
    const start = 0;
    const moveTarget  = 90;
    let current = 0;
    let currentPos = start;
    let finishFlag = false;
    
    let timer = null;

    const fadeSpeed = 1;

    clearInterval(timer);

    timer = setInterval(function()
    {
        if(!finishFlag)
        {
            if(current <= moveTarget)
            {
                current += fadeSpeed;
                currentPos = start + current;
                body.filter = `invert(${currentPos})`;
            }
            else
            {
                finishFlag = true;
            }
        }
        
    }, 1);
}

function FadeOutFilter(body)
{
    const start = 90;
    const moveTarget  = 0;
    let current = 90;
    let currentPos = start;
    let finishFlag = false;
    
    let timer = null;

    const fadeSpeed = 1;

    clearInterval(timer);

    timer = setInterval(function()
    {
        if(!finishFlag)
        {
            if(current >= moveTarget)
            {
                current -= fadeSpeed;
                currentPos = start - current;
                body.filter = `invert(${currentPos})`;
            }
            else
            {
                finishFlag = true;
            }
        }
        
    }, 1);
}

async function CopyContent(content)
{
    let copyResult = true;
    const text = content;

    if(!!window.navigator.clipboard)
    {
        await window.navigator.clipboard.writeText(text).then((res) => 
        {
            console.log("copied");
        }).catch((err) =>
        {
            console.log("failed");
            copyResult = CopyContent2(text);
        });
    }

    else copyResult = CopyContent2(text);

    return copyResult;
}

function CopyContent2(content)
{
    let copyResult = true;
    let inputDom = document.createElement('textArea');
    inputDom.setAttribute('readonly', 'readonly');

    inputDom.value = content;
    document.body.appendChild(inputDom);

    inputDom.select();

    const result = document.execCommand('copy');

    if(result) console.log("copied");
    else
    {
        console.log("failed");
        copyResult = false;
    }

    document.body.removeChild(inputDom);

    return copyResult;
}

function TimeFadeOut(elementID, duration, fadeDuration)
{
    setTimeout(function()
    {
        ClipboardFadeOut(elementID, fadeDuration);
    }, duration);
}

function UpdateTime()
{
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('time').textContent = timeString;
    //console.log(timeString);
}

function ClipboardFadeIn(elementID, duration)
{
    let element = document.getElementById(elementID);
    let opacity = 0;

    element.style.display = 'block';
    element.style.opacity = opacity;

    let timer = null;
    clearInterval(timer);

    const timeDivider = 50;

    timer = setInterval(function()
    {
        document.getElementById('X').style.pointerEvents = 'none';

        if(opacity < 1)
        {
            opacity += timeDivider / duration;
            element.style.opacity = opacity;
        }

        if(opacity >= 1)
        {
            opacity = 1;
        }
        
    }, timeDivider);
}

function ClipboardFadeOut(elementID, duration)
{
    let element = document.getElementById(elementID);
    let opacity = 1;

    element.style.display = 'block';
    element.style.opacity = opacity;

    let timer = null;
    clearInterval(timer);

    const timeDivider = 50;

    timer = setInterval(function()
    {
        document.getElementById('X').style.pointerEvents = 'none';

        if(opacity > 0)
        {
            opacity -= timeDivider / duration;
            element.style.opacity = opacity;
        }

        if(opacity <= 0)
        {
            opacity = 0;
        }
        
    }, timeDivider);

}

function EnableButtonByID(...buttonID)
{
    for(let id of buttonID)
    {
        document.getElementById(id).style.pointerEvents = 'all';
    }
}

function DisableButtonByID(...buttonID)
{
    for(let id of buttonID)
    {
        document.getElementById(id).style.pointerEvents = 'none';
    }
}

function OpenMailClient(email, subject, body)
{
    let mailToURL = 'mailto:' + email;

    if(subject)
    {
        mailToURL += '?subject=' + encodeURIComponent(subject);
    }

    if(body)
    {
        mailToURL += '&body=' + encodeURIComponent(body);
    }

    window.location.href = mailToURL;
}

let currentState = 'sleep';

let esTimer = 0;
let activated = false;
let btnActivated = false;
let btnn_bsb = null;
let ES = null;

function *ElectronicPet()
{
    while(true)
    {
        if(!btnActivated)
        {
            btnn_bsb = document.getElementById('BackspaceBtnNOnBio');
        }

        if(btnn_bsb && (!btnActivated))
        {
            btnActivated = true;
            btnn_bsb.addEventListener('click', () =>
            {
                BioboxFlowsOut(dayMode);
                newState = 'sleep';
                SwitchState(newState);
                document.getElementById('es').style.left = '1000px';
                document.getElementById('es').style.top  = '650px';
                bigClick.play();
            });
        }


        if(!activated)
        {
            ES = document.getElementById('es');
        }

        if(ES && (!activated))
        {
            activated = true;
            ES.addEventListener('click', function()
            {
                sheepSound.play();
                if(currentState == 'sleep')
                {
                    newState = 'idle';
                    SwitchState(newState);
                }
                else if(currentState = 'idle')
                {
                    clearInterval(moveTimer);
                    newState = 'move';
                    SwitchState(newState);
                }
                else if(currentState = 'move')
                {
                    newState = 'idle';
                    esTimer = 0;
                    SwitchState(newState);
                }
                else if(currentState = 'moving')
                {
                    clearInterval(moveTimer);
                    newState = 'idle';
                    esTimer = 0;
                    SwitchState(newState);
                }
            });
        }
        
        //console.log(currentState);
        esTimer += 1;
        switch(currentState)
        {
            case 'sleep':
                esTimer = 0;
                yield LiterallyDoNothing();
                break;

            case 'idle':
                let randomNumber = Math.floor(Math.random() * 64);

                if(randomNumber <= (esTimer/5))
                {
                    currentState = 'move';
                }

                yield LiterallyDoNothing();
                break;
            
            case 'move':
                esTimer = 0;
                currentState = 'moving';
                ElectricSheepRandomMove();
                yield LiterallyDoNothing();
                break;
                
            case 'moving':
                esTimer = 0;
                yield LiterallyDoNothing();
                break;
            
            default:
                yield LiterallyDoNothing();
        }

    }
}

function UpdateElectronicPet()
{
    const electronicPetRefresh = ElectronicPet();
    electronicPetRefresh.next();
}

function SwitchState(newState)
{
    if(newState != currentState) currentState = newState;

    if(newState == 'sleep')
    {
        document.getElementById('es').src = 'sheep.gif';
    }
    else
    {
        document.getElementById('es').src = 'sheep_awake.gif';
    }
}

let moveTimer = null;

function ElectricSheepRandomMove()
{
    let startX = document.getElementById('es').getBoundingClientRect().left;
    let startY = document.getElementById('es').getBoundingClientRect().top;

    let currentX = startX;
    let currentY = startY;
    
    let timer = null;

    let moveSpeedx = 1;
    let moveSpeedy = 1;
    const moveSpeedDivider = 300;

    let finishFlag = false;

    let targetX = Math.floor(Math.random() * 1000);
    let targetY = Math.floor(Math.random() * 650);

    if(targetX < currentX) document.getElementById('es').style.transform = "scaleX( 1)";
    else                   document.getElementById('es').style.transform = "scaleX(-1)";

    clearInterval(timer);

    moveTimer = setInterval(function()
    {
        if(!finishFlag)
        {
            if(Math.abs(currentX - targetX) >= 10 && Math.abs(currentY - targetY) >= 10)
            {
                moveSpeedx = (targetX - currentX) / moveSpeedDivider;
                //moveSpeedx = Math.abs(moveSpeedx) < 1 ? Syn(moveSpeedx) * moveSpeedx : Syn(moveSpeedx) * 1;

                moveSpeedy = (targetY - currentY) / moveSpeedDivider;
                //moveSpeedy = Math.abs(moveSpeedy) < 1 ? Syn(moveSpeedy) * moveSpeedy : Syn(moveSpeedy) * 1;

                currentX += moveSpeedx;
                currentY += moveSpeedy;
                document.getElementById('es').style.left = currentX + "px";
                document.getElementById('es').style.top  = currentY + "px";
                //console.log(current);
                //console.log(tbx.style.top);
            }
            else
            {
                finishFlag = true;
                currentState = 'idle';
                clearInterval(moveTimer);
            }
        }
        
    }, 1);

}

function Syn(x)
{
    return x >= 0 ? 1 : -1;
}

let newState = 'sleep';

function LiterallyDoNothing()
{
    let donothing = true;
}
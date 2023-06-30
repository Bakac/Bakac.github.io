import{d as N,u as O,f as q,r as R,c as i,a as c,t as _,g as t,F as S,i as x,e as d,o as l}from"./index-b1c7cad9.js";const E={class:"yellow"},J={class:"wrapper-horizontal"},T=c("h2",null,"壓力事件反應自我評估",-1),V={class:"survey-box"},j={name:"survey"},F={class:"page-progress"},M={class:"instruction"},L=["id"],H={class:"question-prompt"},P=["id","name","min","max"],z=["id","name","value"],A=["for"],Q={class:"flex-box",style:{gap:"10px","margin-top":"64px","padding-bottom":"10px"}},K=N({__name:"StressScreenView",setup(X){const v=O(),y=q();let g=[{scale:"Intro",instruction:"在開始問卷之前，我們首先想你回憶在過往幾年中，壓力比較大的一個時段（大概持續一星期左右）。接下來的題目當中，除非特別註明，我們想知道你在該時段的精神狀況。",questions:[{prompt:"該時段是甚麼年份？（如2023年）",range:[1900,2023]}]},{scale:"L1-CCSM",instruction:"在過去幾年壓力較大的那個時段，你有多大程度/多頻繁受以下事情困擾？",questions:[{prompt:"做事缺乏興趣或樂趣",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"感到低落、抑鬱、沒有希望",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"比平常焦躁、忟憎或容易發怒",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"睡眠減少，但充滿活力",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"比平時開展更多計劃，或做更多冒險的事",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"感到緊張、焦慮、惶恐、擔憂或不安",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"感到驚恐或懼怕",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"避開會令你焦慮的場景",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"無法解釋的酸痛、刺痛？(例如頭、背、關節、腹、腿)",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"覺得你的病痛沒有被認真看待",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"出現具體傷害自己的想法",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"聽到別人聽不到的東西，例如身邊沒人時聽到人在說話",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"覺得別人能夠聽到你的想法，或是你能夠聽到別人的想法",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"有一些睡眠問題影響到整體的睡眠質素",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"記性出現問題（例如在學習新資訊時）或是找路出現問題（例如如何回到家中）",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"一些不愉快的想法、衝動或者畫面一再出現在腦海",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"有一股衝動想要實際上或在腦海裏重複某些行為或動作",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"太專注於心裏所想的事以致你不知道周圍正在發生什麼",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"感覺與自己抽離，對身體、周遭環境、或記憶感到遙遠",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"某個記憶出現得十分強烈，以致你不知道周圍正在發生什麼",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"即使努力地回憶，仍想不起當天所發生的事",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"不了解自己是誰或人生想要什麽",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"無法感覺與人親近或享受和他人的關係",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"人們一定有在我的背後笑我。",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"我經常覺得別人在迴避我。",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"我肯定有人想傷害我。",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"我無時無刻都覺得別人想讓我不好過。",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"一天喝至少4杯任何的酒精飲品",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"吸煙、雪茄、煙斗或嚼食煙草",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]},{prompt:"在沒有醫生處方，或是超過醫生指定的服藥用量或時間下自行服藥，包括安眠藥、止痛藥、鎮靜劑；興奮劑；成癮藥物如大麻、搖頭丸、冰、安非他命、海洛因、天拿水等",choices:["完全沒有／從來沒有","輕微程度／一或兩日","一般程度／一些日子","中上程度／過半日子","很大程度／幾乎每日"]}]},{scale:"Demo",instruction:"最後，我們需要知道你的一些基本資料，才能運算出正確的結果：",questions:[{prompt:"年齡",range:[0,100]},{prompt:"出生時性別",choices:["男","女","其他"]}]}];const h=g.length,w=[...Array(h).keys()];var n=R(w.includes(parseInt(y.params.page.toString())-1)?parseInt(y.params.page.toString()):1);let f=n.value-1;function I(){if(localStorage.getItem("userID")==null){let r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",s="";for(let o=0;o<6;o++){let a=Math.floor(Math.random()*r.length);s+=r[a]}let e=new Date().toISOString().slice(2,10).replace(/-/g,"");localStorage.setItem("userID",e.toString()+"-"+s),localStorage.setItem("create_time",Date.now().toString())}}I();function C(r){const s=document.getElementsByClassName("instruction")[0].getBoundingClientRect().height;let a=r.target.parentElement.nextElementSibling.getBoundingClientRect().top+window.scrollY-s-16;window.scrollTo({top:a,behavior:"smooth"})}function D(){return document.forms[0].reportValidity()}function b(){let r=!0;if(D()){const s=document.forms[0],e=new FormData(s);e.set("s"+n.value+"_timestamp",Date.now().toString()),e.set("s"+n.value+"_scale",g[f].scale);let o={};e.forEach((p,u)=>o[u]=p);const a=JSON.stringify(o);localStorage.setItem("stress_screen_s"+n.value,a)}else r=!1;return r}function k(){if(b()){const r=document.getElementsByClassName("page-progress")[0].getBoundingClientRect().top;window.scrollTo({top:r,behavior:"smooth"}),v.push("/stress/"+(n.value+1))}}function B(r){if(b()){r.target.style.backgroundColor="#BBB";const s="stress_screen",e=localStorage.getItem("userID"),o=JSON.parse(localStorage.getItem("stress_screen_s1")||"{}"),a=JSON.parse(localStorage.getItem("stress_screen_s2")||"{}"),p=JSON.parse(localStorage.getItem("stress_screen_s3")||"{}"),u={section:s,userID:e,...o,...a,...p},m=new XMLHttpRequest;m.open("POST","/self-assessment/api/results.php"),m.setRequestHeader("Content-type","application/json"),m.send(JSON.stringify(u)),m.onload=function(){JSON.parse(m.responseText).status==201&&(window.scrollTo({top:0,behavior:"smooth"}),localStorage.setItem("stress_screen_results",m.responseText),v.push("/stress/results"))}}}return(r,s)=>(l(),i("main",E,[c("section",J,[T,c("div",V,[c("form",j,[c("span",F,"第 "+_(t(n))+" 頁 ／ 共 "+_(t(h))+" 頁",1),c("span",M,_(t(g)[t(f)].instruction),1),(l(!0),i(S,null,x(t(g)[t(f)].questions,(e,o)=>(l(),i("div",{class:"question-box",id:"s"+t(n)+"_q"+(o+1)},[c("span",H,_(e.prompt),1),"range"in e?(l(),i("input",{key:0,class:"sv-text",type:"number",id:"s"+t(n)+"_q"+(o+1),name:"s"+t(n)+"_q"+(o+1),required:"",min:e.range[0],max:e.range[1]},null,8,P)):d("",!0),"choices"in e?(l(!0),i(S,{key:1},x(e.choices,(a,p)=>(l(),i(S,null,[c("input",{class:"sv-radio",type:"radio",id:"s"+t(n)+"_q"+(o+1)+"_c"+p,name:"s"+t(n)+"_q"+(o+1),value:p,required:"",onClick:s[0]||(s[0]=u=>C(u))},null,8,z),c("label",{class:"sv-label",for:"s"+t(n)+"_q"+(o+1)+"_c"+p},_(a),9,A)],64))),256)):d("",!0)],8,L))),256)),c("div",null,[c("div",Q,[t(n)!=t(h)?(l(),i("label",{key:0,type:"button",class:"sv-label sv-button",onClick:s[1]||(s[1]=e=>k())},"下一頁")):d("",!0),t(n)==t(h)?(l(),i("label",{key:1,type:"button",class:"sv-label sv-button",onClick:s[2]||(s[2]=e=>B(e))},"提交")):d("",!0)])])])])])]))}});export{K as default};
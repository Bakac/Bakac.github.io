//import { Splide, SplideSlide } from 'https://cdn.jsdelivr.net/npm/@splidejs/vue-splide@0.6.12/+esm'
import { Splide, SplideSlide } from './vuesplide.js'

export default {
	components: {
		Splide, SplideSlide
	},
	created () {
		document.title = '結果 | 情侶互動風格自我評估 | 臨床心理科學實驗室 | 香港中文大學'
	},
	data() {
		return {
			
		}
	},
	template: `
			<main style="background: #FFB3C1">
				<section class="body-container">
					<article class="wrapper-horizontal">
						<span style="display: block; font-size: 250%; font-weight: bold; margin-bottom: 1rem; line-height: 1.25">情侶互動風格自我評估</span>
						
						<div style="border: 5px solid #333; padding: 2rem; background: #FFF; font-color: #333; font-weight: bold">
							<p style="font-size: 160%">問卷結果</p>
							<p style="font-size: 120%">透過剛才完成的問卷，我們分析了你在親密關係中的一些互動傾向。</p>

							<p style="font-size: 160%; margin-top: 64px">關係逃避與焦慮傾向</p>
							<p style="font-size: 140%">你的關係逃避傾向水平為：低</p>
							<div style="height: 16px; background: rgba(0, 0, 0, 0.06)"> 
								<div style="height: 16px; background: #FFB3C1; width: 12%"> </div>
							</div>
							<p style="font-size: 120%; margin-top: 32px">關係逃避傾向是指我們在一段關係當中有多不願意依賴伴侶，和他分享自己的想法和感受。根據結果顯示，你的關係逃避傾向較低。這意味著你通常能夠較輕鬆地與伴侶建立親密連結，並且較不容易避免或回避他的情感需求。這代表你擁有較高的情感接納度，並且願意在親密關係中投入更多的情感和關懷，也從中感到舒適。</p>

							<p style="font-size: 140%; margin-top: 32px">你的關係焦慮傾向水平為：中</p>
							<div style="height: 16px; background: rgba(0, 0, 0, 0.06)"> 
								<div style="height: 16px; background: #FFB3C1; width: 65%"> </div>
							</div>
							<p style="font-size: 120%; margin-top: 32px">關係焦慮傾向是指我們在一段關係當中有多經常感到不安，擔心伴侶會離開自己。根據結果顯示，你的關係焦慮傾向屬於中等水平。這意味著在伴侶的關係中，你可能會有一定程度的擔憂、焦慮和不安感。你可能會對於他的接納和關注感到特別敏感，並且可能會有一些需要被滿足的情感需求。</p>

							<p style="font-size: 160%; margin-top: 64px">伴侶需求回應傾向</p>
							<p style="font-size: 140%">你的伴侶需求回應傾向為：高</p>
							<div style="height: 16px; background: rgba(0, 0, 0, 0.06)"> 
								<div style="height: 16px; background: #FFB3C1; width: 80%"> </div>
							</div>

							<p style="font-size: 140%; margin-top: 32px">你認為伴侶對你的伴侶需求回應傾向為：中</p>
							<div style="height: 16px; background: rgba(0, 0, 0, 0.06)"> 
								<div style="height: 16px; background: #FFB3C1; width: 55%"> </div>
							</div>
							<p style="font-size: 120%; margin-top: 32px">根據結果顯示，你對伴侶需求的回應度較高。這意味著你在與伴侶互動時，通常表現出積極、關注且敏銳的回應。你可能對於伴侶的情感和需求非常敏感，願意支持、關懷和理解他。這代表你在親密關係中具有高度的情感反應能力，並能夠積極參與和投入到日常互動中。</p>
							<p style="font-size: 120%; margin-top: 32px">同時，你感知到你的伴侶對你的回應度屬中等水平。這意味著你的伴侶對你的情感和需求的一定程度回應，但可能還有一些改善的空間。</p>

							<p style="font-size: 160%; margin-top: 64px">衝突解決風格</p>
							<p style="font-size: 120%; margin-top: 32px">根據結果顯示，你較常用的解決衝突的方法為「合作」和「迎合」。</p>
							<p style="font-size: 120%; margin-top: 32px">「合作」是一種積極解決衝突的方式，強調雙方的平等和彼此的需求。這意味著在衝突發生時，你會努力尋求雙方都能接受的解決方案，願意投入時間和精力，與伴侶一起探索解決辦法，並願意做出某些妥協來維護關係的和諧。</p>
							<p style="font-size: 120%; margin-top: 32px">「迎合」則是一種消極解決衝突的方式，完全順從伴侶的意願而忽略自己的需求和意見。這意味著在衝突發生時，你可能傾向於盲目地迎合伴侶的意願而犧牲個人的利益，長遠可能導致內心有所不滿。
						</div>
					</article>
				</section>
				<link href="https://cdn.jsdelivr.net/npm/@splidejs/vue-splide@0.6.12/dist/css/splide.min.css" rel="stylesheet">
			</main>`
}
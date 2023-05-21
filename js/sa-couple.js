//import { Splide, SplideSlide } from 'https://cdn.jsdelivr.net/npm/@splidejs/vue-splide@0.6.12/+esm'
import { Splide, SplideSlide } from './vuesplide.js'

export default {
	components: {
		Splide, SplideSlide
	},
	created () {
		document.title = '情侶互動風格自我評估 | 臨床心理科學實驗室 | 香港中文大學'
	},
	data() {
		return {
			questionnaires: [
				{
	        		scale: 'ECR', 
	        		instruction: '下列是關於親密關係的描述，我們希望了解你對親密關係的整體觀感。請選出你的同意程度。',
	        		questions: [
						{ prompt: '我比較不會對伴侶表現出我內心深處的感受。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我擔心被拋棄。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我覺得跟男/女朋友親近很愜意。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我很擔心我的戀愛關係。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '正當男/女朋友開始要跟我親近時，我發現我自己在疏遠他／她。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我擔心男/女朋友不會像我關心他(/她)那樣多地關心我。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '當男/女朋友希望跟我非常親近時，我會覺得不自在。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我有一定程度擔心會失去男/女朋友。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我覺得對男/女朋友坦承，不是一件很舒服的事情。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我常常希望男/女朋友對我的感情和我對男/女朋友的感情一樣強烈。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我想與男/女朋友親近，但我又總是會退縮不前。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我常常想與男/女朋友形影不離，但有時這樣會把男/女朋友嚇跑。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '當男/女朋友跟我過分親密的時候，我會感到內心緊張。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我擔心一個人獨處。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我願意把我內心的想法和感覺告訴男/女朋友，我覺得這是一件自在的事情。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我想跟男/女朋友非常親密的渴求，有時會把男/女朋友嚇跑。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我試圖避免與男/女朋友變得太親近。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我需要我的男/女朋友一再地保證他/她是愛我的。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我覺得我相對容易與男/女朋友親近。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我覺得自己在強迫男/女朋友把更多的感覺，以及對戀愛關係的投入程度表現出來。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我發現容許自己依賴男/女朋友很困難。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我並不是常常擔心被拋棄。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我比較不跟男/女朋友過分親密。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '如果我無法令男/女朋友對我有興趣，我會心煩意亂或者生氣。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我會告訴男/女朋友每一件事情。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我發現男/女朋友並不願意像我所想的那樣跟我親近。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我經常與男/女朋友討論我所遇到的問題以及我關心的事情。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '當我沒有投入一段感情，我會感到有點焦慮和不安。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我覺得依賴男/女朋友是很自在的事情。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '當男/女朋友不能像我所希望的那樣在我身邊時，我會感到灰心喪氣。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我並不介意從男/女朋友那裡尋求慰藉，勸告或幫助。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '當我需要的時候，如果男/女朋友卻不在我身邊，我會感到沮喪。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '在需要的時候，我向男/女朋友求助，是很有用的。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '當男/女朋友不認同我時，我覺得我確實是差。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '我在男/女朋友身上尋求很多東西，包括安慰和肯定。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }, 
						{ prompt: '當男/女朋友不花時間和我在一起時，我會感到怨恨。', choices: ['非常同意', '大致同意', '少部分同意', '中立', '少部分不同意', '大致不同意', '非常不同意'] }
	        		]
	      		}, 
				{
	        		scale: 'PPRS', 
	        		instruction: '下面是一些對你和現任伴侶的關係的描述。請閱讀每一個項目，並決定這些描述對你而言是否符合。',
	        		questions: [
						{ prompt: '我看見他／她“真實”的一面。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '我了解他／她的真實情況。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '我尊重他／她，他/她的缺點和全部。 ', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '我熟識他／她。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '我重視和尊重的他／她“真實”的全部。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '我了解他／她。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '我真的聆聽他／她說話。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '我表達對他／她的喜愛和鼓勵。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '我表現出對他／她的想法和感受有興趣。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '我重視他／她的能力和想法。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '我與他／她觀點一致。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '我積極回應他／她需求。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '他／她看見“真實”的我。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '他／她了解我的真實情況。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '他／她尊重我、我的缺點和全部。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '他／她熟識我。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '他／她重視和尊重我“真實”的全部。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '他／她了解我。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '他／她真的聆聽我說話。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '他／她表達對我的喜愛和鼓勵。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '他／她表現出對我的想法和感受有興趣。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '他／她重視我的能力和想法。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '他／她與我觀點一致。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }, 
						{ prompt: '他／她積極回應我的需求。', choices: ['非常符合', '大致符合', '少部分符合', '中立', '少部分不符合', '大致不符合', '非常不符合'] }
	        		]
	      		}, 
				{
	        		scale: 'CRSI-S', 
	        		instruction: '評估您多常使用以下方式來處理和伴侶的爭論或分歧。',
	        		questions: [
						{ prompt: '人身攻擊', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '專注於手頭上的問題', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '長時間保持沉默', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '不情願去維護自己', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '爆發和失控', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '坐下來並有建設性地討論分歧', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '達到極限，自我封閉，並拒絕進一步交談', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '過於遷就對方', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '得意忘形，說些不該說的話', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '尋找雙方都能接受的替代方案', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '對伴侶置之不理', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '不捍衛自己的立場', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '辱罵和挖苦', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '談判和作出讓步', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '退縮，表現有距離和不感興趣', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '幾乎沒有嘗試提出自己對問題的看法', choices: ['總是', '經常', '有時', '很少', '從未'] }
	        		]
	      		}, 
	      		{
	        		scale: 'CRSI-P', 
	        		instruction: '評估您的伴侶多常使用以下方式來處理和您的爭論或分歧。',
	        		questions: [
						{ prompt: '人身攻擊', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '專注於手頭上的問題', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '長時間保持沉默', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '不情願去維護自己', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '爆發和失控', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '坐下來並有建設性地討論分歧', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '達到極限，自我封閉，並拒絕進一步交談', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '過於遷就對方', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '得意忘形，說些不該說的話', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '尋找雙方都能接受的替代方案', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '對伴侶置之不理', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '不捍衛自己的立場', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '辱罵和挖苦', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '談判和作出讓步', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '退縮，表現有距離和不感興趣', choices: ['總是', '經常', '有時', '很少', '從未'] }, 
						{ prompt: '幾乎沒有嘗試提出自己對問題的看法', choices: ['總是', '經常', '有時', '很少', '從未'] }
	        		]
	      		}

      		]
		}
	},
	methods: {
		selectChoice(sid, qid) {
			let sid_max = this.questionnaires.length - 1;
			let qid_max = this.questionnaires[sid].questions.length - 1;
			
			if (qid < qid_max + 1) { 
				this.$refs.secondary[sid].splide.go('>');
			}
		},
		goQuestionPrev(sid) {
			this.$refs.secondary[sid].splide.go('<');
		}, 
		goQuestionNext(sid) {
			this.$refs.secondary[sid].splide.go('>');
		},
		goPrev() {
			this.$refs.primary.splide.go('<');
		}, 
		goNext() {
			this.$refs.primary.splide.go('>');
		}
	},
	template: `
			<main style="background: #FFB3C1">
				<section class="body-container">
					<article class="wrapper-horizontal">
						<span style="display: block; font-size: 250%; font-weight: bold; margin-bottom: 1rem; line-height: 1.25">情侶互動風格自我評估</span>
						
						<div style="border: 5px solid #333; padding: 2rem; background: #FFF; font-color: #333; font-weight: bold">
							<splide ref="primary" :options="{ type: 'slide', speed: 1500, height: '60vh', width: '100%', trimSpace: false, arrows: false, pagination: false, lazyLoad: 'sequential', updateOnMove: true, drag: false }" aria-label="Self-assessment">

								<splide-slide v-for="(questionnaire, sid) in questionnaires">
									<span style="font-size: 160%; margin-bottom: 12px; display: block">{{questionnaire.instruction}}</span>

									<div style="text-align: right; margin-bottom: 12px;">
										<label class="sv-label" style="text-align: center; display: inline-block; padding: 3px" @click="goQuestionPrev(sid)">↑</label>
										<label class="sv-label" style="text-align: center; display: inline-block; padding: 3px" @click="goQuestionNext(sid)">↓</label>
									</div>

									<splide-slide>
										<splide ref="secondary" :options="{ type: 'slide', speed: 1500, height: '50vh', width: '100%', trimSpace: true, arrows: false, pagination: false, lazyLoad: 'sequential', direction: 'ttb', updateOnMove: true, autoHeight: true, drag: 'free', wheel: true, wheelSleep: 300 }" aria-label="Self-assessment">
											<splide-slide v-for="(question, qid) in questionnaire.questions">
												<div style="height: 100%; width: 100%; padding: 2rem">
													<span style=" font-size: 160%">{{question.prompt}}</span>

													<template v-for="(choice, cid) in question.choices">
														<input class="sv-radio" type="radio" :id="'s' + sid + '_q' + qid + '_c' + cid" :name="'s' + sid + '_q' + qid">
														<label class="sv-label pink" :for="'s' + sid + '_q' + qid + '_c' + cid" @click="selectChoice(sid, qid)">{{choice}}</label>
													</template>
												</div>
											</splide-slide>
											<splide-slide>
												<div class="flex-box" style="gap: 10px; margin-top: 64px; padding-bottom: 100px;">
													<label v-if="sid != 0" class="sv-label" style="flex-grow: 1; text-align: center" @click="goPrev()">⟵</label>
													<label v-if="sid != questionnaires.length - 1" class="sv-label" style="flex-grow: 1; background: #FFB3C1; text-align: center" @click="goNext()">⟶</label>
													<label v-if="sid == questionnaires.length - 1" class="sv-label" style="flex-grow: 1; background: #FFB3C1; text-align: center" @click="goNext()">提交</label>
												</div>
											</splide-slide>
										</splide>
								</splide-slide>

							</splide>
						</div>
					</article>
				</section>
				<link href="https://cdn.jsdelivr.net/npm/@splidejs/vue-splide@0.6.12/dist/css/splide.min.css" rel="stylesheet">
			</main>`
}
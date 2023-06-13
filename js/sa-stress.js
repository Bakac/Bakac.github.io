//import { Splide, SplideSlide } from 'https://cdn.jsdelivr.net/npm/@splidejs/vue-splide@0.6.12/+esm'
import { Splide, SplideSlide } from './vuesplide.js'

export default {
	components: {
		Splide, SplideSlide
	},
	created () {
		document.title = '壓力事件反應自我評估 | 臨床心理科學實驗室 | 香港中文大學'
	},
	data() {
		return {
			questionnaires: [
				{
	        		scale: 'HADS', 
	        		instruction: '請閱讀下列每題，並選出最接近您過去一星期的情緒狀況。',
	        		questions: [
	        			{ prompt: '我覺得緊張或神經緊繃', choices: ["幾乎所有時候都覺得", "許多時候覺得。", "有時覺得。", "從不覺得"] },
	        			{ prompt: '我依然享受我以前享受的事物：', choices: ['肯定和以前一樣。', '有點不及以前。', '只及以前部分。', '和以前差得極遠。'] },
						{ prompt: '我有一種害怕的感覺，好像有可怕的事即將發生：', choices: ['很肯定有，而且相當厲害。', '有，但不太厲害。', '有一些，但不令我擔心。', '完全沒有。'] },
						{ prompt: '我能看到事情幽默的一面，並且會心微笑：', choices: ['和以前一樣。', ' 有點不如以前。', '肯定不如以前。', '完全不能。'] },
						{ prompt: '煩惱的念頭在我腦海中浮現：', choices: ['絕大部分時候是。', ' 很多時候是。', '有時是，但不太常如此。', '很少。'] },
						{ prompt: '我覺得開心：', choices: ['完全不覺得。', ' 不常覺得。', '有時候覺得。', '大部分的時候覺得。'] },
						{ prompt: '我能輕鬆地坐著，而且覺得放鬆：', choices: ['絕對能夠。', ' 通常能夠。', '不常能夠。', '完全不能。'] },
						{ prompt: '我覺得缺乏衝勁，整個人都慢下來', choices: ['差不多全部時候。', ' 非常多時候。', '有時候。', '完全沒有。'] },
						{ prompt: '我有一種忐忑不安的感覺(七上八下的感覺) ：', choices: ['完全沒有。', ' 偶爾有。', '經常有。', '非常常有。'] },
						{ prompt: '我對於自己的儀容失去興趣：', choices: ['肯定失去。', ' 比我應該關心的少。', '可能比我以前關心的少。', '我像以前一樣關心。'] },
						{ prompt: '我覺得焦躁不安，想要不停的走動：', choices: ['很強烈。', ' 相當強烈。', '不太強烈。', '完全沒有。'] },
						{ prompt: '我對未來的事抱有熱切期望：', choices: ['和以前一樣。', ' 較不如以前那樣。', '確定不如以前那樣。', '幾乎不再如此。'] },
						{ prompt: '我突然感到恐慌：', choices: ['確實是如此。', ' 經常是如此。', '不太多時候如此。', '完全沒有。'] },
						{ prompt: '我能欣賞一本好書、電台或電視節目：', choices: ['經常能夠。', ' 有時候能夠。', '偶爾能夠。', '很少能夠。'] }
	        		]
	      		}, {
	        		scale: 'ITQ-P', 
	        		instruction: '以下是一些人們在應對創傷性或壓力生活事件有時出現的問題，請仔細閱讀每個項目，然後選出你在過去一個月被該問題困擾的程度。',
	        		questions: [
	        			{ prompt: '請想一個最負面或創傷的經歷。該經歷什麼時候發生？', choices: ['少於6個月前', '6至12個月前', '1至5年前', '5至10年前', '10至20年前', '多於20年前'] },
						{ prompt: '出現不愉快的夢境，而那些夢境重現該經歷的部分、或明顯地與該經歷相關？', choices: ['極度', '相當多', '中度', '有少許', '完全沒有'] },
						{ prompt: '有時強烈的影像或記憶進入你的思想，使你覺得該經歷在此時此刻會再次發生一樣？', choices: ['極度', '相當多', '中度', '有少許', '完全沒有'] },
						{ prompt: '避免自己內心提起該經歷（例如：有關該經歷的想法、感受或身體感覺）？', choices: ['極度', '相當多', '中度', '有少許', '完全沒有'] },
						{ prompt: '避免從外界環境提起該經歷（例如：從人物、地點、對話、事物、活動、或情況）？', choices: ['極度', '相當多', '中度', '有少許', '完全沒有'] },
						{ prompt: '處於「超級戒備」、警惕、或防禦的狀態？', choices: ['極度', '相當多', '中度', '有少許', '完全沒有'] },
						{ prompt: '感到提心吊膽或容易受驚？', choices: ['極度', '相當多', '中度', '有少許', '完全沒有'] }, 
						{ prompt: '在過去一個月，出現以上症狀, 因而影響你的人際關係或社交生活？', choices: ['極度', '相當多', '中度', '有少許', '完全沒有'] },
						{ prompt: '在過去一個月，出現以上症狀, 因而影響你的工作或工作能力？', choices: ['極度', '相當多', '中度', '有少許', '完全沒有'] },
						{ prompt: '在過去一個月，出現以上症狀, 因而影響你生活上任何其他重要部分，例如：教養子女、學校或學院的功課，或其他重要活動？', choices: ['極度', '相當多', '中度', '有少許', '完全沒有'] }
	        		]
	      		}, {
	        		scale: 'ITQ-C', 
	        		instruction: '以下是曾經歷壓力或創傷事件的人有時會出現的問題或症狀。這些問題是關於你一般的感受、你通常對自己的想法、及通常與人相處的方式。請回答下列各陳述在何等程度上能準確地陳述你的想法。',
	        		questions: [
						{ prompt: '出我感到不快，我需要長時間才能冷靜下來。', choices: ['極度', '相當多', '中度', '有少許', '完全沒有'] },
						{ prompt: '我感到麻木或情感封閉。', choices: ['極度', '相當多', '中度', '有少許', '完全沒有'] },
						{ prompt: '我覺得好像一個失敗的人。', choices: ['極度', '相當多', '中度', '有少許', '完全沒有'] },
						{ prompt: '我覺得自己沒有價值。', choices: ['極度', '相當多', '中度', '有少許', '完全沒有'] },
						{ prompt: '我感覺與他人疏離或斷絕任何聯繫。', choices: ['極度', '相當多', '中度', '有少許', '完全沒有'] },
						{ prompt: '我感到難以與他人保持親密的感情。', choices: ['極度', '相當多', '中度', '有少許', '完全沒有'] }, 
						{ prompt: '在過去一個月，上述有關情緒、自我信念和人際關係上的問題對你的人際關係或社交生活造成不安或困擾？', choices: ['極度', '相當多', '中度', '有少許', '完全沒有'] },
						{ prompt: '在過去一個月，上述有關情緒、自我信念和人際關係上的問題影響你的工作或工作能力？', choices: ['極度', '相當多', '中度', '有少許', '完全沒有'] },
						{ prompt: '在過去一個月，上述有關情緒、自我信念和人際關係上的問題影響你生活的任何其他重要部分，例如: 教養子女、學校或學院的功課，或其他重要活動？', choices: ['極度', '相當多', '中度', '有少許', '完全沒有'] }
	        		]
	      		}, {
	        		scale: 'SSS', 
	        		instruction: '過去七天，你有沒有下列困擾？',
	        		questions: [
						{ prompt: '肚子或腸胃問題', choices: ['嚴重', '相當多', '有些', '稍微', '沒有'] }, 
						{ prompt: '腰背疼痛', choices: ['嚴重', '相當多', '有些', '稍微', '沒有'] }, 
						{ prompt: '手臂，腳，或關節疼痛', choices: ['嚴重', '相當多', '有些', '稍微', '沒有'] }, 
						{ prompt: '頭疼', choices: ['嚴重', '相當多', '有些', '稍微', '沒有'] }, 
						{ prompt: '胸口痛或呼吸急促', choices: ['嚴重', '相當多', '有些', '稍微', '沒有'] }, 
						{ prompt: '暈眩', choices: ['嚴重', '相當多', '有些', '稍微', '沒有'] }, 
						{ prompt: '感到疲累或沒精打彩', choices: ['嚴重', '相當多', '有些', '稍微', '沒有'] }, 
						{ prompt: '睡眠問題', choices: ['嚴重', '相當多', '有些', '稍微', '沒有'] }
	        		]
	      		}, {
	        		scale: 'DSS', 
	        		instruction: '下列的題目是一些人所擁有的經驗。請依據你過去一個禮拜的自己與題目符合的程度，選取最適合的選項。',
	        		questions: [
						{ prompt: '我的身體感到陌生或不真實。', choices: ['未曾發生', '一到兩次', '三到六次', '七到十次', '十次以上'] },
						{ prompt: '我周遭的事物似乎陌生或不真實。', choices: ['未曾發生', '一到兩次', '三到六次', '七到十次', '十次以上'] },
						{ prompt: '我想起某件煩亂的事然後失神一陣子。', choices: ['未曾發生', '一到兩次', '三到六次', '七到十次', '十次以上'] },
						{ prompt: '我曾有一刻覺得我失去控制，表現得就像是回到過去某個煩亂的狀態。', choices: ['未曾發生', '一到兩次', '三到六次', '七到十次', '十次以上'] },
						{ prompt: '我覺得我好像在自己的身體外面，看著自己做事。', choices: ['未曾發生', '一到兩次', '三到六次', '七到十次', '十次以上'] },
						{ prompt: '我聽過某些我確定不存在的聲音。', choices: ['未曾發生', '一到兩次', '三到六次', '七到十次', '十次以上'] },
						{ prompt: '我對某事煩亂然後就無法想起之後發生的事。', choices: ['未曾發生', '一到兩次', '三到六次', '七到十次', '十次以上'] },
						{ prompt: '我覺得我好像身在電影裡，發生的事都不是真的。', choices: ['未曾發生', '一到兩次', '三到六次', '七到十次', '十次以上'] },
						{ prompt: '當我受傷時，我應該要有感覺卻感覺不到痛。', choices: ['未曾發生', '一到兩次', '三到六次', '七到十次', '十次以上'] },
						{ prompt: '一件記憶來得如此強烈使我不知道周圍發生了什麼事。', choices: ['未曾發生', '一到兩次', '三到六次', '七到十次', '十次以上'] },
						{ prompt: '我發現自己望著某處且頭腦一片空白。', choices: ['未曾發生', '一到兩次', '三到六次', '七到十次', '十次以上'] },
						{ prompt: '即使努力地回憶，我仍想不起當天所發生的事。', choices: ['未曾發生', '一到兩次', '三到六次', '七到十次', '十次以上'] },
						{ prompt: '我覺得我好像不是我自己。', choices: ['未曾發生', '一到兩次', '三到六次', '七到十次', '十次以上'] },
						{ prompt: '我看到似乎真實的事物，但它不是真的。', choices: ['未曾發生', '一到兩次', '三到六次', '七到十次', '十次以上'] },
						{ prompt: '我突然發覺我沒有在注意周遭發生的事。', choices: ['未曾發生', '一到兩次', '三到六次', '七到十次', '十次以上'] },
						{ prompt: '我身體的某部分似乎變形了，像是比平常來得大或小。', choices: ['未曾發生', '一到兩次', '三到六次', '七到十次', '十次以上'] },
						{ prompt: '我對人或情境的反應有如回到過去某個煩亂的狀態裡一般。', choices: ['未曾發生', '一到兩次', '三到六次', '七到十次', '十次以上'] },
						{ prompt: '我太專注於心裡所想的事以致於失去與周圍事物的聯繫。', choices: ['未曾發生', '一到兩次', '三到六次', '七到十次', '十次以上'] },
						{ prompt: '我注意到我發生過且應該能記得的事在我的記憶裡出現空缺。', choices: ['未曾發生', '一到兩次', '三到六次', '七到十次', '十次以上'] },
						{ prompt: '我聞過某些我確定不存在的氣味。', choices: ['未曾發生', '一到兩次', '三到六次', '七到十次', '十次以上'] }
	        		]
	      		}, {
	        		scale: 'BSL', 
	        		instruction: '這是一些你可能遇到的困難，請判斷你在過去一星期內有多大程度遇上這些問題。假如你此刻並無這些感受，請根據你認為自己當時經歷的感受作答。請誠實回答問題。假如你在過去一星期內有不同感受，請依平均水平作答。',
	        		questions: [
						{ prompt: '我難以集中精神', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '我感到無助', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '我心不在焉，記不得我當時做了什麼', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '我感到厭惡', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '我曾經想過傷害自己', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '我不信任他人', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '我不相信自己有活著的權利', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '我感到孤單', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '我感到內心痛苦的掙扎 ', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '我想起令我非常害怕的畫面', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '我討厭自己', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '我想懲罰自己', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '我感到愧疚', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '我的情緒在恐慌、憤怒和憂鬱之間快速轉變', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '我聽到來自頭腦內或外面的人聲或噪音', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '別人的批評讓我崩潰', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '我感到脆弱', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '死亡看似有一定的吸引力', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '所有事物對我來說毫無意義', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '我害怕會失控', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '我厭惡自己', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '我感覺離自己很遠', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] },
						{ prompt: '我覺得自己毫無價值', choices: ['大部分時候', '很多時候', '中等', '很少時候', '完全沒有'] }
	        		]
	      		}, {
	        		scale: 'BSL-S', 
	        		instruction: '在過去一星期...',
	        		questions: [
						{ prompt: '傷害自己，例如割傷、燒傷、勒頸撞頭', choices: ['每天至少一次', '四至六次', '兩至三次', '一次', '完全沒有'] },
						{ prompt: '我告訴他人我將會自殺', choices: ['每天至少一次', '四至六次', '兩至三次', '一次', '完全沒有'] },
						{ prompt: '我曾嘗試自殺', choices: ['每天至少一次', '四至六次', '兩至三次', '一次', '完全沒有'] },
						{ prompt: '我曾在一個時間內吃下大量東西', choices: ['每天至少一次', '四至六次', '兩至三次', '一次', '完全沒有'] },
						{ prompt: '我嘗試催吐', choices: ['每天至少一次', '四至六次', '兩至三次', '一次', '完全沒有'] },
						{ prompt: '我做過危險行為，例如刻意高速駕駛、在高樓的屋簷奔跑、站在橋的邊緣', choices: ['每天至少一次', '四至六次', '兩至三次', '一次', '完全沒有'] },
						{ prompt: '我曾喝醉', choices: ['每天至少一次', '四至六次', '兩至三次', '一次', '完全沒有'] },
						{ prompt: '我吸食毒品', choices: ['每天至少一次', '四至六次', '兩至三次', '一次', '完全沒有'] },
						{ prompt: '我食用非醫師開立的藥物，或是醫師開立的藥物卻食用高於開立的劑量', choices: ['每天至少一次', '四至六次', '兩至三次', '一次', '完全沒有'] },
						{ prompt: '我爆發難以控制的憤怒，或攻擊他人', choices: ['每天至少一次', '四至六次', '兩至三次', '一次', '完全沒有'] },
						{ prompt: '我發生難以控制的性關係，事後感到羞愧或憤怒', choices: ['每天至少一次', '四至六次', '兩至三次', '一次', '完全沒有'] },
	        		]
	        	}, {
	        		scale: 'FSCSR', 
	        		instruction: '當生活出現問題或事情並不如期望發生、又認為自己應該做得更好時，我們有時會出現負面或自我批評的想法或感受。這些想法或感受會以不同的型態出現，像是覺得自己沒有價值、沒用；然而，有時人也會試著支持自己。以下是可能會出現的想法與感受。請細心閱讀以下的句子，選擇最能夠形容你的選項。',
	        		questions: [
						{ prompt: '我容易對自己失望。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
						{ prompt: '有部分的我讓自己失望。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
						{ prompt: '我能夠告訴自己，關於自己正面的部分。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
						{ prompt: '我覺得要控制對自己的憤怒及失望很困難。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
						{ prompt: '要原諒自己是容易的。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
						{ prompt: '有部分的我，覺得自己不夠好。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
						{ prompt: '我感到被自己的自我批評擊倒。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
						{ prompt: '我還是喜歡做自己。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
						{ prompt: '我對自己感到十分憤怒，讓我想傷害自己。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
						{ prompt: '我有一種厭惡自己的感覺。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
						{ prompt: '我依然感到自己值得被愛及被接納。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
						{ prompt: '我不再關愛自己。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
						{ prompt: '喜歡自己是容易的。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
						{ prompt: '我記得及反覆思考自己的失敗。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
						{ prompt: '我用負面的字眼叫自己。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
						{ prompt: '我寬容及支持自己。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
						{ prompt: '我沒辦法不去覺得自己是差勁的，在遇到失敗和挫折時。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
						{ prompt: '我認為這些自我批評是應得的。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
						{ prompt: '我能夠關懷及照顧自己。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
						{ prompt: '有部分的我，總想擺脫那些自己不喜歡的部分。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
						{ prompt: '我鼓勵自己迎向未來。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
						{ prompt: '我不喜歡自己。', choices: ['非常像我', '很像我', '像我', '有點像我', '完全不像我'] },
					]
				}, {
	        		

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
			<main style="background: #FCD200">
				<section class="body-container">
					<article class="wrapper-horizontal">
						<span style="display: block; font-size: 250%; font-weight: bold; margin-bottom: 1rem; line-height: 1.25">壓力事件反應自我評估</span>
						
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
														<label class="sv-label yellow" :for="'s' + sid + '_q' + qid + '_c' + cid" @click="selectChoice(sid, qid)">{{choice}}</label>
													</template>
												</div>
											</splide-slide>
											<splide-slide>
												<div class="flex-box" style="gap: 10px; margin-top: 64px; padding-bottom: 100px;">
													<label v-if="sid != 0" class="sv-label" style="flex-grow: 1; text-align: center" @click="goPrev()">⟵</label>
													<label v-if="sid != questionnaires.length - 1" class="sv-label" style="flex-grow: 1; background: #FCD200; text-align: center" @click="goNext()">⟶</label>
													<label v-if="sid == questionnaires.length - 1" class="sv-label" style="flex-grow: 1; background: #FCD200; text-align: center" @click="goNext()">提交</label>
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
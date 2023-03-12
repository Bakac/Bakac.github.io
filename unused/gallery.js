/* Gallery module modified from HesGallery ver 1.4.7 */
export default {
  props: {
    labname: String
  },
  data() {
    return {
      images: [
        { src: "https://bit.ly/fcc-relaxing-cat", text: 'cat1' },
        { src: "https://bit.ly/fcc-running-cats", text: 'cat2' },
        { src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg", text: 'cat3' },
        { src: "https://bit.ly/fcc-relaxing-cat", text: 'cat4' },
        { src: "https://bit.ly/fcc-running-cats", text: 'cat5' },
        { src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg", text: 'cat6' },
        { src: "https://bit.ly/fcc-relaxing-cat", text: 'cat7' },
        { src: "https://bit.ly/fcc-running-cats", text: 'cat8' },
        { src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg", text: 'cat9' },
        { src: "https://bit.ly/fcc-relaxing-cat", text: 'cat10' },
        { src: "https://bit.ly/fcc-running-cats", text: 'cat11' }
      ],
      isShow: false, 
      currentImg: 0
    }
  },
  methods: {
    showImg(index) {
      this.currentImg = index;
      this.isShow = true;
    }, 
    hideImg() {
      this.isShow = false;
    }, 
    prevImg() {
      let numImg = this.images.length;
      this.currentImg = (this.currentImg == 0) ? numImg - 1 : this.currentImg - 1;
    }, 
    nextImg() {
      let numImg = this.images.length;
      this.currentImg = (this.currentImg == numImg - 1) ? 0 : this.currentImg + 1;
    }
  },
  template: `
      <div>
        <section id="banner">
          <h1>Gallery</h1>
        </section>
        <section id="gallery">
          <figure v-for="(image, index) in images" @click="showImg(index)">
            <img :src="image.src">
            <figcaption class="overlay"><span>{{image.text}}</span></figcaption>
          </figure>
        </section>
        <section id="lightbox" :class="{showbox: isShow, hgallery: true}">
          <div id='hg-bg' @click='hideImg()'></div>
          <div id='hg-pic-cont' :key="images[currentImg].text">
            <img id="hg-pic" :src="images[currentImg].src">
            <figcaption>{{images[currentImg].text}}</figcaption>
            <div id="hg-prev-onpic" @click="prevImg()"></div>
            <div id="hg-next-onpic" @click="nextImg()"></div>
          </div>
          <button id='hg-prev' @click="prevImg()"></button>
          <button id='hg-next' @click="nextImg()"></button>
        </section>

        <link href="./css/lightbox.css" rel="stylesheet">
      </div>`
}
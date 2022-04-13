<template>
  <div>
    <div class="black" />
    <div class="agreement-main">
      <div class="auto">
        <div class="agreement-container">
          <div class="agreement-box">
            <div class="agreement-content">
              <h2>服务使用规则</h2>
              <p class="strong">1. 如果您利用{{ webInfo.title }}提供的服务进行经营或非经营的活动需要获得国家有关部门的许可或批准的，应获得该有关的许可或批准。包括但不限于以下内容：</p>
              <p>1.1. 如果您在云服务器服务上开办了多个网站，须保证所开办的全部网站均获得国家有关部门的许可或批准；</p>
              <p>1.2. 如您网站提供非经营性互联网信息服务的，必须办理非经营性网站备案，并保证所提交的所有备案信息真实有效，在备案信息发生变化时及时在备案系统中提交更新信息；</p>
              <p>1.3．如您网站提供经营性互联网信息服务的，还应自行在当地通信管理部门取得经营性网站许可证；</p>
              <p>1.4．如您如提供BBS等电子公告服务的，也需根据相关法规政策要求备案或获得相应批准；</p>
              <p>1.5．如您经营互联网游戏网站的，您应依法获得网络文化经营许可证；</p>
              <p>1.6．如您经营互联网音、视频网站的，您应依法获得信息网络传播视听节目许可证；</p>
              <p>1.7．若您从事新闻、出版、教育、医疗保健、药品和医疗器械等互联网信息服务，依照法律、行政法规以及国家有关规定须经有关主管部门审核同意，在申请经营许可或者履行备案手续前，应当依法经有关主管部门审核同意。您理解并认可，以上列举并不能穷尽您进行经营或非经营活动需要获得国家有关部门的许可或批准的全部类型，您应获得有关的许可或批准，并应符合国家及地方不时颁布相关法律法规之要求。</p>
              <p class="strong">2. 除{{ webInfo.title }}明示许可外，您不应修改、翻译、改编、出租、转许可、在信息网络上传播或转让{{ webInfo.title }}提供的服务或软件，也不得逆向工程、反编译或试图以其他方式发现{{ webInfo.title }}提供的服务或软件的源代码。</p>
              <p class="strong">3. 您不应散布电子邮件广告、垃圾邮件（SPAM）：不利用{{ webInfo.title }}提供的服务散发大量不受欢迎的或者未经请求的电子邮件、电子广告或包含反动、色情等有害信息的电子邮件。</p>
              <p class="strong">4. 您不应利用{{ webInfo.title }}提供的资源和服务上传（Upload）、下载（download）、储存、发布如下信息或者内容，不为他人发布该等信息提供任何便利（包括但不限于设置URL、BANNER链接等）:</p>
              <p>4.1. 违反国家规定的政治宣传和/或新闻信息；</p>
              <p>4.2. 违反国家规定的政治宣传和/或新闻信息；</p>
              <p>4.3. 封建迷信和/或淫秽、色情、下流的信息或教唆犯罪的信息；</p>
              <p>4.4. 博彩有奖、赌博游戏、“私服”、“外挂”等非法互联网出版活动；</p>
              <p>4.5. 违反国家民族和宗教政策的信息；</p>
              <p>4.6. 妨碍互联网运行安全的信息；</p>
              <p>4.7. 侵害他人合法权益的信息和/或其他有损于社会秩序、社会治安、公共道德的信息或内容；</p>
              <p>4.8. 其他违反法律法规、部门规章或国家政策的内容。</p>
              <p class="strong">5. 您不应大量占用，亦不得导致如程序或进程等大量占用{{ webInfo.title }}云计算资源（如云服务器、网络带宽、存储空间等）所组成的平台（以下简称“云平台”）中服务器内存、CPU或者网络带宽资源，并给{{ webInfo.title }}云平台或者{{ webInfo.title }}的其他用户的网络、服务器（包括但不限于本地及外地和国际的网络、服务器等）、产品/应用等带来严重的、不合理的负荷，影响{{ webInfo.title }}与国际互联网或者{{ webInfo.title }}与特定网络、服务器及{{ webInfo.title }}内部正常通畅的联系，或者导致{{ webInfo.title }}云平台产品与服务或者{{ webInfo.title }}的其他用户的服务器宕机、死机或者用户基于云平台的产品/应用不可访问等。</p>
              <p class="strong">6. 您不应进行任何破坏或试图破坏网络安全的行为（包括但不限于钓鱼，黑客，网络诈骗，网站或空间中含有或涉嫌散播：病毒、木马、恶意代码，及对其他网站、服务器进行涉嫌攻击行为如扫描、嗅探、ARP欺骗、DDoS等）。</p>
              <p class="strong">7. 您不应进行任何改变或试图改变{{ webInfo.title }}提供的系统配置或破坏系统安全的行为。</p>
              <p class="strong">8. 除非您购买了专门用于此目的的服务，您不应利用本服务从事DDoS防护、DNS防护等防护售卖业务。</p>
              <p class="strong">9. 您不应利用{{ webInfo.title }}的服务从事可不经网络审查为境内获取境外非法信息的活动。</p>
              <p class="strong">10. 您不应在{{ webInfo.title }}服务或平台之上安装、使用盗版软件；您对自行安装软件和进行的操作承担相应的责任。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      webInfo: state => state.home.webInfo
    })
  },
  // eslint-disable-next-line vue/order-in-components
  data () {
    return {
      url: ''
    }
  },
  mounted () {
    this.url = this.getUrl()
  },
  methods: {
    getUrl () {
      return window.location.protocol + '//' + window.location.host
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  line-height: 26px;
}
.black {
  height: 80px;
  background-color: black;
}
.agreement-main {
  width: 100%;
  margin-bottom: 30px;
  margin-top: 10px;
  .auto {
    margin: 0 auto;
    min-width: 1220px;
    max-width: 1220px;
    .agreement-container {
      padding-top: 30px;
      overflow: auto;
      .agreement-box {
        border: 1px solid #e5e5e5;
        margin-top: 10px;
        .agreement-content {
          padding: 20px 30px;
          h2 {
            padding-bottom: 20px;
            font-size: 24px;
            color: #333;
            text-align: center;
            border-bottom: 1px solid #ddd;
          }
          .spec {
            text-indent: 0;
            padding: 0;
            display: flex;
            justify-content: space-between;
          }
          p {
            // padding-top: 1em;
            text-indent: 0;
          }
          .pad-l-2em {
            padding-left: 4em;
          }
          .pad-l-4em {
            padding-left: 6em;
          }
        }
      }
    }
  }
}
.strong {
            font-size: 16px;
            font-weight: 600;
          }
.strong-two{
  // color: red;
}
</style>

<template>
  <div @touchmove.prevent>
    <transition name="toast">
      <div
        v-if="show"
        class="m-pop-box"
        @click="cancel">
        <div class="logo"/>
      </div>
    </transition>
    <transition @after-enter="transitionComplete">
      <div v-if="show" class="m-box-model m-post-menu-con">
        <transition-group
          tag="div"
          enter-active-class="animated bounceIn"
          class="m-box m-aln-center m-post-menu-list">
          <template v-if="open">
            <div
              key="ico_word"
              class="m-box-model m-aln-center m-post-menu-item"
              @click="to('/post/text')">
              <svg class="m-style-svg m-svg-def menu-svg">
                <use xlink:href="#icon-release-text"/>
              </svg>
              <span>文字</span>
            </div>
            <div
              key="ico_potoablum"
              class="m-box-model m-aln-center m-post-menu-item"
              @click="to('/post/pic')">
              <svg class="m-style-svg m-svg-def menu-svg">
                <use xlink:href="#icon-release-pic"/>
              </svg>
              <span>图片</span>
            </div>
            <div
              key="ico_contribute"
              class="m-box-model m-aln-center m-post-menu-item"
              @click="beforePostNews">
              <svg class="m-style-svg m-svg-def menu-svg">
                <use xlink:href="#icon-release-news"/>
              </svg>
              <span>投稿</span>
            </div>
            <div
              v-if="checkin"
              key="ico_attendance"
              class="m-box-model m-aln-center m-post-menu-item"
              @click="showCheckIn">
              <svg class="m-style-svg m-svg-def menu-svg">
                <use xlink:href="#icon-release-attendance"/>
              </svg>
              <span>签到</span>
            </div>
            <div
              key="ico_question"
              class="m-box-model m-aln-center m-post-menu-item"
              @click="to('/post/question')">
              <svg class="m-style-svg m-svg-def menu-svg">
                <use xlink:href="#icon-release-question"/>
              </svg>
              <span>提问</span>
            </div>
            <div
              key="ico_fatie"
              class="m-box-model m-aln-center m-post-menu-item"
              @click="to('/groups/create_post')">
              <svg class="m-style-svg m-svg-def menu-svg">
                <use xlink:href="#icon-release-post"/>
              </svg>
              <span>发帖</span>
            </div>
          </template>
        </transition-group>
        <transition name="pop">
          <button class="m-post-menu-btn" @click="cancel">
            <svg class="m-style-svg m-svg-def">
              <use xlink:href="#icon-foot-close"/>
            </svg>
          </button>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PostMenu",
  data() {
    return {
      show: false,
      open: false
    };
  },
  computed: {
    ...mapState({
      verified: state => state.USER_VERIFY,
      newsVerified: state => state.CONFIG["news:contribute"].verified
    }),
    login() {
      return !!this.$store.state.CURRENTUSER.id;
    },
    /**
     * 检查后台是否开启签到功能
     * @author jsonleex <jsonlseex@163.com>
     * @return {Boolean}
     */
    checkin() {
      return this.$store.state.CONFIG.checkin || true;
    }
  },
  created() {
    this.$bus.$on("post-menu", () => {
      this.show = true;
      this.scrollable = false;
    });
  },
  methods: {
    message() {
      this.$Message.error("请先进行身份认证");
      this.$router.push({ path: "/profile/certificate" });
      this.$nextTick(this.cancel);
    },
    to(path) {
      path = this.login ? path : `/signin?redirect=${path}`;
      !this.login && this.$Message.error("请登录");
      this.$router.push(path);
      this.$nextTick(this.cancel);
    },
    beforePostNews() {
      if (!this.newsVerified || this.verified.status === 1)
        this.to("/post/release");
      else if (this.verified.status === 0) {
        this.$Message.error("您的认证正在等待审核，通过审核后可发布帖子");
        this.$nextTick(this.cancel);
      } else {
        this.message();
      }
    },
    showCheckIn() {
      this.login
        ? this.$bus.$emit("check-in")
        : (this.$Message.error("请登录"), this.$router.push(`/signin`));
      this.$nextTick(this.cancel);
    },
    cancel() {
      this.show = false;
      this.scrollable = true;
      this.open = false;
    },
    transitionComplete() {
      this.$nextTick(() => {
        this.open = true;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.m-pop-box {
  background: rgba(255, 255, 255, 0.95);

  .logo {
    position: absolute;
    top: 0;
    left: 20%;
    width: 60%;
    height: 40%;
    background: url("~@/images/logo_thinksns+@2x.png") no-repeat center;
    background-size: cover;
  }
}
.m-post-menu-con {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 102;
}
.m-post-menu-list {
  padding: 6%;
  flex-wrap: wrap;
  justify-content: space-between;
}
.m-post-menu-item {
  margin: 3% 6%;
  width: 1/3 * 100 - 12%;
  font-size: 28px;
  img {
    width: 100%;
  }
  span {
    color: #575757;
    margin-top: 25px;
  }
  .menu-svg {
    width: 144px;
    height: 144px;
  }
}
.m-post-menu-btn {
  position: relative;
  height: 100px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 -1px 3px rgba(26, 26, 26, 0.1);
}

.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: all 1s ease;
}
.fadeIn-enter-active,
.fadeIn-leave {
  opacity: 1;
}
.fadeIn-enter,
.fadeIn-leave-active {
  opacity: 0;
}
</style>

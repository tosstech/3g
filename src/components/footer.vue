<template>
  <footer>
    <ul>
      <router-link to="/knowledge" tag="div">
        <li>
          <div class="footer_bt">
            <div>
              <svg class="icon footer-icon" aria-hidden="true"><use xlink:href="#3g-icon-knowledge"></use></svg>
            </div>
            <div class="footer_txt">泛•声音</div>
          </div>
        </li>
      </router-link>
      <router-link to="/case" tag="div">
        <li>
          <div class="footer_bt footer_bt_2" >
            <div>
              <svg class="icon footer-icon" aria-hidden="true"><use xlink:href="#3g-icon-case"></use></svg>
            </div>
            <div class="footer_txt">泛•方案</div>
          </div>
        </li>
      </router-link>
      <li class="li_3" ref="li_3">
        <div class="footer_live">
          <div class="footer_live_bt" ref="footer_live_bt">
            <svg class="icon footer_icon_big" aria-hidden="true" ref="footer_icon_big"><use xlink:href="#3g-icon-live-2"></use></svg>
          </div>
        </div>
        <div></div>
      </li>
      <router-link to="/lease" tag="div">
      <li>
        <div class="footer_bt footer_bt_4">
          <div>
            <svg class="icon footer-icon" aria-hidden="true"><use xlink:href="#3g-icon-lease"></use></svg>
          </div>
          <div class="footer_txt">泛•租赁</div>
        </div>
      </li>
      </router-link>
      <router-link to="/me" tag="div">
        <li>
            <div class="footer_bt">
            <div>
              <svg class="icon footer-icon" aria-hidden="true"><use xlink:href="#3g-icon-me"></use></svg>
            </div>
            <div class="footer_txt">我的</div>
          </div>
        </li>
      </router-link>
    </ul>
  </footer>
</template>


<script>
export default {
  data(){
    return{
      isactive:true
    }
  },

  mounted (){
    let global_width = window.innerWidth;
    let global_height = window.innerHeight;
    let li_3_h = global_width * 0.2;
    this.$refs.li_3.style.height = li_3_h + "px";

    let footer_icon_big_w = li_3_h * 0.65 ;
    this.$refs.footer_icon_big.style.width = footer_icon_big_w + "px";
    this.$refs.footer_icon_big.style.height = footer_icon_big_w + "px";
    this.$refs.footer_icon_big.style.marginTop =  (li_3_h * 0.9 - footer_icon_big_w) /2 + "px";
  },

}

</script>

<style>

.router-link-active {
      color: #e8bd6f
}

.router-link-active .footer-icon{
      color: #e8bd6f
}



</style>




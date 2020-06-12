<template>
  <header>
    <div class="header_l">
      <el-row>
        <el-badge is-dot class="item header_item">
          <el-button class="header_bt"  circle><svg class="icon header_icon" aria-hidden="true"><use xlink:href="#3g-icon-message"></use></svg></el-button>
        </el-badge>
      </el-row>
    </div>
    <div class="header_m">
      <el-input placeholder="请输入内容">
        <i slot="prefix" class="el-input__icon"><svg class="icon header_icon_input" aria-hidden="true"><use xlink:href="#3g-icon-search"></use></svg></i>
      </el-input>
    </div>
    <div class="header_r">
      <el-row>
        <el-button class="header_bt"  circle><svg class="icon header_icon" aria-hidden="true"><use xlink:href="#3g-icon-date"></use></svg></el-button>
      </el-row>
    </div>
  </header>
</template>







var tpl_header = `<header class="header">
            <div class="header-block">
                <a href="/RongYiXing/index.html" class="logo">
                    <img src="/RongYiXing/images/logo.png" alt="融益行logo">
                </a>
                <span class="hotline">0755-12345678</span>
            </div>
            <nav class="nav">
            <div class="nav-block">
                <div class="nav-tab">
                    <a href="/RongYiXing/index.html" :class="['nav-link','home-link',{active: linkActive == 1}]">首页</a>
                </div>
                <div class="nav-tab">
                    <a href="/RongYiXing/buyback/buyback.html" :class="['nav-link','repo-link',{active: linkActive == 2}]">我要回购</a>
                </div>
                <div class="nav-tab">
                    <a href="#" class="nav-link download-link">下载中心</a>
                </div>
                <div class="nav-tab">
                    <a href="#" class="nav-link about-link">关于融益行</a>
                </div>
                <div v-if="msgTagHide" class="nav-tab">
                    <a href="#" class="nav-link remind-link">消息提醒</a>
                </div>
                <div v-if="quitTagHide" class="nav-tab">
                    <a href="#" class="nav-link quit-link">退出登陆</a>
                </div>
            </div>
        </nav>
        </header>`;

var tpl_menu = `<div class="menu">
                <div class="menu-item item-city">城市：<span>广东省</span><span>深圳市</span></div>
                <div :class="['menu-item', 'has-submenu', {open: itemIndex == 1}]" 
                     @click="itemIndex = (itemIndex == 1 ? 0 : 1)">
                    <span class="item-text">市代理管理</span>
                    <div class="submenu">
                        <a href="/RongYiXing/generation/personal_information.html" 
                            :class="['submenu-item',{active: isActivePage && linkActive == 1}]">个人资料</a>
                        <a href="/RongYiXing/generation/modify_password.html"
                            :class="['submenu-item',{active: isActivePage && linkActive == 2}]">修改密码</a>
                    </div>
                </div>
                <div :class="['menu-item', 'has-submenu', {open: itemIndex == 2}]" 
                     @click="itemIndex = (itemIndex == 2 ? 0 : 2)">
                    <span class="item-text">推荐管理</span>
                    <div class="submenu">
                        <a href="/RongYiXing/recommend/recommend_channel_trader.html"
                         :class="['submenu-item',{active: isActivePage && linkActive == 1}]">推荐渠道商</a>
                        <a href="/RongYiXing/recommend/recommend_partner.html"
                         :class="['submenu-item',{active: isActivePage && linkActive == 2}]">推荐合伙人</a>
                        <a href="/RongYiXing/recommend/recommend_member.html"
                         :class="['submenu-item',{active: isActivePage && linkActive == 3}]">推荐会员</a>
                        <a href="/RongYiXing/recommend/recommend_show.html"
                         :class="['submenu-item',{active: isActivePage && linkActive == 4}]">推荐记录</a>
                    </div>
                </div>
                <div :class="['menu-item', 'has-submenu', {open: itemIndex == 3}]"
                     @click="itemIndex = (itemIndex == 3 ? 0 : 3)">
                    <span class="item-text">我的奖励</span>
                    <div class="submenu">
                        <a href="/RongYiXing/myreward/reward_source.html"
                         :class="['submenu-item',{active: isActivePage && linkActive == 1}]">推荐组奖励</a>
                        <a href="/RongYiXing/myreward/reward_record.html"
                         :class="['submenu-item',{active: isActivePage && linkActive == 2}]">奖励记录</a>
                    </div>
                </div>
                <div :class="['menu-item', 'has-submenu', {open: itemIndex == 4}]"
                     @click="itemIndex = (itemIndex == 4 ? 0 : 4)">
                    <span class="item-text">订单管理</span>
                    <div class="submenu">
                        <a href="/RongYiXing/orders/orders.html"
                         :class="['submenu-item',{active: isActivePage && linkActive == 1}]">订单查询</a>
                    </div>
                </div>
                <div :class="['menu-item', 'has-submenu', {open: itemIndex == 5}]"
                     @click="itemIndex = (itemIndex == 5 ? 0 : 5)">
                    <span class="item-text">回购管理</span>
                    <div class="submenu">
                        <a href="/RongYiXing/buyback/buyback.html"
                         :class="['submenu-item',{active: isActivePage && linkActive == 1}]">我要回购</a>
                        <a href="/RongYiXing/buyback/buyback_record.html"
                         :class="['submenu-item',{active: isActivePage && linkActive == 2}]">回购记录</a>
                        <a href="/RongYiXing/buyback/bank_account.html"
                         :class="['submenu-item',{active: isActivePage && linkActive == 3}]">银行账户</a>
                    </div>
                </div>
                <div><a class="logout">退出登录</a></div>
            </div>`;

var tpl_footer = `<footer class="footer">
            <div class="links">
                <a href="#" class="logo">
                    <img src="/RongYiXing/images/logo.png" alt="融益行logo">
                </a>
                <a href="#">法律声明</a>
                <a href="#">隐私保护</a>
                <a href="#">联系我们</a>
            </div>
            <div class="copyright">
                <p>客服电话:400-9001991 工作时间:9:00-21:30 （法定工作日） 客服QQ : 4009001991</p>
                <p>Copyright&copy;2015-2020 深圳融益行科技有限公司版权所有 粤ICP备15082614号-2</p>
            </div>
        </footer>`;

const instancePage = new Vue({
    el: '#root',
    data: {
        windowSize: 0,
        ordersData: []    //订单查询数据
    },
    components: {
        'component-header': {
            props: {
                linkActive: Number,
                msgTag: {
                    type: Boolean,
                    default: true
                },
                quitTag: {
                    type: Boolean,
                    default: true
                }
            },
            template: tpl_header
        },
        'component-menu': {
            props: ['index','linkActive'],
            data: function(){
                return {
                    initIndex: this.index || 0,      //左侧菜单所选中项的初始索引
                    itemIndex: this.index || 0,       //左侧菜单所选中项的索引
                    isActivePage: true
                }
            },
            template: tpl_menu,
            watch: {
                itemIndex: function(nowValue, oldValue){
                    this.isActivePage = nowValue == this.initIndex;
                }
            }
        },
        'component-footer': {
            template: tpl_footer
        }
    }
});
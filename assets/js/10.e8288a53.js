(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{539:function(t,e,_){"use strict";_.r(e);var v=_(13),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"为什么要用git"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用git"}},[t._v("#")]),t._v(" 为什么要用Git？")]),t._v(" "),_("p",[t._v("相信很多人都在使用"),_("code",[t._v("GitHub")]),t._v("，这东西用起来方便，特别是代码仓库的管理。但是，如果将仓库Clone到本地，或是将本地代码上传到仓库中可就没那么方便了（虽然"),_("code",[t._v("GitHub")]),t._v("有线下App，但那图形界面真的是累赘）。")]),t._v(" "),_("p",[t._v("所以，我们使用一个名叫"),_("code",[t._v("Git")]),t._v("的App来完成这些操作。")]),t._v(" "),_("h1",{attrs:{id:"初步配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#初步配置"}},[t._v("#")]),t._v(" 初步配置")]),t._v(" "),_("p",[t._v("我们从官网下载"),_("code",[t._v("Git")]),t._v("。"),_("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载网址"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("下载完成后安装。")]),t._v(" "),_("p",[t._v("安装后，到任意文件夹下，右键点击"),_("code",[t._v("Git Bash Here")]),t._v("，打开Git命令行窗口。")]),t._v(" "),_("p",[t._v("首先输入如下命令，配置用户：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('git config --global user.name "你的用户名"\ngit config --global user.email 你注册GitHub时使用的邮箱\n')])])]),_("p",[t._v("正常情况下不会有信息显示。")]),t._v(" "),_("p",[t._v("然后，我们输入"),_("code",[t._v('ssh-keygen -t rsa -C "你注册GitHub时使用的邮箱"')]),t._v("，一直按回车，会出现如下一堆信息：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/Bambusaceae/images/master/%E6%89%B9%E6%B3%A8%202019-07-28%20091507.jpg",alt:""}})]),t._v(" "),_("p",[t._v("我们按照图中画白线的位置找到一个路径，用文本编辑器打开那个路径所指向的文件，复制里面的东西，然后打开"),_("a",{attrs:{href:"https://github.com/settings/keys",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个网页(前提是已登录GitHub)"),_("OutboundLink")],1),t._v("，如下操作：")]),t._v(" "),_("p",[t._v("点击"),_("code",[t._v("New SSH Key")]),t._v("，"),_("code",[t._v("Title")]),t._v("随便填，"),_("code",[t._v("Key")]),t._v("就是刚才那个文件中的内容，最后点击"),_("code",[t._v("Add SSH Key")]),t._v("。")]),t._v(" "),_("p",[t._v("到这里，我们的初步配置环节就算结束了。")]),t._v(" "),_("h1",{attrs:{id:"基础用法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[t._v("#")]),t._v(" 基础用法")]),t._v(" "),_("h2",{attrs:{id:"从github上将代码克隆到本地"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从github上将代码克隆到本地"}},[t._v("#")]),t._v(" 从GitHub上将代码克隆到本地")]),t._v(" "),_("p",[t._v("使用"),_("code",[t._v("git clone 仓库地址")]),t._v("命令。")]),t._v(" "),_("p",[t._v("克隆成功后，你会发现当前目录下多了一个和仓库名称一样的文件夹，它就是仓库中的代码。")]),t._v(" "),_("h2",{attrs:{id:"将代码提交到github"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#将代码提交到github"}},[t._v("#")]),t._v(" 将代码提交到GitHub")]),t._v(" "),_("p",[t._v("分为以下三步：")]),t._v(" "),_("ol",[_("li",[_("code",[t._v("git add")])])]),t._v(" "),_("p",[t._v("使用"),_("code",[t._v("git add 目录或文件")]),t._v("将代码加入到缓存。")]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[_("code",[t._v("git commit")])])]),t._v(" "),_("p",[t._v("使用"),_("code",[t._v('git commit -m"备注"')]),t._v("创建一个commit。")]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[_("code",[t._v("git push")])])]),t._v(" "),_("p",[t._v("使用"),_("code",[t._v("git push origin master")]),t._v("上传到"),_("code",[t._v("GitHub")]),t._v("上。")]),t._v(" "),_("p",[_("strong",[t._v("注意！以上三步必须在仓库文件夹内执行！")])])])}),[],!1,null,null,null);e.default=a.exports}}]);
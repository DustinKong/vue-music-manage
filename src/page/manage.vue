<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-openeds="['1']" style="min-height: 100%;" theme="dark" router>
					<!--<el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>-->
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-document"></i>数据</template>

						<el-menu-item index="urlList">链接管理</el-menu-item>
						<!--<el-menu-item index="staffList">员工管理</el-menu-item>-->
						<!--<el-menu-item index="courseList">课程管理</el-menu-item>-->
						<!--<el-menu-item index="orderList">订单列表</el-menu-item>-->
						<!--<el-menu-item index="adminList">管理员列表</el-menu-item>-->
					</el-submenu>
					<!--<el-submenu index="3">-->
						<!--<template slot="title"><i class="el-icon-plus"></i>添加数据</template>-->
                        <!--<el-menu-item index="addTeacher">添加老师</el-menu-item>-->
                        <!--<el-menu-item index="addCourse">添加课程</el-menu-item>-->
                        <!--<el-menu-item index="addStaff">添加员工</el-menu-item>-->
					<!--</el-submenu>-->
                    <!--<el-submenu index="4">-->
                        <!--<template slot="title"><i class="el-icon-star-on"></i>平台数据</template>-->
                        <!--<el-menu-item index="shareList">分享列表</el-menu-item>-->
                        <!--<el-menu-item index="commentList">评论列表</el-menu-item>-->
                        <!--<el-menu-item index="checkFeedback">反馈列表</el-menu-item>-->
                    <!--</el-submenu>-->
					<!--<el-submenu index="4">-->
						<!--<template slot="title"><i class="el-icon-star-on"></i>图表</template>-->
						<!--<el-menu-item index="visitor">用户分布</el-menu-item>-->
						<!--&lt;!&ndash; <el-menu-item index="newMember">用户数据</el-menu-item> &ndash;&gt;-->
					<!--</el-submenu>-->
					<!--<el-submenu index="5">-->
						<!--<template slot="title"><i class="el-icon-edit"></i>编辑</template>-->
						<!--&lt;!&ndash; <el-menu-item index="uploadImg">上传图片</el-menu-item> &ndash;&gt;-->
						<!--<el-menu-item index="vueEdit">文本编辑</el-menu-item>-->
					<!--</el-submenu>-->
					<!--<el-submenu index="6">-->
						<!--<template slot="title"><i class="el-icon-setting"></i>设置</template>-->
						<!--<el-menu-item index="adminSet">管理员设置</el-menu-item>-->
						<!--&lt;!&ndash; <el-menu-item index="sendMessage">发送通知</el-menu-item> &ndash;&gt;-->
					<!--</el-submenu>-->
					<!--<el-submenu index="7">-->
						<!--<template slot="title"><i class="el-icon-warning"></i>说明</template>-->
						<!--<el-menu-item index="explain">说明</el-menu-item>-->
					<!--</el-submenu>-->
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
	.manage_page{

	}
</style>

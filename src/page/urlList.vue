<template>
    <div class="fillcontain">
        <head-top></head-top>
        <!--<p>{{nowTitle}}</p>-->
        <el-button type="" @click="back" style="width: 120px;margin: 20px;background-color:lightgrey" v-if="nowType!==0">返回上一层</el-button>
        <div class="table_container" v-loading="finishLoading">
            <el-table
                :data="urlInfo"
                v-if="nowType==0"
                key="1"
                align="center"
                style="width: 100%">
                <el-table-column
                    label="id"
                    width="60"
                    prop="id">
                </el-table-column>
                <el-table-column
                    label="名称"
                    align="center"
                    prop="name">
                </el-table-column>
                <el-table-column
                    label="链接"
                    align="center"
                    prop="link">
                </el-table-column>
                <el-table-column
                    label="时间"
                    align="center"
                    prop="time">
                    <template slot-scope="scope">{{scope.row.time| dateYMDHMSFormat}}</template>
                </el-table-column>
                <el-table-column label="操作" align="center" width="300">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            type="info"
                            @click="GetTwo(scope.$index, scope.row)">下一层
                        </el-button>
                        <el-button
                            size="mini"
                            type="success"
                            @click="addLinkIni(scope.$index, scope.row)">增加子项
                        </el-button>
                        <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑
                        </el-button>
                        </el-button>
                        <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-table
                :data="urlInfoTwo"
                v-if="nowType==1"
                key="2"
                align="center"
                style="width: 100%">
                <el-table-column
                    label="id"
                    width="60"
                    prop="id">
                </el-table-column>
                <el-table-column
                    label="名称"
                    align="center"
                    prop="name">
                </el-table-column>
                <el-table-column
                    label="链接(可点击跳转)"
                    align="center"
                    prop="link">
                </el-table-column>
                <el-table-column
                    label="时间"
                    align="center"
                    prop="time">
                    <template slot-scope="scope">{{scope.row.time| dateYMDHMSFormat}}</template>
                </el-table-column>
                <el-table-column label="操作" align="center" width="300">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            type="info"
                            @click="GetThird(scope.$index, scope.row)">下一层
                        </el-button>
                        <el-button
                            size="mini"
                            type="success"
                            @click="addLinkIni(scope.$index, scope.row)">增加子项
                        </el-button>
                        <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑
                        </el-button>
                        </el-button>
                        <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-table
                :data="urlInfoThird"
                v-if="nowType==2"
                key="3"
                align="center"
                style="width: 100%">
                <el-table-column
                    label="id"
                    width="60"
                    prop="id">
                </el-table-column>
                <el-table-column
                    label="名称"
                    align="center"
                    prop="name">
                </el-table-column>
                <el-table-column
                    label="链接(可点击跳转)"
                    align="center"
                    prop="link"
                >
                <template slot-scope="scope">
                    <a :href="scope.row.link" target="_blank" style="text-decoration:none;">{{scope.row.link}}</a>
                </template>
                </el-table-column>
                <el-table-column
                    label="时间"
                    align="center"
                    prop="time">
                    <template slot-scope="scope">{{scope.row.time| dateYMDHMSFormat}}</template>
                </el-table-column>
                <el-table-column label="操作" align="center" width="200">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑
                        </el-button>
                        </el-button>
                        <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div style="padding: 10px;text-align:center">
            <el-button type="primary" @click="addFirstIni" v-if="nowType===0">增加首页主项</el-button>
            </div>
            <el-dialog title="增加首页主项" v-model="dialogAddFirst" v-loading="loading" element-loading-text="加载中">
                <el-form :model="selectTable">
                    <el-form-item label="名称" label-width="100px">
                        <el-input v-model="selectTable.name" ></el-input>
                    </el-form-item>
                    <p style="padding: 5px;text-align: center;color: red">如该项有下一层 请将链接置空 否则手机端点击后将直接进入链接</p>
                    <el-form-item label="链接" label-width="100px">
                        <el-input v-model="selectTable.link" ></el-input>
                    </el-form-item>
                    <p style="padding: 5px;text-align: center;color: red">时间必填</p>
                    <el-form-item label="时间" label-width="100px">
                            <el-date-picker
                                v-model="selectTable.time"
                                type="date"
                                placeholder="选择日期"
                                format="yyyy 年 MM 月 dd 日"
                                value-format="yyyy-MM-dd">
                            </el-date-picker>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogAddFirst = false">取 消</el-button>
                    <el-button type="primary" @click="addFirst">确 定</el-button>
                </div>
            </el-dialog>
            <el-dialog title="增加子项" v-model="dialogSon" v-loading="loading" element-loading-text="加载中">
                <el-form :model="selectTable">
                    <el-form-item label="名称" label-width="100px">
                        <el-input v-model="selectTable.name" ></el-input>
                    </el-form-item>
                    <p style="padding: 5px;text-align: center;color: red">如该项有下一层 请将链接置空 否则手机端点击后将直接进入链接</p>
                    <el-form-item label="链接" label-width="100px">
                        <el-input v-model="selectTable.link" ></el-input>
                    </el-form-item>
                    <p style="padding: 5px;text-align: center;color: red">时间必填</p>
                    <el-form-item label="时间" label-width="100px">
                        <el-date-picker
                            v-model="selectTable.time"
                            type="date"
                            placeholder="选择日期"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogSon = false">取 消</el-button>
                    <el-button type="primary" @click="addLinkSon">确 定</el-button>
                </div>
            </el-dialog>
            <el-dialog title="修改信息" v-model="dialogFormVisible" v-loading="loading" element-loading-text="加载中">
                <el-form :model="selectTable">
                    <el-form-item label="名称" label-width="100px">
                        <el-input v-model="selectTable.name" ></el-input>
                    </el-form-item>
                    <p style="padding: 5px;text-align: center;color: red">如该项有下一层 请将链接置空</p>
                    <el-form-item label="链接" label-width="100px">
                        <el-input v-model="selectTable.link" ></el-input>
                    </el-form-item>
                    <p style="padding: 5px;text-align: center;color: red">时间必填</p>
                    <el-form-item label="时间" label-width="100px">
                        <el-date-picker
                            v-model="selectTable.time"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                </el-form>

                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="update">确 定</el-button>
                </div>
            </el-dialog>
            <el-dialog
                title="提示"
                style="font-size: 25px"
                :visible.sync="dialogVisibleDel"
                width="30%">
                <span style="color: red;font-size: 25px">请确认是否删除此项 此项的子项也将一起删除！</span>
                <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisibleDel = false">取 消</el-button>
                <el-button type="primary" @click="confirmDel">确 定</el-button>
              </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {baseUrl, baseImgPath} from '@/config/env'
    import {getFirstType,getSecondType,addLink,updateLink,deleteLink} from '@/api/getData'
    import {mapActions, mapState} from 'vuex'
    import moment from 'moment'
    const token = localStorage.getItem('Authorization');
    export default {
        data() {
            return {
                deleteId: '',
                myHeaders: {'Token': token},
                nowTitle:'浙江音乐学院系统',
                nowType:0, // 当前目录级别
                dialogVisibleDel: false,
                dialogAddFirst: false,
                dialogSon: false,
                finishLoading: true,
                loading: false,
                baseUrl,
                urlInfo: [],
                urlInfoTwo: [],
                urlInfoThird: [],
                dialogFormVisible: false,
                selectTable: {
                    time:''
                },
                categoryOptions: [],
                selectedCategory: [],
                address: {},
            }
        },

        created() {
            this.initData();
        },
        components: {
            headTop,
        },
        methods: {
            async initData() {
                try {
                    const res = await getFirstType({});
                    if (res.code === 200) {
                        // this.count = countData.count;
                        this.urlInfo = res.data;
                        this.finishLoading = false;
                        console.log(res.data)
                    } else {
                        throw new Error('获取数据失败');
                    }
                    // this.getFoods();
                } catch (err) {
                    console.log('获取数据失败', err);
                }
            },
            async confirmDel() {
                this.dialogVisibleDel=false;
                try {
                    const res = await deleteLink({id:this.deleteId});
                    if (res.code === 200) {
                        this.$message({
                            type: 'success',
                            message: '删除成功'
                        });
                        this.initData();
                        console.log(res.data)
                    } else {
                        throw new Error('获取数据失败');
                    }
                    // this.getFoods();
                } catch (err) {
                    console.log('获取数据失败', err);
                }
            },
            back(){
                if(this.nowType>0) {
                    console.log(this.urlInfo);
                    this.nowTitle=this.lastTitle;
                    this.nowType--;
                }
                // this.$router.go(-1);//返回上一层
            },
            imageUpload(file) {
                this.loading = file.status !== 'success';
            },
            async GetTwo(index, row) {
                try {
                    const res = await getSecondType(row.id);
                    if (res.code === 200) {
                        this.nowType=1;
                        this.urlInfoTwo = res.data;
                        this.lastTitle =  this.nowTitle;
                        this.nowTitle=name;
                        console.log(res.data)
                    }
                    else if(res.code===13){
                        this.$message({
                            type: 'error',
                            message: '暂无该项'
                        });
                    }else {
                        throw new Error('获取数据失败');
                    }
                    // this.getFoods();
                } catch (err) {
                    console.log('获取数据失败', err);
                }
            },
            async GetThird(index, row) {
                try {
                    const res = await getSecondType(row.id);
                    if (res.code === 200) {
                        // this.count = countData.count;
                        this.urlInfoThird = res.data;
                        this.lastTitle =  this.nowTitle;
                        this.nowTitle=name;
                        this.nowType=2;
                        console.log(res.data)
                    }
                    else if(res.code===13){
                        this.$message({
                            type: 'error',
                            message: '暂无该项'
                        });
                    }else {
                        throw new Error('获取数据失败');
                    }
                    // this.getFoods();
                } catch (err) {
                    console.log('获取数据失败', err);
                }
            },
            async addLinkSon(index, row) {
                this.dialogSon=false;
                try {
                    this.selectTable.time=moment(this.selectTable.time).format("YYYY-MM-DD HH:mm:ss");
                    console.log(this.selectTable);
                    const res = await addLink(this.selectTable);
                    if (res.code === 200) {
                        this.$message({
                            type: 'success',
                            message: '添加成功'
                        });
                        this.selectTable={};
                        // this.initData();
                        console.log(res.data)
                    }
                    else {
                        this.$message({
                            type: 'error',
                            message: '未知错误，请联系管理员'
                        });
                    }
                    // this.getFoods();
                } catch (err) {
                    console.log('获取数据失败', err);
                }
            },
            addLinkIni(index, row) {
                this.selectTable = {'parent':row.id,"link":"","name":""};
                this.dialogSon = true;
            },
            async addFirst() {
                this.dialogAddFirst=false;
                try {
                    this.selectTable.time=moment(this.selectTable.time).format("YYYY-MM-DD HH:mm:ss");
                    console.log(this.selectTable);
                    const res = await addLink(this.selectTable);
                    if (res.code === 200) {
                        this.$message({
                            type: 'success',
                            message: '添加成功'
                        });
                        this.selectTable={};
                        this.initData();
                        console.log(res.data)
                    }
                    else {
                        this.$message({
                            type: 'error',
                            message: '未知错误，请联系管理员'
                        });
                    }
                } catch (err) {
                    console.log('获取数据失败', err);
                }
            },
            addFirstIni() {
                this.selectTable = {'parent':'0',"link":"","name":""};
                this.dialogAddFirst = true;
            },
            handleEdit(index, row) {
                this.selectTable = row;
                this.selectTable.time=moment(this.selectTable.time).format("YYYY-MM-DD HH:mm:ss");
                // this.selectTable.time="";
                console.log(row);
                this.dialogFormVisible = true;
            },

            handleDelete(index, row) {
                this.dialogVisibleDel = true;
                this.deleteId = row.id;
            },
            handleServiceAvatarScucess(res, file) {
                console.log(res);
                console.log(this.selectTable);

                this.selectTable.head = URL.createObjectURL(file.raw);
                if (res.code === 200) {
                    console.log('上传成功');
                    this.selectTable.head = res.data;
                    // this.selectTable.head = URL.createObjectURL(file.raw);
                } else {
                    this.$message.error('上传图片失败！');
                }
            },
            beforeAvatarUpload(file) {
                const isRightType = (file.type === 'image/jpeg') || (file.type === 'image/png');
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isRightType) {
                    this.$message.error('上传头像图片只能是JPG或PNG格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isRightType && isLt2M;
            },
            async update() {
                this.dialogFormVisible = false;
                try {
                    this.selectTable.time=moment(this.selectTable.time).format("YYYY-MM-DD HH:mm:ss");
                    console.log('submit', this.selectTable);
                    const res = await updateLink(this.selectTable);
                    if (res.code === 200) {
                        this.$message({
                            type: 'success',
                            message: '更新信息成功'
                        });
                        this.initData();
                    } else {
                        this.$message({
                            type: 'error',
                            message: res.message
                        });
                    }
                } catch (err) {
                    console.log('更新信息失败', err);
                }
            },
        }
    }
</script>

<style lang="less">
    @import '../style/mixin';

    .demo-table-expand {
        font-size: 0;
    }

    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }

    .table_container {
        padding: 20px;
    }

    .Pagination {
        display: flex;
        justify-content: flex-start;
        margin-top: 8px;
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }

    .avatar {
        width: 120px;
        height: 120px;
        display: block;
    }
</style>

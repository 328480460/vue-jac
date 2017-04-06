<template>
    <div class="table">
        <!-- 表格 -->
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="date" label="日期" sortable width="150">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" :formatter="formatter">
            </el-table-column>
            <el-table-column prop="tag" label="标签" width="120"
                    :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }, { text: '学校', value: '学校' }]"
                    :filter-method="filterTag">
                <template scope="scope">
                    <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" >
                        {{scope.row.tag[0]}} 
                    </el-tag>
                    <el-tag v-show="scope.row.tag.length >1" :type="scope.row.tag === '学校' ? 'primary' : 'success'" >
                        {{scope.row.tag[1]}}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template scope="scope">
                    <el-button size="small"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="pagination">
            <el-pagination
                    layout="prev, pager, next"
                    :page-count="pageCount"
                    :current-page="index"
                    @current-change="changePage">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import data from '../../../data.json'
    export default {
        created() {
            this.$ajax.get('/api/tableData').then((res) =>{
                console.log(res.data.tableData);
                this.$nextTick(() => {
                    this.total = res.data.tableData;
                    this.totalCount = this.total.length;
                    this.pageCount = Math.ceil(this.totalCount/this.showCount);
                })
            })
        },
        data() {
            return {
                total: [],       // 全部条目信息
                index: 1,       // 当前页
                showCount: 5,   // 每页显示数目
                totalCount: 0,  // 总条目数目
                pageCount: 0,   // 总页数
            }
        },
        computed: {
            tableData() {
                let star = (this.index - 1) * this.showCount;
                let end = (this.index) * this.showCount;
                console.log(star,end);
                let _data = this.total.slice(star, end);
                return _data;
            }
        },
        methods: {
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                for (var i = 0; i < row.tag.length; i++) {
                    if (row.tag[i] === value) {
                        return true;
                    }
                }
                return false;
            },
            changePage(data) {
                console.log(data);
                this.index = data;
            },
            handleEdit(index, row) {
                this.$message('编辑第'+(index+1)+'行');
            },
            handleDelete(index, row) {
                this.$message.error('删除第'+(index+1)+'行');
            }
        }
    }
</script>
<style lang="less" >
    .pagination {
        margin-top: 20px;
    }
</style>
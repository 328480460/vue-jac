<template>
    <div>
        <div class="ms-doc">
            <h3>README.md</h3>
            <article>
                <h1>jac-manage-system</h1>
                <h2>描述</h2>
                <p>前段时间公司开发了一个后台债券管理项目，由于对接的是java，后台小伙伴要求将html，改为jsp进行开发，主要框架为jquery和layui，还是采用传统的单页来展示不同的页面，坑的要死。因此，想用vue来重构下，目标是一个单页spa应用，顺便熟悉下vue全家桶。本次重写用到了vue + vue-cli + vue-router + vuex + axios和饿了么提供的ui库element-ui，express作为中间层来模拟数据，返回data</p>
                <p>写的东西不多，目前完成了第一步，将menu和tab和router-view联系了起来开发过程中，主要用vuex来存储中间状态，tab标签页的增加和删除，路由的重新定向等，分页和table数据的联动等，有时间会继续完成，这里还厚颜无耻的用了网上某个小伙伴的单页，实在是懒得写样式了</p>
                <h2>功能</h2>
                <el-checkbox disabled checked>Element UI</el-checkbox>
                <br>
                <br>
                <el-checkbox disabled checked>表格</el-checkbox>
                <br>
                <el-checkbox disabled checked>表单</el-checkbox>
                <br>
                <el-checkbox disabled checked>图表</el-checkbox>
                <br>
                <el-checkbox disabled checked>富文本编辑器</el-checkbox>
                <br>
                <el-checkbox disabled checked>markdown编辑器</el-checkbox>
                <br>
                <el-checkbox disabled checked>图片拖拽/裁剪上传</el-checkbox>
                <br>
                <br>
            </article>
        </div>

    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .ms-doc{
        width:100%;
        max-width: 980px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    .ms-doc h3{
        padding: 9px 10px 10px;
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        background-color: #f5f5f5;
        border: 1px solid #d8d8d8;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    .ms-doc article{
        padding: 45px;
        word-wrap: break-word;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .ms-doc article h1{
        font-size:32px;
        padding-bottom: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid #ddd;
    }
    .ms-doc article h2 {
        margin: 24px 0 16px;
        font-weight: 600;
        line-height: 1.25;
        padding-bottom: 7px;
        font-size: 24px;
        border-bottom: 1px solid #eee;
    }
    .ms-doc article p{
        margin-bottom: 15px;
        line-height: 1.5;
    }
    .ms-doc article .el-checkbox{
        margin-bottom: 5px;
    }
</style>
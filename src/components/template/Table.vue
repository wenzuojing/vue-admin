<template>
  <div>
  <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
    <div class="widget am-cf">
      <div class="widget-head am-cf">
        <div class="widget-title  am-cf">文章列表</div>
      </div>
      <div class="widget-body  am-fr">

        <div class="am-u-sm-12 am-u-md-6 am-u-lg-6">
          <div class="am-form-group">
            <div class="am-btn-toolbar">
              <div class="am-btn-group am-btn-group-xs">
                <button type="button" class="am-btn am-btn-default am-btn-success" @click="$refs.addWindow.show({width:1000})"><span class="am-icon-plus"></span> 新增</button>
                <button type="button" class="am-btn am-btn-default am-btn-secondary"><span class="am-icon-save"></span> 保存</button>
                <button type="button" class="am-btn am-btn-default am-btn-warning"><span class="am-icon-archive"></span> 审核</button>
                <button type="button" class="am-btn am-btn-default am-btn-danger"><span class="am-icon-trash-o"></span> 删除</button>
                <button type="button" class="am-btn am-btn-default am-btn-danger" @click="$refs.loading.show()"><span class="am-icon-trash-o"></span> Loading</button>
              </div>
            </div>
          </div>
        </div>
        <div class="am-u-sm-12 am-u-md-6 am-u-lg-3">
          <div class="am-form-group tpl-table-list-select">
            <select data-am-selected="{btnSize: 'sm'}" style="display: none;">
              <option value="option1">所有类别</option>
              <option value="option2">IT业界</option>
              <option value="option3">数码产品</option>
              <option value="option3">笔记本电脑</option>
              <option value="option3">平板电脑</option>
              <option value="option3">只能手机</option>
              <option value="option3">超极本</option>
            </select>
          </div>
        </div>
        <div class="am-u-sm-12 am-u-md-12 am-u-lg-3">
          <div class="am-input-group am-input-group-sm tpl-form-border-form cl-p">
            <input type="text" class="am-form-field ">
                                        <span class="am-input-group-btn">
            <button class="am-btn  am-btn-default am-btn-success tpl-table-list-field am-icon-search" type="button"></button>
          </span>
          </div>
        </div>

        <div class="am-u-sm-12">
          <table width="100%" class="am-table am-table-compact am-table-striped tpl-table-black " id="example-r">
            <thead>
            <tr>
              <th>文章标题</th>
              <th>作者</th>
              <th>时间</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr class="gradeX">
              <td>Amaze UI 模式窗口</td>
              <td>张鹏飞</td>
              <td>2016-09-26</td>
              <td>
                <div class="tpl-table-black-operation">
                  <a href="javascript:;">
                    <i class="am-icon-pencil"></i> 编辑
                  </a>
                  <a href="javascript:;" class="tpl-table-black-operation-del">
                    <i class="am-icon-trash"></i> 删除
                  </a>
                </div>
              </td>
            </tr>
            <tr class="even gradeC">
              <td>有适配微信小程序的计划吗</td>
              <td>天纵之人</td>
              <td>2016-09-26</td>
              <td>
                <div class="tpl-table-black-operation">
                  <a href="javascript:;">
                    <i class="am-icon-pencil"></i> 编辑
                  </a>
                  <a href="javascript:;" class="tpl-table-black-operation-del">
                    <i class="am-icon-trash"></i> 删除
                  </a>
                </div>
              </td>
            </tr>
            <tr class="gradeX">
              <td>请问有没有amazeui 分享插件</td>
              <td>王宽师</td>
              <td>2016-09-26</td>
              <td>
                <div class="tpl-table-black-operation">
                  <a href="javascript:;">
                    <i class="am-icon-pencil"></i> 编辑
                  </a>
                  <a href="javascript:;" class="tpl-table-black-operation-del">
                    <i class="am-icon-trash"></i> 删除
                  </a>
                </div>
              </td>
            </tr>
            <tr class="even gradeC">
              <td>关于input输入框的问题</td>
              <td>着迷</td>
              <td>2016-09-26</td>
              <td>
                <div class="tpl-table-black-operation">
                  <a href="javascript:;">
                    <i class="am-icon-pencil"></i> 编辑
                  </a>
                  <a href="javascript:;" class="tpl-table-black-operation-del">
                    <i class="am-icon-trash"></i> 删除
                  </a>
                </div>
              </td>
            </tr>
            <tr class="even gradeC">
              <td>有没有发现官网上的下载包不好用</td>
              <td>醉里挑灯看键</td>
              <td>2016-09-26</td>
              <td>
                <div class="tpl-table-black-operation">
                  <a href="javascript:;">
                    <i class="am-icon-pencil"></i> 编辑
                  </a>
                  <a href="javascript:;" class="tpl-table-black-operation-del">
                    <i class="am-icon-trash"></i> 删除
                  </a>
                </div>
              </td>
            </tr>

            <tr class="even gradeC">
              <td>我建议WEB版本文件引入问题</td>
              <td>罢了</td>
              <td>2016-09-26</td>
              <td>
                <div class="tpl-table-black-operation">
                  <a href="javascript:;">
                    <i class="am-icon-pencil"></i> 编辑
                  </a>
                  <a href="javascript:;" class="tpl-table-black-operation-del">
                    <i class="am-icon-trash"></i> 删除
                  </a>
                </div>
              </td>
            </tr>
            <!-- more data -->
            </tbody>
          </table>
        </div>
        <div class="am-u-lg-12 am-cf">

          <div class="am-fr">
            <ul class="am-pagination tpl-pagination">
              <li class="am-disabled"><a href="#">«</a></li>
              <li class="am-active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">»</a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
  <loading ref="loading"></loading>
  <window ref="addWindow" title="xxxxx">
    <div slot="body">

      <div class="am-form">

        <div class="am-g am-margin-top">
          <div class="am-u-md-6">
            <div class="am-u-md-3 am-text-right">
              <span class="am-inline-block am-margin-top-xs">
                <span class="am-text-danger am-margin-right-xs am-text-lg"> * </span>
                姓名
              </span>
            </div>
            <div class="am-u-md-9">
              <input type="text" name="title" class="am-form-field" placeholder="姓名">
              <div class="am-text-danger am-text-left">不能为空</div>
            </div>
          </div>

          <div class="am-u-md-6">
            <div class="am-u-md-3 am-text-right">
              <span class="am-inline-block am-margin-top-xs">籍贯</span>
            </div>
            <div class="am-u-md-9">
              <select class="am-form-select"><option value="广州">广州</option><option value="韶关">韶关</option><option value="深圳">深圳</option><option value="珠海">珠海</option><option value="汕头">汕头</option><option value="佛山">佛山</option><option value="江门">江门</option><option value="湛江">湛江</option><option value="茂名">茂名</option><option value="肇庆">肇庆</option><option value="惠州">惠州</option><option value="梅州">梅州</option><option value="汕尾">汕尾</option><option value="河源">河源</option><option value="阳江">阳江</option><option value="清远">清远</option><option value="东莞">东莞</option><option value="中山">中山</option><option value="潮州">潮州</option><option value="揭阳">揭阳</option><option value="云浮">云浮</option></select>
            </div>
          </div>
        </div>

        <div class="am-g am-margin-top">
          <div class="am-u-md-6">
            <div class="am-u-md-3 am-text-right">
              <span class="am-inline-block am-margin-top-xs">
                <span class="am-text-danger am-margin-right-xs am-text-lg"> * </span>
                生日
              </span>
            </div>
            <div class="am-u-md-9">
              <input type="text" name="title" class="am-form-field" placeholder="姓名">
              <div class="am-text-danger am-text-left">不能为空</div>
            </div>
          </div>

          <div class="am-u-md-6">
            <div class="am-u-md-3 am-text-right">
              <span class="am-inline-block am-margin-top-xs">籍贯</span>
            </div>
            <div class="am-u-md-9">
              <select class="am-form-select"><option value="广州">广州</option><option value="韶关">韶关</option><option value="深圳">深圳</option><option value="珠海">珠海</option><option value="汕头">汕头</option><option value="佛山">佛山</option><option value="江门">江门</option><option value="湛江">湛江</option><option value="茂名">茂名</option><option value="肇庆">肇庆</option><option value="惠州">惠州</option><option value="梅州">梅州</option><option value="汕尾">汕尾</option><option value="河源">河源</option><option value="阳江">阳江</option><option value="清远">清远</option><option value="东莞">东莞</option><option value="中山">中山</option><option value="潮州">潮州</option><option value="揭阳">揭阳</option><option value="云浮">云浮</option></select>
            </div>
          </div>
        </div>


      </div>


    </div>
    <span  slot="footer" class="am-modal-btn" data-am-modal-close>取消</span>
    <span  slot="footer" class="am-modal-btn" >确定</span>
  </window>

  </div>
</template>
<style scoped>

</style>
<script>

import Loading from '../base/Loading'
import Window from '../base/Window'

    export default{
        name: 'table-list',
        data:function(){
          return {
            loading : false
          }
        },
        components: {
          Loading,
          Window
        },
        methods:{
          canal:function(){
            alert(1111)
          }
        }
    }
</script>

<template>
  <div class="popup-container">
    <el-dialog title="提示" width="80%" :visible.sync="isShowDlg" :before-close="handleCancel">
      <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="100px">
        <el-form-item label="label" prop="xxx">
          <el-input v-model="queryParams.xxx" placeholder="请输入" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="handleQuery">搜索</el-button>
          <el-button icon="el-icon-refresh" @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="list" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" />
        <el-table-column label="序号" type="index" width="55" align="center" />
        <el-table-column label="列名" align="center" prop="columnName" />
      </el-table>

      <pagination
        v-if="total > 0"
        :total="total"
        :page.sync="queryParams.pageNum"
        :limit.sync="queryParams.pageSize"
        @pagination="getList" />

      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleComfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'commonDlg',
  components: {},

  data() {
    return {
      list: [],
      multipleSelection: [],
      total: 0,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
      },
    }
  },

  props: {
    isShowDlg: {
      type: Boolean,
      default: false
    }
  },

  computed: {},

  created() {
    this.getList()
  },

  methods: {
    getList() {
      getList(this.queryParams).then(res => {
        this.list = res.data.records
        this.total = Number(res.data.total);
      })
    },

    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },

    handleReset() {
      this.resetForm("queryForm");
      this.handleQuery();
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    handleComfirm() {
      // this.$emit("confirm", this.multipleSelection)
      this.$emit("update:isShowDlg", false)
    },

    handleCancel() {
      this.$emit("update:isShowDlg", false)
    }
  }
}
</script>

<style scoped lang="scss">
.popup-container {
}
</style>

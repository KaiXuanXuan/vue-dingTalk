<!-- ProductDropdown.vue -->
<template>
  <div class="product-dropdown">
    <div class="dropdown-grid">
      <div class="category">
        <h4>核心产品</h4>
        <ul>
          <li><a href="#">智能分析平台</a></li>
          <li><a href="#">云协作系统</a></li>
          <li><a href="#">AI 引擎</a></li>
        </ul>
      </div>
      <div class="category">
        <h4>特色功能</h4>
        <ul>
          <li><a href="#">实时看板</a></li>
          <li><a href="#">智能预测</a></li>
          <li><a href="#">自动化流程</a></li>
        </ul>
      </div>
      <div class="banner">
        <div class="new-feature">
          <h4>最新发布 v3.2</h4>
          <p>新增多维度分析功能</p>
          <button>立即体验 →</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-dropdown {
  padding: 2rem;
}

.dropdown-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category h4 {
  color: #2563eb;
  margin-bottom: 1rem;
}

.category li {
  padding: 0.5rem 0;
}

.category a {
  color: #475569;
  text-decoration: none;
  transition: color 0.2s;
}

.category a:hover {
  color: #2563eb;
}

.banner {
  border-left: 1px solid #e2e8f0;
  padding-left: 2rem;
}

.new-feature {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
}

.new-feature button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

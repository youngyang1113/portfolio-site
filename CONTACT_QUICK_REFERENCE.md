# 📧 联系我页面 - 快速参考指南

## 🎯 核心概念

| 组件 | 用途 | 特色 |
|------|------|------|
| **ContactHero** | 英雄区 | 大标题 + 渐变背景 + 箭头 |
| **ContactMethods** | 3个卡片 | 邮件/GitHub/消息 + 悬停发光 |
| **ContactFormAdvanced** | 高级表单 | 4个字段 + 焦点发光 + 提交状态 |
| **ContactFAQ** | 常见问题 | 4个FAQ + 悬停动效 |

---

## 🚀 5 分钟快速启动

### Step 1: 启动服务器
```bash
npm run dev
```

### Step 2: 访问页面
```
http://localhost:3000/contact
```

### Step 3: 查看效果
- 👀 滚动查看所有部分
- 🖱️ 悬停查看交互效果
- 📱 缩放窗口检查响应式
- ⌨️ 点击表单测试输入

---

## ✏️ 常见修改场景

### 场景 1: 修改邮箱地址

**文件：** `components/ContactMethods.tsx`

```tsx
const contactMethods = [
  {
    icon: '✉️',
    title: '邮件',
    value: 'your-email@example.com',  // ← 改这里
    link: 'mailto:your-email@example.com',  // ← 改这里
    // ...
  }
]
```

### 场景 2: 修改 GitHub 账户

**文件：** `components/ContactMethods.tsx`

```tsx
{
  icon: '🐙',
  title: 'GitHub',
  value: '@your-github-username',  // ← 改用户名
  link: 'https://github.com/your-username',  // ← 改链接
  // ...
}
```

### 场景 3: 修改表单标签

**文件：** `components/ContactFormAdvanced.tsx`

```tsx
const fields = [
  {
    label: '你的名字',  // ← 改标签
    name: 'name',
    placeholder: '请输入你的名字',  // ← 改占位符
    icon: '👤',  // ← 改图标
  },
  // ...
]
```

### 场景 4: 修改 FAQ 内容

**文件：** `components/ContactFAQ.tsx`

```tsx
const faqItems = [
  {
    question: '多久能得到回复？',  // ← 改问题
    answer: '通常 48 小时内。',  // ← 改答案
    icon: '⏰',  // ← 改图标
  },
  // ...
]
```

### 场景 5: 修改英雄区标题

**文件：** `components/ContactHero.tsx`

```tsx
<motion.p>
  Get In Touch  {/* ← 改副标题 */}
</motion.p>

<motion.h1>
  Let's Connect  {/* ← 改大标题 */}
</motion.h1>

<motion.p>
  有想法要分享？...  {/* ← 改描述 */}
</motion.p>
```

### 场景 6: 修改表单验证规则

**文件：** `components/ContactFormAdvanced.tsx`

```tsx
// 修改字数限制
rows={5}  // ← 改成 rows={6} 或其他

// 修改字符限制
<span>{formData.message.length} / 1000</span>  // ← 改成 2000
```

---

## 🎨 样式快速修改

### 修改卡片颜色

```tsx
// 当前：蓝紫渐变
color: 'from-blue-500 to-cyan-500'

// 改为红色
color: 'from-red-500 to-pink-500'

// 改为绿色
color: 'from-green-500 to-emerald-500'

// 改为橙色
color: 'from-orange-500 to-amber-500'
```

### 修改玻璃拟态透明度

```tsx
// 当前（超浅）
bg-gradient-to-br from-white/[0.08] to-white/[0.02]

// 改为浓一点
bg-gradient-to-br from-white/[0.12] to-white/[0.06]

// 改为很浓
bg-gradient-to-br from-white/[0.20] to-white/[0.10]
```

### 修改悬停效果强度

```tsx
// 当前
whileHover={{ y: -12, scale: 1.02 }}

// 改为更强的上浮
whileHover={{ y: -20, scale: 1.05 }}

// 改为更轻微的效果
whileHover={{ y: -6, scale: 1.01 }}
```

---

## 🎬 动效调整

### 调整进入动画速度

```tsx
// 原始（0.6秒）
transition={{ duration: 0.6 }}

// 改快（0.3秒）
transition={{ duration: 0.3 }}

// 改慢（1秒）
transition={{ duration: 1.0 }}
```

### 调整间隔延迟

```tsx
// 原始（100ms 间隔）
transition={{ delay: index * 0.1 }}

// 改为更快（50ms）
transition={{ delay: index * 0.05 }}

// 改为更慢（200ms）
transition={{ delay: index * 0.2 }}
```

### 禁用某个动效

```tsx
// 禁用 whileInView
<motion.div
  // whileInView={{ opacity: 1, y: 0 }}  ← 注释掉
>

// 改用 animate（始终显示）
<motion.div
  animate={{ opacity: 1, y: 0 }}
>
```

---

## 📱 响应式微调

### 修改网格列数

```tsx
// 当前（桌面3列）
<div className="grid md:grid-cols-2 lg:grid-cols-3">

// 改为桌面2列
<div className="grid md:grid-cols-2">

// 改为桌面4列
<div className="grid md:grid-cols-2 lg:grid-cols-4">
```

### 修改字体大小

```tsx
// 当前
<h2 className="text-4xl md:text-5xl">

// 改为小一点
<h2 className="text-3xl md:text-4xl">

// 改为大一点
<h2 className="text-5xl md:text-6xl">
```

### 修改间距

```tsx
// 当前
p-8 md:p-12

// 改为紧凑
p-6 md:p-8

// 改为宽松
p-10 md:p-14
```

---

## 🔧 表单功能扩展

### 添加新字段

```tsx
// 1. 在 formData state 中添加
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: '',
  phone: '',  // ← 新增
})

// 2. 在 fields 数组中添加
const fields = [
  // ... 现有字段
  {
    label: '电话',
    name: 'phone',
    type: 'tel',
    placeholder: '请输入您的电话号码',
    required: false,
    icon: '📞',
  }
]

// 3. 在表单 JSX 中添加
{fields.map((field) => (
  <input
    key={field.name}
    type={field.type}
    name={field.name}
    value={formData[field.name]}
    onChange={handleChange}
    // ...
  />
))}
```

### 修改表单提交行为

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setSubmitting(true)

  try {
    // 替换为实际的 API 调用
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    
    if (response.ok) {
      setSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    setSubmitting(false)
  }
}
```

---

## 📊 常用代码片段

### CTA 按钮（发光）

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-3 rounded-full bg-gradient-to-r 
    from-violet-600 to-purple-600 text-white font-medium 
    shadow-lg shadow-violet-500/50 hover:shadow-xl transition"
>
  发送留言
</motion.button>
```

### 渐变色文字

```tsx
<h1 className="bg-gradient-to-r from-violet-400 to-cyan-400 
  bg-clip-text text-transparent text-5xl font-bold">
  Let's Connect
</h1>
```

### 焦点发光输入框

```tsx
<input
  onFocus={() => setFocused('email')}
  className={`
    px-4 py-3 rounded-xl 
    bg-white/[0.05] border border-white/[0.1]
    transition-all duration-300
    ${focused === 'email'
      ? 'border-violet-500/50 bg-white/[0.08] 
         shadow-lg shadow-violet-500/20'
      : 'hover:border-white/20'
    }
  `}
/>
```

### 玻璃拟态卡片

```tsx
<div className="p-8 rounded-2xl 
  backdrop-blur-xl 
  bg-gradient-to-br from-white/[0.08] to-white/[0.02] 
  border border-white/[0.1] 
  hover:border-white/30 
  transition-all duration-300">
  {/* 内容 */}
</div>
```

### 悬停上浮效果

```tsx
<motion.div
  whileHover={{ y: -12, scale: 1.02 }}
  transition={{ duration: 0.3 }}
>
  {/* 卡片内容 */}
</motion.div>
```

---

## 🐛 常见问题排查

### Q: 表单提交后没有反馈
**A:** 检查 `success` 状态是否设置，以及 `setTimeout` 是否生效

### Q: 焦点发光线不显示
**A:** 检查 `focused` 状态是否在 `onFocus` 时被设置，以及 CSS 类名是否正确

### Q: 卡片悬停不上浮
**A:** 检查是否导入了 `motion`，以及 `whileHover` 属性是否存在

### Q: 颜色显示不正确
**A:** 清除浏览器缓存，重新启动 `npm run dev`

### Q: 响应式布局错乱
**A:** 使用 Chrome DevTools 的设备模式 (F12)，检查断点是否正确

---

## ✅ 部署前检查

- [ ] 访问 `/contact` 页面
- [ ] 在手机上测试
- [ ] 点击所有链接
- [ ] 提交表单测试
- [ ] 检查所有文本拼写
- [ ] 验证邮箱和 GitHub 链接正确
- [ ] 测试所有输入框焦点效果
- [ ] 验证响应式美观度

---

## 🎓 相关资源

- **Framer Motion 文档**：https://www.framer.com/motion/
- **Tailwind CSS 文档**：https://tailwindcss.com/
- **Next.js 文档**：https://nextjs.org/docs
- **React 文档**：https://react.dev

---

祝您修改顺利！🚀

